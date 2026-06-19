import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { AuthorActionButton } from "@/components/ui/AuthorActionButton";
import { FellowshipApplicationSidebar } from "@/components/fellowship/FellowshipApplicationSidebar";
import { authorDeadlines, isPastDeadline } from "@/lib/authorDeadlines";

const fellowshipApplicationClosed = isPastDeadline(
  authorDeadlines.fellowshipApplication,
);

const aboutPoints = [
  "IEEE ITC India 2026 invites students, researchers, and faculty members working in the area of VLSI Testing to apply for the Fellowship Program. IEEE ITC India has a longstanding tradition of offering generous fellowships to students, researchers, and faculty from academic institutions across India, and we are pleased to continue this initiative for our 10th Edition of IEEE ITC India 2026.",
  "The fellowship includes complimentary conference registration and reimbursement (fixed amount) towards travel and accommodation for attending the conference. Fellowships are open to Indian students, researchers, and faculty actively engaged in VLSI test–related domains.",
  "Fellowship recipients are required to attend the entire three-day conference, and attendance will be formally recorded. The fellowship is intended as a facilitative support mechanism for participants who may otherwise lack adequate institutional funding, and should not be viewed as an honor or award.",
  "Applicants must be full-time students or regular faculty members at the time of the conference. College identity cards and Aadhaar cards will be verified during registration.",
  "The selection and acceptance of fellowship applications will be solely based on the criteria defined by the IEEE ITC India Fellowship Committee.",
];

const guidelinePoints = [
  "The applicant must be a registered full-time student (UG/PG/Ph.D.) or a regular faculty member of a recognized institution, actively engaged in the area of VLSI Testing or allied domains.",
  "A bonafide (Template Provided Below) certificate issued by the Head of the Department confirming full-time status, along with a valid institutional identity card and Aadhaar card, must be produced at the time of claiming reimbursements.",
  "All fellowship recipients are required to attend all tutorials and technical sessions for the entire duration of the conference.",
  "Attendance is mandatory on all days of the conference, and fellows are expected to report to the conference venue by 9:00 AM each day and remain until the conclusion of all scheduled technical sessions.",
  "Fellowship awardees who are authors of regular papers or participants in the Academia–Research Track are also required to strictly comply with these fellowship guidelines.",
  "Failure to maintain mandatory attendance may result in the forfeiture of the Deposit return and/or reimbursement of travel and accommodation expenses.",
  "Late arrivals or early departures will not be permitted. In such cases, the Fellowship Committee reserves the right to partially or fully forfeit the reimbursement amount.",
];

const selectionPoints = [
  "Authors of accepted papers will be given priority.",
  "Based on Academic achievements and research contributions.",
  "Statement of purpose for attending IEEE ITC India 2026.",
];

const applicationProcessPoints = [
  "Candidates are required to submit their fellowship applications through the designated portal, ensuring that all relevant details are duly completed.",
  "Faculty applicants must upload a recommendation letter from their Head of the Department/Principal/Director (or equivalent authority) on official institutional letterhead.",
  "Student applicants are required to submit a recommendation letter from their Supervisor or Head of the Department on official institute/department letterhead.",
  "Applications submitted after the stipulated deadline will not be considered.",
  "Shortlisted candidates will be informed via email regarding the subsequent stages of the selection process.",
  "Upon selection, candidates must remit a confirmation fee of INR 3,000 within one week, failing which their candidature will be deemed withdrawn. (The UPI payment link will be shared separately)",
  "The deposited amount will be refunded to the respective account upon successful attendance of all three days of the conference.",
];

const importantDates = [
  { event: "Call for Fellowship Applications", date: "20 April 2026" },
  { event: "Last date for submitting application", date: "7 May 2026" },
  {
    event: "Round 1 Notification for award of fellowship",
    date: "20 May 2026",
    oldDate: "10 May 2026",
  },
  {
    event: "Round 1 Confirmation",
    date: "27 May 2026",
    oldDate: "17 May 2026",
  },
  {
    event: "Round 2 Notification for award of fellowship",
    date: "1 June 2026",
    oldDate: "20 May 2026",
  },
  {
    event: "Round 2 Confirmation",
    date: "7 June 2026",
    oldDate: "27 May 2026",
  },
];

export default function FellowshipPage() {
  return (
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[85%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col">
        <PageHeader title="FELLOWSHIP PROGRAM" />

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
                Application Process & Required Details
              </h3>
              <p className="mb-4 text-sm md:text-base text-gray-200">
                To complete the fellowship application, you will need to provide
                the following details and documents:
              </p>
              <ul className="list-disc list-outside ml-4 md:ml-5 mb-6 space-y-2 text-sm md:text-base text-gray-200">
                <li>
                  Personal details (Name as per Aadhaar, Gender, Mobile Number)
                </li>
                <li>
                  Institutional details (Institutional Email ID, Designation,
                  Highest Qualification, Institution Name & Address)
                </li>
                <li>Past ITC fellowship details (if applicable)</li>
                <li>
                  Titles of your latest VLSI Testing related publications (Max
                  3)
                </li>
                <li>Scopus ID and Google Scholar ID (optional)</li>
                <li>
                  A short write-up on your current area of research and the
                  purpose of attending IEEE ITC 2026 (Max 1 page PDF)
                </li>
                <li>
                  IEEE ITC 2026 Paper ID or Poster/Hackathon ID (if applicable)
                </li>
                <li>Institution ID card (PDF format)</li>
                <li>Aadhaar card (PDF format)</li>
                <li>
                  Bonafide certificate (students) or recommendation letter/NOC
                  (faculty) on official letterhead — use the templates below
                </li>
              </ul>

              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 mb-6">
                <h4 className="text-lg font-bold text-[#6aaff1] mb-2">
                  Bonafide &amp; faculty recommendation templates
                </h4>
                <p className="text-sm md:text-base text-gray-200 mb-3">
                  Download the appropriate template, have it filled and signed
                  on official letterhead, and upload it with your application:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AuthorActionButton
                    closed={false}
                    deadline={authorDeadlines.fellowshipApplication}
                    variant="inline-secondary"
                    href="/Student%20Template.docx"
                    download="Student Template.docx"
                  >
                    Download student bonafide template
                  </AuthorActionButton>
                  <AuthorActionButton
                    closed={false}
                    deadline={authorDeadlines.fellowshipApplication}
                    variant="inline-secondary"
                    href="/Faculty%20Template.docx"
                    download="Faculty Template.docx"
                  >
                    Download faculty recommendation template
                  </AuthorActionButton>
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 md:ml-5 space-y-3 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                {applicationProcessPoints.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Fellowship Support Details for Local Participants
              </h3>
              <div className="space-y-4 text-sm md:text-base text-gray-200">
                <p>
                  <strong>TRAVEL SUPPORT:</strong> NIL
                </p>
                <p>
                  <strong>ACCOMODATION SUPPORT:</strong> NIL
                </p>
                <p>
                  <strong>CONFERENCE REGISTRATION SUPPORT:</strong> Each
                  selected fellow will be provided with complimentary
                  registration, which includes the conference kit, lunch for all
                  three days, comprehensive access to all technical sessions,
                  and opportunities for professional interaction with conference
                  delegates.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Fellowship Support Details for Outstation Participants
              </h3>
              <div className="space-y-6 text-sm md:text-base text-gray-200 text-justify sm:text-left break-words">
                <p>
                  IEEE ITC India 2026 offers competency-based fellowships to faculty
                  and student participants from outstation locations working in
                  the domains of VLSI Test and allied fields. As part of the
                  fellowship support, travel reimbursements will be provided in
                  accordance with predefined distance-based slabs. The
                  reimbursable amount shall be the lower of the actual
                  expenditure incurred or the applicable slab limit, ensuring
                  equitable and transparent disbursal. All reimbursements will
                  be processed via direct bank transfer within 30 days following
                  the conclusion of the conference.
                </p>

                <div>
                  <h4 className="text-lg font-bold text-[#6aaff1] mb-2">
                    A. TRAVEL SUPPORT
                  </h4>
                  <p className="mb-2">
                    Travel assistance for faculty members and students will be
                    provided in accordance with the predefined slabs specified
                    in Table 1. Reimbursement will be made based on the actual
                    expenditure incurred or the applicable slab limit, whichever
                    is lower.
                  </p>
                  <p>
                    Applicants availing travel support must undertake their
                    journey to and from the conference from their official place
                    of work to qualify for reimbursement. In cases where travel
                    originates from the applicant’s residence, valid proof of
                    residence must be submitted for consideration.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#6aaff1] mb-2">
                    B. ACCOMMODATION SUPPORT
                  </h4>
                  <p className="font-semibold text-white mt-4 mb-1">
                    Outstation Student Fellows:
                  </p>
                  <p className="mb-4">
                    Complimentary accommodation will be arranged for student
                    fellows traveling from outside Bengaluru on a double/triple
                    sharing or dormitory basis at locations in close proximity
                    to the conference venue. Further details pertaining to the
                    place of stay and associated logistics will be communicated
                    to the fellows in due course. Additionally, complimentary
                    breakfast will be provided at the place of stay on all three
                    days of the conference.
                  </p>

                  <p className="font-semibold text-white mt-4 mb-1">
                    Outstation Faculty Fellows:
                  </p>
                  <p>
                    Faculty fellows are required to arrange their own
                    accommodation, ensuring that their place of stay affords
                    them timely access to the conference venue on all days of
                    the event. IEEE ITC India 2026 will not facilitate accommodation
                    arrangements for faculty fellows under any circumstances.
                    However, an accommodation allowance of ₹1,000 per day or the
                    actual amount incurred — whichever is lower — will be
                    reimbursed for a maximum of 3 nights, subject to the
                    submission of original hotel bills as documentary proof of
                    stay. Faculty fellows are encouraged to opt for shared
                    accommodation in order to optimise costs and adhere to
                    budget constraints.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#6aaff1] mb-2">
                    C. CONFERENCE REGISTRATION SUPPORT
                  </h4>
                  <p>
                    Each selected fellow will be provided with complimentary
                    registration, which includes the conference kit, lunch for
                    all three days, comprehensive access to all technical
                    sessions, and opportunities for professional interaction
                    with conference delegates.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Table 1 : IEEE ITC India Fellowship Support Structure for Outstation
                Participants
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="bg-white/10 border-b border-white/20">
                      <th className="p-3 font-bold">Category</th>
                      <th className="p-3 font-bold">States / UT</th>
                      <th className="p-3 font-bold">Cap for Faculty (₹)</th>
                      <th className="p-3 font-bold">Cap for Students (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-3 align-top font-semibold">Tier I</td>
                      <td className="p-3 align-top">
                        Karnataka
                        <br />
                        Tamil Nadu
                        <br />
                        Kerala
                        <br />
                        Andhra Pradesh
                        <br />
                        Telangana
                        <br />
                        Goa
                        <br />
                        Puducherry
                      </td>
                      <td className="p-3 align-top">3000</td>
                      <td className="p-3 align-top">2000</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-white/5">
                      <td className="p-3 align-top font-semibold">Tier II</td>
                      <td className="p-3 align-top">
                        Maharashtra
                        <br />
                        Odisha
                        <br />
                        Chhattisgarh
                        <br />
                        Madhya Pradesh
                        <br />
                        Gujarat
                        <br />
                        West Bengal
                        <br />
                        Rajasthan
                        <br />
                        Jharkhand
                        <br />
                        Uttar Pradesh
                        <br />
                        Bihar
                      </td>
                      <td className="p-3 align-top">7000</td>
                      <td className="p-3 align-top">4000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 align-top font-semibold">Tier III</td>
                      <td className="p-3 align-top">
                        Haryana
                        <br />
                        Punjab
                        <br />
                        Himachal Pradesh
                        <br />
                        Uttarakhand
                        <br />
                        Sikkim
                        <br />
                        Assam
                        <br />
                        Arunachal Pradesh
                        <br />
                        Nagaland
                        <br />
                        Manipur
                        <br />
                        Mizoram
                        <br />
                        Tripura
                        <br />
                        Meghalaya
                        <br />
                        Delhi
                        <br />
                        Chandigarh
                        <br />
                        Jammu and Kashmir
                      </td>
                      <td className="p-3 align-top">10000</td>
                      <td className="p-3 align-top">5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 relative">
            <FellowshipApplicationSidebar />

            <section className="mt-10 bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Important Dates
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-200">
                {importantDates.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center"
                  >
                    <span className="font-semibold text-white sm:w-1/2">
                      {item.event}:
                    </span>
                    <span className="text-[#6aaff1]">
                      {item.oldDate ? (
                        <span className="text-gray-300 line-through mr-2">
                          {item.oldDate}
                        </span>
                      ) : null}
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20 text-sm md:text-base">
                <p>
                  For any concerns/queries, please send an email to:{" "}
                  <a
                    href="mailto:info@itctestweekindia.org"
                    className="text-[#6aaff1] hover:underline font-semibold"
                  >
                    info@itctestweekindia.org
                  </a>{" "}
                  /{" "}
                  <a
                    href="mailto:itc.fellowships@gmail.com"
                    className="text-[#6aaff1] hover:underline font-semibold"
                  >
                    itc.fellowships@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="mt-12 bg-white/5 p-6 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Bonafide / Recommendation Templates
          </h3>
          <p className="text-sm md:text-base text-gray-200 mb-6">
            Download the appropriate template and get it signed on official
            letterhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AuthorActionButton
              closed={false}
              deadline={authorDeadlines.fellowshipApplication}
              variant="inline-primary"
              href="/Faculty%20Template.docx"
              download="Faculty Template.docx"
            >
              Download Faculty Template
            </AuthorActionButton>
            <AuthorActionButton
              closed={false}
              deadline={authorDeadlines.fellowshipApplication}
              variant="inline-secondary"
              href="/Student%20Template.docx"
              download="Student Template.docx"
            >
              Download Student Template
            </AuthorActionButton>
          </div>
        </section>
      </div>
    </main>
  );
}
