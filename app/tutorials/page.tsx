import PageHeader from "@/components/ui/PageHeader";
import { tutorialsData as tutorials } from "@/lib/speakersData";

export default function Tutorials() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="TUTORIALS" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col mx-auto gap-16 px-[5%] md:px-8 mt-10">
        {tutorials.map((tutorial, idx) => (
          <div key={tutorial.id} className="relative flex flex-col w-full bg-[#0b284e]/60 border border-[#00b0f0]/40 rounded-xl p-8 md:p-12 shadow-lg backdrop-blur-sm shadow-[#00b0f0]/10 mb-4">
            {/* Tutorial Title & ID */}
            <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
              {tutorial.title ? (
                <h2 className="font-black text-3xl sm:text-4xl md:text-[42px] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md leading-tight max-w-[1000px]">
                  {tutorial.title}
                </h2>
              ) : (
                <h2 className="font-black text-3xl sm:text-4xl md:text-[42px] tracking-tight text-white/50 drop-shadow-md leading-tight italic">
                  Title Pending
                </h2>
              )}
              {/* Divider */}
              <div className="flex items-center w-full max-w-[600px] mt-6 opacity-80">
                <div className="w-[6px] h-[6px] rounded-full bg-[#00b0f0] mr-[-1px] z-10" />
                <div className="h-[2px] flex-1 bg-[#00b0f0]" />
              </div>
            </div>

            {/* Authors (Speakers) */}
            {tutorial.authors && tutorial.authors.length > 0 && (
              <div className="flex flex-col gap-10 mb-8">
                {tutorial.authors.map((author, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row gap-8 md:gap-10 items-start"
                  >
                    {/* Photo */}
                    {author.image && (
                      <div 
                        className="flex-shrink-0 mx-auto md:mx-0 relative mt-1"
                        style={{ width: "clamp(160px, 25%, 240px)" }}
                      >
                        {/* Glowing backdrop */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#00b0f0]/30 to-transparent rounded-2xl blur-lg opacity-50"></div>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden border border-[#00b0f0]/30 shadow-2xl bg-[#0b284e] z-10 w-full">
                          <div className="aspect-[4/5] w-full">
                            <img
                              src={author.image}
                              alt={author.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          {/* Subtle glass overlay at the bottom */}
                          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b284e] to-transparent opacity-40 pointer-events-none"></div>
                          {/* Inner shine */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none opacity-0"></div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left pt-1 h-full">
                      {/* Name */}
                      <h3 className="font-black text-2xl sm:text-3xl md:text-[32px] tracking-tight mb-2 text-white drop-shadow-md">
                        {author.name}
                      </h3>

                      {/* Affiliation */}
                      {author.affiliation && (
                        <p className="text-[#00b0f0] font-bold text-base sm:text-lg md:text-[18px] mb-4 tracking-wide">
                          {author.affiliation}
                        </p>
                      )}

                      {/* Bio text */}
                      {author.bio && (
                        <div className="text-[#a0b0c0] text-[15px] sm:text-[16px] leading-relaxed mb-6 text-justify max-w-[850px] space-y-3">
                          {author.bio.split("\n").map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Divider */}
                      <div className="flex items-center w-full mt-auto mb-1 opacity-80 max-w-[850px] pt-2">
                        <div className="h-[2px] flex-1 bg-[#00b0f0]" />
                        <div className="w-[6px] h-[6px] rounded-full bg-[#00b0f0] ml-[-1px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Abstract */}
            {tutorial.status === "pending" || !tutorial.abstract ? (
              <div className="mt-2 bg-black/20 border border-[#00b0f0]/30 rounded-lg p-6 w-full flex flex-col items-center justify-center shadow-md">
                <svg
                  className="w-8 h-8 text-[#00b0f0] mb-3 opacity-80"
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
                <p className="text-[#caddf0] font-bold text-lg tracking-widest uppercase">
                  More Details Coming Soon
                </p>
                <p className="text-[#a0b0c0] mt-2 text-sm text-center max-w-[500px]">
                  The full abstract and author details are pending and will be
                  updated shortly.
                </p>
              </div>
            ) : (
              <div className="text-[#caddf0] text-[15px] sm:text-[16px] leading-relaxed text-justify space-y-3 bg-black/20 p-6 sm:p-8 rounded-lg border border-white/5 mt-2 shadow-inner">
                <div className="text-white font-black text-lg mb-4 uppercase tracking-widest flex items-center gap-2">
                  Abstract
                </div>
                {tutorial.abstract
                  .split("\n")
                  .map((p, i) => p.trim() && <p key={i}>{p}</p>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
