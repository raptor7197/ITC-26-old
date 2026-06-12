"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const speakerIconClass = "h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5";

function SpeakerOnIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={speakerIconClass}
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function SpeakerMutedIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={speakerIconClass}
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <line x1="1.5" y1="5" x2="14" y2="20" />
    </svg>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Adam Cron",
    company: "Synopsys",
    quote:
      "ITC was fantastic. It was a huge conference as the one in the States, which I've been to for, you know, 30 something years, but this one was really great.",
    img: "/images/testimonials/adam_cron.png",
  },
  {
    id: 2,
    name: "Ramesh Saidapet",
    company: "NXP Semiconductor",
    quote:
      "It was really exciting to see the energy and the combination of the young and experienced engineers.",
    img: "/images/testimonials/ramesh_saidapet.png",
  },
  {
    id: 3,
    name: "Dr. Sakthivel Ramachandran",
    company: "VIT Vellore",
    quote:
      "This is one of the beautiful workshops as this conference aims for promoting testing all over India.",
    img: "/images/testimonials/sakthivel_ramachandran.png",
  },
  {
    id: 4,
    name: "Kshitij Kulshreshtha",
    company: "Synopsys",
    quote:
      "I really enjoyed the ambience around it, the energy that the different tech guys were having here, it was quite the enjoyable ambience for me.",
    img: "/images/testimonials/kshitij_kulshreshtha.png",
  },
  {
    id: 5,
    name: "Suresh Babu",
    company: "Caliber Interconnect",
    quote: "I appreciate the IEEE organising committee.",
    img: "/images/testimonials/suresh_babu.png",
  },
];

const testimonialVideos = Array.from(
  { length: 14 },
  (_, i) => `/videos/testimonials/${i + 1}.mp4`,
).filter(src => src !== "/videos/testimonials/4.mp4");

const CARD_COUNT = testimonials.length;

type CardSlide = { type: "card"; id: number; name: string; company: string; quote: string; img: string };
type VideoSlide = { type: "video"; src: string };
type Slide = CardSlide | VideoSlide;

const slides: Slide[] = [
  ...testimonials.map((t) => ({ type: "card" as const, ...t })),
  ...testimonialVideos.map((src) => ({ type: "video" as const, src })),
];

const slideClassName =
  "relative flex w-full aspect-video flex-col overflow-hidden rounded-sm bg-[#d9d9d9] shadow-lg sm:mt-4 sm:my-0";

const DOT_BASE_SIZE_PX = 12;
const DOT_MIN_SCALE_PERCENT = 20;
const DOT_SCALE_STEP_PERCENT = 20;
const VIDEO_PRELOAD_AHEAD = 2;

function getDotScalePercent(distanceFromActive: number): number {
  const scale = 100 - distanceFromActive * DOT_SCALE_STEP_PERCENT;
  return Math.max(scale, DOT_MIN_SCALE_PERCENT);
}

function getDotSizePx(distanceFromActive: number): number {
  return (DOT_BASE_SIZE_PX * getDotScalePercent(distanceFromActive)) / 100;
}

function getVideoIndicesToLoad(currentIndex: number, total: number): Set<number> {
  const indices = new Set<number>();

  for (let offset = 0; offset <= VIDEO_PRELOAD_AHEAD; offset++) {
    const index = (currentIndex + offset) % total;
    if (slides[index]?.type === "video") {
      indices.add(index);
    }
  }

  const previousIndex = (currentIndex - 1 + total) % total;
  if (slides[previousIndex]?.type === "video") {
    indices.add(previousIndex);
  }

  return indices;
}

function getVideoPreloadMode(
  index: number,
  currentIndex: number,
): "auto" | "metadata" | "none" {
  if (index === currentIndex) return "auto";
  if (
    index === (currentIndex + 1) % slides.length ||
    index === (currentIndex + 2) % slides.length
  ) {
    return "auto";
  }
  return "metadata";
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];
  const videoIndicesToLoad = useMemo(
    () => getVideoIndicesToLoad(currentIndex, totalSlides),
    [currentIndex, totalSlides],
  );

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleMute = useCallback(() => {
    setIsUnmuted((prev) => {
      const next = !prev;
      const video = videoRefs.current[currentIndex];
      if (video) {
        video.muted = !next;
      }
      return next;
    });
  }, [currentIndex]);

  const handleVideoEnded = useCallback(() => {
    goToNext();
  }, [goToNext]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (currentSlide?.type !== "card") return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, currentSlide?.type, totalSlides]);

  useEffect(() => {
    if (!sectionInView || currentSlide?.type !== "video") return;

    const video = videoRefs.current[currentIndex];
    if (!video?.src) return;

    video.muted = !isUnmuted;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      playVideo();
      return;
    }

    const handleCanPlay = () => {
      playVideo();
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [currentIndex, currentSlide?.type, isUnmuted, sectionInView]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video || slides[index]?.type !== "video") return;
      if (index !== currentIndex) {
        video.pause();
      }
    });
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
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
            TESTIMONIALS
          </span>
        </span>
      </h2>

      <div
        className="hidden shrink-0 sm:block sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px]"
        aria-hidden
      />

      <div className="relative mb-0 w-full pt-1 sm:mb-0 sm:pt-2 md:pt-3">
        <div className="flex w-full items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-16">
          <button
            type="button"
            onClick={goToPrev}
            className="relative hidden h-[40px] w-[20px] shrink-0 cursor-pointer transition-opacity hover:opacity-80 md:flex md:h-[48px] md:w-[22px] lg:h-[55px] lg:w-[24px] xl:h-[60px] xl:w-[25px] rotate-180 pointer-events-auto md:items-center md:justify-center"
            aria-label="Previous testimonial"
          >
            <Image
              src="/images/vector8.svg"
              alt=""
              fill
              className="object-contain"
            />
          </button>

          <div className="min-w-0 w-full max-w-[min(100%,29rem)] overflow-hidden max-[639px]:mx-auto max-[639px]:w-[calc(100%-1.5rem)] sm:max-w-[33rem] md:max-w-[37rem] lg:max-w-[41rem] xl:max-w-[45rem]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {slides.map((slide, index) => {
                const isActive = index === currentIndex;
                const shouldLoadVideo =
                  slide.type === "video" &&
                  sectionInView &&
                  videoIndicesToLoad.has(index);
                const videoSrc =
                  slide.type === "video" && shouldLoadVideo ? slide.src : undefined;

                return (
                  <div
                    key={
                      slide.type === "card"
                        ? `card-${slide.id}`
                        : `video-${slide.src}`
                    }
                    className="relative flex w-full shrink-0 justify-center px-0.5 sm:px-1"
                  >
                    {slide.type === "card" ? (
                      <div
                        className={`${slideClassName} p-3 sm:p-4 md:p-5 md:px-6 xl:p-8 xl:px-10`}
                      >
                        <div className="flex shrink-0 items-start gap-2 self-start sm:gap-3 md:gap-4">
                          <div className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] xl:h-[66px] xl:w-[66px]">
                            <Image
                              src={slide.img}
                              alt=""
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="mb-1 font-poppins text-[14px] leading-none text-black sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[24px]">
                              {slide.name}
                            </h4>
                            <p className="font-poppins text-[12px] leading-none text-black sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px]">
                              {slide.company}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex min-h-0 flex-1 flex-col items-center justify-center sm:mt-6 md:mt-8">
                          <div className="relative mx-auto w-full max-w-[92%] overflow-visible break-words text-left font-poppins text-[11px] text-black sm:max-w-[88%] sm:text-[13px] md:max-w-[85%] md:text-[16px] xl:max-w-[82%] xl:text-[18px] 2xl:text-[24px]">
                            <div className="relative text-left">
                              <div
                                className="pointer-events-none absolute left-0 top-2.5 z-0 h-[8px] w-[10px] sm:top-3 sm:h-[11px] sm:w-[14px] md:top-3.5 md:h-[14px] md:w-[18px] xl:top-4 xl:h-[18px] xl:w-[24px]"
                                aria-hidden
                              >
                                <Image
                                  src="/images/vector.svg"
                                  alt=""
                                  fill
                                  className="object-contain object-left-top"
                                  aria-hidden
                                />
                              </div>
                              <div
                                className="pointer-events-none absolute bottom-2.5 right-0 z-0 h-[8px] w-[10px] sm:bottom-3 sm:h-[11px] sm:w-[14px] md:bottom-3.5 md:h-[14px] md:w-[18px] xl:bottom-4 xl:h-[18px] xl:w-[24px]"
                                aria-hidden
                              >
                                <Image
                                  src="/images/vector-open.svg"
                                  alt=""
                                  fill
                                  className="object-contain object-right-bottom"
                                  aria-hidden
                                />
                              </div>
                              <p className="relative z-[1] pl-[50px] pt-[28px] pr-[50px] pb-[28px] text-left sm:pl-[54px] sm:pt-[31px] sm:pr-[54px] sm:pb-[31px] md:pl-[58px] md:pt-[34px] md:pr-[58px] md:pb-[34px] xl:pl-[64px] xl:pt-[38px] xl:pr-[64px] xl:pb-[38px]">
                                {slide.quote}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={slideClassName}>
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={videoSrc}
                          className="absolute inset-0 h-full w-full object-cover"
                          playsInline
                          muted={!isUnmuted || !isActive}
                          preload={
                            shouldLoadVideo
                              ? getVideoPreloadMode(index, currentIndex)
                              : "none"
                          }
                          onEnded={
                            isActive ? handleVideoEnded : undefined
                          }
                          onClick={isActive ? toggleMute : undefined}
                        />
                        {isActive && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute();
                            }}
                            className="absolute bottom-2 right-2 z-10 inline-flex h-6 min-w-[7.75rem] items-center justify-center gap-1.5 rounded-full bg-black/50 px-2.5 font-poppins text-[10px] leading-none text-white backdrop-blur-sm sm:bottom-3 sm:right-3 sm:h-7 sm:min-w-[8.25rem] sm:gap-2 sm:px-3 sm:text-[11px] md:text-xs pointer-events-auto"
                            aria-label={
                              isUnmuted ? "Tap to mute" : "Tap to unmute"
                            }
                          >
                            <span className="inline-grid shrink-0">
                              <span
                                className="col-start-1 row-start-1 invisible"
                                aria-hidden
                              >
                                Tap to unmute
                              </span>
                              <span className="col-start-1 row-start-1">
                                {isUnmuted ? "Tap to mute" : "Tap to unmute"}
                              </span>
                            </span>
                            <span className="flex h-3.5 w-4 shrink-0 items-center justify-center sm:h-4 sm:w-4">
                              {isUnmuted ? (
                                <SpeakerOnIcon />
                              ) : (
                                <SpeakerMutedIcon />
                              )}
                            </span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="relative hidden h-[40px] w-[20px] shrink-0 cursor-pointer transition-opacity hover:opacity-80 md:flex md:h-[48px] md:w-[22px] lg:h-[55px] lg:w-[24px] xl:h-[60px] xl:w-[25px] pointer-events-auto md:items-center md:justify-center"
            aria-label="Next testimonial"
          >
            <Image
              src="/images/vector7.svg"
              alt=""
              fill
              className="object-contain"
            />
          </button>
        </div>
      </div>

      <div className="testimonial-dots mt-5 mb-2 flex flex-wrap items-center justify-center gap-1.5 sm:mt-6 sm:mb-0 sm:gap-2 md:mb-3 md:gap-2.5 lg:mb-9">
        {slides.map((slide, index) => {
          const distance = Math.abs(index - currentIndex);
          const sizePx = getDotSizePx(distance);

          return (
            <button
              key={
                slide.type === "card"
                  ? `dot-card-${slide.id}`
                  : `dot-video-${index - CARD_COUNT}`
              }
              type="button"
              onClick={() => goToIndex(index)}
              style={{
                width: sizePx,
                height: sizePx,
                minWidth: sizePx,
                minHeight: sizePx,
              }}
              className={`rounded-full transition-[width,height,min-width,min-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0 p-0 border-0 ${
                currentIndex === index
                  ? "bg-white opacity-100"
                  : "bg-white opacity-30 hover:opacity-50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            />
          );
        })}
      </div>
    </section>
  );
}
