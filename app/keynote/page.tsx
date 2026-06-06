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
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[40px] sm:pt-[60px] md:pt-[160px] pb-24 font-poppins text-white">
      {/* Page Title (Matching Testimonials) */}
      <section className="relative mt-0 flex w-full flex-col items-stretch pb-3 pt-6 sm:mt-0 sm:pb-4 sm:pt-3 md:pb-5 md:pt-4 lg:pb-6 lg:pt-5 px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]">
        <div className="max-[640px]:hidden absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
          <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
            <Image
              src="/images/vector11.svg"
              alt="Separator"
              fill
              className="object-fill"
            />
          </div>
        </div>

        <h1 className="font-angkor z-30 text-center text-white max-[639px]:angkor-heading-gutter max-[639px]:relative max-[639px]:-mt-4 max-[639px]:mb-4 max-[639px]:pt-0 sm:absolute sm:top-0 sm:left-[4%] sm:right-[4%] sm:mt-0 sm:mb-0 sm:pt-0 md:left-[3%] md:right-[3%] lg:left-[2.5%] lg:right-[2.5%] xl:left-[2.25%] xl:right-[2.25%] sm:flex sm:h-[80px] sm:items-center sm:justify-center sm:pl-[49.2%] sm:pr-4 md:pr-5 lg:pr-6 sm:translate-y-2.5 md:h-[100px] lg:h-[110px] xl:h-[123px]">
          <span className="angkor-title-pocket flex min-h-0 w-full min-w-0 max-w-full flex-1 items-center justify-center">
            <span className="angkor-section-title keynote-zigzag-title whitespace-nowrap">
              KEYNOTE SPEAKERS
            </span>
          </span>
        </h1>

        <div
          className="hidden shrink-0 sm:block sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px]"
          aria-hidden
        />
      </section>

      <div className="relative z-10 w-full max-w-none md:max-w-[85%] lg:max-w-[80%] flex flex-col mx-auto gap-12 md:gap-20 px-[5%] md:px-6 mt-8 md:mt-12">

        {speakers.map((speaker, index) => (
          <div key={speaker.id} className="relative flex flex-col w-full">

            {/* TOP ROW: Photo + Info */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 items-stretch">

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
              <div className="flex-1 flex flex-col justify-center pt-2 items-center md:items-start text-center md:text-left">

                {/* KEYNOTE Badge */}
                <div className="mb-4 bg-[#00b0f0] w-fit px-4 py-1 rounded-[2px] shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
                  <span className="text-[#06182c] font-black font-angkor text-lg md:text-xl tracking-[0.08em] uppercase">
                    {speaker.id}
                  </span>
                </div>

                {/* Speaker Name */}
                <h2
                  className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] tracking-tight mb-2 drop-shadow-lg text-white font-space-grotesk"
                >
                  {speaker.name}
                </h2>

                {/* Affiliation */}
                <p className="text-[#00b0f0] font-bold text-xl sm:text-2xl md:text-3xl mb-6 tracking-wide drop-shadow-sm">
                  {speaker.affiliation}
                </p>

                {/* Talk Title */}
                <h3
                  className="font-angkor text-2xl sm:text-3xl md:text-4xl leading-[1.2] uppercase mb-4 max-w-[800px] drop-shadow-md text-[#f0f8ff] tracking-tight"
                >
                  {speaker.title}
                </h3>

                {/* Removed Talk Description from here */}

                {/* Divider */}
                <div className="flex items-center mb-2 w-full mt-auto opacity-50 md:opacity-100">
                  <div className="h-[2px] flex-1 bg-[#00b0f0]" />
                  <div className="w-[10px] h-[10px] flex-shrink-0 rounded-full bg-[#00b0f0] ml-[-5px]" />
                </div>

              </div>
            </div>

            {/* BOTTOM ROW: Bio text */}
            <div className="text-[#caddf0] text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed text-justify space-y-4 sm:space-y-5 bg-[#0b284e]/40 p-6 sm:p-8 md:p-10 rounded-lg border border-white/5 shadow-inner mt-4">
              <p>
                <span className="text-white font-bold mr-2">Talk Description —</span>
                {speaker.description}
              </p>
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