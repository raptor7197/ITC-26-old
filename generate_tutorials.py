import json

content = """import PageHeader from "@/components/ui/PageHeader";
import { tutorialsData as tutorials } from "@/lib/speakersData";

export default function Tutorials() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="TUTORIALS" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col mx-auto gap-16 px-[5%] md:px-8 mt-10">
        {tutorials.map((tutorial, idx) => (
          <div key={tutorial.id} className="relative flex flex-col w-full">
            {/* Tutorial Title & ID */}
            <div className="mb-8 text-center md:text-left">
              <span className="text-[#00b0f0] font-bold text-base sm:text-lg md:text-xl tracking-widest uppercase mb-2 block">
                Tutorial {idx + 1}
              </span>
              {tutorial.title ? (
                <h2 className="font-black text-3xl sm:text-4xl md:text-[42px] tracking-tight text-white drop-shadow-md leading-tight max-w-[1000px]">
                  {tutorial.title}
                </h2>
              ) : (
                <h2 className="font-black text-3xl sm:text-4xl md:text-[42px] tracking-tight text-white/50 drop-shadow-md leading-tight italic">
                  Title Pending
                </h2>
              )}
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
                        className="flex-shrink-0 mx-auto md:mx-0"
                        style={{ width: "clamp(150px, 22%, 220px)" }}
                      >
                        <img
                          src={author.image}
                          alt={author.name}
                          className="w-full h-auto shadow-md border-4 border-[#00b0f0]/10 rounded-md"
                        />
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
                          {author.bio.split("\\n").map((p, i) => (
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
              <div className="mt-2 bg-[#0b284e]/60 border border-[#00b0f0]/40 rounded-lg p-6 w-full flex flex-col items-center justify-center shadow-md backdrop-blur-sm shadow-[#00b0f0]/10">
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
              <div className="text-[#caddf0] text-[15px] sm:text-[16px] leading-relaxed text-justify space-y-3 bg-[#0b284e]/60 p-6 sm:p-8 rounded-lg border border-white/10 mt-2 shadow-md">
                <div className="text-white font-black text-lg mb-4 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00b0f0] shadow-[0_0_8px_#00b0f0]"></span>
                  Abstract
                </div>
                {tutorial.abstract
                  .split("\\n")
                  .map((p, i) => p.trim() && <p key={i}>{p}</p>)}
              </div>
            )}

            {/* Large Divider Between Tutorials */}
            <div className="w-full flex justify-center mt-16 opacity-30">
              <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#00b0f0] to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
"""

with open("app/tutorials/page.tsx", "w") as f:
    f.write(content)

print("Restored tutorials layout")
