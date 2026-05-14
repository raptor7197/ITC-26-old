"use client";

import React from "react";

const sponsors = [
  {
    name: "Caliber Interconnect",
    src: "/images/caliberinterconnect.png",
    category: "Silicon",
  },
  { name: "Siemens", src: "/images/siemens.png", category: "Platinum" },
  { name: "Google", src: "/images/google.png", category: "Platinum" },
  { name: "Tessolve", src: "/images/committee/tessolve.png", category: "Bronze" },
  { name: "Qualcomm", src: "/images/qualcomm.png", category: "Gold" },
  { name: "Cadence", src: "/images/cadence.png", category: "Gold" },
  { name: "Advantest", src: "/images/advantest.png", category: "Gold" },
  { name: "Synopsys", src: "/images/synopsys.png", category: "Gold" },
  { name: "Teradyne", src: "/images/teradyne.png", category: "Gold" },
  { name: "Anora labs", src: "/images/anoralabs.svg", category: "Silver" },
  { name: "Marvel", src: "/images/marvell-logo.svg", category: "Bronze" },
  { name: "Sandisk", src: "/images/sandisk1.png", category: "Bronze" },
  {
    name: "Texas Instruments",
    src: "/images/texasinstruments.png",
    category: "Bronze",
  },
  {
    name: "Tessolve",
    src: "/images/committee/tessolve.png",
    category: "Bronze",
  },
  {
    name: "IEEE Bangalore Section",
    src: "/images/ieeeblr.png",
    category: "Technical",
  },
  { name: "IESA", src: "/images/IESA.jpg", category: "Technical" },
  { name: "TTTC", src: "/images/TTTC.png", category: "Technical" },
  {
    name: "VLSI Society of India",
    src: "/images/VLSI.jpg",
    category: "Technical",
  },
];

const categoryGlow: Record<string, string> = {
  Silicon:
    "shadow-[0_0_30px_rgba(106,175,241,0.4)] hover:shadow-[0_0_50px_rgba(106,175,241,0.7)]",
  Platinum:
    "shadow-[0_0_30px_rgba(106,175,241,0.4)] hover:shadow-[0_0_50px_rgba(106,175,241,0.7)]",
  Gold: "shadow-[0_0_30px_rgba(106,175,241,0.4)] hover:shadow-[0_0_50px_rgba(106,175,241,0.7)]",
  Silver:
    "shadow-[0_0_30px_rgba(106,175,241,0.4)] hover:shadow-[0_0_50px_rgba(106,175,241,0.7)]",
  Bronze:
    "shadow-[0_0_30px_rgba(106,175,241,0.4)] hover:shadow-[0_0_50px_rgba(106,175,241,0.7)]",
  Technical:
    "shadow-[0_0_30px_rgba(106,175,241,0.4)] hover:shadow-[0_0_50px_rgba(106,175,241,0.7)]",
};

export default function SponsorMarquee() {
  return (
    <section className="w-full py-20 overflow-hidden relative bg-transparent">
      <div className="text-center mb-12 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold font-angkor text-white tracking-wide uppercase">
          Our Sponsors
        </h2>
        <div className="w-24 h-1 bg-[#6aaff1] mx-auto rounded-full mt-4"></div>
      </div>

      <div className="w-full px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]">
        <div className="relative flex w-full overflow-hidden group z-10 py-8">
          <div className="flex w-fit animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap items-center">
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
              <div
                key={`${sponsor.name}-${idx}`}
                className={`flex-shrink-0 mx-4 sm:mx-6 bg-white rounded-2xl p-6 flex flex-col items-center justify-center w-[220px] sm:w-[260px] h-[160px] sm:h-[180px] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${categoryGlow[sponsor.category]}`}
              >
                <div className="h-16 sm:h-20 w-full relative flex items-center justify-center">
                  <img
                    src={sponsor.src}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
}
