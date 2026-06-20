import type { Metadata } from "next";
import AgendaSchedule from "@/components/agenda/AgendaSchedule";

export const metadata: Metadata = {
  title: "Program Agenda | IEEE ITC India 2026",
  description:
    "Conference program agenda for the 10th IEEE International Test Conference India 2026 — tutorials, keynotes, technical tracks, and exhibits.",
};

import PageHeader from "@/components/ui/PageHeader";

export default function AgendaPage() {
  return (
    <main className="relative min-h-screen font-poppins text-white selection:bg-white/20">
      <div className="relative z-10 mx-auto flex w-full max-w-none px-page flex-col pb-16 pt-[70px] md:pt-[130px]">
        <PageHeader />
        <AgendaSchedule />
      </div>
    </main>
  );
}
