"use client";

import { useEffect } from "react";

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
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
                <p className="text-[#00b0f0] font-bold text-base sm:text-xl tracking-wide mb-5 sm:mb-6">
                  {data.affiliation}
                </p>
              )}
              <div className="h-[2px] w-16 sm:w-24 bg-[#00b0f0]/50 mb-5 sm:mb-6 rounded-full"></div>
              <p className="text-[#caddf0] font-bold text-[13px] sm:text-[15px] tracking-widest uppercase flex items-center gap-2 sm:gap-3">
                <svg className="w-6 h-6 text-[#00b0f0] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More details coming soon
              </p>
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
                        <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                          {/* Photo */}
                          {author.image && (
                            <div className="flex-shrink-0 mx-auto sm:mx-0 w-[140px] sm:w-[160px]">
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
                              <div className="text-[#a0b0c0] text-[14px] sm:text-[15px] leading-relaxed mb-4 text-justify space-y-3">
                                {author.bio.split("\n").map((p, i) => <p key={i}>{p}</p>)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Abstract */}
                  {data.abstract && (
                    <div className="text-[#caddf0] text-[14px] sm:text-[15px] leading-relaxed text-justify space-y-3 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <div className="text-white font-black text-lg mb-4 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00b0f0] shadow-[0_0_8px_#00b0f0]"></span>
                        Abstract
                      </div>
                      {data.abstract.split("\n").map((p, i) => p.trim() && <p key={i}>{p}</p>)}
                    </div>
                  )}
                </div>
              ) : (
                /* KEYNOTE / INDUSTRY SESSION MODE */
                <div className="flex flex-col w-full">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 mb-8 items-start">
                    {/* Photo */}
                    {data.image && (
                      <div className="flex-shrink-0 mx-auto sm:mx-0 w-[160px] sm:w-[240px] relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#00b0f0]/30 to-transparent rounded-2xl blur-lg opacity-50"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-[#00b0f0]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10 w-full bg-[#0b284e]">
                          <img
                            src={data.image}
                            alt={data.name}
                            className="w-full h-auto object-cover"
                          />
                        </div>
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
                        <p className="text-[#a0b0c0] text-[14px] sm:text-[16px] leading-relaxed text-justify">
                          {data.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  {data.bio && (
                    <div className="text-[#caddf0] text-[14px] sm:text-[16px] leading-relaxed text-justify space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 mt-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
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
