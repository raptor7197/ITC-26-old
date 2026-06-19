import PageHeader from "@/components/ui/PageHeader";
import { distinguishedAddressesData } from "@/lib/speakersData";

export default function DistinguishedAddresses() {
  return (
    <main className="relative min-h-screen w-full font-poppins text-white box-border pt-[120px] pb-24">
      <PageHeader title="DISTINGUISHED ADDRESSES" />
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 mt-16">
        <div className="flex flex-col gap-8 w-full">
          {distinguishedAddressesData.map((speaker) => (
            <div key={speaker.id} className="w-full bg-[#0b284e]/60 border border-[#00b0f0]/40 rounded-lg p-10 md:p-14 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm shadow-[#00b0f0]/10">
              <h2 className="font-black text-4xl sm:text-5xl md:text-[52px] tracking-tight mb-2 text-white drop-shadow-md">
                {speaker.name}
              </h2>
              {speaker.affiliation && (
                <p className="text-[#00b0f0] font-bold text-lg sm:text-xl md:text-[22px] tracking-wide mb-6">
                  {speaker.affiliation}
                </p>
              )}
              <div className="h-[2px] w-24 bg-[#00b0f0]/50 mb-6 rounded-full"></div>
              <p className="text-[#caddf0] font-bold text-lg tracking-widest uppercase flex items-center gap-3">
                <svg className="w-6 h-6 text-[#00b0f0] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
