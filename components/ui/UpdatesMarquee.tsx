"use client";

import React from "react";

import Link from 'next/link';

const MARQUEE_ITEMS = [
  <span key="1">Early Bird Registration is closed. Bulk Registration is now open — register today! Early Bird rates for IEEE Members are still available.</span>,
  <span key="2">Upcoming: Hackathon Round 2 Submission (10th July 2026)</span>,
  <span key="3">
    Round 1 Fellowship Selection Results are out!{' '}
    <Link href="/fellowship/results" className="underline hover:text-white font-bold ml-1 text-sky-400">
      Click here to check the list
    </Link>
  </span>,
]; 

export default function UpdatesMarquee() {
  return (
    <section className="relative z-20 mb-0 flex w-full flex-col items-center justify-center overflow-hidden px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]">
      <div className="relative flex w-full overflow-hidden group bg-[#022241]/40 border-y border-[#6aaff1]/20 backdrop-blur-sm py-4 sm:py-6 md:py-8 lg:py-10 items-center">
        <div className="flex w-fit animate-text-marquee whitespace-nowrap items-center font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="mx-5 text-blue-300">{item}</div>
                  <div className="mx-5 text-[#6aaff1]">•</div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes text-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 4)); }
        }
        .animate-text-marquee {
          animation: text-marquee 50s linear infinite;
        }
        .group:hover .animate-text-marquee {
          animation-play-state: paused;
        }
      `,
        }}
      />
    </section>
  );
}
