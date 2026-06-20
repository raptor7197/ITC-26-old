"use client";

import { useState, useEffect } from "react";
import type { AgendaDay, AgendaSlot, ParallelSession } from "@/lib/agendaData";
import { agendaDays, VENUES } from "@/lib/agendaData";

import {
  keynoteSpeakers,
  industrySpeakers,
  tutorialsData,
  panelsData,
  distinguishedAddressesData,
  industryShowcaseData,
} from "@/lib/speakersData";
import AgendaModal, { ModalData } from "./AgendaModal";

const ICONS = {
  calendar: (
    <svg
      className="w-5 h-5 text-sky-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  clock: (
    <svg
      className="w-4 h-4 text-sky-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  user: (
    <svg
      className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  coffee: (
    <svg
      className="w-5 h-5 text-sky-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  lunch: (
    <svg
      className="w-5 h-5 text-sky-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 10h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" />
      <path d="M6 6h12a2 2 0 0 1 2 2v2H4V8a2 2 0 0 1 2-2Z" />
      <path d="M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  // CPU
  track1: (
    <svg
      className="w-6 h-6 text-sky-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
  // Microchip
  track2: (
    <svg
      className="w-6 h-6 text-indigo-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  // Shield
  track3: (
    <svg
      className="w-6 h-6 text-sky-400 opacity-90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
  // Brain
  track4: (
    <svg
      className="w-6 h-6 text-amber-400 opacity-90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.002 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  ),
  bullet: (
    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
  ),
  location: (
    <svg
      className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
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
  ),
};

const TRACK_STYLES = {
  "Grand Victoria 1": {
    bgHeader: "bg-gradient-to-br from-[#4b8aff] via-[#1a52b0] to-[#081a4a]",
    bgCell: "bg-gradient-to-br from-[#1b4385] to-[#091533] text-white",
    icon: ICONS.track1,
    title: "TRACK 1 (A)",
  },
  "Grand Victoria 2": {
    bgHeader: "bg-gradient-to-br from-[#a67aff] via-[#5424a0] to-[#25085e]",
    bgCell: "bg-gradient-to-br from-[#271c6e] to-[#090826] text-white",
    icon: ICONS.track2,
    title: "TRACK 2 (A)",
  },
  "Arabica & Robusta": {
    bgHeader: "bg-gradient-to-br from-[#42b1eb] via-[#104c6e] to-[#052236]",
    bgCell: "bg-gradient-to-br from-[#163c70] to-[#081224] text-white",
    icon: ICONS.track3,
    title: "TRACK 3 (A)",
  },
  "Brain Box": {
    bgHeader: "bg-gradient-to-br from-[#e3ae3d] via-[#735008] to-[#302102]",
    bgCell: "bg-gradient-to-br from-[#705807] to-[#3d2e00] text-white",
    icon: ICONS.track4,
    title: "TRACK 4",
  },
};

function CircuitGraphic() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none overflow-hidden opacity-50 hidden md:block">
      <svg
        className="w-full h-full text-sky-400"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M10,20 L30,20 L40,30 L90,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
        <circle cx="90" cy="30" r="1.5" fill="currentColor" />
        <path
          d="M20,40 L40,40 L50,50 L90,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle cx="20" cy="40" r="1.5" fill="currentColor" />
        <circle cx="90" cy="50" r="1.5" fill="currentColor" />
        <path
          d="M50,10 L60,20 L90,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle cx="50" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function AgendaSchedule() {
  const [activeId, setActiveId] = useState(agendaDays[0].id);
  const [selectedData, setSelectedData] = useState<ModalData | null>(null);

  const getMatchData = (title: string, items?: string[]): ModalData | null => {
    const safeTitle = title.toLowerCase();

    // Check Tutorials
        const tutorialMatch = tutorialsData.find(
      (t) =>
        (t.title && (t.title.toLowerCase() === safeTitle || safeTitle.includes(t.title.toLowerCase()))) ||
        (t.authors && t.authors.some(a => safeTitle.includes(a.name.toLowerCase()) || a.name.toLowerCase().includes(safeTitle))) ||
        (items && items.some(item => t.authors && t.authors.some(a => item.toLowerCase().includes(a.name.toLowerCase()))))
    );
    if (tutorialMatch) return tutorialMatch as ModalData;

    // Check Keynotes
    const keynoteMatch = keynoteSpeakers.find((k) =>
      safeTitle.includes(k.name.toLowerCase()),
    );
    if (keynoteMatch) return keynoteMatch as ModalData;

    // Check Industry Speakers (match name in title or items)
    const industryMatch = industrySpeakers.find(
      (i) =>
        safeTitle.includes(i.name.toLowerCase()) ||
        (items &&
          items.some((item) =>
            item.toLowerCase().includes(i.name.toLowerCase()),
          )),
    );
    if (industryMatch) return industryMatch as ModalData;

    // Check Panels
    const panelMatch = panelsData.find(
      (p) =>
        p.title &&
        (p.title.toLowerCase() === safeTitle ||
          safeTitle.includes(p.title.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(p.title.toLowerCase()),
            ))),
    );
    if (panelMatch) return panelMatch as ModalData;

    // Check Distinguished Addresses
    const daMatch = distinguishedAddressesData.find(
      (da) =>
        da.name &&
        (safeTitle.includes(da.name.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(da.name.toLowerCase()),
            ))),
    );
    if (daMatch) return daMatch as ModalData;

    // Check Industry Showcase
    const showcaseMatch = industryShowcaseData.find(
      (isc) =>
        isc.name &&
        (safeTitle.includes(isc.name.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(isc.name.toLowerCase()),
            ))),
    );
    if (showcaseMatch) return showcaseMatch as ModalData;

    // Check for explicit paper/talk formats (Team X:, ART X:, X.X:, Talk X:)
    const paperRegex = /^(team \d+:|art\d+:?|\d+\.\d+:|talk\s*\d+:?|hackathon opening remarks)/i;
    if (paperRegex.test(safeTitle)) {
      return {
        name: title,
        comingSoon: true,
      };
    }

    // --- FALLBACK FOR PRESENTATIONS ---
    const nonPresentationKeywords = [
      "registration",
      "break",
      "lunch",
      "tea",
      "coffee",
      "exhibition",
      "remarks",
      "award",
      "conclusion",
      "welcome",
      "closing",
      "inauguration",
      "tttc workshop",
      "poster session",
      "distinguished address",
      "itc-at-itc",
      "talk1",
      "talk2",
      "talk3",
      "talk4",
      "panel",
      "banquet",
      "dinner",
      "no activity planned",
      "industry showcase",
    ];
    if (nonPresentationKeywords.some((kw) => safeTitle.includes(kw))) {
      return null;
    }

    return {
      name: title,
      comingSoon: true,
    };
  };

  const handleTileClick = (title: string, items?: string[]) => {
    const data = getMatchData(title, items);
    if (data) {
      setSelectedData(data);
    }
  };
  const activeDay = agendaDays.find((d) => d.id === activeId) ?? agendaDays[0];

  return (
    <div className="w-full max-w-[1400px] mx-auto text-white flex flex-col relative p-4 md:p-8">
      {/* Top Section */}
      <div className="relative z-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* LEFT: Title and Tabs */}
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight text-white uppercase font-poppins">
            PROGRAM AGENDA
          </h1>
          <div className="flex flex-wrap gap-4 mt-2">
            {agendaDays.map((day) => {
              const active = day.id === activeId;
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveId(day.id)}
                  className={`rounded-[30px] px-8 py-[10px] text-[15px] font-bold transition-all duration-300 min-w-[120px] ${
                    active
                      ? "border border-[#00b0f0] bg-[#0055ff] text-white shadow-[0_0_15px_rgba(0,176,240,0.6)]"
                      : "border border-[#23426b] bg-[#09152b] text-[#8fa7c7] hover:border-[#3a68a3] hover:text-white"
                  }`}
                >
                  {day.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* MIDDLE: Active Day Title (connected via dashed line) */}
        <div className="flex items-start gap-6 flex-1 min-w-[300px]">
          {/* Connector Graphic from Title to Details */}
          <div className="hidden md:flex flex-col justify-end pb-2 relative h-[100px] w-[40px]">
            {/* The dot */}
            <div className="absolute top-[40px] left-[-20px] w-2 h-2 rounded-full border-2 border-sky-400"></div>
            <div className="absolute top-[42.5px] left-[-16px] w-[56px] border-t-2 border-dotted border-sky-400"></div>
            {/* Vertical drop */}
            <div className="absolute top-[42.5px] left-[40px] h-[50px] border-l-2 border-dotted border-sky-400"></div>
          </div>

          <div className="flex flex-col pl-4 md:pl-0 mt-8 md:mt-0">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-5 h-5 text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[13px] font-bold tracking-widest text-sky-400 uppercase">
                {activeDay.label}
              </span>
            </div>
            <h2
              className={`font-black tracking-wider text-white mb-1 whitespace-nowrap ${activeDay.subtitle === "Tutorials & Industry Test Challenge" ? "text-[24px]" : "text-[28px]"}`}
            >
              {activeDay.subtitle}
            </h2>
            <p className="text-[15px] text-sky-400 font-medium">
              {activeDay.date}
            </p>
          </div>
        </div>

        {/* RIGHT: Tech Circuit Graphics */}
        <div className="hidden lg:block absolute right-0 top-6 w-[200px] h-[80px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 80"
            className="text-sky-400/80"
          >
            <path
              d="M0,60 L40,60 L60,40 L200,40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="0" cy="60" r="2.5" fill="currentColor" />

            <path
              d="M20,70 L50,70 L70,50 L200,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="20" cy="70" r="2.5" fill="currentColor" />

            <path
              d="M80,30 L100,30 L110,20 L200,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="80" cy="30" r="2.5" fill="currentColor" />
            <circle
              cx="100"
              cy="30"
              r="1.5"
              fill="none"
              stroke="currentColor"
            />

            <path
              d="M120,60 L200,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2,4"
            />
          </svg>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="relative rounded-[8px] bg-[#071325]/90 overflow-x-auto shadow-lg">
        {/* Subtle grid pattern background matching the reference */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#152c4d 1px, transparent 1px), linear-gradient(90deg, #152c4d 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-10 w-full overflow-x-auto">
          <table className="w-full table-fixed border-collapse text-sm min-w-[880px]">
            <thead>
              <tr>
                <th className="border-2 border-white/20 bg-[#0c2242] p-2 sm:p-4 text-center w-[120px] sm:w-[150px]">
                  <span className="text-[13px] font-black tracking-widest text-white uppercase">
                    TIME
                  </span>
                </th>
                {VENUES.map((venue) => {
                  const style = TRACK_STYLES[
                    venue as keyof typeof TRACK_STYLES
                  ] || { bgHeader: "bg-[#334155]", title: venue, icon: null };
                  return (
                    <th
                      key={venue}
                      className={`border-2 border-white/20 ${style.bgHeader} p-3 text-left w-1/4`}
                    >
                      <div className="flex items-center gap-3">
                        {style.icon}
                        <div className="flex flex-col items-start">
                          <span className="text-[11px] font-extrabold tracking-wider opacity-85 uppercase">
                            {style.title}
                          </span>
                          <span className="text-[13px] font-black tracking-wider uppercase">
                            {venue}
                          </span>
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {(() => {
                const activeRowSpans: Record<string, number> = {
                  "Grand Victoria 1": 0,
                  "Grand Victoria 2": 0,
                  "Arabica & Robusta": 0,
                  "Brain Box": 0,
                };

                return activeDay.slots.map((slot, index) => {
                  // Break or Registration slots
                  if (
                    slot.kind === "break" ||
                    (slot.kind === "single" && slot.variant === "registration")
                  ) {
                    const isRegistration =
                      slot.kind === "single" && slot.variant === "registration";

                    let colsToSpan = 0;
                    for (const v of VENUES) {
                      if (activeRowSpans[v] > 0) break;
                      colsToSpan++;
                    }

                    // Decrement for this row
                    for (const v of VENUES) {
                      if (activeRowSpans[v] > 0) activeRowSpans[v]--;
                    }

                    return (
                      <tr key={`slot-${index}`}>
                        <td className="border-2 border-white/20 bg-[#0c2242] p-3 text-center whitespace-nowrap">
                          <div className="flex flex-col items-center justify-center gap-1 text-sky-100">
                            {ICONS.clock}
                            <span className="text-xs font-medium text-sky-100">
                              {slot.time}
                            </span>
                          </div>
                        </td>
                        <td
                          colSpan={colsToSpan}
                          className="border-2 border-white/20 bg-transparent p-3 text-center"
                        >
                          <div className="flex items-center justify-center gap-3 bg-[#03152d] border border-white/20 rounded-xl mx-2 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
                            {isRegistration
                              ? ICONS.user
                              : slot.title.toLowerCase().includes("lunch")
                                ? ICONS.lunch
                                : ICONS.coffee}
                            <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-sky-400">
                              {slot.title}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  }

                  // Parallel or Single Slot
                  let sessionsByVenue: Record<string, any> = {};
                  if (slot.kind === "parallel") {
                    slot.sessions.forEach((s) => {
                      sessionsByVenue[s.hall] = s;
                    });
                  }

                  let singleColsToSpan = 0;
                  for (const v of VENUES) {
                    if (activeRowSpans[v] > 0) break;
                    singleColsToSpan++;
                  }

                  const trContent = (
                    <tr key={`slot-${index}`}>
                      <td className="border-2 border-white/20 bg-[#0c2242] p-3 text-center align-top whitespace-nowrap">
                        <div className="flex flex-col items-center gap-1 text-sky-100 mt-2">
                          {ICONS.clock}
                          <span className="text-xs font-medium text-sky-100">
                            {slot.time.split(" – ")[0]} –
                          </span>
                          <span className="text-xs font-medium text-sky-100">
                            {slot.time.split(" – ")[1]}
                          </span>
                        </div>
                      </td>

                      {slot.kind === "single" ? (
                        <td
                          colSpan={singleColsToSpan}
                          className={`border-2 border-white/20 bg-transparent p-3 ${getMatchData(slot.title) ? "cursor-pointer hover:bg-white/5 transition-colors" : ""}`}
                          onClick={() => handleTileClick(slot.title)}
                          {...(getMatchData(slot.title) ? { "title": "Click to read more details" } : {})}
                        >
                          {slot.variant === "keynote" ? (
                            <div className="bg-[#03152d] border border-white/20 rounded-[6px] p-4 sm:p-5 h-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none flex flex-col justify-center items-center text-center min-h-[100px]">
                              <div>
                                <div className="font-bold text-white text-base sm:text-lg">
                                  Keynote Address
                                </div>
                                {slot.subtitle && (
                                  <div className="text-sm sm:text-base font-semibold text-sky-200 mt-1.5">
                                    {slot.subtitle}
                                  </div>
                                )}
                                <div className="text-xs sm:text-sm text-[#a3b8cc] mt-1.5">
                                  {slot.title.replace(/^Keynote:\s*/i, "")}
                                </div>
                              </div>
                              {slot.location && (
                                <div className="flex items-center justify-center gap-1.5 mt-3 text-xs sm:text-sm font-semibold text-sky-400">
                                  {ICONS.location}
                                  <span>{slot.location}</span>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="bg-[#03152d] border border-white/20 rounded-[6px] p-4 sm:p-5 h-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none flex flex-col justify-center items-center text-center min-h-[100px]">
                              <div>
                                <div className="font-bold text-white text-base sm:text-lg">
                                  {slot.title}
                                </div>
                                {slot.subtitle && (
                                  <div className="text-xs sm:text-sm text-sky-200 mt-1.5">
                                    {slot.subtitle}
                                  </div>
                                )}
                              </div>
                              {slot.location && (
                                <div className="flex items-center justify-center gap-1.5 mt-3 text-xs sm:text-sm font-semibold text-sky-400">
                                  {ICONS.location}
                                  <span>{slot.location}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      ) : (
                        (() => {
                          const cells = [];
                          let skip = 0;
                          for (let i = 0; i < VENUES.length; i++) {
                            const venue = VENUES[i];
                            if (activeRowSpans[venue] > 0) {
                              continue;
                            }
                            if (skip > 0) {
                              skip--;
                              continue;
                            }
                            const session = sessionsByVenue[venue];
                            const style =
                              TRACK_STYLES[venue as keyof typeof TRACK_STYLES];
                            const colSpan = session?.colSpan || 1;
                            const rowSpan = session?.rowSpan || 1;

                            if (colSpan > 1) {
                              skip = colSpan - 1;
                            }
                            if (rowSpan > 1) {
                              for (let c = 0; c < colSpan; c++) {
                                activeRowSpans[VENUES[i + c]] = rowSpan;
                              }
                            }

                            cells.push(
                              <td
                                key={venue}
                                colSpan={colSpan}
                                rowSpan={rowSpan}
                                className={`border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words ${session && getMatchData(session.title, session.items) ? "cursor-pointer hover:brightness-110 transition-all" : ""}`}
                                onClick={() =>
                                  session &&
                                  handleTileClick(session.title, session.items)
                                }
                                {...(session && getMatchData(session.title, session.items) ? { "title": "Click to read more details" } : {})}
                              >
                                {session ? (
                                  <div className="flex flex-col h-full">
                                    <h4 className="font-medium text-[14px] leading-[1.4] text-white mb-4">
                                      {session.title}
                                    </h4>
                                    <div className="mt-auto pt-3 flex flex-col gap-3">
                                      {session.items && session.items.length > 0 && (
                                        <div className="space-y-[6px]">
                                          {session.items.map(
                                            (item: string, idx: number) => {
                                              const itemMatch = getMatchData(item);
                                              const isTutorialTile = activeId === "tutorials" && session.title !== "ITC-at-ITC";
                                              const isItemClickable = itemMatch && !isTutorialTile;
                                              
                                              return (
                                                <div
                                                  key={idx}
                                                  className={`flex items-start gap-2 text-[12px] font-normal leading-[1.3] ${
                                                    isItemClickable
                                                      ? "text-sky-300 cursor-pointer hover:text-white transition-colors"
                                                      : isTutorialTile ? "text-sky-300" : "text-[#a3b8cc]"
                                                  }`}
                                                  onClick={(e) => {
                                                    if (isItemClickable) {
                                                      e.stopPropagation();
                                                      handleTileClick(item);
                                                    }
                                                  }}
                                                  {...(isItemClickable ? { "title": "Click to read more details" } : {})}
                                                >
                                                  {["day1", "day2"].includes(activeId)
                                                    ? ICONS.bullet
                                                    : ICONS.user}
                                                  <span>{item}</span>
                                                </div>
                                              );
                                            },
                                          )}
                                        </div>
                                      )}
                                      {session.location && (
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                                          {ICONS.location}
                                          <span>{session.location}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="text-xs text-[#a3b8cc]/50 italic text-center mt-4">
                                    —
                                  </div>
                                )}
                              </td>
                            );
                          }
                          return cells;
                        })()
                      )}
                    </tr>
                  );

                  for (const v of VENUES) {
                    if (activeRowSpans[v] > 0) activeRowSpans[v]--;
                  }

                  return trContent;
                });
              })()}
            </tbody>
          </table>
        </div>
      </div>

      <AgendaModal
        isOpen={!!selectedData}
        onClose={() => setSelectedData(null)}
        data={selectedData}
      />
    </div>
  );
}
