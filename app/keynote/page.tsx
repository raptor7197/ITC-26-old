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
    image: "/images/keynote/Subhasish-Mitra.jpg",
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
    image: "/images/keynote/senthilkumar-photo.jpg",
  }
];

export default function Keynote() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[160px] pb-24 px-6 font-poppins text-white">
      <div className="relative z-10 w-full max-w-[960px] flex flex-col mx-auto gap-20">
        
        {/* Page Title */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider text-white uppercase drop-shadow-lg font-space-grotesk">
            Keynote Speakers
          </h1>
          <div className="h-[3px] w-24 bg-[#00b0f0] mx-auto mt-6 rounded-full" />
        </div>

        {speakers.map((speaker, index) => (
          <div key={speaker.id} className="relative flex flex-col w-full">
            
            {/* TOP ROW: Photo + Info */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 items-stretch">
              
              {/* LEFT: Photo */}
              <div
                className="flex-shrink-0 mx-auto md:mx-0 bg-[#94a3b8]"
                style={{
                  position: "relative",
                  width: "clamp(260px, 33%, 320px)",
                  aspectRatio: "3/4",
                  clipPath: "polygon(40px 0%, 100% 0%, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0% 100%, 0% 40px)",
                }}
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* RIGHT: Content */}
              <div className="flex-1 flex flex-col justify-center pt-2">
                
                {/* KEYNOTE Badge */}
                <div className="mb-4 bg-[#00b0f0] w-fit px-4 py-1 rounded-[2px] shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
                  <span className="text-[#06182c] font-black text-sm md:text-base tracking-[0.08em] uppercase">
                    KEYNOTE {speaker.id}
                  </span>
                </div>

                {/* Speaker Name */}
                <h2
                  className="font-black text-4xl md:text-5xl lg:text-5xl tracking-tight mb-2 drop-shadow-lg text-white font-space-grotesk"
                >
                  {speaker.name}
                </h2>

                {/* Affiliation */}
                <p className="text-[#00b0f0] font-bold text-xl md:text-xl mb-6 tracking-wide drop-shadow-sm">
                  {speaker.affiliation}
                </p>

                {/* Talk Title */}
                <h3
                  className="font-bold text-xl md:text-2xl leading-[1.3] uppercase mb-4 max-w-[600px] drop-shadow-md text-[#f0f8ff] tracking-wide font-space-grotesk"
                >
                  {speaker.title}
                </h3>
                
                {/* Talk Description */}
                <p className="text-[#a8c9e7] text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[650px] font-medium text-justify">
                  {speaker.description}
                </p>

                {/* Divider */}
                <div className="flex items-center mb-2 w-full mt-auto">
                  <div className="h-[2px] flex-1 bg-[#00b0f0]" />
                  <div className="w-[10px] h-[10px] flex-shrink-0 rounded-full bg-[#00b0f0] ml-[-5px]" />
                </div>

              </div>
            </div>

            {/* BOTTOM ROW: Bio text */}
            <div className="text-[#caddf0] text-[15px] md:text-[17px] leading-relaxed text-justify space-y-5 bg-[#0b284e]/40 p-6 md:p-8 rounded-lg border border-white/5 shadow-inner">
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