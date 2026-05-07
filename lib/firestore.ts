import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  limit,
  type Firestore,
} from "firebase/firestore";
import { getFirebaseApp } from "./firebase";

let _db: Firestore | null = null;

export function getFirebaseDb(): Firestore | null {
  if (typeof window === "undefined") return null;
  if (!_db) {
    const app = getFirebaseApp();
    _db = app ? getFirestore(app) : null;
  }
  return _db;
}

function requireDb(): Firestore {
  const instance = getFirebaseDb();
  if (!instance) {
    if (typeof window === "undefined") {
      throw new Error("Firestore is not available on the server.");
    } else {
      throw new Error(
        "Firestore is not initialized. Please check your Firebase configuration.",
      );
    }
  }
  return instance;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  provider?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
  lastLogin?: unknown;
}

export interface Registration {
  id?: string;
  uid: string;
  name: string;
  gender?: string;
  email: string;
  institutionalEmail?: string;
  phone: string;
  designation?: string;
  highestQualification?: string;
  institution: string;
  institutionAddress?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  pastFellowship?: string;
  publications?: string;
  scopusId?: string;
  googleScholarId?: string;
  writeUpFileUrl?: string;
  ieeePaperId?: string;
  idCardFileUrl?: string;
  aadharFileUrl?: string;
  bonafideFileUrl?: string;
  department?: string;
  year?: string;
  registrationType: "Fellowship" | "hackathon" | "cfp" | "cft" | "art";
  additionalInfo?: string;
  status?: "pending" | "approved" | "rejected";
  paperId?: string;
  paperStatus?: "pending" | "approved" | "rejected";
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface FellowshipQueryResult {
  items: Registration[];
  nextCursorId: string | null;
  hasMore: boolean;
}

export interface CoAuthor {
  name: string;
  email: string;
  institution: string;
}

export interface AdminWhitelistEntry {
  uid: string;
  email: string;
  createdAt?: unknown;
}

export interface PaperSubmission {
  id?: string;
  paperId: string;
  uid: string;
  registrationId?: string;

  authorName: string;
  authorEmail: string;
  authorPhone: string;
  authorInstitution: string;
  authorDepartment: string;
  coAuthors?: CoAuthor[];

  paperTitle: string;
  paperAbstract: string;
  keywords?: string;
  paperType?: "full" | "poster" | "extended_abstract";
  trackType: "cfp" | "art" | "cft";

  // File info
  fileUrl: string;
  firebasePath: string;
  fileName: string;
  fileSize?: number;
  mimeType?: string;

  // Status
  status?:
    | "pending"
    | "under_review"
    | "approved"
    | "rejected"
    | "revision_required";
  reviewerComments?: string;
  adminNotes?: string;

  // Timestamps
  submittedAt?: unknown;
  reviewedAt?: unknown;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export const UserDB = {
  async upsert(userData: Omit<User, "createdAt" | "updatedAt" | "lastLogin">) {
    const userRef = doc(requireDb(), "users", userData.uid);
    const userDoc = await getDoc(userRef);

    const data: Record<string, unknown> = {
      ...userData,
      lastLogin: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    if (!userDoc.exists()) {
      data.createdAt = serverTimestamp();
    }

    await setDoc(userRef, data, { merge: true });
    return { ...data, id: userData.uid };
  },

  async findByUid(uid: string) {
    const userRef = doc(requireDb(), "users", uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) return null;
    return { id: userDoc.id, ...userDoc.data() } as unknown as User;
  },

  async findByEmail(email: string) {
    const q = query(
      collection(requireDb(), "users"),
      where("email", "==", email),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as unknown as User;
  },
};

export const RegistrationDB = {
  async create(
    registrationData: Omit<
      Registration,
      "id" | "createdAt" | "updatedAt" | "status"
    >,
  ) {
    const registrationRef = doc(collection(requireDb(), "submissions"));

    const data = {
      ...registrationData,
      status: "pending",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(registrationRef, data);
    return { id: registrationRef.id, ...data };
  },

  async findByUidAndType(
    uid: string,
    registrationType?: string,
    emailStr?: string | null,
  ) {
    let emailToUse = emailStr;

    if (!emailToUse) {
      const userDoc = await UserDB.findByUid(uid);
      emailToUse = userDoc?.email;
    }

    const q1 = query(
      collection(requireDb(), "submissions"),
      where("uid", "==", uid),
    );
    const q2 = query(
      collection(requireDb(), "submissions"),
      where("userId", "==", uid),
    );
    const q3 = query(
      collection(requireDb(), "registrations"),
      where("uid", "==", uid),
    );
    const q4 = query(
      collection(requireDb(), "registrations"),
      where("userId", "==", uid),
    );

    const promises = [getDocs(q1), getDocs(q2), getDocs(q3), getDocs(q4)];
    if (emailToUse) {
      promises.push(
        getDocs(
          query(
            collection(requireDb(), "submissions"),
            where("email", "==", emailToUse),
          ),
        ),
        getDocs(
          query(
            collection(requireDb(), "registrations"),
            where("email", "==", emailToUse),
          ),
        ),
      );
    }

    const settledPromises = await Promise.allSettled(promises);

    // Only process successful queries to avoid failing entire request if one index or rule is missing
    const snapshots = settledPromises.flatMap((result) =>
      result.status === "fulfilled" ? [result.value] : [],
    );

    const allDocs = snapshots.flatMap((snap) => snap.docs);
    const uniqueDocsMap = new Map();
    allDocs.forEach((doc) => uniqueDocsMap.set(doc.id, doc));

    const docs = Array.from(uniqueDocsMap.values()).map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Registration,
    );

    if (registrationType) {
      return (
        docs.find((doc) => doc.registrationType === registrationType) || null
      );
    }

    return docs;
  },

  async findById(id: string) {
    const registrationRef = doc(requireDb(), "submissions", id);
    const registrationDoc = await getDoc(registrationRef);

    if (!registrationDoc.exists()) return null;
    return {
      id: registrationDoc.id,
      ...registrationDoc.data(),
    } as Registration;
  },

  async update(id: string, uid: string, updateData: Partial<Registration>) {
    const registrationRef = doc(requireDb(), "submissions", id);
    const registrationDoc = await getDoc(registrationRef);

    if (!registrationDoc.exists()) return null;

    const existing = registrationDoc.data() as Registration;
    if (existing.uid !== uid) return null;

    const data = {
      ...updateData,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(registrationRef, data);
    return { id, ...existing, ...data };
  },

  async delete(id: string, uid: string) {
    const registrationRef = doc(requireDb(), "submissions", id);
    const registrationDoc = await getDoc(registrationRef);

    if (!registrationDoc.exists()) return null;

    const existing = registrationDoc.data() as Registration;
    if (existing.uid !== uid) return null;

    await deleteDoc(registrationRef);
    return { id, ...existing };
  },

  async getAll(filters?: { registrationType?: string; status?: string }) {
    let q = query(collection(requireDb(), "submissions"));

    if (filters?.registrationType) {
      q = query(q, where("registrationType", "==", filters.registrationType));
    }

    if (filters?.status) {
      q = query(q, where("status", "==", filters.status));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Registration,
    );
  },

  async getAllFellowshipByStatus(
    status?: Registration["status"],
    options?: {
      limitCount?: number;
      cursorId?: string;
    },
  ): Promise<FellowshipQueryResult> {
    const pageSize = options?.limitCount ?? 50;
    const cursorId = options?.cursorId;

    const toMillis = (value: unknown): number => {
      if (!value) return 0;
      if (value instanceof Date) return value.getTime();

      if (typeof value === "number") return value;
      if (typeof value === "string") {
        const parsed = Date.parse(value);
        return Number.isFinite(parsed) ? parsed : 0;
      }

      if (typeof value === "object") {
        const ts = value as {
          toDate?: () => Date;
          seconds?: number;
          nanoseconds?: number;
        };

        if (typeof ts.toDate === "function") {
          return ts.toDate().getTime();
        }

        if (typeof ts.seconds === "number") {
          const nanos = typeof ts.nanoseconds === "number" ? ts.nanoseconds : 0;
          return ts.seconds * 1000 + Math.floor(nanos / 1_000_000);
        }
      }

      return 0;
    };

    const normalizeStatus = (value?: string) =>
      (value || "pending").toLowerCase() as NonNullable<Registration["status"]>;

    const applyClientPagination = (items: Registration[]) => {
      let startIndex = 0;

      if (cursorId) {
        const cursorIndex = items.findIndex((item) => item.id === cursorId);
        startIndex = cursorIndex >= 0 ? cursorIndex + 1 : 0;
      }

      const window = items.slice(startIndex, startIndex + pageSize + 1);
      const hasMore = window.length > pageSize;
      const pageItems = hasMore ? window.slice(0, pageSize) : window;

      return {
        items: pageItems,
        hasMore,
        nextCursorId:
          hasMore && pageItems.length > 0
            ? pageItems[pageItems.length - 1].id || null
            : null,
      };
    };

    try {
      const buildIndexedQuery = (
        registrationType: "Fellowship" | "fellowship",
      ) => {
        let q = query(
          collection(requireDb(), "submissions"),
          where("registrationType", "==", registrationType),
        );

        if (status) {
          q = query(q, where("status", "==", status));
        }

        q = query(q, orderBy("createdAt", "desc"));

        return q;
      };

      const indexedQueries = [
        buildIndexedQuery("Fellowship"),
        buildIndexedQuery("fellowship"),
      ];
      const indexedSnapshots = await Promise.allSettled(
        indexedQueries.map((q) => getDocs(q)),
      );

      const successfulSnapshots = indexedSnapshots.flatMap((result) =>
        result.status === "fulfilled" ? [result.value] : [],
      );

      if (successfulSnapshots.length === 0) {
        throw new Error("No indexed fellowship queries succeeded.");
      }

      const indexedItems = successfulSnapshots
        .flatMap((snap) => snap.docs)
        .map(
          (itemDoc) => ({ id: itemDoc.id, ...itemDoc.data() }) as Registration,
        )
        .sort((a, b) => {
          const byCreatedAt = toMillis(b.createdAt) - toMillis(a.createdAt);
          if (byCreatedAt !== 0) return byCreatedAt;
          return (b.id || "").localeCompare(a.id || "");
        });

      return applyClientPagination(indexedItems);
    } catch {
      // Fallback path when composite indexes are missing or legacy docs lack createdAt.
      const fallbackSnapshots = await Promise.allSettled([
        getDocs(
          query(
            collection(requireDb(), "submissions"),
            where("registrationType", "==", "Fellowship"),
          ),
        ),
        getDocs(
          query(
            collection(requireDb(), "submissions"),
            where("registrationType", "==", "fellowship"),
          ),
        ),
      ]);

      const fallbackDocs = fallbackSnapshots.flatMap((result) =>
        result.status === "fulfilled" ? result.value.docs : [],
      );

      const unique = new Map<string, Registration>();
      for (const itemDoc of fallbackDocs) {
        const row = { id: itemDoc.id, ...itemDoc.data() } as Registration;
        unique.set(itemDoc.id, row);
      }

      let items = Array.from(unique.values());

      if (status) {
        const wanted = status.toLowerCase();
        items = items.filter((item) => normalizeStatus(item.status) === wanted);
      }

      items.sort((a, b) => {
        const byCreatedAt = toMillis(b.createdAt) - toMillis(a.createdAt);
        if (byCreatedAt !== 0) return byCreatedAt;
        return (b.id || "").localeCompare(a.id || "");
      });

      return applyClientPagination(items);
    }
  },

  async updateStatusAsAdmin(
    id: string,
    status: NonNullable<Registration["status"]>,
  ) {
    const registrationRef = doc(requireDb(), "submissions", id);
    const registrationDoc = await getDoc(registrationRef);

    if (!registrationDoc.exists()) return null;

    await updateDoc(registrationRef, {
      status,
      updatedAt: serverTimestamp(),
    });

    const updatedDoc = await getDoc(registrationRef);
    return { id: updatedDoc.id, ...updatedDoc.data() } as Registration;
  },
};

export const PaperSubmissionDB = {
  async create(
    submissionData: Omit<
      PaperSubmission,
      "id" | "createdAt" | "updatedAt" | "status" | "submittedAt"
    >,
  ) {
    const paperRef = doc(collection(requireDb(), "papers"));

    const data = {
      ...submissionData,
      status: "pending",
      submittedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(paperRef, data);
    return { id: paperRef.id, ...data };
  },

  async findByPaperId(paperId: string) {
    const q = query(
      collection(requireDb(), "papers"),
      where("paperId", "==", paperId),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as PaperSubmission;
  },

  async findByUid(uid: string) {
    const q = query(collection(requireDb(), "papers"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as PaperSubmission,
    );
  },

  async findByRegistrationId(registrationId: string) {
    const q = query(
      collection(requireDb(), "papers"),
      where("registrationId", "==", registrationId),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as PaperSubmission;
  },

  async updateStatus(
    paperId: string,
    status: string,
    reviewerComments?: string,
    adminNotes?: string,
  ) {
    const q = query(
      collection(requireDb(), "papers"),
      where("paperId", "==", paperId),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const paperDoc = querySnapshot.docs[0];
    const paperRef = doc(requireDb(), "papers", paperDoc.id);

    const data: Record<string, unknown> = {
      status,
      reviewedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    if (reviewerComments) data.reviewerComments = reviewerComments;
    if (adminNotes) data.adminNotes = adminNotes;

    await updateDoc(paperRef, data);
    return { id: paperDoc.id, ...paperDoc.data(), ...data };
  },

  async linkPaperToRegistration(
    registrationId: string,
    paperId: string,
    paperStatus: string = "pending",
  ) {
    const registrationRef = doc(requireDb(), "submissions", registrationId);
    const registrationDoc = await getDoc(registrationRef);

    if (!registrationDoc.exists()) return null;

    await updateDoc(registrationRef, {
      paperId,
      paperStatus,
      updatedAt: serverTimestamp(),
    });

    return {
      id: registrationId,
      ...registrationDoc.data(),
      paperId,
      paperStatus,
    };
  },

  async getAll(filters?: { status?: string; trackType?: string }) {
    let q = query(collection(requireDb(), "papers"));

    if (filters?.status) {
      q = query(q, where("status", "==", filters.status));
    }

    if (filters?.trackType) {
      q = query(q, where("trackType", "==", filters.trackType));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as PaperSubmission,
    );
  },

  async delete(paperId: string, uid: string) {
    const q = query(
      collection(requireDb(), "papers"),
      where("paperId", "==", paperId),
      where("uid", "==", uid),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const paperDoc = querySnapshot.docs[0];
    const paperRef = doc(requireDb(), "papers", paperDoc.id);

    await deleteDoc(paperRef);
    return { id: paperDoc.id, ...paperDoc.data() };
  },
};

export const AdminWhitelistDB = {
  async isWhitelistedByUid(uid: string | null | undefined) {
    if (!uid) return false;
    const ref = doc(requireDb(), "adminWhitelist", uid);
    const snap = await getDoc(ref);
    return snap.exists();
  },
};
