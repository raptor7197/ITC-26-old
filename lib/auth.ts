import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getFirebaseAuth } from "./firebase";
import { UserDB } from "./firestore";

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  idToken: string;
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  error?: string;
}

export async function signInWithGoogle(): Promise<AuthResponse> {
  const auth = getFirebaseAuth();
  if (!auth) {
    return {
      success: false,
      error: "Firebase is not configured. Sign-in is unavailable.",
    };
  }

  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const idToken = await user.getIdToken();

    try {
      await UserDB.upsert({
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        provider: "google",
      });
    } catch (firestoreError) {
      console.error(
        "Failed to save user to Firestore (might be offline):",
        firestoreError,
      );
    }

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        idToken,
      },
    };
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during sign in",
    };
  }
}

export async function signOut(): Promise<void> {
  const auth = getFirebaseAuth();
  if (!auth) return;

  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export async function getIdToken(): Promise<string | null> {
  const auth = getFirebaseAuth();
  if (!auth) return null;

  const user = auth.currentUser;
  if (!user) return null;

  try {
    return await user.getIdToken();
  } catch (error) {
    console.error("Error getting ID token:", error);
    return null;
  }
}

export async function verifyToken(): Promise<boolean> {
  const auth = getFirebaseAuth();
  if (!auth) return false;

  const user = auth.currentUser;
  if (!user) return false;

  try {
    await user.getIdToken(true);
    return true;
  } catch (error) {
    console.error("Error verifying token:", error);
    return false;
  }
}

export function onAuthStateChange(
  callback: (user: User | null) => void,
): () => void {
  const auth = getFirebaseAuth();
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser(): User | null {
  const auth = getFirebaseAuth();
  if (!auth) return null;
  return auth.currentUser;
}

export async function getCurrentUserProfile(): Promise<
  Record<string, unknown>
> {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error("Not authenticated");

  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");

  const userDoc = await UserDB.findByUid(user.uid);
  if (!userDoc) throw new Error("User profile not found");

  return userDoc as unknown as Record<string, unknown>;
}
