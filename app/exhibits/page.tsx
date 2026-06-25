"use client";

import PageHeader from "@/components/ui/PageHeader";
import React, { useState } from "react";

const exhibitors = [
  { id: 1, company: "Qualcomm" },
  { id: 2, company: "Caliber Interconnect" },
  { id: 3, company: "Caliber Interconnect" },
  { id: 4, company: "Siemens" },
  { id: 5, company: "Siemens" },
  { id: 6, company: "Google" },
  { id: 7, company: "Google" },
  { id: 8, company: "Cadence" },
  { id: 9, company: "Synopsys" },
  { id: 10, company: "Amazon" },
  { id: 11, company: "Solitontech" },
  { id: 12, company: "Solitontech" },
  { id: 13, company: "Mirafra" },
  { id: 14, company: "Mirafra" },
  { id: 15, company: "Tessolve" },
  { id: 16, company: "Tessolve" },
  { id: 17, company: "Anora" },
  { id: 18, company: "Advantest" },
  { id: 19, company: "Maven Silicon" },
  { id: 20, company: "Marvell" },
];

export default function Exhibits() {
  const [hoveredBooth, setHoveredBooth] = useState<number | null>(null);

  const activeExhibitor = exhibitors.find(e => e.id === hoveredBooth);

  return (
    <main className="relative min-h-screen w-full font-sans text-white box-border pt-[70px] md:pt-[120px] pb-24">
      <PageHeader title="EXHIBITS" />
      <div className="w-full max-w-[1100px] flex flex-col mx-auto px-page mt-8">

        {/* Mobile Orientation Hint */}
        <div className="md:hidden flex items-center justify-center gap-3 bg-[#103e63]/50 border border-[#38bdf8]/30 rounded-xl p-4 mb-6 text-[#e2e8f0] text-sm shadow-lg">
          <svg className="w-5 h-5 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span>For the best map experience, rotate your device to landscape.</span>
        </div>

        {/* Pixel-Perfect Classic Map Container */}
        <div className="relative w-full mb-16 group">
          
          <div className="w-full overflow-x-auto exhibits-scrollbar bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300 pb-2">
            <div className="min-w-[1000px] w-full p-8 mx-auto min-h-[450px] flex items-center justify-center">
              <svg viewBox="0 0 1100 450" className="w-full h-auto drop-shadow-xl">
              {/* 1. Base Paths (Clean, delicate lines) */}
              <path d="M 10 230 L 754 230 A 6 6 0 0 0 760 224 L 760 146 A 6 6 0 0 1 766 140 L 1095 140" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
              <path d="M 10 380 L 834 380 A 6 6 0 0 0 840 374 L 840 226 A 6 6 0 0 1 846 220 L 1095 220" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="390" y1="230" x2="390" y2="270" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="390" y1="380" x2="390" y2="340" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Terminal Endpoints (Bullets) */}
              <g fill="#38bdf8">
                {/* Main Path Terminals */}
                <circle cx="10" cy="230" r="2.5" />
                <circle cx="1095" cy="140" r="2.5" />
                <circle cx="10" cy="380" r="2.5" />
                <circle cx="1095" cy="220" r="2.5" />
                
                {/* Partition Line Terminals */}
                <circle cx="390" cy="270" r="2.5" />
                <circle cx="390" cy="340" r="2.5" />
              </g>

              {/* 2. Rooms (Extremely subtle fill, clean borders) */}
              {/* Grand Victoria Ballroom */}
              <path d="M 30 230 L 370 230 L 370 56 A 6 6 0 0 0 364 50 L 36 50 A 6 6 0 0 0 30 56 Z" fill="#38bdf8" fillOpacity="0.03" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="40" y1="70" x2="40" y2="210" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />
              <line x1="360" y1="70" x2="360" y2="210" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />
              
              {/* Arabica & Robusta */}
              <path d="M 445 230 L 705 230 L 705 96 A 6 6 0 0 0 699 90 L 451 90 A 6 6 0 0 0 445 96 Z" fill="#38bdf8" fillOpacity="0.03" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="455" y1="110" x2="455" y2="210" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />
              <line x1="695" y1="110" x2="695" y2="210" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />

              {/* Brainbox */}
              <rect x="855" y="240" width="224" height="120" rx="6" ry="6" fill="#38bdf8" fillOpacity="0.03" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="865" y1="260" x2="865" y2="340" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />
              <line x1="1069" y1="260" x2="1069" y2="340" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />

              {/* 3. Doors (Minimalist white gaps) */}
              <rect x="99" y="228" width="32" height="4" fill="#ffffff" />
              <rect x="269" y="228" width="32" height="4" fill="#ffffff" />
              <rect x="527" y="228" width="32" height="4" fill="#ffffff" />
              <rect x="591" y="228" width="32" height="4" fill="#ffffff" />
              <rect x="951" y="358" width="32" height="4" fill="#ffffff" />

              {/* 4. Crisp Typography */}
              {/* Grand Victoria Text */}
              <text x="115" y="100" fill="#94a3b8" fontSize="11" fontFamily="inherit" fontWeight="500" letterSpacing="0.05em" textAnchor="middle">
                <tspan x="115" dy="0">INAUGURATION</tspan>
                <tspan x="115" dy="20">KEYNOTES</tspan>
                <tspan x="115" dy="20">TECHNICAL SESSIONS</tspan>
                <tspan x="115" dy="20">TUTORIALS</tspan>
              </text>
              <text x="285" y="100" fill="#94a3b8" fontSize="11" fontFamily="inherit" fontWeight="500" letterSpacing="0.05em" textAnchor="middle">
                <tspan x="285" dy="0">TECHNICAL SESSIONS</tspan>
                <tspan x="285" dy="20">TUTORIALS</tspan>
              </text>
              <text x="200" y="190" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="inherit" textAnchor="middle" letterSpacing="0.1em">
                GRAND VICTORIA BALLROOM 1 & 2
              </text>

              {/* Arabica & Robusta Text */}
              <text x="575" y="150" fill="#94a3b8" fontSize="11" fontFamily="inherit" fontWeight="500" letterSpacing="0.05em" textAnchor="middle">TECHNICAL SESSIONS</text>
              <text x="575" y="180" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="inherit" textAnchor="middle" letterSpacing="0.1em">ARABICA & ROBUSTA</text>

              {/* Brainbox Text */}
              <text x="967" y="283" fill="#94a3b8" fontSize="11" fontFamily="inherit" fontWeight="500" letterSpacing="0.05em" textAnchor="middle">LEVEL 1</text>
              <text x="967" y="303" fill="#94a3b8" fontSize="11" fontFamily="inherit" fontWeight="500" letterSpacing="0.05em" textAnchor="middle">TECHNICAL SESSIONS</text>
              <text x="967" y="328" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="inherit" textAnchor="middle" letterSpacing="0.1em">BRAINBOX</text>

              {/* Banquet Entrance Text */}
              <text x="970" y="185" fill="#38bdf8" fontSize="14" fontWeight="bold" fontFamily="inherit" textAnchor="middle" letterSpacing="0.15em">
                BANQUET ENTRANCE ➔
              </text>

              {/* 5. Minimalist Booths */}
              {exhibitors.map((ex) => {
                let x = 0;
                if (ex.id >= 1 && ex.id <= 3) x = 30.5 + (ex.id - 1) * 36.5;
                else if (ex.id >= 4 && ex.id <= 9) x = 156 + (ex.id - 4) * 36.5;
                else if (ex.id >= 10 && ex.id <= 18) x = 410.5 + (ex.id - 10) * 36.1;
                else if (ex.id >= 19 && ex.id <= 20) x = 752 + (ex.id - 19) * 36.1;

                const isHovered = hoveredBooth === ex.id;

                return (
                  <g 
                    key={ex.id} 
                    transform={`translate(${x}, 330)`} 
                    className="cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setHoveredBooth(ex.id)}
                    onMouseLeave={() => setHoveredBooth(null)}
                  >
                    <rect 
                      x="0" y="0" width="32" height="32" rx="2" 
                      fill={isHovered ? "#38bdf8" : "transparent"} 
                      stroke={isHovered ? "#38bdf8" : "rgba(56, 189, 248, 0.6)"}
                      strokeWidth="1.5"
                      className="transition-colors duration-200" 
                    />
                    <text 
                      x="16" y="21" 
                      fill={isHovered ? "#000000" : "#e2e8f0"} 
                      fontSize="12" fontWeight="600" fontFamily="inherit" textAnchor="middle" 
                      className="transition-colors duration-200"
                    >
                      {ex.id}
                    </text>
                  </g>
                );
              })}

              {/* 6. Tooltip (Flat, minimal) */}
              {activeExhibitor && (() => {
                let x = 0;
                if (activeExhibitor.id >= 1 && activeExhibitor.id <= 3) x = 30.5 + (activeExhibitor.id - 1) * 36.5;
                else if (activeExhibitor.id >= 4 && activeExhibitor.id <= 9) x = 156 + (activeExhibitor.id - 4) * 36.5;
                else if (activeExhibitor.id >= 10 && activeExhibitor.id <= 18) x = 410.5 + (activeExhibitor.id - 10) * 36.1;
                else if (activeExhibitor.id >= 19 && activeExhibitor.id <= 20) x = 752 + (activeExhibitor.id - 19) * 36.1;

                const textLen = Math.max(activeExhibitor.company.length * 8, 80);

                return (
                  <g transform={`translate(${x + 16}, 320)`} className="pointer-events-none">
                    <rect x={-textLen/2} y="-32" width={textLen} height="26" rx="4" fill="rgba(15, 23, 42, 0.95)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                    <text x="0" y="-15" fill="#ffffff" fontSize="12" fontFamily="inherit" textAnchor="middle" fontWeight="500" letterSpacing="0.02em">
                      {activeExhibitor.company}
                    </text>
                    <polygon points="-6,-7 6,-7 0,0" fill="rgba(15, 23, 42, 0.95)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                    <line x1="-5" y1="-7" x2="5" y2="-7" stroke="rgba(15, 23, 42, 0.95)" strokeWidth="2" />
                  </g>
                );
              })()}
            </svg>
          </div>
        </div>
        </div>

        {/* Exhibitor Directory Title */}
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6 text-center md:text-left">
          Exhibitor Directory
        </h2>

        {/* Formal Directory Tables */}
        
        {/* Desktop Layout: Two Columns */}
        <div className="hidden md:flex w-full gap-8 flex-row">
          {/* Table 1: Booths 1-10 */}
          <div className="flex-1 bg-[#103e63] rounded-xl overflow-hidden shadow-lg border border-[#184872]">
            <table className="w-full text-left text-sm m-0">
              <thead className="bg-[#145688]">
                <tr>
                  <th className="px-6 py-4 font-bold text-[#38bdf8] uppercase tracking-wider text-xs w-[70%]">COMPANY</th>
                  <th className="px-6 py-4 font-bold text-[#38bdf8] uppercase tracking-wider text-xs text-center w-[30%]">BOOTH NO</th>
                </tr>
              </thead>
              <tbody>
                {exhibitors.slice(0, 10).map((e) => (
                  <tr key={e.id} className="border-t border-[#184872]">
                    <td className="px-6 py-4 font-medium text-[#e2e8f0]">{e.company}</td>
                    <td className="px-6 py-4 text-center text-[#e2e8f0] font-bold">{e.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table 2: Booths 11-20 */}
          <div className="flex-1 bg-[#103e63] rounded-xl overflow-hidden shadow-lg border border-[#184872]">
            <table className="w-full text-left text-sm m-0">
              <thead className="bg-[#145688]">
                <tr>
                  <th className="px-6 py-4 font-bold text-[#38bdf8] uppercase tracking-wider text-xs w-[70%]">COMPANY</th>
                  <th className="px-6 py-4 font-bold text-[#38bdf8] uppercase tracking-wider text-xs text-center w-[30%]">BOOTH NO</th>
                </tr>
              </thead>
              <tbody>
                {exhibitors.slice(10, 20).map((e) => (
                  <tr key={e.id} className="border-t border-[#184872]">
                    <td className="px-6 py-4 font-medium text-[#e2e8f0]">{e.company}</td>
                    <td className="px-6 py-4 text-center text-[#e2e8f0] font-bold">{e.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Layout: Single Unified List */}
        <div className="flex md:hidden w-full flex-col">
          <div className="w-full bg-[#103e63] rounded-xl overflow-hidden shadow-lg border border-[#184872]">
            <table className="w-full text-left text-sm m-0">
              <thead className="bg-[#145688]">
                <tr>
                  <th className="px-6 py-4 font-bold text-[#38bdf8] uppercase tracking-wider text-xs w-[70%]">COMPANY</th>
                  <th className="px-6 py-4 font-bold text-[#38bdf8] uppercase tracking-wider text-xs text-center w-[30%]">BOOTH NO</th>
                </tr>
              </thead>
              <tbody>
                {exhibitors.map((e) => (
                  <tr key={e.id} className="border-t border-[#184872]">
                    <td className="px-6 py-4 font-medium text-[#e2e8f0]">{e.company}</td>
                    <td className="px-6 py-4 text-center text-[#e2e8f0] font-bold">{e.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* CSS to permanently show the scrollbar on mobile devices */}
      <style dangerouslySetInnerHTML={{__html: `
        .exhibits-scrollbar::-webkit-scrollbar {
          height: 8px;
          -webkit-appearance: none;
        }
        .exhibits-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .exhibits-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.4);
          border-radius: 4px;
        }
        .exhibits-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.7);
        }
      `}} />
    </main>
  );
}
