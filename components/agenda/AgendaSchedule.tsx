"use client";

import { useState } from "react";
import type { AgendaDay, AgendaSlot, ParallelSession } from "@/lib/agendaData";
import { agendaDays, VENUES } from "@/lib/agendaData";

const ICONS = {
  calendar: (
    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4 text-sky-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  user: (
    <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  coffee: (
    <svg className="w-5 h-5 text-sky-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3h8M12 3v5" />
    </svg>
  ),
  track1: ( // CPU
    <svg className="w-6 h-6 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  track2: ( // Microchip
    <svg className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  track3: ( // Shield
    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  track4: ( // Brain
    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m0 0a3.75 3.75 0 01-3.75-3.75v-6.75a3.75 3.75 0 013.75-3.75m0 0a3.75 3.75 0 013.75 3.75v6.75a3.75 3.75 0 01-3.75 3.75M9.75 4.5h4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 15h7.5" />
    </svg>
  ),
};

const TRACK_STYLES = {
  "Grand Victoria 1": {
    bgHeader: "bg-[#1e40af]/90 border-r border-b border-blue-400/35 text-sky-100",
    bgCell: "bg-[#1e40af]/40 backdrop-blur-sm border border-blue-400/35 text-white font-medium shadow-[inset_0_0_12px_rgba(30,64,175,0.15)]",
    icon: ICONS.track1,
    title: "TRACK 1 (A)",
  },
  "Grand Victoria 2": {
    bgHeader: "bg-[#4338ca]/90 border-r border-b border-indigo-500/35 text-indigo-100",
    bgCell: "bg-[#4338ca]/40 backdrop-blur-sm border border-indigo-400/35 text-white font-medium shadow-[inset_0_0_12px_rgba(67,56,202,0.15)]",
    icon: ICONS.track2,
    title: "TRACK 2 (A)",
  },
  "Arabica & Robusta": {
    bgHeader: "bg-[#065f46]/90 border-r border-b border-emerald-500/35 text-emerald-100",
    bgCell: "bg-[#065f46]/40 backdrop-blur-sm border border-emerald-400/35 text-white font-medium shadow-[inset_0_0_12px_rgba(6,95,70,0.15)]",
    icon: ICONS.track3,
    title: "TRACK 3 (A)",
  },
  "Brain Box": {
    bgHeader: "bg-[#9a3412]/90 border-r border-b border-amber-500/35 text-amber-100",
    bgCell: "bg-[#9a3412]/40 backdrop-blur-sm border border-amber-400/35 text-white font-medium shadow-[inset_0_0_12px_rgba(154,52,18,0.15)]",
    icon: ICONS.track4,
    title: "TRACK 4",
  },
};

function CircuitGraphic() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none overflow-hidden opacity-50 hidden md:block">
      <svg className="w-full h-full text-sky-400" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M10,20 L30,20 L40,30 L90,30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
        <circle cx="90" cy="30" r="1.5" fill="currentColor" />
        <path d="M20,40 L40,40 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="20" cy="40" r="1.5" fill="currentColor" />
        <circle cx="90" cy="50" r="1.5" fill="currentColor" />
        <path d="M50,10 L60,20 L90,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function AgendaSchedule() {
  const [activeId, setActiveId] = useState(agendaDays[0].id);
  const activeDay = agendaDays.find((d) => d.id === activeId) ?? agendaDays[0];

  return (
    <div className="w-full max-w-[1400px] mx-auto text-white flex flex-col font-inter relative p-4 md:p-8">
      {/* Top Section */}
      <div className="relative z-10 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest text-white font-sarpanch" style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}>
            PROGRAM AGENDA
          </h1>
          <div className="flex flex-wrap gap-4 mt-2">
            {agendaDays.map((day) => {
              const active = day.id === activeId;
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveId(day.id)}
                  className={`rounded-full px-8 py-2 text-sm font-bold uppercase transition-all duration-300 ${
                    active
                      ? "border border-sky-400 bg-sky-500/20 text-sky-100 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                      : "border border-white/20 bg-transparent text-gray-300 hover:border-sky-300 hover:text-white"
                  }`}
                >
                  {day.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="hidden md:flex items-center">
             <svg width="40" height="80" viewBox="0 0 40 80" className="text-sky-400 opacity-60">
                <path d="M 0,20 L 20,20 L 20,60 L 40,60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <circle cx="0" cy="20" r="3" fill="transparent" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="60" r="3" fill="currentColor" />
             </svg>
          </div>
          <div className="flex flex-col border-l-2 border-sky-400/50 pl-4 py-1 min-w-[450px] max-w-[700px]">
            <div className="flex items-center gap-2 mb-1">
              {ICONS.calendar}
              <span className="text-sm font-bold tracking-widest uppercase text-sky-300">{activeDay.label}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-wider uppercase text-white mb-1 whitespace-nowrap">
              {activeDay.subtitle}
            </h2>
            <p className="text-sm text-sky-200/80">{activeDay.date}</p>
          </div>
        </div>
        
        <CircuitGraphic />
      </div>

      {/* Main Table Container */}
      <div className="relative rounded-lg border border-dashed border-sky-400/50 bg-[#031428]/60 backdrop-blur-md shadow-[0_0_30px_rgba(4,24,48,0.8)] overflow-x-auto">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        </div>

        <div className="relative z-10 w-full overflow-x-auto">
          <table className="w-full table-fixed border-collapse text-sm min-w-[880px]">
            <thead>
              <tr>
                <th className="border-r border-b border-[#1c3a5e] bg-[#071f3a]/80 backdrop-blur-sm p-2 sm:p-4 text-center w-[90px] sm:w-[140px]">
                  <span className="text-xs font-bold tracking-widest text-sky-100 uppercase">TIME</span>
                </th>
                {VENUES.map((venue) => {
                  const style = TRACK_STYLES[venue as keyof typeof TRACK_STYLES] || { bgHeader: "bg-[#334155]", title: venue, icon: null };
                  return (
                    <th key={venue} className={`border-r border-b border-[#1c3a5e] ${style.bgHeader} p-3 text-left w-1/4`}>
                      <div className="flex items-center gap-3">
                        {style.icon}
                        <div className="flex flex-col items-start">
                          <span className="text-[11px] font-extrabold tracking-wider opacity-85 uppercase">{style.title}</span>
                          <span className="text-[13px] font-black tracking-wider uppercase">{venue}</span>
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {activeDay.slots.map((slot, index) => {
                
                // Break or Registration spans all columns
                if (slot.kind === "break" || (slot.kind === "single" && slot.variant === "registration")) {
                  const isRegistration = slot.kind === "single" && slot.variant === "registration";
                  return (
                    <tr key={`slot-${index}`} className="border-b border-[#1c3a5e]">
                      <td className="border-r border-[#1c3a5e] bg-[#0c2447]/95 backdrop-blur-sm p-3 text-center whitespace-nowrap">
                        <div className="flex flex-col items-center justify-center gap-1 text-sky-100">
                           {ICONS.clock}
                          <span className="text-xs font-medium">{slot.time}</span>
                        </div>
                      </td>
                      <td colSpan={4} className="bg-[#123863]/90 backdrop-blur-sm p-4 text-center">
                         <div className="flex items-center justify-center gap-3">
                            {isRegistration ? ICONS.user : ICONS.coffee}
                            <span className="text-sm font-bold tracking-widest uppercase text-sky-100">{slot.title}</span>
                         </div>
                      </td>
                    </tr>
                  );
                }

                // Parallel or Single Slot
                let sessionsByVenue: Record<string, any> = {};
                if (slot.kind === "parallel") {
                  slot.sessions.forEach(s => { sessionsByVenue[s.hall] = s; });
                } else if (slot.kind === "single") {
                  if (slot.location) {
                    // It specifies locations. Since our columns are fixed to 4 venues, 
                    // if it's Grand Victoria 1 & 2, it spans two. To simplify, we can just span it across all.
                    // But in the exact design, single sessions aren't really shown except via spanning.
                  }
                }

                return (
                  <tr key={`slot-${index}`} className="border-b border-[#1c3a5e]">
                    <td className="border-r border-[#1c3a5e] bg-[#0c2447]/95 backdrop-blur-sm p-3 text-center align-top whitespace-nowrap">
                      <div className="flex flex-col items-center gap-1 text-sky-100 mt-2">
                        {ICONS.clock}
                        <span className="text-xs font-medium">{slot.time.split(" – ")[0]} –</span>
                        <span className="text-xs font-medium">{slot.time.split(" – ")[1]}</span>
                      </div>
                    </td>
                    
                    {slot.kind === "single" ? (
                      <td colSpan={4} className="bg-gradient-to-br from-[#123863]/90 to-[#0a2340]/95 backdrop-blur-sm p-4 border-r border-[#1c3a5e]">
                        <div className="font-bold text-white text-base">{slot.title}</div>
                        {slot.subtitle && <div className="text-xs text-sky-200 mt-1">{slot.subtitle}</div>}
                      </td>
                    ) : (
                      (() => {
                        const cells = [];
                        let skip = 0;
                        for (let i = 0; i < VENUES.length; i++) {
                          if (skip > 0) {
                            skip--;
                            continue;
                          }
                          const venue = VENUES[i];
                          const session = sessionsByVenue[venue];
                          const style = TRACK_STYLES[venue as keyof typeof TRACK_STYLES];
                          const colSpan = session?.colSpan || 1;
                          if (colSpan > 1) {
                            skip = colSpan - 1;
                          }
                                                cells.push(
                            <td key={venue} colSpan={colSpan} className={`border-r border-[#1c3a5e] ${style ? style.bgCell : 'bg-[#1e40af]/30 backdrop-blur-sm border border-blue-400/35 text-white'} p-2 sm:p-4 align-top break-words`}>
                              {session ? (
                                <div className="flex flex-col h-full">
                                  <h4 className="font-bold text-sm leading-snug text-white mb-3">
                                    {session.title}
                                  </h4>
                                  {session.items && session.items.length > 0 && (
                                    <div className="mt-auto space-y-2">
                                      {session.items.map((item: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-2 text-[13px] font-semibold text-sky-100/95 leading-snug">
                                          {ICONS.user}
                                          <span>{item}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="text-xs text-white/30 italic text-center mt-4">—</div>
                              )}
                            </td>
                          );
                        }
                        return cells;
                      })()
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
