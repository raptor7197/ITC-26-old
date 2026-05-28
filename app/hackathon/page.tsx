import Image from "next/image";
import { AuthorActionButton } from "@/components/ui/AuthorActionButton";
import { authorDeadlines, isPastDeadline } from "@/lib/authorDeadlines";

const hackathonSubmissionClosed = isPastDeadline(
  authorDeadlines.hackathonRound1,
);

const guidePadding =
  "px-[calc(5%+1rem)] sm:px-[calc(4%+1.25rem)] md:px-[calc(3%+1.5rem)] lg:px-[calc(2.5%+1.75rem)] xl:px-[calc(2.25%+2rem)]";

export default function HackathonPage() {
  return (
    <main className="relative min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[#03396c] font-poppins text-white selection:bg-white/20">
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 bottom-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] z-[1] w-px opacity-60 sm:opacity-70 md:opacity-80 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.7) 6px, transparent 3px, transparent 12px)",
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 bottom-0 right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] z-[1] w-px opacity-60 sm:opacity-70 md:opacity-80 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.7) 6px, transparent 3px, transparent 12px)",
        }}
        aria-hidden
      />

      <div
        className={`relative z-10 w-full min-w-0 max-w-full box-border pt-[120px] sm:pt-[150px] pb-20 ${guidePadding}`}
      >
        <div className="mx-auto flex w-full min-w-0 max-w-full flex-col [overflow-wrap:anywhere] lg:max-w-[1400px]">
          <div className="mb-12 min-w-0">
            <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-4 md:gap-6 mb-6">
              <Image
                src="/itc-logo.svg"
                alt="ITC Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <p className="text-sm md:text-base font-semibold text-[#6aaff1] uppercase tracking-wider mb-2">
              10th IEEE International Test Conference India 2026
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase leading-tight">
              HACKATHON
            </h1>
            <div className="min-w-0 bg-white/10 backdrop-blur-md p-6 pr-4 rounded-lg border border-white/20 shadow-xl max-w-3xl mb-8">
              <div className="grid min-w-0 grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-300 uppercase mb-1">Date</p>
                  <p className="text-xl md:text-2xl font-bold text-[#6aaff1]">
                    July 19-21, 2026
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase mb-1">
                    Location
                  </p>
                  <p className="text-xl md:text-2xl font-bold">
                    Radisson Blu, Marathahalli, Bengaluru
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col sm:flex-row gap-4 items-center sm:items-start w-full">
              <AuthorActionButton
                closed={hackathonSubmissionClosed}
                variant="hero-primary"
                href="https://easychair.org/conferences/?conf=itcindia2026"
              >
                Hackathon Submission
              </AuthorActionButton>
              <AuthorActionButton
                closed={hackathonSubmissionClosed}
                variant="hero-secondary"
                href="https://www.ieee.org/conferences/publishing/templates.html"
              >
                Download IEEE Template
              </AuthorActionButton>
            </div>
          </div>

          <div className="mb-16 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-6">
              About the Hackathon
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>
            <div className="min-w-0 bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-white/10 shadow-xl space-y-6 text-base md:text-lg text-gray-200">
              <p>
                The Academia Research Track (ART) committee presents the second
                edition of hackathon which primarily focuses on bringing
                together students and faculty from academic institutions to
                solve industry-scale fundamental research problems in the broad
                area of semiconductor testing.
              </p>
              <p>
                The ART committee lists below four domains. As a part of the
                hackathon, each team must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white">
                <li>Pick an area from the list provided</li>
                <li>Provide a statement of the problem being addressed</li>
                <li>Define the goal and potential of the research</li>
                <li>Submit a research proposal</li>
              </ul>
              <p>
                The initial project proposal submission is limited to 2-pages
                and must be submitted by the due date. Feedback will be provided
                to all the teams by the ART committee to help complete the
                proposed research.
              </p>
            </div>
          </div>

          {/* Important Dates */}
          <div className="mb-16 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-6">
              Important Dates
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>
            <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/10 text-white">
                    <th className="p-4 md:p-5 border-b border-white/20 font-bold uppercase tracking-wider text-sm md:text-base">
                      Milestone
                    </th>
                    <th className="p-4 md:p-5 border-b border-white/20 font-bold uppercase tracking-wider text-sm md:text-base w-1/3">
                      Tentative Date(s)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm md:text-base">
                  <tr className="border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Last date of filling hackathon registration form
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      10th March 2026
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Last date of submitting proposals (Each team is supposed
                      to submit their initial thoughts and chosen problem
                      statement. Once Problem Statement is selected, it can NOT
                      be changed)
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      5th April 2026
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Feedback by ART committee on submitted teams problem
                      statement and definition
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      15th-20th April 2026
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Last date for Round-1 Solution submission
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      31st May 2026
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Declaration of Round-1 results (All Round-1 Winners to
                      receive fellowships for attending ITC India-2026
                      conference)
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      10th-15th June 2026
                    </td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Last date for Round-2 Solution submission
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      10th July 2026
                    </td>
                  </tr>
                  <tr className="hover:bg-white/10 transition-colors">
                    <td className="p-4 md:p-5">
                      Declaration of Round-2 results
                    </td>
                    <td className="p-4 md:p-5 font-bold text-[#6aaff1]">
                      During ITC-India 2026 Conference
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Problem Statement Domains */}
          <div className="mb-16 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-6">
              Problem Statement Domains
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#6aaff1]">
                  1. Functional Fault Model Development
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Modern SoCs integrate complex accelerators and heterogeneous
                  processing blocks where traditional structural fault models
                  (stuck-at, transition, path delay) fail to adequately capture
                  functional failures. Furthermore, with advanced technology
                  nodes and long product lifetimes, many failures occur after
                  deployment due to aging effects, wear-out, radiation, and
                  environmental stress requiring in-field testing. In this
                  challenge, participants are tasked with developing meaningful
                  functional fault models for ATE-based testing and in-field
                  testing. AI-assisted functional fault modeling framework may
                  also be developed/explored that can learn fault behavior from
                  simulation traces, RTL activity, or silicon test data. The
                  objective is to identify and classify functional faults that
                  manifest only under specific workloads, data patterns, or
                  control sequences. Participants must clearly define fault
                  abstraction, and validation strategy, and demonstrate how the
                  proposed model improves fault coverage or diagnostic
                  resolution compared to conventional fault models while
                  remaining test-cost efficient.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#6aaff1]">
                  2. Fault Models for Emerging Memory Types
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Emerging memory technologies such as ReRAM, MRAM, PCM, and
                  FeFET exhibit non-volatile behavior, resistance variability,
                  endurance degradation, and asymmetric read/write
                  characteristics that are not addressed by classical SRAM or
                  DRAM fault models. This challenge requires participants to
                  propose new fault models tailored to one emerging memory
                  technology, capturing both device-level phenomena and
                  array-level behavior. Additionally, aging effects in memory
                  devices can also create problems. The solution should describe
                  fault mechanisms, fault primitives, and their impact on
                  read/write operations, along with suitable test algorithms.
                  Emphasis should be placed on how the proposed fault model
                  enables effective manufacturing test and reliability
                  screening.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#6aaff1]">
                  3. Test Development for Optical Interconnects
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As electrical interconnects reach bandwidth and power limits,
                  on-chip and chip-to-chip optical interconnects are being
                  adopted in high-performance systems. Unlike traditional copper
                  interconnects, optical links introduce unique failure modes
                  such as laser aging, waveguide misalignment, coupling loss,
                  and photodetector sensitivity degradation. Additionally, this
                  shift has become noticeable in both die-to-die connections and
                  rack-to-rack connections (inside datacenters for example). In
                  this challenge, participants must design a test strategy and
                  associated fault model for optical interconnects in one/both
                  of the above scenarios, considering both production test and
                  in-field monitoring. The solution should address how faults
                  are stimulated, observed, and distinguished, and propose
                  different types of metrics to evaluate test effectiveness
                  under realistic process, voltage, temperature, and aging
                  variations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#6aaff1]">
                  4. Developing fault modelling techniques for analog testing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike digital circuits, where faults can often be represented
                  using well-defined models such as stuck-at or transition
                  faults, analog faults manifest as subtle deviations in
                  parameters like gain, offset, bandwidth, linearity, or noise
                  due to process variations, aging, and environmental effects.
                  Distinguishing between acceptable process-induced variations
                  and actual manufacturing defects becomes difficult, leading to
                  a high risk of either over-testing (false rejects) or
                  under-testing (test escapes). Additionally, analog circuit
                  behavior is highly dependent on operating conditions and
                  component interactions, making it challenging to define
                  compact, scalable fault models that accurately capture real
                  defect mechanisms while remaining computationally tractable
                  for large-scale production testing. In this challenge,
                  participants must define suitable fault modeling and
                  simulation techniques, taking the illustrations of IPs such as
                  PCIE PHY/USB PHY modules. Participants could also develop a
                  scalable fault grading methodology to calculate analog fault
                  coverage as defined in IEEE 2427 standard using available
                  commercial tools.
                </p>
              </div>
            </div>
          </div>

          {/* Evaluation Plan */}
          <div className="mb-16 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-6">
              Evaluation Plan
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Round-1: 100 points
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 text-lg">
                  <li>Problem Understanding & Motivation</li>
                  <li>Solution Methodology/Strategy Explanation</li>
                  <li>Experimental Validation Methodology</li>
                  <li>Overall presentation</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-white">Round-2</h3>
                <p className="text-gray-300 text-lg">
                  Technical depth, correctness, validation, and realism of the
                  proposed solution with simulation/modeling results.
                </p>
              </div>
            </div>
          </div>

          {/* Important Guidelines */}
          <div className="mb-16 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-6">
              Important Guidelines
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

            <div className="space-y-8 bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#6aaff1]">
                  Team Composition
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Participants must be from academic institutions ONLY.</li>
                  <li>
                    Maximum team size is 3 to 4 (including mentors from the
                    institute).
                  </li>
                  <li>One leader must be identified from each team.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#6aaff1]">
                  Hackathon Structure
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>The hackathon consists of two rounds.</li>
                  <li>The first round is a qualifier for the second round.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#6aaff1]">
                  Problem Statement Definition
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Each team must define a problem statement from any one of
                    the 4 given areas and submit a document suggesting their
                    initial line of thoughts and the exact problem formulation
                    in a single/double-page document (IEEE conference style
                    double-column) by the due date.
                  </li>
                  <li>
                    The ART committee shall provide constructive feedback on
                    this document so that the team members can proceed to
                    developing full-fledged solutions to their chosen problem
                    statements.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#6aaff1]">
                  Submission Process
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Uploading Submissions
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>
                        Team leads must upload their submissions by the
                        specified due dates on the provided links. Round-1
                        submissions must include a detailed report with maximum
                        12 pages (IEEE style double-column) and supporting
                        simulation files/tool run logs etc.
                      </li>
                      <li>
                        Ensure submissions are complete and adhere to the
                        guidelines provided.
                      </li>
                      <li>Submission to be made through EasyChair.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Team Coordination
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>
                        Maintain clear communication within the team to ensure
                        all tasks are completed on time.
                      </li>
                      <li>
                        Regularly check for updates or announcements related to
                        the hackathon on the website.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-none mb-6 text-center">
              Contact Information
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8 mx-auto items-center"></div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 mx-auto text-center w-fit">
              <p className="text-gray-300 mb-2">
                For any queries, please contact:
              </p>
              <a
                href="mailto:binod@iitj.ac.in"
                className="text-[#6aaff1] font-bold text-xl hover:underline"
              >
                binod@iitj.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
