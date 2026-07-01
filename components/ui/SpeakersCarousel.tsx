"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  keynoteSpeakers,
  industrySpeakers,
  tutorialsData,
  distinguishedAddressesData,
} from "@/lib/speakersData";

// Extract tutorial speakers
const tutorialSpeakersMap = new Map<string, any>();
tutorialsData.forEach((tutorial) => {
  if (tutorial.authors) {
    tutorial.authors.forEach((author) => {
      if (!tutorialSpeakersMap.has(author.name)) {
        tutorialSpeakersMap.set(author.name, {
          name: author.name,
          affiliation: author.affiliation,
          image: author.image,
          imageClassName: author.imageClassName,
        });
      }
    });
  }
});
const tutorialSpeakers = Array.from(tutorialSpeakersMap.values()).map((author, index) => ({
  id: `tut-${index}`,
  ...author,
}));

const sections = [
  { title: "KEYNOTE SPEAKERS", data: keynoteSpeakers, type: "static" },
  { title: "DISTINGUISHED ADDRESSES", data: distinguishedAddressesData, type: "static" },
  { title: "INDUSTRY SPEAKERS", data: industrySpeakers, type: "static" },
  { title: "TUTORIAL SPEAKERS", data: tutorialSpeakers, type: "carousel" },
];

const DOT_BASE_SIZE_PX = 12;
const DOT_MIN_SCALE_PERCENT = 20;
const DOT_SCALE_STEP_PERCENT = 20;

function getDotScalePercent(distanceFromActive: number): number {
  const scale = 100 - distanceFromActive * DOT_SCALE_STEP_PERCENT;
  return Math.max(scale, DOT_MIN_SCALE_PERCENT);
}

function getDotSizePx(distanceFromActive: number): number {
  return (DOT_BASE_SIZE_PX * getDotScalePercent(distanceFromActive)) / 100;
}

function StaticGrid({ title, speakers }: { title: string; speakers: any[] }) {
  if (!speakers || speakers.length === 0) return null;

  // Chunk speakers into groups of 3 to force layouts like "3 up and 3 down"
  const chunkedSpeakers = [];
  for (let i = 0; i < speakers.length; i += 3) {
    chunkedSpeakers.push(speakers.slice(i, i + 3));
  }

  return (
    <div className="w-full flex flex-col items-center mb-12 sm:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-white drop-shadow-sm uppercase tracking-wider font-poppins">
        {title}
      </h2>
      <div className="flex flex-col items-center gap-y-6 sm:gap-y-10 w-full px-4">
        {chunkedSpeakers.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 w-full max-w-[70rem]">
            {row.map((speaker: any, index: number) => (
              <div key={`speaker-${speaker.id || index}`} className="flex flex-col items-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px]">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 sm:mb-5 group cursor-pointer">
                  {/* Blue ring + Image */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-[#00d2ff] overflow-hidden bg-[#00d2ff] flex items-center justify-center z-10">
                    {speaker.image ? (
                      <Image
                        src={speaker.image}
                        alt={speaker.name || "Speaker"}
                        fill
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                        className={`object-cover ${speaker.imageClassName || "object-top scale-105"}`}
                      />
                    ) : (
                      <span className="text-white/50 font-bold text-2xl sm:text-3xl">
                        {speaker.name ? speaker.name.charAt(0) : "S"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-center flex-grow flex flex-col items-center w-full px-1">
                  <h3 className="text-[13px] sm:text-[14px] md:text-base font-bold text-white leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-[13px] text-[#e0e0e0] font-medium leading-snug mt-1 w-full">
                    {speaker.affiliation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SingleCarousel({ title, slides }: { title: string; slides: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const updateScrollInfo = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (clientWidth === 0) return;
      setTotalPages(Math.ceil(scrollWidth / clientWidth));
      setCurrentPage(Math.round(scrollLeft / clientWidth));
    }
  }, []);

  useEffect(() => {
    updateScrollInfo();
    window.addEventListener("resize", updateScrollInfo);
    return () => window.removeEventListener("resize", updateScrollInfo);
  }, [updateScrollInfo, slides.length]);

  const goToNext = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  }, []);

  const goToPrev = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" });
      }
    }
  }, []);

  const goToIndex = useCallback((index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * scrollRef.current.clientWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, goToNext]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center mb-12 sm:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-white drop-shadow-sm uppercase tracking-wider font-poppins">
        {title}
      </h2>
      <div className="relative mb-0 w-full pt-1 sm:mb-0 sm:pt-2 md:pt-3 flex items-center justify-center">
        <button
          type="button"
          onClick={goToPrev}
          className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[10%] xl:left-[12%] z-20 hidden h-[40px] w-[20px] shrink-0 cursor-pointer transition-opacity hover:opacity-80 md:flex md:h-[48px] md:w-[22px] lg:h-[55px] lg:w-[24px] xl:h-[60px] xl:w-[25px] rotate-180 pointer-events-auto md:items-center md:justify-center"
          aria-label="Previous speaker"
        >
          <Image src="/images/vector8.svg" alt="" fill className="object-contain" />
        </button>

        <div className="min-w-0 w-full max-w-[min(100%,29rem)] overflow-hidden max-[639px]:mx-auto max-[639px]:w-[calc(100%-1.5rem)] sm:max-w-[35rem] md:max-w-[42rem] lg:max-w-[50rem] xl:max-w-[60rem] 2xl:max-w-[70rem]">
          <div
            ref={scrollRef}
            onScroll={updateScrollInfo}
            className="grid grid-rows-2 grid-flow-col auto-cols-[50%] sm:auto-cols-[33.333%] md:auto-cols-[25%] lg:auto-cols-[20%] overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 sm:pb-8 w-full scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((speaker, index) => (
              <div key={`speaker-${speaker.id || index}`} className="snap-start flex flex-col items-center px-1 sm:px-2 py-2 sm:py-4 w-full">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 sm:mb-5 group cursor-pointer">
                  {/* Blue ring + Image */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-[#00d2ff] overflow-hidden bg-[#00d2ff] flex items-center justify-center z-10">
                    {speaker.image ? (
                      <Image
                        src={speaker.image}
                        alt={speaker.name || "Speaker"}
                        fill
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                        className={`object-cover ${speaker.imageClassName || "object-top scale-105"}`}
                      />
                    ) : (
                      <span className="text-white/50 font-bold text-2xl sm:text-3xl">
                        {speaker.name ? speaker.name.charAt(0) : "S"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-center flex-grow flex flex-col items-center w-full px-1">
                  <h3 className="text-[13px] sm:text-[14px] md:text-base font-bold text-white leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-[13px] text-[#e0e0e0] font-medium leading-snug mt-1 max-w-[90%]">
                    {speaker.affiliation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-[2%] sm:right-[5%] md:right-[8%] lg:right-[10%] xl:right-[12%] z-20 hidden h-[40px] w-[20px] shrink-0 cursor-pointer transition-opacity hover:opacity-80 md:flex md:h-[48px] md:w-[22px] lg:h-[55px] lg:w-[24px] xl:h-[60px] xl:w-[25px] pointer-events-auto md:items-center md:justify-center"
          aria-label="Next speaker"
        >
          <Image src="/images/vector7.svg" alt="" fill className="object-contain" />
        </button>
      </div>

      {totalPages > 1 && (
        <div className="testimonial-dots mt-1 mb-2 flex flex-wrap items-center justify-center gap-1.5 sm:mt-2 sm:mb-0 sm:gap-2 md:mb-3 md:gap-2.5 lg:mb-4">
          {Array.from({ length: totalPages }).map((_, index) => {
            const distance = Math.abs(index - currentPage);
            const sizePx = getDotSizePx(distance);
            return (
              <button
                key={`dot-speaker-${title}-${index}`}
                type="button"
                onClick={() => goToIndex(index)}
                style={{ width: sizePx, height: sizePx, minWidth: sizePx, minHeight: sizePx }}
                className={`rounded-full transition-[width,height,min-width,min-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0 p-0 border-0 ${
                  currentPage === index ? "bg-white opacity-100" : "bg-white opacity-30 hover:opacity-50"
                }`}
                aria-label={`Go to speaker page ${index + 1}`}
                aria-current={currentPage === index ? "true" : undefined}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SpeakersCarousel() {
  return (
    <section
      id="speakers-carousel"
      className="relative mt-0 flex w-full flex-col items-stretch pb-3 pt-6 sm:mt-0 sm:pb-4 sm:pt-3 md:pb-5 md:pt-4 lg:pb-6 lg:pt-5 px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]"
    >
      <div className="max-[640px]:hidden absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
        <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.svg"
            alt="Separator"
            fill
            className="object-fill"
          />
        </div>
      </div>

      <h2 className="font-angkor z-30 text-center text-white max-[639px]:angkor-heading-gutter max-[639px]:relative max-[639px]:mt-10 max-[639px]:mb-4 max-[639px]:pt-2 sm:absolute sm:top-0 sm:left-[4%] sm:right-[4%] sm:mt-0 sm:mb-0 sm:pt-0 md:left-[3%] md:right-[3%] lg:left-[2.5%] lg:right-[2.5%] xl:left-[2.25%] xl:right-[2.25%] sm:flex sm:h-[80px] sm:items-center sm:justify-center sm:pl-[49.2%] sm:pr-4 md:pr-5 lg:pr-6 sm:translate-y-2.5 md:h-[100px] lg:h-[110px] xl:h-[123px]">
        <span className="angkor-title-pocket flex min-h-0 w-full min-w-0 max-w-full flex-1 items-center justify-center">
          <span className="angkor-section-title whitespace-nowrap">
            OUR SPEAKERS
          </span>
        </span>
      </h2>

      <div
        className="hidden shrink-0 sm:block sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px]"
        aria-hidden
      />

      <div className="flex flex-col gap-4 w-full mt-8">
        {sections.map((section, idx) => {
          if (section.type === "static") {
            return (
              <StaticGrid
                key={idx}
                title={section.title}
                speakers={section.data}
              />
            );
          }
          return (
            <SingleCarousel key={idx} title={section.title} slides={section.data} />
          );
        })}
      </div>
    </section>
  );
}
