import Image from "next/image";
import type { Metadata } from "next";
import AgendaSchedule from "@/components/agenda/AgendaSchedule";

export const metadata: Metadata = {
  title: "Program Agenda | ITC India 2026",
  description:
    "Conference program agenda for the 10th IEEE International Test Conference India 2026 — tutorials, keynotes, technical tracks, and exhibits.",
};

export default function AgendaPage() {
  return (
    <main className="relative min-h-screen font-poppins text-white selection:bg-white/20">
      <div className="relative z-10 mx-auto flex w-[85%] max-w-[1200px] flex-col pb-16 pt-[130px] sm:w-[90%] md:w-full md:px-10">
        <header className="mb-8 text-center">
          <div className="mb-4 flex flex-col items-center gap-3">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={64}
              height={64}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>
          <p className="text-sm font-semibold text-[#6aaff1] md:text-base">
            JULY 19–21, 2026 · RADISSON BLU, MARATHAHALLI, BENGALURU
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            PROGRAM AGENDA
          </h2>
        </header>

        <AgendaSchedule />
      </div>
    </main>
  );
}
