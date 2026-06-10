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
  }
];

export default function Keynote() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[40px] sm:pt-[60px] md:pt-[120px] pb-24 font-poppins text-white">
      {/* Page Title */}
      <section className="relative flex w-full flex-col items-center justify-center pt-8 md:pt-10 pb-12 md:pb-16">
        <h1 className="text-4xl md:text-[56px] font-bold tracking-tight text-white uppercase mb-6 text-center">
          KEYNOTE SPEAKERS
        </h1>
        <div className="w-[120px] h-[3px] bg-[#00b0f0]"></div>
      </section>

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