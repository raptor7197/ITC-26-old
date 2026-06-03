import AgendaSchedule from "@/components/agenda/AgendaSchedule";

export const metadata = {
  title: "Conference Schedule | ITC India 2026",
  description: "Official conference schedule for ITC India 2026.",
};

export default function AgendaPage() {
  return (
    <main className="relative z-10 w-full overflow-x-hidden pt-[120px] pb-20">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="mb-12 text-center">
          <h1 className="font-sarpanch text-4xl font-black tracking-widest text-white sm:text-5xl md:text-[64px]">
            Conference Agenda
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-sky-100/80">
            A detailed overview of the ITC India 2026 conference sessions.
          </p>
        </div>

        <AgendaSchedule />
      </div>
    </main>
  );
}
