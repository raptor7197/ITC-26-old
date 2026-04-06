import Image from "next/image";
import Link from "next/link";


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

      {/* Decorative art: aligned to right guide, width capped so it stays in the lane */}
      <div
        className="pointer-events-none absolute top-[120px] right-[5%] z-0 hidden h-[600px] w-[min(40vw,26rem)] min-w-0 max-w-[calc(100%-11rem)] opacity-60 sm:right-[4%] md:right-[3%] lg:block lg:right-[2.5%] xl:right-[2.25%]"
        aria-hidden
      >
        <div className="relative h-full w-full min-w-0">
          <Image
            src="/images/fellowship-schematic.png"
            alt=""
            fill
            className="object-contain object-right-top"
          />
        </div>
      </div>

      <div
        className={`relative z-10 w-full min-w-0 max-w-full box-border pt-[150px] pb-20 ${guidePadding}`}
      >
        <div className="mx-auto flex w-full min-w-0 max-w-full flex-col [overflow-wrap:anywhere] lg:max-w-[1400px]">
          <div className="relative mb-20 min-w-0 max-w-4xl">
          <div className="mb-6">
            
            <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-4 md:gap-6 mb-6">
              <Image
                src="/itc-logo.svg"
                alt="ITC Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain md:hidden"
              />
            </div>
            <p className="text-sm md:text-base font-semibold text-[#6aaff1] uppercase tracking-wider mb-2">

              ITC India 2026 Presents
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase leading-tight">
              HACKATHON
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 uppercase leading-tight text-gray-100 max-w-3xl">
              Innovate. Create. Transform the Future of Semiconductor Testing
            </h2>
          </div>

          <div className="flex min-w-0 flex-col sm:flex-row gap-4 mb-12 items-center sm:items-start w-full">
            <Link href="https://forms.gle/Jsti3rgKSj5TLkgt7">
              <button className="bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] text-lg md:text-xl font-bold py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(106,175,241,0.3)] transition-all duration-300 uppercase tracking-wider">
                Register Now
              </button>
            </Link>
            <Link href="#details">
              <button className="bg-transparent hover:bg-white/10 text-white text-lg md:text-xl font-bold py-4 px-10 border-2 border-white/50 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 uppercase tracking-wider">
                Learn More
              </button>
            </Link>
          </div>

          <div className="min-w-0 bg-white/10 backdrop-blur-md p-6 pr-4 rounded-lg border border-white/20 shadow-xl">
            <div className="grid min-w-0 grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-gray-300 uppercase mb-1">Date</p>
                <p className="text-xl md:text-2xl font-bold text-[#6aaff1]">
                  July 19-21, 2026
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase mb-1">Location</p>
                <p className="text-xl md:text-2xl font-bold">
                  Bengaluru, India
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase mb-1">Duration</p>
                <p className="text-xl md:text-2xl font-bold">48 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full mb-16 hidden md:block">
          {/*<div className="absolute -left-6 right-[30%] top-0 border-t border-dashed border-white/30"></div>*/}
          {/*<div className="absolute right-[30%] top-0 w-20 h-20 border-t border-r border-dashed border-white/30 transform skew-x-45 origin-top-left"></div>*/}
        </div>

        <div id="details" className="mb-16 min-w-0 scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none mb-8">
            About the Hackathon
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

          <div className="min-w-0 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
              Join us for an electrifying 48-hour innovation marathon where
              brilliant minds converge to solve real-world challenges in
              semiconductor testing, design verification, and hardware
              validation. This hackathon is your opportunity to work alongside
              industry experts, leverage cutting-edge tools, and create
              solutions that could shape the future of the semiconductor
              industry.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              Whether you're a student, professional, or enthusiast, this is
              your chance to showcase your skills, learn from the best, and
              network with leaders in the test and verification domain.
            </p>
          </div>
        </div>

        <div className="mb-16 min-w-0">
          <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none mb-8">
            Hackathon Themes
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

          <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="min-w-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-[#6aaff1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,175,241,0.2)]">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                AI/ML in Testing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Develop intelligent solutions using machine learning for test
                pattern generation, fault diagnosis, and test optimization.
              </p>
            </div>

            <div className="min-w-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-[#6aaff1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,175,241,0.2)]">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Hardware Security
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Create innovative approaches to detect and prevent hardware
                trojans, side-channel attacks, and security vulnerabilities.
              </p>
            </div>

            <div className="min-w-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-[#6aaff1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,175,241,0.2)]">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Low-Power Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Build tools and methodologies for power-aware testing,
                energy-efficient test strategies, and power consumption
                analysis.
              </p>
            </div>

            <div className="min-w-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-[#6aaff1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,175,241,0.2)]">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                DFT Innovation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Design novel Design-for-Test architectures, built-in self-test
                mechanisms, and automated test insertion techniques.
              </p>
            </div>

            <div className="min-w-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-[#6aaff1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,175,241,0.2)]">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Test Data Analytics
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Develop visualization tools, predictive analytics, and big data
                solutions for test data management and analysis.
              </p>
            </div>

            <div className="min-w-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-[#6aaff1]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,175,241,0.2)]">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Open Innovation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Propose your own unique solution to any challenge in
                semiconductor testing, validation, or verification.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 min-w-0">
          {/*<h2 className="text-4xl md:text-5xl font-bold uppercase leading-none mb-8">
            Prizes & Recognition
          </h2>*/}
          <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

          <div className="grid min-w-0 grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Prize */}
            {/*<div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.3)] text-center">
              <div className="text-5xl mb-4">🥇</div>
              <h3 className="text-3xl font-bold mb-3 text-yellow-400">
                1st Place
              </h3>
              <p className="text-4xl font-bold mb-2">₹1,00,000</p>
              <p className="text-gray-300">+ Certificate + Mentorship</p>
            </div>*/}

            {/* Second Prize */}
            {/*<div className="bg-gradient-to-br from-gray-300/20 to-gray-400/10 backdrop-blur-sm p-8 rounded-lg border-2 border-gray-300 shadow-[0_0_20px_rgba(200,200,200,0.2)] text-center">
              <div className="text-5xl mb-4">🥈</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-300">
                2nd Place
              </h3>
              <p className="text-4xl font-bold mb-2">₹50,000</p>
              <p className="text-gray-300">+ Certificate + Mentorship</p>
            </div>*/}

            {/* Third Prize */}
            {/*<div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm p-8 rounded-lg border-2 border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.2)] text-center">
              <div className="text-5xl mb-4">🥉</div>
              <h3 className="text-3xl font-bold mb-3 text-orange-400">
                3rd Place
              </h3>
              <p className="text-4xl font-bold mb-2">₹25,000</p>
              <p className="text-gray-300">+ Certificate + Mentorship</p>
            </div>*/}
          </div>

          {/*<div className="mt-8 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <p className="text-center text-lg text-gray-200">
              <strong className="text-yellow-400">Special Prizes:</strong> Best
              Innovation Award, Best Student Team, Industry Choice Award, and
              more!
            </p>
          </div>*/}
        </div>

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mb-16">
          <div className="relative min-w-0">
            <div className="mb-6 pb-2 border-b border-white/30 w-fit">
              <h3 className="text-3xl md:text-4xl font-bold uppercase">
                Who Can Participate?
              </h3>
            </div>

            <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed">
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Students:</strong>{" "}
                  Undergraduate and graduate students from any discipline with
                  an interest in electronics, computer science, or
                  semiconductors.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Professionals:</strong>{" "}
                  Industry professionals, researchers, and engineers working in
                  semiconductor, VLSI, or related fields.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Enthusiasts:</strong> Anyone
                  passionate about hardware innovation and problem-solving.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Teams:</strong> Form teams of
                  2-4 members. Solo participation is also welcome!
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Open to All:</strong> No prior
                  hackathon experience required. Beginners are encouraged to
                  participate!
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="mb-6 pb-2 border-b border-white/30 w-fit">
              <h3 className="text-3xl md:text-4xl font-bold uppercase">
                What You Get
              </h3>
            </div>

            <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed">
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Expert Mentorship:</strong>{" "}
                  Guidance from industry leaders and academic experts throughout
                  the event.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Tools & Resources:</strong>{" "}
                  Access to premium EDA tools, cloud computing resources, and
                  development boards.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Networking:</strong> Connect
                  with peers, professionals, and potential employers from
                  leading semiconductor companies.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Food & Refreshments:</strong>{" "}
                  Meals, snacks, and beverages provided throughout the event.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Swag & Goodies:</strong> Event
                  merchandise, t-shirts, and sponsor swag for all participants.
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="shrink-0 text-[#6aaff1] font-bold text-xl">•</span>
                <p className="min-w-0">
                  <strong className="text-white">Certificates:</strong>{" "}
                  Participation certificates for all attendees and special
                  recognition for winners.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 min-w-0">
          <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none mb-8">
            Event Schedule
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6aaff1] to-transparent mb-8"></div>

          <div className="space-y-4 min-w-0">
            <div className="min-w-0 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-[#6aaff1]">
                Day 1 - July 19, 2026
              </h3>
              <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">09:00 AM</span>
                  <span className="min-w-0">Registration & Welcome</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">10:00 AM</span>
                  <span className="min-w-0">Opening Ceremony & Problem Statements</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">11:00 AM</span>
                  <span className="min-w-0">Hacking Begins!</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">01:00 PM</span>
                  <span className="min-w-0">Lunch Break</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">06:00 PM</span>
                  <span className="min-w-0">Mentor Check-in #1</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">08:00 PM</span>
                  <span className="min-w-0">Dinner & Networking</span>
                </div>
              </div>
            </div>

            <div className="min-w-0 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-[#6aaff1]">
                Day 2 - July 20, 2026
              </h3>
              <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">08:00 AM</span>
                  <span className="min-w-0">Breakfast</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">12:00 PM</span>
                  <span className="min-w-0">Mentor Check-in #2</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">01:00 PM</span>
                  <span className="min-w-0">Lunch Break</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">04:00 PM</span>
                  <span className="min-w-0">Workshop: Advanced EDA Tools</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">08:00 PM</span>
                  <span className="min-w-0">Dinner & Entertainment</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">11:00 PM</span>
                  <span className="min-w-0">Midnight Check-in</span>
                </div>
              </div>
            </div>

            <div className="min-w-0 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-[#6aaff1]">
                Day 3 - July 21, 2026
              </h3>
              <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">08:00 AM</span>
                  <span className="min-w-0">Breakfast</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">11:00 AM</span>
                  <span className="min-w-0">Code Freeze - Submissions Due</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">12:00 PM</span>
                  <span className="min-w-0">Lunch Break</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">02:00 PM</span>
                  <span className="min-w-0">Project Presentations</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">05:00 PM</span>
                  <span className="min-w-0">Judging & Deliberation</span>
                </div>
                <div className="flex min-w-0 gap-4">
                  <span className="shrink-0 text-gray-400 font-mono">06:30 PM</span>
                  <span className="min-w-0">Award Ceremony & Closing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="min-w-0 lg:col-span-2">
            <div className="min-w-0 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <h3 className="text-3xl font-bold mb-6 border-b border-white/20 pb-3">
                Rules & Guidelines
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    All team members must be registered participants of ITC
                    India 2026.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    Teams can consist of 1-4 members. Cross-institution teams
                    are allowed.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    All code and designs must be original work created during
                    the hackathon period.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    Use of existing libraries, frameworks, and APIs is
                    permitted, but must be documented.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    Projects will be judged on innovation, technical complexity,
                    practicality, and presentation.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    All submissions must include source code, documentation, and
                    a demo/presentation.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    Participants must follow the IEEE Code of Ethics and
                    maintain professional conduct.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    Organizers reserve the right to disqualify teams violating
                    rules or exhibiting misconduct.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">
                    The initial project proposal submission is limited to
                    2-pages and must be submitted by the due date. Feedback will
                    be provided to all the teams by the ART committee to help
                    complete the proposed research.
                  </span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <span className="shrink-0 text-[#6aaff1] mt-1">▸</span>
                  <span className="min-w-0">Submission to be made through EasyChair.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="min-w-0 space-y-6">
            <div className="min-w-0 bg-gradient-to-br from-[#6aaff1]/20 to-[#6aaff1]/10 backdrop-blur-sm p-6 rounded-lg border-2 border-[#6aaff1]/50 shadow-[0_0_25px_rgba(106,175,241,0.2)]">
              <h3 className="text-2xl font-bold mb-6 text-[#6aaff1] border-b border-[#6aaff1]/30 pb-3">
                Important Dates
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">
                    Registration Opens
                  </p>
                  <p className="text-xl font-bold">March 1, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">
                    Early Bird Deadline
                  </p>
                  <p className="text-xl font-bold">May 15, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">
                    Registration Closes
                  </p>
                  <p className="text-xl font-bold">July 10, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">
                    Hackathon Dates
                  </p>
                  <p className="text-xl font-bold text-[#6aaff1]">
                    July 19-21, 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <p className="min-w-0">
                  <span className="block text-xs uppercase text-gray-400 mb-1">
                    Email:
                  </span>
                  <a
                    href="mailto:hackathon@itctestweekindia.org"
                    className="text-[#6aaff1] hover:underline break-all"
                  >
                    hackathon@itctestweekindia.org
                  </a>
                </p>
                <p className="min-w-0">
                  <span className="block text-xs uppercase text-gray-400 mb-1">
                    Website:
                  </span>
                  <a
                    href="http://www.itctestweekindia.org"
                    className="break-all text-[#6aaff1] hover:underline"
                  >
                    www.itctestweekindia.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 bg-gradient-to-r from-[#6aaff1]/20 via-[#6aaff1]/10 to-transparent backdrop-blur-sm p-12 rounded-lg border border-[#6aaff1]/30 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
            Ready to Innovate?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of innovators in shaping the future of semiconductor
            testing. Register now and be part of this extraordinary event!
          </p>
          <Link href="/hackathon/register">
            <button className="bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] text-xl md:text-2xl font-bold py-5 px-14 rounded-lg shadow-[0_0_30px_rgba(106,175,241,0.4)] transition-all duration-300 uppercase tracking-wider">
              Register for Hackathon
            </button>
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}
