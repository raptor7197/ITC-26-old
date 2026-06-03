import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Keynote Speakers | ITC India 2026",
  description:
    "Keynote speakers for the 10th IEEE International Test Conference India 2026.",
};

const keynoteSpeakers = [
  {
    name: "Subhasish Mitra",
    image: "/images/subhasish-mitra.jpg",
    title:
      "Silent Data Corruption by 10× Test Escapes Threatens Reliable Computing",
    description:
      "In an era where computing underpins everything from cloud infrastructure and AI to autonomous systems, ensuring reliability has never been more critical. This keynote examines the growing threat of test escapes and silent data corruption, highlighting the limitations of conventional testing approaches and the need for next-generation strategies to safeguard trust in increasingly complex semiconductor systems.",
    bio: `Subhasish Mitra is the William E. Ayer Endowed Chair Professor at Stanford University and a globally recognized leader in robust computing, system reliability, and electronic design automation. Over decades of pioneering research, his innovations in testing, validation, fault prediction, and resilience have shaped modern semiconductor systems and influenced technologies deployed across cloud, AI, and automotive platforms worldwide. His extensive work with academia, industry, and national semiconductor initiatives has provided him with unique insights into the reliability challenges facing next-generation computing systems, making him a leading voice on the future of trustworthy and resilient computing.`,
  },
  {
    name: "Senthilkumar Dhamodharan",
    image: "/images/senthilkumar.jpg",
    title:
      "SI Complexity to AI Revolution: India’s Silicon Leap 2047",
    description:
      "As artificial intelligence redefines the semiconductor landscape, intelligent testing, validation, and manufacturing have become essential enablers of innovation. This keynote explores how AI-driven methodologies, digital twins, and ecosystem collaboration can accelerate India’s semiconductor journey and strengthen its position in the global technology value chain.",
    bio: `Senthilkumar Dhamodharan is a semiconductor engineering leader with nearly two decades of experience in post-silicon validation and high-volume manufacturing testing across Digital, Mixed Signal, PMIC, and RF technologies. Having held leadership roles at Caliber Interconnect Solutions, Qualcomm, AMD, and NXP, he has developed deep expertise in semiconductor quality, reliability, and test engineering. His industry experience, combined with ongoing research in AI/ML applications for post-silicon validation, provides him with a unique perspective on how intelligent testing and AI-driven innovation can shape the future of the semiconductor industry.`,
  },
];

export default function KeynotePage() {
  return (
    <main className="relative min-h-screen font-poppins text-white selection:bg-white/20">
      <div className="relative z-10 mx-auto flex w-[85%] max-w-[1200px] flex-col pb-16 pt-[130px] sm:w-[90%] md:w-full md:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            ITC INDIA 2026
          </p>

          <h1 className="font-space-grotesk text-4xl font-bold md:text-5xl">
            Keynote Speakers
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-24 bg-white/30" />
        </div>

        {/* Speakers */}
        <div className="flex flex-col gap-10">
          {keynoteSpeakers.map((speaker) => (
            <section
              key={speaker.name}
              className="overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.05] shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md transition-all duration-300 hover:border-white/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 p-8 md:p-10">
                {/* LEFT - IMAGE */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-2">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={280}
                      height={340}
                      className="rounded-[20px] object-cover"
                    />
                  </div>

                  <h2 className="mt-5 text-center font-space-grotesk text-2xl font-bold">
                    {speaker.name}
                  </h2>

                  <div className="mt-3 h-[1px] w-20 bg-white/20" />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Keynote Address
                    </p>

                    <h3 className="font-roboto-slab text-2xl leading-relaxed text-white">
                      {speaker.title}
                    </h3>
                  </div>

                  <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h4 className="mb-3 text-lg font-semibold text-cyan-200">
                      Keynote Description
                    </h4>

                    <p className="leading-8 text-white/80">
                      {speaker.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h4 className="mb-3 text-lg font-semibold text-cyan-200">
                      Speaker Biography
                    </h4>

                    <p className="leading-8 text-white/80">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}