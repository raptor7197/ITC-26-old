import { keynoteSpeakers as speakers } from "@/lib/speakersData";
import Image from "next/image";

import PageHeader from "@/components/ui/PageHeader";

export default function Keynote() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="KEYNOTE SPEAKERS" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-16 md:gap-24 px-[5%] md:px-8 mt-4">
        {speakers.map((speaker, index) => (
          <div key={speaker.id} className="relative flex flex-col w-full">
            {speaker.comingSoon ? (
              <div className="w-full bg-[#0b284e]/60 border border-[#00b0f0]/40 rounded-lg p-10 md:p-14 mb-8 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm shadow-[#00b0f0]/10">
                <h2 className="font-black text-4xl sm:text-5xl md:text-[52px] tracking-tight mb-2 text-white drop-shadow-md">
                  {speaker.name}
                </h2>
                {speaker.affiliation && (
                  <p className="text-[#00b0f0] font-bold text-lg sm:text-xl md:text-[22px] tracking-wide mb-6">
                    {speaker.affiliation}
                  </p>
                )}
                {speaker.title && (
                  <h3 className="text-xl sm:text-2xl font-bold uppercase mb-6 text-white leading-snug tracking-wide drop-shadow-sm max-w-3xl">
                    {speaker.title}
                  </h3>
                )}
                <div className="h-[2px] w-24 bg-[#00b0f0]/50 mb-6 rounded-full"></div>
                <p className="text-[#caddf0] font-bold text-lg tracking-widest uppercase flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#00b0f0] opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  More details coming soon
                </p>
              </div>
            ) : (
              <>
                {/* TOP ROW: Photo + Info */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-8 items-start">
                  {/* LEFT: Photo */}
                  {speaker.image && (
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
                  )}

                  {/* RIGHT: Content */}
                  <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left pt-1 md:pt-2">
                    {/* Speaker Name */}
                    <h2 className="font-black text-4xl sm:text-5xl md:text-[52px] tracking-tight mb-1 text-white drop-shadow-md">
                      {speaker.name}
                    </h2>

                    {/* Affiliation */}
                    {speaker.affiliation && (
                      <p className="text-[#00b0f0] font-bold text-lg sm:text-xl md:text-[22px] mb-5 tracking-wide">
                        {speaker.affiliation}
                      </p>
                    )}

                    {/* Talk Title */}
                    {speaker.title && (
                      <h3 className="text-lg sm:text-xl md:text-[22px] font-bold uppercase mb-4 text-white leading-snug tracking-wide max-w-[850px] drop-shadow-sm">
                        {speaker.title}
                      </h3>
                    )}

                    {/* Talk Description */}
                    {speaker.description && (
                      <p className="text-[#a0b0c0] text-[16px] sm:text-[18px] leading-relaxed mb-8 text-justify max-w-[850px]">
                        {speaker.description}
                      </p>
                    )}

                    {/* Divider */}
                    {(speaker.title || speaker.description) && (
                      <div className="flex items-center w-full mt-auto mb-2 opacity-100 max-w-[850px]">
                        <div className="h-[2px] flex-1 bg-[#00b0f0]" />
                        <div className="w-[8px] h-[8px] rounded-full bg-[#00b0f0] ml-[-2px]" />
                      </div>
                    )}
                  </div>
                </div>

                {/* BOTTOM ROW: Bio text */}
                {speaker.bio && speaker.bio.length > 0 && (
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
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
