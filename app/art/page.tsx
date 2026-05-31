import Image from "next/image";
import { AuthorActionButton } from "@/components/ui/AuthorActionButton";

export default function AcademiaResearchTrack() {
  return (
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[85%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-[#6aaff1]">
            JULY 19-21, 2026 | RADISSON BLU, MARATHAHALLI, BENGALURU
          </p>
          <h2 className="text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white">
            ACADEMIA RESEARCH TRACK
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="space-y-4 text-gray-200 text-justify">
                <p>
                  International Test Conference, the world’s premier venue
                  dedicated to the electronic test of devices, boards and
                  systems, will host a dedicated Academia Research Track (ART)
                  to manifest creative research ideas from students and young
                  academicians. The key objective of this academia track, first
                  time planned to be held with the International Test
                  Conference, is to provide a dedicated informal forum for
                  vigorous creative discussion and debate of this area from
                  researchers of various academic institutes. The aim is to
                  encourage the oral/poster presentation with discussion on
                  truly innovative and “out-of-the-box” ideas that may not yet
                  have been fully developed for presentation at reviewed
                  conferences to address these challenges.
                </p>
                <p>
                  Students and young academicians are invited to submit original
                  and high quality research work or innovative idea to this
                  track. Selected ideas will interact with dedicated panel from
                  industry to further extended the research work of common
                  interests. ART is a platform of presenting late-breaking
                  ideas, getting feedback on an innovative method, or
                  participating without having to write a full paper.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Submission Guidelines
              </h3>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-200">
                <li>
                  One or two topic(s) from the topic list, or a description of
                  your topic.
                </li>
                <li>An abstract of 100 words or less to be entered online.</li>
                <li>
                  An electronic copy of the paper up to 3 pages or an extended
                  summary up to 4 pages, double-columned in IEEE Format (Paper
                  template).
                </li>
                <li>
                  Your submission must include the problem statement and novelty
                  of solution(s). It should not include information that serves
                  to identify the authors of the manuscript, such as name(s) or
                  affiliation(s) of the author(s). References and bibliographic
                  citations to the author(s) own published works or affiliations
                  should be made in the third person.
                </li>
              </ul>
            </section>

            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Selection Criteria
              </h3>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-200">
                <li>
                  Abstracts will be selected based on the novelty of the work
                  and its relevance to the conference. The selected abstracts
                  would be later either categorized into poster presentation or
                  oral presentation, solely based on the merit.
                </li>
                <li>
                  Upon receiving the acceptance notification, the author will be
                  informed if the paper is classified as a regular full paper or
                  a poster.
                </li>
                <li>
                  If the submission got accepted under full paper category, it
                  will be considered for inclusion into IEEE Xplore subject to
                  meeting IEEE Xplore’s scope and quality requirements.
                </li>
              </ul>
            </section>

            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Additional Benefits
              </h3>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-200">
                <li>
                  Registration fee waiver and partial or full travel support
                  will be provided through fellowship.
                </li>
                <li>
                  Long term research plan with industry, if research interests
                  align.
                </li>
                <li>
                  High Impact Research award will be presented in conference
                  banquet.
                </li>
              </ul>
            </section>

            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Topics of Interest
              </h3>
              <p className="mb-4 text-gray-300 italic">
                Include (not limited to):
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-200 list-disc list-inside md:list-outside md:ml-4 text-center md:text-left">
                <li>RF, mm-Wave and THz Testing</li>
                <li>Embedded BIST & DFT</li>
                <li>3D/2.5D Test</li>
                <li>Emerging Defect Mechanisms</li>
                <li>Adaptive Test in Practice</li>
                <li>Hardware Security and Trust</li>
                <li>ATE/Probe Card Design</li>
                <li>Known-Good-Die testing</li>
                <li>Advances in Boundary Scan</li>
                <li>Memory Test and Repair</li>
                <li>Data Driven Methods</li>
                <li>MEMS Testing</li>
                <li>Data Exchange and Infrastructure</li>
                <li>Mixed-Signal and Analog Test</li>
                <li>Defect-Oriented Testing</li>
                <li>New Technologies and Test</li>
                <li>DFM and Test Diagnosis</li>
                <li>On-Chip Test Compression</li>
                <li>Economics of Test</li>
                <li>Online Test</li>
                <li>End-to-End Data Analysis</li>
                <li>Pre- and Post-Silicon Validation</li>
                <li>Bring Up</li>
                <li>System Test (Applications)</li>
                <li>Power Issues in Test</li>
                <li>System Test (Hardware/Software)</li>
                <li>Protocol-aware Test</li>
                <li>Test-to-Design Feedback</li>
                <li>Reliability and Resilience</li>
                <li>Test Escape Analysis</li>
                <li>Scan Based Test</li>
                <li>SoC/SiP/NoC Test</li>
                <li>Silicon Debug</li>
                <li>IoT Testing</li>
                <li>Simulation and Test</li>
                <li>Jitter, High-Speed I/O and RF Test</li>
                <li>Test Flow Optimizations</li>
                <li>Test Generation and Validation</li>
                <li>Test Resource Partitioning</li>
                <li>Test Standards</li>
                <li>Test Time Analysis and Reduction</li>
                <li>Testing High Speed Optics/Photonics</li>
                <li>Yield Analysis and Optimization</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#1a4b7c] p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg top-24">
              <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                Important Dates
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-300 uppercase">
                    Research Submission Deadline
                  </p>
                  <p className="text-lg font-semibold">7th June, 2026</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                Submit Research
              </h3>
              <p className="text-sm text-gray-200 mb-6">
                Share your innovative ideas and research with the community.
              </p>
              <div className="mt-4">
                <AuthorActionButton
                  closed={false}
                  href="https://easychair.org/conferences/?conf=itcindia2026"
                >
                  SUBMIT ACADEMIA RESEARCH TRACK
                </AuthorActionButton>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm text-sm text-gray-300">
              <h4 className="font-bold text-white mb-2">Need Help?</h4>
              <p className="mb-4">
                For questions regarding the program or submission process,
                please contact us.
              </p>
              <div className="space-y-2">
                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Website:
                  </span>
                  <a
                    href="https://itctestweekindia.org"
                    className="text-blue-300 hover:underline"
                  >
                    itctestweekindia.org
                  </a>
                </p>
                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Email:
                  </span>
                  <a
                    href="mailto:ITC-India-2026-TPC@easychair.org"
                    className="text-blue-300 hover:underline break-all"
                  >
                    ITC-India-2026-TPC@easychair.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
