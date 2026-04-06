import Image from "next/image";

export default function CallForTutorials() {
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
            JUL 19-21, 2026 | BENGALURU, INDIA
          </p>
          <h2 className="text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white">
            CALL FOR TUTORIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Submission Guidelines
              </h3>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-200">
                <li>
                  A tutorial proposal needs to be submitted in template
                  available on ITC India website
                </li>
                <li>
                  Submission link:{" "}
                  <a
                    href="https://easychair.org/my/conference?conf=itcindia2026"
                    className="text-blue-300 hover:text-blue-100 underline break-all"
                  >
                    https://easychair.org/my/conference?conf=itcindia2026
                  </a>
                </li>
                <li>
                  <strong>The following details are mandatory:</strong>
                  <ul className="list-circle list-outside ml-5 mt-2 space-y-1">
                    <li>Tutorial title</li>
                    <li>Tutorial abstract</li>
                    <li>
                      Topics and subtopics to be covered, and the approximate
                      time devoted to each topic
                    </li>
                    <li>The targeted audience and prerequisites</li>
                    <li>
                      Preferred tutorial duration: 3 hours (for full tutorials)
                      or 1.5 hours (for short tutorials)
                    </li>
                    <li>Name, affiliation, bio of each author</li>
                  </ul>
                </li>
                <li>Proposals will undergo a panel review process</li>
                <li>
                  All presenters listed in the tutorial proposal must be
                  available for tutorial presentation
                </li>
                <li>
                  Consent should be obtained from all the presenters and all
                  organizations involved in presenting the material before
                  making the tutorial proposal
                </li>
                <li>
                  If proposal is accepted, final presentation must be shared by
                  final manuscript due date for review
                </li>
                <li>
                  Accepted tutorial abstracts will be published in conference
                  proceedings
                </li>
              </ul>
            </section>

            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Call for Submission
              </h3>
              <div className="space-y-4 text-gray-200 text-justify">
                <p>
                  International Test Conference is the world’s premier venue
                  dedicated to the electronic test of devices, boards and
                  systems—covering the complete cycle from design verification,
                  design-for-test, design-for-manufacturing, silicon debug,
                  manufacturing test, system test, diagnosis, reliability and
                  failure analysis, and back to process and design improvement.
                  At ITC India, design, test, and yield professionals can
                  confront challenges faced by the industry, and learn how these
                  challenges are being addressed by the combined efforts of
                  academia, design tool and equipment suppliers, designers, and
                  test engineers. This ITC India conference will be focusing on
                  Test development in India, but the submissions may not be
                  limited to topics related to this region. Topics related to
                  design and test development across multi geographical regions
                  will be of special interest.
                </p>
                <p>
                  Authors are invited to submit original, high quality,
                  practical and industry best practices as Tutorials describing
                  recent work in the field of test and design.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">
                Topics of Interest
              </h3>
              <p className="mb-4 text-gray-300 italic">
                Include (not limited to):
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-200 list-disc list-inside md:list-outside md:ml-4 text-center md:text-left">
                <li>3D/2.5D IC and Chiplet Testing</li>
                <li>Adaptive Test in Practice</li>
                <li>ATE/Probe Card Design</li>
                <li>Automotive Reliability and Testing</li>
                <li>Advances in Boundary Scan</li>
                <li>Silicon Bring Up</li>
                <li>Defect-Oriented Testing</li>
                <li>DFM and Test Diagnosis</li>
                <li>Economics of Test</li>
                <li>Embedded BIST & DFT</li>
                <li>Emerging Defect Mechanisms</li>
                <li>Hardware Security and Trust</li>
                <li>High-Speed Interface Testing</li>
                <li>IoT Testing</li>
                <li>Known-Good-Die testing</li>
                <li>Low-Power Testing Techniques</li>
                <li>Machine learning applications in DFT</li>
                <li>Memory Test and Repair</li>
                <li>MEMS Testing</li>
                <li>Mixed-Signal and Analog Test</li>
                <li>New Technologies and Test</li>
                <li>On-Chip Test Compression</li>
                <li>Online Test</li>
                <li>Pre- and Post- Silicon Validation</li>
                <li>Quantum Computing Hardware Testing</li>
                <li>Reliability and Resilience</li>
                <li>Scan Based Test</li>
                <li>Security and trust in DFT</li>
                <li>SoC/SiP/NoC Test</li>
                <li>Silicon Debug and diagnosis</li>
                <li>Jitter, RF Test</li>
                <li>Simulation and Test</li>
                <li>System Test</li>
                <li>Test-to-Design Feedback</li>
                <li>Test Data Analytics, Big Data in Testing</li>
                <li>Test Escape Analysis</li>
                <li>Test Flow Optimizations</li>
                <li>Test Generation and Validation</li>
                <li>Test Resource Partitioning</li>
                <li>Test Standards and best practices in DFT</li>
                <li>Test Time Analysis and Reduction</li>
                <li>Testing and Validation of AI Hardware</li>
                <li>Testing High Speed Optics/Photonics</li>
                <li>Yield Analysis and Optimization</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#1a4b7c] p-6 rounded-lg border border-[#6aaff1]/50 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-2">
                Important Dates
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-300 uppercase">
                    Tutorial submission deadline
                  </p>
                  <p className="text-lg font-semibold">15th April, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase">
                    Author notification
                  </p>
                  <p className="text-lg font-semibold">12th May, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase">
                    Final manuscript due
                  </p>
                  <p className="text-lg font-semibold">13th June, 2026</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://easychair.org/my/conference?conf=itcindia2026"
                  className="block w-full bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold text-center py-3 rounded transition-colors"
                >
                  SUBMIT TUTORIAL
                </a>
                <a
                  href="/ITC_India_2026_Tutorial_Proposal_Template.pdf"
                  download="ITC_India_2026_Tutorial_Proposal_Template.pdf"
                  className="block w-full bg-transparent border-2 border-[#6aaff1] hover:bg-[#6aaff1]/20 text-white font-bold text-center py-3 rounded transition-colors"
                >
                  DOWNLOAD IEEE TEMPLATE
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm text-sm text-gray-300">
              <h4 className="font-bold text-white mb-2">Need Help?</h4>
              <p className="mb-4">
                For detailed information about the submission process,
                requirements and deadlines, the selection process and any other
                questions regarding the program itself or contact information,
                please consult the ITC India web site or email us.
              </p>
              <div className="space-y-2">
                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Website:
                  </span>
                  <a
                    href="http://www.itctestweekindia.org"
                    className="text-blue-300 hover:underline"
                  >
                    www.itctestweekindia.org
                  </a>
                </p>
                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Program Chair Email:
                  </span>
                  <a
                    href="mailto:itc-india-tpc@googlegroups.com"
                    className="text-blue-300 hover:underline break-all"
                  >
                    itc-india-tpc@googlegroups.com
                  </a>
                </p>
                <p>
                  <span className="block text-xs uppercase text-gray-400">
                    Tutorial Chair Email:
                  </span>
                  <a
                    href="mailto:ITC-India-2026-Tutorials@easychair.org"
                    className="text-blue-300 hover:underline break-all"
                  >
                    ITC-India-2026-Tutorials@easychair.org
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <p className="font-semibold text-center italic">
                ITC India invites submissions on the latest advances in test,
                validation and diagnosis of ICs, boards and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
