import PageHeader from "@/components/ui/PageHeader";
import { panelsData } from "@/lib/speakersData";

export default function Panels() {
  return (
    <main className="relative min-h-screen w-full font-poppins text-white box-border pt-[70px] md:pt-[120px] pb-24">
      <PageHeader title="PANELS" />
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-16 px-page mt-10">
        <div className="flex flex-col gap-8 w-full">
          {panelsData.map((panel) => (
            <div key={panel.id} className="w-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
              <h2 className="font-black text-xl sm:text-2xl md:text-[36px] tracking-tight mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-sky-200 drop-shadow-md">
                {panel.title}
              </h2>
              {panel.affiliation && (
                <p className="text-[#00b0f0] font-bold text-sm sm:text-base md:text-[18px] tracking-wide mb-4 md:mb-5">
                  {panel.affiliation}
                </p>
              )}
              <div className="h-[2px] w-12 sm:w-16 bg-[#00b0f0]/50 mb-4 md:mb-5 rounded-full"></div>
              {panel.panelists ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full">
                  {panel.panelists.map((panelist: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center gap-4 group">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#00b0f0]/50 transition-colors bg-white/5 flex items-center justify-center">
                        {panelist.image ? (
                          <img 
                            src={panelist.image} 
                            alt={panelist.name} 
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <span className="text-3xl sm:text-4xl text-white/30 font-light">
                            {panelist.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="text-center">
                        <p className="text-white font-semibold text-sm sm:text-base">
                          {panelist.name}
                        </p>
                        {panelist.affiliation && (
                          <p className="text-white/60 text-xs sm:text-sm mt-1">
                            {panelist.affiliation}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (

              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
