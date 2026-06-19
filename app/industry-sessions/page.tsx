import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";

const speakers = [
  {
    id: 1,
    name: "Nithin Gopinath",
    affiliation: "Texas Instruments",
    title: "Built-in Intelligence in Analog-to-Digital Convertors",
    description: "As modern semiconductor systems demand higher speeds, greater integration, and lower power consumption, ensuring consistent analog performance has become increasingly challenging. This keynote explores the evolution of high-speed ADC testing, from traditional trimming techniques to intelligent digital-assisted correction and real-time background calibration. It highlights how built-in intelligence is transforming analog design and test methodologies, enabling improved performance, reduced test costs, and greater resilience to process, voltage, and temperature variations.",
    bio: [
      "Nithin Gopinath is a Senior Member Technical Staff at Texas Instruments, where he has spent over 15 years advancing high-speed data converter technologies. His work in architecting, validating, and optimizing state-of-the-art ADC solutions has contributed to innovations in calibration techniques, performance optimization, and test efficiency across demanding applications including wireless communications, aerospace, defense, and instrumentation.",
      "As Post-Silicon Validation & Test Manager for the High-Speed ADC group, Nithin has developed deep expertise in addressing the challenges of analog performance variability, test cost, and design complexity. His extensive experience with high-speed pipelined ADCs, sigma-delta ADCs, and intelligent calibration methodologies provides him with unique insights into the growing role of built-in intelligence in enabling robust, high-performance analog systems."
    ],
    image: "/images/keynote/nithin_Gopinath.png",
  },
  {
    id: 2,
    name: "Nikhil",
    affiliation: "Marvell",
    title: "System Level Test at Hyperscale: Transforming DFT for Data Infrastructure",
    description: "The rise of AI-driven data infrastructure is redefining the demands placed on modern semiconductor systems. As designs evolve from monolithic SoCs to heterogeneous, chiplet-based architectures featuring advanced packaging, high-bandwidth interfaces, and memory-centric computing, traditional Design-for-Test (DFT) approaches are no longer sufficient. This keynote explores how hyperscale workloads and platform-level integration are driving a shift toward system-level test strategies, highlighting the need for hierarchical, package-aware, and data-driven methodologies to ensure quality, reliability, and scalability in next-generation AI infrastructure.",
    bio: [
      "Nikhil is an engineering leader with over two decades of experience in semiconductor design and test, currently serving as Director of Engineering at Marvell, where he leads Design-for-Test initiatives for custom silicon powering next-generation AI infrastructure in hyperscale data centers. Throughout his career at Marvell, Intel, and Qualcomm, he has played a pivotal role in delivering complex SoCs across client, server, mobile, IoT, and automotive markets.",
      "His expertise spans the entire silicon lifecycle, from DFT architecture and verification to post-silicon validation, test development, and ATE bring-up. With deep experience in advanced test methodologies, multi-die systems, and high-performance computing platforms, Nikhil brings valuable insights into how Design-for-Test is evolving to address the challenges of hyperscale AI infrastructure and system-level integration."
    ],
    image: "/images/keynote/nikhil.png",
  }
];

export default function IndustrySessions() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="INDUSTRY SESSIONS" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-16 md:gap-24 px-[5%] md:px-8 mt-4">

        {speakers.map((speaker, index) => (
          <div key={speaker.id} className="relative flex flex-col w-full">

            {/* TOP ROW: Photo + Info */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-8 items-start">

              {/* LEFT: Photo */}
              <div
                className="flex-shrink-0 mx-auto md:mx-0"
                style={{
                  width: "clamp(260px, 33%, 320px)",
                }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-auto"
                />
              </div>

              {/* RIGHT: Content */}
              <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left pt-1 md:pt-2">

                {/* Speaker Name */}
                <h2 className="font-black text-4xl sm:text-5xl md:text-[52px] tracking-tight mb-1 text-white drop-shadow-md">
                  {speaker.name}
                </h2>

                {/* Affiliation */}
                <p className="text-[#00b0f0] font-bold text-lg sm:text-xl md:text-[22px] mb-5 tracking-wide">
                  {speaker.affiliation}
                </p>

                {/* Talk Title */}
                <h3 className="text-lg sm:text-xl md:text-[22px] font-bold uppercase mb-4 text-white leading-snug tracking-wide max-w-[850px] drop-shadow-sm">
                  {speaker.title}
                </h3>

                {/* Talk Description */}
                <p className="text-[#a0b0c0] text-[16px] sm:text-[18px] leading-relaxed mb-8 text-justify max-w-[850px]">
                  {speaker.description}
                </p>

                {/* Divider */}
                <div className="flex items-center w-full mt-auto mb-2 opacity-100 max-w-[850px]">
                  <div className="h-[2px] flex-1 bg-[#00b0f0]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#00b0f0] ml-[-2px]" />
                </div>
              </div>
            </div>

            {/* BOTTOM ROW: Bio text */}
            <div className="text-[#caddf0] text-[16px] sm:text-[18px] leading-relaxed text-justify space-y-4 bg-[#0b284e]/60 p-6 sm:p-8 md:p-10 rounded-lg border border-white/10 mt-2">
              {speaker.bio.map((paragraph, i) => (
                <p key={i}>
                  {i === 0 && <span className="text-white font-bold mr-2">Speaker Biography —</span>}
                  {paragraph}
                </p>
              ))}
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}
