"use client";

import { useState } from "react";
import type {
  AgendaDay,
  AgendaSlot,
  AgendaSlotVariant,
  ParallelSession,
} from "@/lib/agendaData";
import { agendaDays } from "@/lib/agendaData";

type Tone = {
  ring: string;
  bg: string;
  glow: string;
  title: string;
};

const variantCard: Record<
  AgendaSlotVariant,
  { ring: string; badge: string; glow: string; bg: string }
> = {
  registration: {
    ring: "border-sky-200/65",
    badge: "bg-sky-200/30 text-sky-50",
    glow: "shadow-[0_0_14px_rgba(56,189,248,0.18)]",
    bg: "bg-transparent",
  },
  break: {
    ring: "border-lime-200/58",
    badge: "bg-lime-200/30 text-lime-50",
    glow: "shadow-[0_0_10px_rgba(190,242,100,0.14)]",
    bg: "bg-transparent",
  },
  lunch: {
    ring: "border-lime-200/58",
    badge: "bg-lime-200/30 text-lime-50",
    glow: "shadow-[0_0_10px_rgba(190,242,100,0.14)]",
    bg: "bg-transparent",
  },
  keynote: {
    ring: "border-yellow-200/72",
    badge: "bg-yellow-200/35 text-yellow-50",
    glow: "shadow-[0_0_16px_rgba(250,204,21,0.2)]",
    bg: "bg-transparent",
  },
  plenary: {
    ring: "border-emerald-200/62",
    badge: "bg-emerald-200/30 text-emerald-50",
    glow: "shadow-[0_0_14px_rgba(110,231,183,0.18)]",
    bg: "bg-transparent",
  },
  parallel: {
    ring: "border-emerald-200/54",
    badge: "bg-emerald-200/26 text-emerald-50",
    glow: "shadow-[0_0_12px_rgba(110,231,183,0.16)]",
    bg: "bg-transparent",
  },
  special: {
    ring: "border-orange-200/66",
    badge: "bg-orange-200/35 text-orange-50",
    glow: "shadow-[0_0_15px_rgba(251,146,60,0.18)]",
    bg: "bg-transparent",
  },
  evening: {
    ring: "border-amber-100/54",
    badge: "bg-amber-100/25 text-amber-50",
    glow: "shadow-[0_0_13px_rgba(252,211,77,0.15)]",
    bg: "bg-transparent",
  },
  none: {
    ring: "border-slate-200/32",
    badge: "bg-slate-100/20 text-slate-100",
    glow: "shadow-[0_0_8px_rgba(226,232,240,0.1)]",
    bg: "bg-transparent",
  },
};

const sessionTones = {
  tutorial: {
    ring: "border-orange-300/58",
    bg: "bg-[#022241]/70",
    glow: "shadow-[0_0_12px_rgba(251,146,60,0.16)]",
    title: "text-orange-50",
  },
  keynote: {
    ring: "border-yellow-300/62",
    bg: "bg-[#022241]/70",
    glow: "shadow-[0_0_16px_rgba(253,224,71,0.18)]",
    title: "text-yellow-50",
  },
  technical: {
    ring: "border-lime-300/58",
    bg: "bg-[#022241]/70",
    glow: "shadow-[0_0_12px_rgba(190,242,100,0.16)]",
    title: "text-lime-50",
  },
  academia: {
    ring: "border-amber-300/58",
    bg: "bg-[#022241]/70",
    glow: "shadow-[0_0_12px_rgba(252,211,77,0.16)]",
    title: "text-amber-50",
  },
  poster: {
    ring: "border-emerald-300/62",
    bg: "bg-[#022241]/70",
    glow: "shadow-[0_0_12px_rgba(110,231,183,0.16)]",
    title: "text-emerald-50",
  },
  plenary: {
    ring: "border-sky-300/58",
    bg: "bg-[#022241]/70",
    glow: "shadow-[0_0_12px_rgba(125,211,252,0.16)]",
    title: "text-sky-50",
  },
} as const satisfies Record<string, Tone>;

function toneForSessionTitle(title: string): Tone {
  const t = title.toLowerCase();
  if (t.includes("tutorial")) return sessionTones.tutorial;
  if (t.includes("keynote")) return sessionTones.keynote;
  if (
    t.includes("technical track") ||
    t.includes("paper session") ||
    t.includes("industry session") ||
    t.includes("special session") ||
    t.includes("other events")
  ) {
    return sessionTones.technical;
  }
  if (t.includes("academia research") || t.includes("art")) {
    return sessionTones.academia;
  }
  if (t.includes("poster")) return sessionTones.poster;
  return sessionTones.plenary;
}

function toneForSingleEvent(title: string, variant: AgendaSlotVariant): Tone | null {
  const t = title.toLowerCase();
  if (t.includes("keynote")) return sessionTones.keynote;
  if (t.includes("conference inauguration")) return sessionTones.technical;
  if (t.includes("poster")) return sessionTones.poster;
  if (variant === "plenary") return sessionTones.plenary;
  return null;
}

function TimeBadge({ time, className = "" }: { time: string; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.04em] ${className}`}
    >
      {time}
    </span>
  );
}

function isNoActivity(title: string) {
  return title.toLowerCase().includes("no activity planned");
}

function VenuePinIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 text-[#6aaff1] ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function VenueLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <VenuePinIcon />
      <span>{children}</span>
    </span>
  );
}

function VenueCard({ session }: { session: ParallelSession }) {
  const tone = toneForSessionTitle(session.title);

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-xl border bg-gradient-to-b from-[#0a4278]/88 via-[#083a6b]/86 to-[#032a4f]/90 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/40 ${tone.ring} ${tone.glow} shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.25)]`}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.08] to-transparent"
        aria-hidden
      />
      <VenueLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-200/80">
        {session.hall}
      </VenueLabel>
      <h4 className={`mt-1.5 text-sm font-bold leading-snug ${tone.title}`}>
        {session.title}
      </h4>
      {session.items && session.items.length > 0 && (
        <ul className="mt-2.5 space-y-1.5 border-t border-white/10 pt-2.5">
          {session.items.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-xs leading-relaxed text-gray-300"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#6aaff1]/80" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function EventCard({
  time,
  variant = "plenary",
  label,
  children,
}: {
  time: string;
  variant?: AgendaSlotVariant;
  label?: string;
  children: React.ReactNode;
}) {
  const v = variantCard[variant];

  return (
    <article
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-b from-[#0b477f]/90 via-[#083d70]/88 to-[#032b50]/92 p-4 backdrop-blur-sm transition-all duration-300 sm:p-5 ${v.ring} ${v.glow} shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.28)]`}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-white/[0.09] to-transparent"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-xl border border-white/[0.05]"
        aria-hidden
      />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <TimeBadge time={time} className={v.badge} />
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
            {label}
          </span>
        )}
      </div>
      {children}
    </article>
  );
}

function SingleEvent({
  time,
  title,
  subtitle,
  location,
  variant = "plenary",
}: {
  time: string;
  title: string;
  subtitle?: string;
  location?: string;
  variant?: AgendaSlotVariant;
}) {
  const titleTone = toneForSingleEvent(title, variant);

  return (
    <EventCard time={time} variant={variant}>
      <h3
        className={`text-base font-bold sm:text-lg ${titleTone ? titleTone.title : "text-white"}`}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1.5 text-sm leading-relaxed text-gray-300/90">
          {subtitle}
        </p>
      )}
      {location && (
        <p className="mt-2 text-xs font-medium text-sky-200/85">
          <VenueLabel>{location}</VenueLabel>
        </p>
      )}
    </EventCard>
  );
}

function filterAgendaSlots(slots: AgendaSlot[]): AgendaSlot[] {
  return slots
    .map((slot) => {
      if (slot.kind === "parallel") {
        const sessions = slot.sessions.filter((s) => !isNoActivity(s.title));
        if (sessions.length === 0) return null;
        return { ...slot, sessions };
      }
      if (slot.kind === "single" && isNoActivity(slot.title)) return null;
      return slot;
    })
    .filter((slot): slot is AgendaSlot => slot !== null);
}

function toneClassForSession(title: string) {
  const t = title.toLowerCase();
  if (t.includes("tutorial")) return "bg-[#7dd3fc]/85 text-[#031b34]";
  if (t.includes("keynote")) return "bg-[#fde047]/90 text-[#1f1700]";
  if (t.includes("academia research")) return "bg-[#fbbf24]/88 text-[#271800]";
  if (t.includes("poster")) return "bg-[#34d399]/88 text-[#02261e]";
  if (
    t.includes("technical track") ||
    t.includes("paper session") ||
    t.includes("industry session") ||
    t.includes("special session") ||
    t.includes("other events")
  ) {
    return "bg-[#93c5fd]/88 text-[#06203f]";
  }
  return "bg-[#cbd5e1]/80 text-[#111827]";
}

function cellClasses(title: string) {
  return `border border-[#2a4b74] px-3 py-2.5 align-top ${toneClassForSession(
    title,
  )}`;
}

function hallHeaderTone(hall: string) {
  const h = hall.toLowerCase();
  if (h.includes("grand victoria")) return "bg-[#3b82f6] text-white";
  if (h.includes("arabica")) return "bg-[#16a34a] text-white";
  if (h.includes("brain box")) return "bg-[#ea580c] text-white";
  if (h.includes("entrance")) return "bg-[#0ea5a4] text-white";
  return "bg-[#334155] text-white";
}

function TimeCell({ time }: { time: string }) {
  return (
    <td className="border border-[#2a4b74] bg-[#062b4f] px-3 py-2.5 font-medium text-sky-100/95">
      <span className="inline-flex items-center gap-2">
        <svg className="h-4 w-4 text-sky-300/85" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {time}
      </span>
    </td>
  );
}

function AgendaTable({ day }: { day: AgendaDay }) {
  const slots = filterAgendaSlots(day.slots);
  const columns: string[] = ["Grand Victoria 1", "Grand Victoria 2", "Arabica & Robusta", "Brain Box"];

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#2f5f93] bg-gradient-to-b from-[#07305a]/85 to-[#032544]/90 p-2 shadow-[0_0_28px_rgba(24,118,210,0.16)]">
      <table className="w-full min-w-[980px] border-collapse text-sm text-white">
        <thead>
          <tr>
            <th className="border border-[#2a4b74] bg-[#0a355f] px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-sky-100">
              Time
            </th>
            {columns.map((hall) => (
              <th
                key={hall}
                className={`border border-[#2a4b74] px-3 py-3 text-left font-semibold ${hallHeaderTone(
                  hall,
                )}`}
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em]">
                  <VenuePinIcon className="h-3.5 w-3.5 text-white/90" />
                  {hall}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, index) => {
            if (slot.kind === "break") {
              return (
                <tr key={`b-${index}`}>
                  <TimeCell time={slot.time} />
                  <td
                    colSpan={Math.max(columns.length, 1)}
                    className="border border-[#2a4b74] bg-[#0b3d72] px-3 py-2.5 text-center font-semibold uppercase tracking-[0.12em] text-sky-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v2H3zM5 7h14l-1 10H6L5 7z" />
                      </svg>
                      {slot.title}
                    </span>
                  </td>
                </tr>
              );
            }

            if (slot.kind === "single") {
              const title = slot.title;
              return (
                <tr key={`s-${index}`}>
                  <TimeCell time={slot.time} />
                  <td
                    colSpan={Math.max(columns.length, 1)}
                    className={`border border-[#2a4b74] px-3 py-3 align-top ${toneClassForSession(
                      title,
                    )}`}
                  >
                    <p className="font-bold">{title}</p>
                    {slot.subtitle && <p className="mt-1 text-xs text-black/80">{slot.subtitle}</p>}
                    {slot.location && (
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-black/85">
                        <VenuePinIcon className="h-3.5 w-3.5 text-black/70" />
                        {slot.location}
                      </p>
                    )}
                  </td>
                </tr>
              );
            }

            const byHall = new Map(slot.sessions.map((s) => [s.hall, s]));
            const allHallsFit = slot.sessions.every((s) => columns.includes(s.hall));

            if (!allHallsFit) {
              return (
                <tr key={`pm-${index}`}>
                  <TimeCell time={slot.time} />
                  <td colSpan={Math.max(columns.length, 1)} className="border border-[#2a4b74] bg-[#0a355f]/60 px-3 py-3">
                    <div className="grid gap-2 md:grid-cols-2">
                      {slot.sessions.map((session) => (
                        <div
                          key={`${session.hall}-${session.title}`}
                          className={`rounded-md border border-[#2a4b74] px-3 py-2 ${toneClassForSession(
                            session.title,
                          )}`}
                        >
                          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-black/80">
                            <VenuePinIcon className="h-3.5 w-3.5 text-black/70" />
                            {session.hall}
                          </p>
                          <p className="mt-1 font-bold">{session.title}</p>
                          {session.items && session.items.length > 0 && (
                            <ul className="mt-1.5 space-y-1 text-xs text-black/80">
                              {session.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            }

            return (
              <tr key={`p-${index}`}>
                <TimeCell time={slot.time} />
                {columns.map((hall) => {
                  const session = byHall.get(hall);
                  if (!session) {
                    return (
                      <td
                        key={hall}
                        className="border border-[#2a4b74] bg-[#0a355f]/35 px-3 py-2.5 text-slate-300"
                      >
                        —
                      </td>
                    );
                  }
                  return (
                    <td key={hall} className={cellClasses(session.title)}>
                      <p className="font-bold">{session.title}</p>
                      {session.items && session.items.length > 0 && (
                        <ul className="mt-1.5 space-y-1 text-xs text-black/80">
                          {session.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function DayPanel({ day }: { day: AgendaDay }) {
  return (
    <section aria-label={`${day.subtitle} schedule`}>
      <div className="mb-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">
          {day.label}
        </p>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
          {day.subtitle}
        </h2>
        <p className="mt-1 text-sm text-gray-300/90">{day.date}</p>
      </div>
      <AgendaTable day={day} />
    </section>
  );
}

function AgendaLegend() {
  const items = [
    { label: "Grand Victoria", swatch: "bg-sky-300" },
    { label: "Arabica & Robusta", swatch: "bg-lime-300" },
    { label: "Brain Box", swatch: "bg-orange-300" },
    { label: "Entrance Lobby", swatch: "bg-emerald-300" },
  ];

  return (
    <div className="mb-6 rounded-xl border border-white/15 bg-[#022241]/50 px-4 py-3">
      <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
        Venue Legend
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-gray-100/90"
          >
            <span className={`h-2.5 w-2.5 rounded-full ${item.swatch}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AgendaSchedule() {
  const [activeId, setActiveId] = useState(agendaDays[0].id);
  const activeDay = agendaDays.find((d) => d.id === activeId) ?? agendaDays[0];

  return (
    <>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="Conference days"
      >
        {agendaDays.map((day) => {
          const active = day.id === activeId;
          return (
            <button
              key={day.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveId(day.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border border-sky-300/70 bg-sky-300/20 text-white shadow-[0_0_18px_rgba(125,211,252,0.22)]"
                  : "border border-white/20 bg-white/[0.06] text-gray-100/90 hover:border-sky-200/50 hover:bg-white/[0.09] hover:text-white"
              }`}
            >
              <span className="sm:hidden">
                {day.date.split(",")[0]}
              </span>
              <span className="hidden sm:inline">
                {day.subtitle}
                <span className="ml-1.5 text-xs font-normal opacity-70">
                  · {day.date.split(",")[0]}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <AgendaLegend />

      <div role="tabpanel">
        <DayPanel day={activeDay} />
      </div>
    </>
  );
}
