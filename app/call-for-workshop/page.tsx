import React from "react";
import Image from "next/image";

export default function CallForWorkshop() {
  return (
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 px-4 md:px-10 max-w-[1360px] mx-auto flex flex-col">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={60}
              height={60}
              className="w-9/12 h-9/12 md:w-14 md:h-14 object-contain mb-9"
            />
            <h1 className="text-3xl md:text-5xl font-bold">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-[#6aaff1]">
            JULY 19-21, 2026 | RADISSON BLU, MARATHAHALLI, BENGALURU
          </p>
          <h2 className="text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white leading-tight">
            CALL FOR WORKSHOP PROPOSAL (CWP)
          </h2>

          <h2 className="text-lg md:text-2xl font-semibold text-[#6aaff1] mt-6">
            TTTC India Workshops on VLSI Test & Design-for-Testability (DFT)
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium">
            Cycle: 2026–2027
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="space-y-4 text-gray-200 text-justify">
                <p>
                  The Test Technology Technical Community (TTTC) India, in
                  collaboration with IEEE International Test Conference India,
                  invites proposals from academic institutions across India to
                  host workshops on VLSI Test and Design-for-Testability (DFT).
                </p>
                <p>
                  These 3-day workshops (2 days theory + 1 day lab) strengthen
                  semiconductor test education, foster industry-academia
                  collaboration, and build skilled talent for India&apos;s
                  growing semiconductor ecosystem.
                </p>
              </div>
            </section>

            <Section title="Eligibility Criteria for Host Institutes">
              <li>Strong VLSI curriculum (UG/PG)</li>
              <li>Active faculty in VLSI / DFT / testing</li>
              <li>Ongoing research activity preferred</li>
              <li>Auditorium (100–120 capacity)</li>
              <li>Lab with 50–60 Linux systems</li>
              <li>EDA tools availability (optional)</li>
              <li>Ability to attract ~100 participants</li>
            </Section>

            <Section title="Responsibilities of Host Institutes">
              <li>Prepare brochure and registration portal</li>
              <li>Provide lunch arrangements</li>
              <li>Accommodation for delegates</li>
              <li>Lab setup with tools</li>
              <li>Assign student volunteers</li>
            </Section>

            <Section title="TTTC India Support">
              <li>3–4 industry expert instructors</li>
              <li>Workshop curriculum</li>
              <li>Travel support for delegates</li>
              <li>Guidance on outreach</li>
            </Section>

            <Section title="Proposal Submission">
              <li>Institute overview</li>
              <li>Faculty expertise</li>
              <li>Lab infrastructure</li>
              <li>Accommodation details</li>
              <li>Nearby institute outreach</li>
              <li>Preferred workshop dates</li>
            </Section>

            <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Selection Process
              </h3>
              <div className="space-y-4 text-gray-200 text-justify">
                <p>
                  Shortlisted institutes will present their proposal at ITC
                  India 2026 in Bengaluru. Final selection will be based on
                  presentation, infrastructure readiness, and alignment with
                  TTTC goals.
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="top-24 space-y-8">
              <div className="bg-[#1a4b7c] p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                  Important Dates
                </h3>

                <div className="space-y-4">
                  <DateItem title="Proposal Deadline" date="May 31, 2026" />
                  <DateItem
                    title="Selection Notification"
                    date="June 15, 2026"
                  />
                  <DateItem
                    title="Workshop Cycle"
                    date="Sept 2026 – June 2027"
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="https://easychair.org/conferences/?conf=itcindia2026"
                    className="block w-full bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold text-center py-3 rounded transition-colors"
                  >
                    SUBMIT PROPOSAL
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm text-sm text-gray-300">
                <h4 className="font-bold text-white mb-2">Need Help?</h4>
                <p className="mb-4">
                  For questions regarding submissions or process, contact:
                </p>

                <a
                  href="mailto:TTTC-India-Workshop-2026@easychair.org"
                  className="text-blue-300 hover:underline break-all"
                >
                  TTTC-India-Workshop-2026@easychair.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
        {title}
      </h3>
      <ul className="list-disc list-outside ml-5 space-y-3 text-gray-200">
        {children}
      </ul>
    </section>
  );
}

function DateItem({ title, date }: { title: string; date: string }) {
  return (
    <div>
      <p className="text-xs text-gray-300 uppercase">{title}</p>
      <p className="text-lg font-semibold">{date}</p>
    </div>
  );
}
