import { keynoteSpeakers as speakers } from "@/lib/speakersData";
import Image from "next/image";

import PageHeader from "@/components/ui/PageHeader";

export default function Keynote() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="KEYNOTE SPEAKERS" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-16 md:gap-24 px-page mt-4">
        {speakers.map((speaker, index) => (
          <div key={speaker.id} className="relative flex flex-col w-full">
            {speaker.comingSoon ? (
              <div className="w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 md:p-14 mb-8 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
                <h2 className="font-black text-2xl sm:text-3xl md:text-[52px] tracking-tight mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                  {speaker.name}
                </h2>
                {speaker.affiliation && (
                  <p className="text-[#00b0f0] font-bold text-base sm:text-lg md:text-[22px] tracking-wide mb-5 md:mb-6">
                    {speaker.affiliation}
                  </p>
                )}
                {speaker.title && (
                  <h3 className="text-lg sm:text-xl md:text-[24px] font-bold uppercase mb-5 md:mb-6 text-white leading-snug tracking-wide drop-shadow-sm max-w-3xl">
                    {speaker.title}
                  </h3>
                )}
                <div className="h-[2px] w-16 sm:w-24 bg-[#00b0f0]/50 mb-5 md:mb-6 rounded-full"></div>
                <p className="text-[#caddf0] font-bold text-[13px] sm:text-[15px] md:text-lg tracking-widest uppercase flex items-center gap-2 sm:gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b0f0] opacity-80"
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
                <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-14 mb-8 items-center md:items-start">
                  {/* LEFT: Photo */}
                  {speaker.image && (
                    <div
                      className="flex-shrink-0 mx-auto md:mx-0 relative w-[180px] sm:w-[240px] md:w-auto"
                      style={{
                        width: "clamp(180px, 33%, 320px)",
                      }}
                    >
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-auto object-cover relative z-10"
                      />
                    </div>
                  )}

                  {/* RIGHT: Content */}
                  <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left pt-2 md:pt-4 px-6 sm:px-8 md:px-0">
                    {/* Speaker Name */}
                    <h2 className="font-black text-3xl sm:text-4xl md:text-[52px] tracking-tight mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                      {speaker.name}
                    </h2>

                    {/* Affiliation */}
                    {speaker.affiliation && (
                      <p className="text-[#00b0f0] font-bold text-base sm:text-xl md:text-[22px] mb-4 md:mb-5 tracking-wide">
                        {speaker.affiliation}
                      </p>
                    )}

                    {/* Talk Title */}
                    {speaker.title && (
                      <h3 className="text-lg sm:text-xl md:text-[24px] font-bold uppercase mb-3 md:mb-4 text-white leading-snug tracking-wide max-w-[850px] drop-shadow-sm">
                        {speaker.title}
                      </h3>
                    )}

                    {/* Talk Description */}
                    {speaker.description && (
                      <p className="text-[#a0b0c0] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed mb-6 md:mb-8 text-justify max-w-[850px]">
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
                  <div className="text-[#caddf0] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-justify space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5 mt-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
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
