import type { Metadata } from "next";
import AgendaSchedule from "@/components/agenda/AgendaSchedule";

export const metadata: Metadata = {
  title: "Program Agenda | ITC India 2026",
  description:
    "Conference program agenda for the 10th IEEE International Test Conference India 2026 — tutorials, keynotes, technical tracks, and exhibits.",
};

export default function AgendaPage() {
  return (
    <main className="relative min-h-screen w-full min-w-0 max-w-full overflow-x-hidden font-poppins text-white selection:bg-white/20">
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1200px] flex-col px-4 pb-16 pt-[120px] sm:px-6 sm:pt-[130px] lg:px-10 lg:pt-[150px]">
        <AgendaSchedule />
      </div>
    </main>
  );
}
