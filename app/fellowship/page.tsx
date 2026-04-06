"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { RegistrationDB, Registration } from "@/lib/firestore";

const aboutPoints = [
  "IEEE ITC India 2026 invites students, researchers, and faculty members working in the area of VLSI Testing to apply for the Fellowship Program. IEEE ITC India has a longstanding tradition of offering generous fellowships to students, researchers, and faculty from academic institutions across India, and we are pleased to continue this initiative for our 10th Edition of IEEE ITC India 2026.",
  "The fellowship includes complimentary conference registration and reimbursement (fixed amount) towards travel and accommodation for attending the conference. Fellowships are open to Indian students, researchers, and faculty actively engaged in VLSI test–related domains.",
  "Fellowship recipients are required to attend the entire three-day conference, and attendance will be formally recorded. The fellowship is intended as a facilitative support mechanism for participants who may otherwise lack adequate institutional funding, and should not be viewed as an honor or award.",
  "Applicants must be full-time students or regular faculty members at the time of the conference. College identity cards and Aadhaar cards will be verified during registration.",
  "The selection and acceptance of fellowship applications will be solely based on the criteria defined by the IEEE ITC India Fellowship Committee.",
];

const guidelinePoints = [
  "The applicant must be a registered full-time student (UG/PG/Ph.D.) or a regular faculty member of a recognized institution, actively engaged in the area of VLSI Testing or allied domains.",
  "A bonafide certificate issued by the Head of the Department confirming full-time status, along with a valid institutional identity card and Aadhaar card, must be produced at the time of claiming reimbursements.",
  "All fellowship recipients are required to attend all tutorials and technical sessions for the entire duration of the conference.",
  "Attendance is mandatory on all days of the conference, and fellows are expected to report to the conference venue by 9:00 AM each day and remain until the conclusion of all scheduled technical sessions.",
  "Fellowship awardees who are authors of regular papers or participants in the Academia–Research Track are also required to strictly comply with these fellowship guidelines.",
  "Failure to maintain mandatory attendance may result in the forfeiture of the Deposit return and/or reimbursement of travel and accommodation expenses.",
  "Late arrivals or early departures will not be permitted. In such cases, the Fellowship Committee reserves the right to partially or fully forfeit the reimbursement amount.",
];

const selectionPoints = [
  "Authors of accepted papers will be given priority.",
  "Based on Academic achievements and research contributions.",
  "Statement of purpose for attending ITC India 2026.",
];

export default function FellowshipPage() {
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
          "fellowship",
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
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[85%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col">
        <div className="text-center mb-16">
          {/*<h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
             ITC TEST WEEK India 2026
          </h1>*/}
          
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain md:hidden"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white uppercase leading-tight md:leading-tight">

            ITC Fellowship Proposal
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6aaff1] uppercase mt-4 px-2">
            REIMAGINING TEST IN THE ERA OF INTELLIGENT SILICON
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                About the Fellowship
              </h3>
              <ul className="list-disc list-outside ml-4 md:ml-5 space-y-3 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                {aboutPoints.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Fellowship Guidelines
              </h3>
              <ul className="list-disc list-outside ml-4 md:ml-5 space-y-3 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                {guidelinePoints.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Selection Criteria
              </h3>
              <ul className="list-disc list-outside ml-4 md:ml-5 space-y-3 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                {selectionPoints.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Support Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#6aaff1]">
                    Support for Local Fellows
                  </h4>
                  <div className="space-y-3 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <p key={n}>
                        <span className="font-semibold text-white mr-2">
                          {n}.
                        </span>
                        Lorem ipsum dolor sit amet consectetur. Felis quis in
                        molestie curabitur bibendum. Amet in arcu laoreet arcu
                        risus hendrerit odio senectus sapien. Blandit sit at
                        sagittis auctor est.
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#6aaff1]">
                    Support for Outstation Fellows
                  </h4>
                  <div className="space-y-3 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <p key={n}>
                        <span className="font-semibold text-white mr-2">
                          {n}.
                        </span>
                        Lorem ipsum dolor sit amet consectetur. Felis quis in
                        molestie curabitur bibendum. Amet in arcu laoreet arcu
                        risus hendrerit odio senectus sapien. Blandit sit at
                        sagittis auctor est.
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#1a4b7c] p-5 md:p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg top-24">
              <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                Application Status
              </h3>
              <div className="space-y-4">
                {loading ? (
                  <p className="text-sm text-gray-200 italic">
                    Checking status...
                  </p>
                ) : registration ? (
                  <div className="bg-white/10 p-4 rounded-md border border-white/20">
                    <p className="text-sm text-white mb-2">
                      You have already applied.
                    </p>
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
                    Applications are reviewed on a rolling basis. Early
                    submissions are encouraged.
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
                  <>
                    <Link
                      href="/fellowship/register"
                      className="block w-full bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold text-center py-3 rounded transition-colors"
                    >
                      APPLY NOW
                    </Link>
                    {/*<Link
                      href="/fellowship/register"
                      className="block w-full bg-transparent border-2 border-[#6aaff1] hover:bg-[#6aaff1]/20 text-white font-bold text-center py-3 rounded transition-colors"
                    >
                      REGISTER NOW
                    </Link>*/}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
