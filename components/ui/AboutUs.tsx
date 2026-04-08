"use client";

import Carousel3D from "./Carousel3D";

export default function AboutUs() {
  const contentPadding =
    "px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

  return (
    <section
      id="about"
      className={`about-us-section relative w-full pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-1 sm:pb-2 md:pb-3 ${contentPadding} text-white`}
    >
      <div
        className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:gap-8 md:gap-10 xl:flex-row xl:items-center xl:gap-16"
      >
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

        <div className="about-3d-column relative hidden min-h-0 min-w-0 flex-1 overflow-hidden md:flex md:items-center md:justify-center">
          <div className="about-3d-carousel min-h-0 min-w-0 w-full max-w-full overflow-hidden">
            <Carousel3D />
          </div>
        </div>
      </div>
    </section>
  );
}
