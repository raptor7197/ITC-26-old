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
      <div className="relative z-10 mx-auto flex w-full px-4 sm:px-8 md:px-10 max-w-[1200px] flex-col pb-16 pt-[130px]">
        <AgendaSchedule />
      </div>
    </main>
  );
}
