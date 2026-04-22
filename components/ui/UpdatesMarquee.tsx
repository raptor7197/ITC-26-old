"use client";

import React from "react";

export default function UpdatesMarquee() {
  return (
    <section className="relative w-full z-20 flex flex-col items-center justify-center overflow-hidden px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]">
      <div className="relative flex w-full overflow-hidden group bg-[#022241]/40 border-y border-[#6aaff1]/20 backdrop-blur-sm py-4 sm:py-6 md:py-8 lg:py-10 items-center">
        <div className="flex w-fit animate-text-marquee whitespace-nowrap items-center font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div className="mx-5 text-blue-300">
                Key Timeline: Call for Posters - New Deadline: 15<sup>th</sup>{" "}
                April, 2026 (Closed)
              </div>
              <div className="mx-5 text-[#6aaff1]">•</div>
              <div className="mx-5 text-blue-300">Call For Papers - Closed</div>
              <div className="mx-5 text-[#6aaff1]">•</div>
              <div className="mx-5 text-blue-300">
                Tutorials Submission Deadline - 22<sup>nd</sup> April 2026
              </div>
              <div className="mx-5 text-[#6aaff1]">•</div>
              <div className="mx-5 text-blue-300">
                Posters Submission Deadline - 15<sup>th</sup> March 2026
              </div>
              <div className="mx-5 text-[#6aaff1]">•</div>
              <div className="mx-5 text-blue-300">
                ART: Full Paper Submission Deadline - 15<sup>th</sup> April 2026
              </div>
              <div className="mx-5 text-[#6aaff1]">•</div>
              <div className="mx-5 text-blue-300">
                ITC 2026 Hackathon is Live
              </div>
              <div className="mx-5 text-[#6aaff1]">•</div>
              <div className="mx-5 text-blue-300">
                Call For Workshop Deadline - May 31<sup>st</sup>
              </div>
              <div className="mx-5 text-[#6aaff1]">•</div>
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
