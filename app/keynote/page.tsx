import Image from "next/image";

const speakers = [
  {
    id: 1,
    name: "Subhasish Mitra",
    affiliation: "Stanford University",
    title: "Silent Data Corruption by 10× Test Escapes Threatens Reliable Computing",
    description: "In an era where computing underpins everything from cloud infrastructure and AI to autonomous systems, ensuring reliability has never been more critical. This keynote examines the growing threat of test escapes and silent data corruption, highlighting the limitations of conventional testing approaches and the need for next-generation strategies to safeguard trust in increasingly complex semiconductor systems.",
    bio: [
      "Subhasish Mitra is the William E. Ayer Endowed Chair Professor at Stanford University and a globally recognized leader in robust computing, system reliability, and electronic design automation. Over decades of pioneering research, his innovations in testing, validation, fault prediction, and resilience have shaped modern semiconductor systems and influenced technologies deployed across cloud, AI, and automotive platforms worldwide.",
      "His extensive work with academia, industry, and national semiconductor initiatives has provided him with unique insights into the reliability challenges facing next-generation computing systems, making him a leading voice on the future of trustworthy and resilient computing."
    ],
    image: "/images/keynote/Subhasish-Mitra.png",
  },
  {
    id: 2,
    name: "Senthilkumar Dhamodharan",
    affiliation: "Semiconductor Engineering Leader",
    title: "SI Complexity to AI Revolution: India’s Silicon Leap 2047",
    description: "As artificial intelligence redefines the semiconductor landscape, intelligent testing, validation, and manufacturing have become essential enablers of innovation. This keynote explores how AI-driven methodologies, digital twins, and ecosystem collaboration can accelerate India’s semiconductor journey and strengthen its position in the global technology value chain.",
    bio: [
      "Senthilkumar Dhamodharan is a semiconductor engineering leader with nearly two decades of experience in post-silicon validation and high-volume manufacturing testing across Digital, Mixed Signal, PMIC, and RF technologies. Having held leadership roles at Caliber Interconnect Solutions, Qualcomm, AMD, and NXP, he has developed deep expertise in semiconductor quality, reliability, and test engineering.",
      "His industry experience, combined with ongoing research in AI/ML applications for post-silicon validation, provides him with a unique perspective on how intelligent testing and AI-driven innovation can shape the future of the semiconductor industry."
    ],
    image: "/images/keynote/senthilkumar-photo.png",
  },

  {
    id: 5,
    name: "Jeff Rearick",
    affiliation: "AMD",
    title: "AI in Test: Fear It or Harness It",
    description: "Artificial Intelligence is rapidly transforming industries worldwide, creating both unprecedented opportunities and significant challenges. In the semiconductor test ecosystem, AI is reshaping how products are designed, validated, and tested, while simultaneously introducing new requirements for ensuring the reliability and trustworthiness of AI-driven systems. This keynote examines the evolving relationship between AI and test, highlighting how the test community plays a critical role in enabling the next generation of intelligent technologies.",
    bio: [
      "Jeff Rearick is a Senior Fellow at AMD, where he has led the DFX Strategy team for the past 19 years, following more than two decades at HP and Agilent Technologies developing advanced DFT and test methodologies. Over a career spanning four decades, he has helped shape the evolution of test, debug, and validation for increasingly complex semiconductor systems, contributing through technical leadership, standards development, numerous publications, and a portfolio of 50 patents.",
      "His work in anticipating future test challenges and driving innovations for next-generation products has given him unique insight into the disruptive impact of artificial intelligence on the semiconductor industry. As a leading contributor to the global test community, Jeff brings a forward-looking perspective on how AI is transforming test and how test, in turn, will be critical to realizing the full potential of AI."
    ],
    image: "/images/keynote/jeff_rearick_2024.png",
  },
  {
    id: 6,
    name: "Bizhan Delgoshaei",
    affiliation: "Google",
    title: "From Silent Patient to Self-Healing Silicon: The Four Evolutionary Stages of DFT in Mass Production",
    description: "As semiconductor devices grow in complexity and production volumes continue to scale, ensuring silicon quality and reliability has become increasingly challenging. This keynote explores the evolution of Design for Testability (DFT) from a traditional diagnostic tool into an intelligent, lifecycle-driven framework that enables improved yield, reliability, and manufacturing efficiency. By examining the four evolutionary stages of DFT, it highlights how modern test methodologies are shaping the future of autonomous and self-healing silicon.",
    bio: [
      "Bizhan Delgoshaei is Director of Custom Silicon Engineering Operations at Google, where he oversees Tensor manufacturing, test, and quality. Over more than two decades, he has led the successful ramp of advanced semiconductor products, including FPGAs, SoCs, memory, PMICs, and security devices: from development to high-volume production.",
      "Through leadership roles at Google, Apple, and Altera, he has gained deep expertise in silicon manufacturing, quality engineering, and operational excellence. His extensive industry experience provides him with valuable insights into the evolving role of Design for Testability (DFT) in enabling reliable, scalable, and increasingly intelligent semiconductor systems."
    ],
    image: "/images/keynote/bizhan_delgoshaei.png",
  },
];

import PageHeader from "@/components/ui/PageHeader";

export default function Keynote() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="KEYNOTE SPEAKERS" />

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