import PageHeader from "@/components/ui/PageHeader";
import { fellowshipResults } from "@/lib/fellowshipResults";
import Link from "next/link";

export default function FellowshipResultsPage() {
  return (
    <main className="min-h-screen relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[95%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col">
        <PageHeader title="FELLOWSHIP RESULTS: ROUND 1" />

        <div className="bg-white/5 p-5 md:p-8 rounded-lg border border-white/10 backdrop-blur-sm mt-8">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/20 pb-4">
            <h3 className="text-2xl font-bold text-white">
              Selected Candidates
            </h3>
            <Link 
              href="/fellowship"
              className="text-[#6aaff1] hover:text-white transition-colors text-sm font-semibold flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Fellowship Page
            </Link>
          </div>


          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-left text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#061834] border-b border-white/20">
                  <th className="p-3 md:p-4 font-bold text-white whitespace-nowrap">Fellowship ID</th>
                  <th className="p-3 md:p-4 font-bold text-white">Name</th>
                  <th className="p-3 md:p-4 font-bold text-white">Institution</th>
                  <th className="p-3 md:p-4 font-bold text-white">City</th>
                  <th className="p-3 md:p-4 font-bold text-white">State</th>
                </tr>
              </thead>
              <tbody>
                {fellowshipResults.map((result, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b border-white/5 hover:bg-white/5 transition-colors ${idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}
                  >
                    <td className="p-3 md:p-4 text-[#6aaff1] font-semibold whitespace-nowrap">{result.id}</td>
                    <td className="p-3 md:p-4 text-gray-200">{result.name}</td>
                    <td className="p-3 md:p-4 text-gray-300">{result.institute}</td>
                    <td className="p-3 md:p-4 text-gray-400 capitalize">{result.city.toLowerCase()}</td>
                    <td className="p-3 md:p-4 text-gray-400 uppercase">{result.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
