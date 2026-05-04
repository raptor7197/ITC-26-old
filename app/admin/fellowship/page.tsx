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
const CSV_BASE_COLUMNS: (keyof Registration | "id")[] = [
  "id",
  "uid",
  "registrationType",
  "status",
  "name",
  "gender",
  "email",
  "institutionalEmail",
  "phone",
  "designation",
  "highestQualification",
  "department",
  "year",
  "institution",
  "institutionAddress",
  "city",
  "state",
  "pinCode",
  "pastFellowship",
  "publications",
  "scopusId",
  "googleScholarId",
  "ieeePaperId",
  "paperId",
  "paperStatus",
  "additionalInfo",
  "writeUpFileUrl",
  "idCardFileUrl",
  "aadharFileUrl",
  "bonafideFileUrl",
  "createdAt",
  "updatedAt",
];

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
  const [exporting, setExporting] = useState(false);

  function normalizeCsvValue(value: unknown): string {
    if (value === null || value === undefined) return "";
    if (typeof value === "string") return value;
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    if (value instanceof Date) return value.toISOString();

    if (typeof value === "object") {
      const ts = value as {
        toDate?: () => Date;
        seconds?: number;
        nanoseconds?: number;
      };

      if (typeof ts.toDate === "function") {
        return ts.toDate().toISOString();
      }

      if (typeof ts.seconds === "number") {
        const nanos = typeof ts.nanoseconds === "number" ? ts.nanoseconds : 0;
        return new Date(
          ts.seconds * 1000 + Math.floor(nanos / 1_000_000),
        ).toISOString();
      }
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }

    return String(value);
  }

  function escapeCsvCell(value: string): string {
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  async function exportApplicationsCsv() {
    if (!user || !isAdmin || exporting) return;

    try {
      setExporting(true);
      setError(null);

      const allItems: Registration[] = [];
      const seenIds = new Set<string>();
      const seenCursors = new Set<string>();
      let cursorId: string | undefined;
      let hasMoreItems = true;

      // We fetch all records by iterating through pages
      while (hasMoreItems) {
        const result = await RegistrationDB.getAllFellowshipByStatus(undefined, {
          limitCount: 100, // Larger page size for export
          cursorId,
        });

        for (const item of result.items) {
          const itemId =
            item.id || `${item.uid}-${item.email}-${allItems.length}`;
          if (seenIds.has(itemId)) continue;
          seenIds.add(itemId);
          allItems.push(item);
        }

        hasMoreItems = result.hasMore;
        cursorId = result.nextCursorId || undefined;

        if (!hasMoreItems || !cursorId) break;
        if (seenCursors.has(cursorId)) break;
        seenCursors.add(cursorId);
      }

      if (allItems.length === 0) {
        throw new Error("No applications found to export.");
      }

      // Dynamically find any other columns not in CSV_BASE_COLUMNS
      const discoveredColumns = Array.from(
        new Set(allItems.flatMap((item) => Object.keys(item))),
      ).filter(
        (key) => !CSV_BASE_COLUMNS.includes(key as keyof Registration | "id"),
      );

      const headers = [...CSV_BASE_COLUMNS, ...discoveredColumns];

      const csvRows = [
        headers.join(","),
        ...allItems.map((item) =>
          headers
            .map((column) => {
              const value = normalizeCsvValue(
                item[column as keyof Registration | "id"],
              );
              return escapeCsvCell(value);
            })
            .join(","),
        ),
      ];

      const csvContent = `\uFEFF${csvRows.join("\n")}`;
      const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `fellowship-applications-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (exportError) {
      console.error(exportError);
      setError(
        exportError instanceof Error
          ? exportError.message
          : "Failed to export applications",
      );
    } finally {
      setExporting(false);
    }
  }

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

  const indexHelpLink = useMemo(() => {
    if (!error) return null;
    const match = error.match(/https:\/\/console\.firebase\.google\.com\/\S+/);
    return match ? match[0] : null;
  }, [error]);

  const isIndexError =
    !!error &&
    (error.toLowerCase().includes("requires an index") ||
      error.toLowerCase().includes("failed-precondition"));

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
        <section className="lg:col-span-2 rounded-xl bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Fellowship Applications
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {applications.length} records shown
              </p>
            </div>
            <button
              onClick={() => void exportApplicationsCsv()}
              disabled={exporting}
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 transition-colors"
            >
              {exporting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Exporting...
                </>
              ) : (
                <>
                  <svg className="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export CSV
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  statusFilter === status
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                }`}
              >
                {status === "all"
                  ? "All"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 break-words">{error}</p>
                </div>
              </div>

              {isIndexError && (
                <div className="mt-2 ml-8 text-xs text-red-700">
                  <p>
                    This is a one-time Firestore setup step. Create the
                    composite index and wait until it shows as{" "}
                    <strong>Enabled</strong>, then refresh this page.
                  </p>
                  {indexHelpLink && (
                    <a
                      href={indexHelpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-semibold text-red-800 underline hover:text-red-900"
                    >
                      Open Firebase index creation link
                    </a>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Email</th>
                  <th className="text-left px-4 py-3 font-semibold">Institution</th>
                  <th className="text-left px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {applications.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedId(item.id || null)}
                    className={`cursor-pointer transition-colors ${
                      selectedId === item.id ? "bg-blue-50" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-3 text-gray-800 font-medium">
                      {item.name || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {item.email || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {item.institution || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold border ${statusBadgeClass(item.status)}`}
                      >
                        {item.status || "pending"}
                      </span>
                    </td>
                  </tr>
                ))}
                {applications.length === 0 && !loading && (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-gray-500 italic">
                      No applications found matching the filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => void loadApplications(false)}
                disabled={loadingMore || !nextCursorId}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {loadingMore ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </span>
                ) : "Load More Records"}
              </button>
            </div>
          )}
        </section>

        <section className="rounded-xl bg-white p-5 shadow-sm h-fit sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">
            Application Details
          </h2>
          {!selectedApplication ? (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-4 text-sm text-gray-500">
                Select an application from the list to review details.
              </p>
            </div>
          ) : (
            <div className="space-y-6 text-sm text-gray-700">
              <div className="grid grid-cols-1 gap-3">
                <DetailRow label="Name" value={selectedApplication.name} />
                <DetailRow label="Gender" value={selectedApplication.gender} />
                <DetailRow label="Email (Google)" value={selectedApplication.email} />
                <DetailRow label="Institutional Email" value={selectedApplication.institutionalEmail} />
                <DetailRow label="Phone" value={selectedApplication.phone} />
                <DetailRow label="Designation" value={selectedApplication.designation} />
                <DetailRow label="Highest Qualification" value={selectedApplication.highestQualification} />
                <DetailRow label="Department" value={selectedApplication.department} />
                <DetailRow label="Year" value={selectedApplication.year} />
                <DetailRow label="Institution" value={selectedApplication.institution} />
                <DetailRow label="Institution Address" value={selectedApplication.institutionAddress} />
                <DetailRow label="City" value={selectedApplication.city} />
                <DetailRow label="State" value={selectedApplication.state} />
                <DetailRow label="Pin Code" value={selectedApplication.pinCode} />
                <DetailRow label="Past Fellowship" value={selectedApplication.pastFellowship} />
                <DetailRow label="Publications" value={selectedApplication.publications} />
                <DetailRow label="Scopus ID" value={selectedApplication.scopusId} />
                <DetailRow label="Google Scholar ID" value={selectedApplication.googleScholarId} />
                <DetailRow label="Paper/Hackathon ID" value={selectedApplication.ieeePaperId} />
                <DetailRow label="Status" value={selectedApplication.status} className="capitalize font-semibold" />
              </div>

              <div className="space-y-2 border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Documents</h3>
                <DocumentLink url={selectedApplication.writeUpFileUrl} label="Research Write-up" />
                <DocumentLink url={selectedApplication.idCardFileUrl} label="ID Card" />
                <DocumentLink url={selectedApplication.aadharFileUrl} label="Aadhaar Card" />
                <DocumentLink url={selectedApplication.bonafideFileUrl} label="Bonafide/NOC" />
              </div>

              <div className="pt-6 flex gap-3 border-t">
                <button
                  disabled={updatingStatus !== null}
                  onClick={() => updateStatus("approved")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2.5 text-xs font-bold shadow-sm disabled:opacity-50 transition-colors uppercase tracking-wider"
                >
                  {updatingStatus === "approved" ? "Approving..." : "Approve"}
                </button>
                <button
                  disabled={updatingStatus !== null}
                  onClick={() => updateStatus("rejected")}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2.5 text-xs font-bold shadow-sm disabled:opacity-50 transition-colors uppercase tracking-wider"
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

function DetailRow({ label, value, className = "" }: { label: string; value?: string | null; className?: string }) {
  return (
    <div className="flex flex-col border-b border-gray-50 pb-1">
      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{label}</span>
      <span className={`text-gray-800 ${className}`}>{value || "—"}</span>
    </div>
  );
}

function DocumentLink({ url, label }: { url?: string; label: string }) {
  if (!url) return null;
  return (
    <a
      className="flex items-center text-blue-600 hover:text-blue-800 hover:underline group"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="mr-2 h-4 w-4 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      {label}
    </a>
  );
}
