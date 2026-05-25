"use client";

import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import Carousel3D from "./Carousel3D";

export default function AboutUs() {
  const contentPadding =
    "px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

  return (
    <section
      id="about"
      className={`about-us-section relative w-full pt-0 pb-1 sm:pb-2 md:pb-3 ${contentPadding} text-white`}
    >
      <div className="mb-8 flex w-full min-w-0 max-w-full flex-col items-stretch overflow-x-clip sm:hidden">
        <div className="mx-auto w-[calc(100%-2.5rem)] min-w-0 max-w-full">
          <div className="w-full -skew-x-[20deg] rounded-sm border border-white/35 bg-gradient-to-r from-[#022241] to-[#0557A7] py-2 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
            <div className="skew-x-[20deg] min-w-0 px-3 py-1">
              <CountdownTimer variant="capsule" />
            </div>
          </div>
        </div>
        <div className="angkor-title-pocket mt-10 w-full min-w-0 max-w-full">
          <h2 className="font-angkor pt-2 text-center text-white [padding-inline:0]">
            <span className="angkor-section-title">ABOUT US</span>
          </h2>
        </div>
      </div>

      <header
        className="relative hidden w-full flex-shrink-0 min-w-0 z-10
                   h-[55px] sm:block sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[115px]
                   mb-8 sm:mb-10 md:mb-12 lg:mb-16"
      >
        <div className="absolute inset-0 pointer-events-none opacity-60 sm:opacity-70 md:opacity-80 z-0">
          <Image
            src="/images/vector9.svg"
            alt=""
            fill
            className="object-fill"
          />
        </div>

        <div className="hero-zigzag-title-pocket absolute top-0 left-0 z-20 flex h-full w-[41%] min-w-0 items-center justify-center overflow-hidden px-1">
          <h2 className="font-angkor min-w-0 max-w-full text-center whitespace-nowrap text-white">
            <span className="angkor-section-title">ABOUT US</span>
          </h2>
        </div>

        <div
          className="absolute top-0 right-0 left-[41%] h-full overflow-hidden z-20"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 15.5% 100%, 0 0)",
          }}
        >
          <CountdownTimer variant="desktop" />
        </div>
      </header>

      <div className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:gap-8 md:gap-10 xl:flex-row xl:items-center xl:gap-16">
        <div
          className="flex min-h-0 min-w-0 flex-1 flex-col justify-center overflow-hidden break-words
                     max-sm:px-3 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 sm:pr-0"
        >
          <h3 className="mb-4 text-center font-space-grotesk text-[22px] font-bold leading-[1.2] sm:mb-6 sm:text-[28px] md:text-left md:text-[32px] lg:text-[38px] xl:text-[44px]">
            Welcome to ITC INDIA 2026
          </h3>
          <div className="space-y-3 text-center font-poppins text-[14px] leading-[1.6] text-white/90 sm:space-y-4 sm:text-[16px] md:text-left md:text-[17px]">
            <p>
              International Test Conference is the world&apos;s premier venue
              dedicated to the electronic test of devices, boards and
              systems-covering the complete cycle from design verification,
              design-for-test, design-for-manufacturing, silicon debug,
              manufacturing test, system test, diagnosis, reliability and
              failure analysis, and back to process and design improvement.
            </p>
            <p>
              At ITC India, design, test, and yield professionals can confront
              challenges faced by the industry, and learn how these challenges
              are being addressed by the combined efforts of academia, design
              tool and equipment suppliers, designers, and test engineers.
            </p>
          </div>
        </div>

        <div className="about-3d-column relative hidden min-h-0 min-w-0 flex-1 flex-col overflow-hidden md:flex md:items-center md:justify-center">
          <h4 className="text-center font-space-grotesk text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-[#6aaff1] mb-6 xl:mb-8">
            ITC 2025 STATS
          </h4>
          <div className="about-3d-carousel min-h-0 min-w-0 w-full max-w-full overflow-hidden">
            <Carousel3D />
          </div>
        </div>
      </div>
    </section>
  );
}
