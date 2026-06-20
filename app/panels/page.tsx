import PageHeader from "@/components/ui/PageHeader";
import { panelsData } from "@/lib/speakersData";

export default function Panels() {
  return (
    <main className="relative min-h-screen w-full font-poppins text-white box-border pt-[70px] md:pt-[120px] pb-24">
      <PageHeader title="PANELS" />
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-16 px-page mt-10">
        <div className="flex flex-col gap-8 w-full">
          {panelsData.map((panel) => (
            <div key={panel.id} className="w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 md:p-14 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
              <h2 className="font-black text-2xl sm:text-3xl md:text-[42px] tracking-tight mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                {panel.title}
              </h2>
              {panel.affiliation && (
                <p className="text-[#00b0f0] font-bold text-base sm:text-lg md:text-[22px] tracking-wide mb-5 md:mb-6">
                  {panel.affiliation}
                </p>
              )}
              <div className="h-[2px] w-16 sm:w-24 bg-[#00b0f0]/50 mb-5 md:mb-6 rounded-full"></div>
              <p className="text-[#caddf0] font-bold text-[13px] sm:text-[15px] md:text-lg tracking-widest uppercase flex items-center gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b0f0] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More details coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
