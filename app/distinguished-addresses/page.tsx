"use client";

import { useState } from "react";
import { distinguishedAddressesData, Speaker } from "@/lib/speakersData";
import Image from "next/image";

import PageHeader from "@/components/ui/PageHeader";

export default function DistinguishedAddresses() {
  const speakers: Speaker[] = distinguishedAddressesData;
  const [expandedSpeakers, setExpandedSpeakers] = useState<Record<string, boolean>>({});

  const toggleSpeaker = (id: string | number) => {
    setExpandedSpeakers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[70px] md:pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="DISTINGUISHED ADDRESSES" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-8 md:gap-12 px-page mt-4">
        {speakers.map((speaker, index) => {
          const isExpanded = expandedSpeakers[speaker.id];
          return (
          <div key={speaker.id} className="relative flex flex-col w-full">
            {speaker.comingSoon ? (
              <div className="w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
                <h2 className="font-black text-xl sm:text-2xl md:text-[42px] tracking-tight mb-1 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                  {speaker.name}
                </h2>
                {speaker.affiliation && (
                  <p className="text-[#00b0f0] font-bold text-sm sm:text-base md:text-[18px] tracking-wide mb-3 md:mb-4">
                    {speaker.affiliation}
                  </p>
                )}
                {speaker.title && (
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold uppercase mb-3 md:mb-4 text-white leading-snug tracking-wide drop-shadow-sm max-w-3xl">
                    {speaker.title}
                  </h3>
                )}
                <div className="h-[2px] w-12 sm:w-16 bg-[#00b0f0]/50 mb-4 md:mb-5 rounded-full"></div>
                <p className="text-[#caddf0] font-bold text-[12px] sm:text-[14px] md:text-base tracking-widest uppercase flex items-center gap-2 sm:gap-3">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b0f0] opacity-80"
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
              <div className="flex flex-col w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
                {/* TOP ROW: Photo + Info */}
                <div className="flex flex-col md:flex-row gap-5 sm:gap-8 md:gap-10 mb-2 md:mb-6 items-center">
                  {/* LEFT: Photo */}
                  {/* @ts-ignore */}
                  {speaker.image && (
                    <div
                      className="flex-shrink-0 mx-auto md:mx-0 relative w-[180px] sm:w-[240px] md:w-auto"
                      style={{
                        width: "clamp(180px, 33%, 320px)",
                      }}
                    >
                      <img
                        /* @ts-ignore */
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-auto object-cover relative z-10"
                      />
                    </div>
                  )}

                  {/* RIGHT: Content */}
                  <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left pt-1 md:pt-2 px-2 sm:px-6 md:px-0 w-full">
                    {/* Speaker Name */}
                    <h2 className="font-black text-2xl sm:text-3xl md:text-[42px] tracking-tight mb-1 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                      {speaker.name}
                    </h2>

                    {/* Affiliation */}
                    {speaker.affiliation && (
                      <p className="text-[#00b0f0] font-bold text-sm sm:text-base md:text-[18px] mb-2 md:mb-3 tracking-wide">
                        {speaker.affiliation}
                      </p>
                    )}

                    {/* Talk Title */}
                    {speaker.title && (
                      <h3 className="text-base sm:text-lg md:text-[20px] font-bold uppercase mb-2 md:mb-3 text-white leading-snug tracking-wide max-w-[850px] drop-shadow-sm">
                        {speaker.title}
                      </h3>
                    )}

                    {/* Divider */}
                    {/* @ts-ignore */}
                    {(speaker.title || speaker.description) && (
                      <div className="flex items-center w-full max-w-[850px] mt-2 mb-4 opacity-100">
                        <div className="h-[2px] flex-1 bg-[#00b0f0]" />
                        <div className="w-[8px] h-[8px] rounded-full bg-[#00b0f0] ml-[-2px]" />
                      </div>
                    )}

                    {/* EXPANDABLE CONTENT WRAPPER */}
                    <div className={`${isExpanded ? 'flex' : 'hidden'} md:flex flex-col w-full mt-2`}>
                      {/* Talk Description */}
                      {/* @ts-ignore */}
                      {speaker.description && (
                        <p className="text-[#a0b0c0] text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed mb-4 md:mb-6 text-justify max-w-[850px]">
                          {/* @ts-ignore */}
                          {speaker.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ROW: Bio text (Expandable) */}
                <div className={`${isExpanded ? 'block' : 'hidden'} md:block w-full`}>
                  {/* @ts-ignore */}
                  {speaker.bio && speaker.bio.length > 0 && (
                    <div className="text-[#caddf0] text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed text-justify space-y-3 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl border border-white/5 mt-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      {/* @ts-ignore */}
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
                </div>

                {/* READ MORE BUTTON (Mobile Only) */}
                {/* @ts-ignore */}
                {(!speaker.comingSoon && (speaker.description || speaker.bio)) && (
                  <div className="md:hidden w-full flex justify-center mt-6">
                    <button 
                      onClick={() => toggleSpeaker(speaker.id)}
                      className="flex items-center gap-2 px-6 py-2.5 border border-[#00b0f0]/50 bg-[#00b0f0]/10 rounded-lg text-[#00b0f0] font-bold tracking-wide hover:bg-[#00b0f0]/20 transition-colors"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                      <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          );
        })}
      </div>
    </main>
  );
}
