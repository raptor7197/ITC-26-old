import PageHeader from "@/components/ui/PageHeader";
import { industryShowcaseData } from "@/lib/speakersData";

export default function IndustryShowcase() {
  return (
    <main className="relative min-h-screen w-full font-poppins text-white box-border pt-[70px] md:pt-[120px] pb-24">
      <PageHeader title="INDUSTRY SHOWCASE" />
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-8 px-page mt-8">
        <div className="flex flex-col gap-6 w-full">
          {industryShowcaseData.map((showcase) => (
            <div key={showcase.id} className="w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
              <h2 className="font-black text-xl sm:text-2xl md:text-[36px] tracking-tight mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                {showcase.name}
              </h2>
              <div className="h-[2px] w-12 sm:w-16 bg-[#00b0f0]/50 mb-4 md:mb-5 rounded-full"></div>
              <p className="text-[#caddf0] font-bold text-[12px] sm:text-[14px] md:text-base tracking-widest uppercase flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b0f0] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
