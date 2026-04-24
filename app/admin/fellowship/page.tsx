"use client";

import { useEffect, useMemo, useState } from "react";
import { useProtectedRoute } from "@/lib/useProtectedRoute";
import {
  AdminWhitelistDB,
  RegistrationDB,
  type Registration,
} from "@/lib/firestore";

type RegistrationStatus = NonNullable<Registration["status"]>;
type FilterStatus = RegistrationStatus | "all";

const statusFilters: FilterStatus[] = [
  "all",
  "pending",
  "approved",
  "rejected",
];
const PAGE_SIZE = 50;

function statusBadgeClass(status?: string) {
  if (status === "approved")
    return "bg-green-100 text-green-700 border-green-200";
  if (status === "rejected") return "bg-red-100 text-red-700 border-red-200";
  return "bg-yellow-100 text-yellow-700 border-yellow-200";
}

export default function AdminFellowshipPage() {
  const { user, loading: authLoading } = useProtectedRoute();
  const [isAdmin, setIsAdmin] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");
  const [applications, setApplications] = useState<Registration[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [updatingStatus, setUpdatingStatus] =
    useState<RegistrationStatus | null>(null);
  const [nextCursorId, setNextCursorId] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function checkAdminClaim() {
      if (!user) {
        setIsAdmin(false);
        setAuthError("Please sign in to access the admin portal.");
        setLoading(false);
        return;
      }
      try {
        const whitelisted = await AdminWhitelistDB.isWhitelistedByUid(user.uid);
        setIsAdmin(whitelisted);
        if (!whitelisted) {
          setAuthError("Your account does not have admin access.");
          setLoading(false);
        } else {
          setAuthError(null);
        }
      } catch (claimError) {
        console.error("Failed to verify whitelist access", claimError);
        setAuthError("Unable to verify admin access.");
        setLoading(false);
      }
    }

    if (!authLoading) {
      void checkAdminClaim();
    }
  }, [authLoading, user]);

  async function loadApplications(reset: boolean = true) {
    if (!user || !isAdmin) {
      setLoading(false);
      return;
    }
    try {
      if (reset) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setError(null);

      const result = await RegistrationDB.getAllFellowshipByStatus(
        statusFilter === "all" ? undefined : statusFilter,
        {
          limitCount: PAGE_SIZE,
          cursorId: reset ? undefined : nextCursorId || undefined,
        },
      );

      const list = result.items;

      setApplications((prev) => {
        if (reset) return list;
        const seen = new Set(prev.map((item) => item.id));
        const merged = [...prev];
        for (const item of list) {
          if (!seen.has(item.id)) merged.push(item);
        }
        return merged;
      });

      setHasMore(result.hasMore);
      setNextCursorId(result.nextCursorId);

      if (reset) {
        if (list.length > 0) {
          setSelectedId((prev) => prev || list[0].id || null);
        } else {
          setSelectedId(null);
        }
      } else if (!selectedId && list.length > 0) {
        setSelectedId(list[0].id || null);
      }
    } catch (fetchError) {
      console.error(fetchError);
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Failed to load applications",
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    setNextCursorId(null);
    setHasMore(false);
    void loadApplications(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, statusFilter, user]);

  const selectedApplication = useMemo(
    () => applications.find((item) => item.id === selectedId) || null,
    [applications, selectedId],
  );

  async function updateStatus(status: RegistrationStatus) {
    if (!user || !selectedApplication?.id) return;

    try {
      setUpdatingStatus(status);
      const updated = await RegistrationDB.updateStatusAsAdmin(
        selectedApplication.id,
        status,
      );
      if (!updated) {
        throw new Error("Application not found");
      }

      setApplications((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item)),
      );
    } catch (updateError) {
      console.error(updateError);
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Failed to update status",
      );
    } finally {
      setUpdatingStatus(null);
    }
  }

  if (authLoading || (isAdmin && loading)) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <p>Loading admin portal...</p>
      </main>
    );
  }

  if (authError || !isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg rounded-xl bg-white p-8 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-3">
            Access Denied
          </h1>
          <p className="text-sm text-gray-600">
            {authError || "Only admins can access this page."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 rounded-xl bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">
              Fellowship Applications
            </h1>
            <span className="text-sm text-gray-500">
              {applications.length} records
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                  statusFilter === status
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {status === "all"
                  ? "All"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left px-3 py-2">Name</th>
                  <th className="text-left px-3 py-2">Email</th>
                  <th className="text-left px-3 py-2">Institution</th>
                  <th className="text-left px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedId(item.id || null)}
                    className={`cursor-pointer border-t border-gray-100 ${
                      selectedId === item.id ? "bg-blue-50" : "bg-white"
                    }`}
                  >
                    <td className="px-3 py-2 text-gray-800">
                      {item.name || "—"}
                    </td>
                    <td className="px-3 py-2 text-gray-600">
                      {item.email || "—"}
                    </td>
                    <td className="px-3 py-2 text-gray-600">
                      {item.institution || "—"}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs border ${statusBadgeClass(item.status)}`}
                      >
                        {item.status || "pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {hasMore && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => void loadApplications(false)}
                disabled={loadingMore || !nextCursorId}
                className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold disabled:opacity-50"
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </section>

        <section className="rounded-xl bg-white p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Application Details
          </h2>
          {!selectedApplication ? (
            <p className="text-sm text-gray-500">
              Select an application to review details.
            </p>
          ) : (
            <div className="space-y-4 text-sm text-gray-700">
              <div className="grid grid-cols-1 gap-2">
                <p>
                  <strong>Name:</strong> {selectedApplication.name || "—"}
                </p>
                <p>
                  <strong>Gender:</strong> {selectedApplication.gender || "—"}
                </p>
                <p>
                  <strong>Email (Google):</strong>{" "}
                  {selectedApplication.email || "—"}
                </p>
                <p>
                  <strong>Institutional Email:</strong>{" "}
                  {selectedApplication.institutionalEmail || "—"}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedApplication.phone || "—"}
                </p>
                <p>
                  <strong>Designation:</strong>{" "}
                  {selectedApplication.designation || "—"}
                </p>
                <p>
                  <strong>Highest Qualification:</strong>{" "}
                  {selectedApplication.highestQualification || "—"}
                </p>
                <p>
                  <strong>Year:</strong> {selectedApplication.year || "—"}
                </p>
                <p>
                  <strong>Institution:</strong>{" "}
                  {selectedApplication.institution || "—"}
                </p>
                <p>
                  <strong>Institution Address:</strong>{" "}
                  {selectedApplication.institutionAddress || "—"}
                </p>
                <p>
                  <strong>City:</strong> {selectedApplication.city || "—"}
                </p>
                <p>
                  <strong>State:</strong> {selectedApplication.state || "—"}
                </p>
                <p>
                  <strong>Pin Code:</strong>{" "}
                  {selectedApplication.pinCode || "—"}
                </p>
                <p>
                  <strong>Past Fellowship:</strong>{" "}
                  {selectedApplication.pastFellowship || "—"}
                </p>
                <p>
                  <strong>Publications:</strong>{" "}
                  {selectedApplication.publications || "—"}
                </p>
                <p>
                  <strong>Scopus ID:</strong>{" "}
                  {selectedApplication.scopusId || "—"}
                </p>
                <p>
                  <strong>Google Scholar ID:</strong>{" "}
                  {selectedApplication.googleScholarId || "—"}
                </p>
                <p>
                  <strong>Paper/Hackathon ID:</strong>{" "}
                  {selectedApplication.ieeePaperId || "—"}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="capitalize">
                    {selectedApplication.status || "pending"}
                  </span>
                </p>
              </div>

              <div className="space-y-1">
                {selectedApplication.writeUpFileUrl && (
                  <a
                    className="block text-blue-600 hover:underline"
                    href={selectedApplication.writeUpFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Research Write-up
                  </a>
                )}
                {selectedApplication.idCardFileUrl && (
                  <a
                    className="block text-blue-600 hover:underline"
                    href={selectedApplication.idCardFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View ID Card
                  </a>
                )}
                {selectedApplication.aadharFileUrl && (
                  <a
                    className="block text-blue-600 hover:underline"
                    href={selectedApplication.aadharFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Aadhaar Card
                  </a>
                )}
                {selectedApplication.bonafideFileUrl && (
                  <a
                    className="block text-blue-600 hover:underline"
                    href={selectedApplication.bonafideFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Bonafide/NOC
                  </a>
                )}
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  disabled={updatingStatus !== null}
                  onClick={() => updateStatus("approved")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded px-3 py-2 text-xs font-semibold disabled:opacity-50"
                >
                  {updatingStatus === "approved" ? "Approving..." : "Approve"}
                </button>
                <button
                  disabled={updatingStatus !== null}
                  onClick={() => updateStatus("rejected")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded px-3 py-2 text-xs font-semibold disabled:opacity-50"
                >
                  {updatingStatus === "rejected" ? "Rejecting..." : "Reject"}
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
