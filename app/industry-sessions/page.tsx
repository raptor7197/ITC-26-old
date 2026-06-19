import { industrySpeakers as speakers } from "@/lib/speakersData";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";

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
                  {i === 0 && (
                    <span className="text-white font-bold mr-2">
                      Speaker Biography —
                    </span>
                  )}
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
