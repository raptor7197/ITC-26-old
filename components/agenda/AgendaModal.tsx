"use client";

import { useEffect } from "react";
import Link from "next/link";

export type ModalData = {
  name?: string;
  affiliation?: string;
  title?: string;
  description?: string;
  bio?: string[] | string;
  image?: string;
  comingSoon?: boolean;
  abstract?: string; // for tutorials
  authors?: Array<{
    name: string;
    affiliation?: string;
    bio?: string;
    image?: string;
  }>;
};

export default function AgendaModal({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: ModalData | null;
}) {
  // Prevent scrolling on body and html when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center pt-[100px] sm:p-6 sm:pt-[100px] pointer-events-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity pointer-events-auto"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className="relative mx-auto mb-6 sm:mb-0 bg-[#071325] border-2 border-[#00b0f0]/30 rounded-[24px] shadow-[0_0_40px_rgba(0,176,240,0.2)] w-[82vw] sm:w-full max-w-[900px] flex flex-col overflow-hidden max-h-[85vh] sm:max-h-[80vh] pointer-events-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#152c4d 1px, transparent 1px), linear-gradient(90deg, #152c4d 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Header / Close Button */}
        <div className="sticky top-0 z-20 flex justify-end p-4 sm:p-6 pb-2 shrink-0 bg-gradient-to-b from-[#071325] via-[#071325]/90 to-transparent">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="relative z-10 flex-1 overflow-y-auto p-6 sm:p-8 pt-0 custom-scrollbar">
          {data.comingSoon ? (
            <div className="w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-lg">
              <h2 className="font-black text-2xl sm:text-4xl tracking-tight mb-2 md:mb-3 text-white">
                {data.name}
              </h2>
              {data.affiliation && (
                <p className="text-[#00b0f0] font-bold text-base sm:text-xl tracking-wide mb-4 sm:mb-5">
                  {data.affiliation}
                </p>
              )}
              {data.title && (
                <h3 className="text-sm sm:text-base md:text-[18px] font-bold uppercase mb-4 sm:mb-5 text-white leading-snug tracking-wide drop-shadow-sm max-w-3xl">
                  {data.title}
                </h3>
              )}
              <div className="h-[2px] w-16 sm:w-24 bg-[#00b0f0]/50 mb-5 sm:mb-6 rounded-full"></div>
              
              {data.name?.includes("Exhibit") ? (
                <Link href="/exhibits" className="group relative overflow-hidden bg-white/5 hover:bg-[#00b0f0]/20 border border-white/10 hover:border-[#00b0f0]/50 transition-all duration-300 rounded-xl px-6 py-4 flex items-center gap-4 cursor-pointer w-full max-w-md mx-auto">
                  <div className="bg-[#00b0f0]/20 p-2.5 rounded-lg text-[#00b0f0] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-[15px] group-hover:text-[#38bdf8] transition-colors">
                      Floor Map
                    </span>
                    <span className="text-[#a0b0c0] text-[13px]">
                      Click here to view venue layout and booths
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-[#00b0f0] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : data.name?.includes("Poster") ? (
                <Link href="/posters" className="group relative overflow-hidden bg-white/5 hover:bg-[#00b0f0]/20 border border-white/10 hover:border-[#00b0f0]/50 transition-all duration-300 rounded-xl px-6 py-4 flex items-center gap-4 cursor-pointer w-full max-w-md mx-auto">
                  <div className="bg-[#00b0f0]/20 p-2.5 rounded-lg text-[#00b0f0] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4v6h6" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-[15px] group-hover:text-[#38bdf8] transition-colors">
                      Explore Presentations
                    </span>
                    <span className="text-[#a0b0c0] text-[13px]">
                      Discover poster presenters and their topics
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-[#00b0f0] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <p className="text-[#caddf0] font-bold text-[13px] sm:text-[15px] tracking-widest uppercase flex items-center gap-2 sm:gap-3">
                  <svg className="w-6 h-6 text-[#00b0f0] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More details coming soon
                </p>
              )}
            </div>
          ) : (
            <>
              {/* TUTORIAL MODE */}
              {data.abstract !== undefined ? (
                <div className="flex flex-col w-full">
                  {/* Tutorial Title */}
                  <div className="mb-8 text-center md:text-left">
                    <h2 className="font-black text-2xl sm:text-4xl md:text-[42px] tracking-tight text-white leading-tight">
                      {data.title}
                    </h2>
                  </div>

                  {/* Authors */}
                  {data.authors && data.authors.length > 0 && (
                    <div className="flex flex-col gap-10 mb-8">
                      {data.authors.map((author, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
                          {/* Photo */}
                          {author.image && (
                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-[140px] sm:w-[160px] mt-2 sm:mt-4">
                              <img
                                src={author.image}
                                alt={author.name}
                                className="w-full h-auto shadow-md border-4 border-[#00b0f0]/10 rounded-md"
                              />
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex-1 flex flex-col justify-start items-center sm:items-start text-center sm:text-left pt-1">
                            <h3 className="font-black text-xl sm:text-3xl tracking-tight mb-1 text-white">
                              {author.name}
                            </h3>
                            {author.affiliation && (
                              <p className="text-[#00b0f0] font-bold text-sm sm:text-lg mb-4 tracking-wide">
                                {author.affiliation}
                              </p>
                            )}
                            {author.bio && (
                              <div className="text-[#a0b0c0] text-[15px] sm:text-[16px] leading-[1.8] mb-4 text-justify space-y-3">
                                {author.bio.split(/\n\s*\n/).map((p, i) => {
                                  const text = p.replace(/\n/g, ' ').trim();
                                  return text ? <p key={i}>{text}</p> : null;
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Abstract */}
                  {data.abstract && (
                    <div className="text-[#caddf0] text-[15px] sm:text-[16px] leading-[1.8] text-justify space-y-3 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <div className="text-white font-black text-lg mb-4 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00b0f0] shadow-[0_0_8px_#00b0f0]"></span>
                        Abstract
                      </div>
                      {data.abstract.split(/\n\s*\n/).map((p, i) => {
                        const text = p.replace(/\n/g, ' ').trim();
                        return text ? <p key={i}>{text}</p> : null;
                      })}
                    </div>
                  )}
                </div>
              ) : (
                /* KEYNOTE / INDUSTRY SESSION MODE */
                <div className="flex flex-col w-full">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 mb-8 items-center">
                    {/* Photo */}
                    {data.image && (
                      <div className="flex-shrink-0 mx-auto sm:mx-0 w-[160px] sm:w-[240px] relative mt-2 sm:mt-4">
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-start items-center sm:items-start text-center sm:text-left pt-1">
                      <h2 className="font-black text-2xl sm:text-4xl md:text-[42px] tracking-tight mb-1 text-white">
                        {data.name}
                      </h2>
                      {data.affiliation && (
                        <p className="text-[#00b0f0] font-bold text-base sm:text-xl mb-4 tracking-wide">
                          {data.affiliation}
                        </p>
                      )}
                      {data.title && (
                        <h3 className="text-sm sm:text-lg md:text-xl font-bold uppercase mb-4 text-white leading-snug tracking-wide">
                          {data.title}
                        </h3>
                      )}
                      {data.description && (
                        <p className="text-[#a0b0c0] text-[15px] sm:text-[16px] leading-[1.8] text-justify">
                          {data.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  {data.bio && (
                    <div className="text-[#caddf0] text-[15px] sm:text-[16px] leading-[1.8] text-justify space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 mt-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      {Array.isArray(data.bio) ? (
                        data.bio.map((paragraph, i) => (
                          <p key={i}>
                            {i === 0 && <span className="text-white font-bold mr-2">Speaker Biography —</span>}
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p>
                          <span className="text-white font-bold mr-2">Speaker Biography —</span>
                          {data.bio}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* CSS for custom scrollbar within modal */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 176, 240, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 176, 240, 0.6);
        }
      `}} />
    </div>
  );
}
