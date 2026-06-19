"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { RegistrationDB, Registration } from "@/lib/firestore";
import { authorDeadlines, isPastDeadline } from "@/lib/authorDeadlines";
import { AuthorActionButton } from "@/components/ui/AuthorActionButton";

const applicationsClosed = isPastDeadline(authorDeadlines.fellowshipApplication);

export function FellowshipApplicationSidebar() {
  const { user } = useAuth();
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkRegistration() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const result = await RegistrationDB.findByUidAndType(
          user.uid,
          "Fellowship",
        );
        setRegistration((result as Registration) || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    checkRegistration();
  }, [user]);

  return (
    <div className="bg-[#1a4b7c] p-5 md:p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg top-24">
      <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
        Application Status
      </h3>
      <div className="space-y-4">
        {loading ? (
          <p className="text-sm text-gray-200 italic">Checking status...</p>
        ) : registration ? (
          <div className="bg-white/10 p-4 rounded-md border border-white/20">
            <p className="text-sm text-white mb-2">You have already applied.</p>
            <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">
              Status:
            </p>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                registration.status === "approved"
                  ? "bg-green-100 text-green-800"
                  : registration.status === "rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {registration.status === "approved"
                ? "Approved"
                : registration.status === "rejected"
                  ? "Rejected"
                  : "Pending Review"}
            </span>
          </div>
        ) : (
          <p className="text-sm text-gray-200 italic">
            Applications are reviewed on a rolling basis. Early submissions are
            encouraged.
          </p>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
        {registration ? (
          <Link
            href="/dashboard"
            className="block w-full bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold text-center py-3 rounded transition-colors"
          >
            GO TO DASHBOARD
          </Link>
        ) : (
          <AuthorActionButton
            closed={false}
            deadline={authorDeadlines.fellowshipApplication}
            href="/fellowship/register"
          >
            APPLY NOW
          </AuthorActionButton>
        )}
      </div>
    </div>
  );
}
