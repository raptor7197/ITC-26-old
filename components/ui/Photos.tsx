"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const photos = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const extendedPhotos = [...photos, photos[0]];
  const totalSlides = photos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      id="photos"
      className="relative mt-0 flex w-full flex-col items-stretch pb-1 pt-6 sm:mt-0 sm:pb-2 sm:pt-3 md:pb-2 md:pt-4 lg:pb-3 lg:pt-5 px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]"
    >
      <div className="max-[640px]:hidden absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
        <div className="absolute inset-0 h-full w-full rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.svg"
            alt="Separator"
            fill
            className="object-fill"
          />
        </div>
      </div>

      <h2 className="font-angkor z-30 text-center text-white max-[639px]:angkor-heading-gutter max-[639px]:relative max-[639px]:mt-10 max-[639px]:mb-4 max-[639px]:pt-2 sm:absolute sm:top-0 sm:left-[4%] sm:right-[4%] sm:mt-0 sm:mb-0 sm:pt-0 md:left-[3%] md:right-[3%] lg:left-[2.5%] lg:right-[2.5%] xl:left-[2.25%] xl:right-[2.25%] sm:flex sm:h-[80px] sm:translate-y-2.5 sm:items-center sm:justify-center sm:pl-[49.2%] sm:pr-2 md:h-[100px] lg:h-[110px] xl:h-[123px]">
        <span className="angkor-title-pocket angkor-title-pocket--photos flex min-h-0 w-full min-w-0 max-w-full flex-1 items-center justify-center">
          <span className="angkor-section-title whitespace-nowrap">
            PHOTOS
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
            className="relative hidden h-[40px] w-[20px] shrink-0 rotate-180 cursor-pointer transition-opacity hover:opacity-80 md:flex md:h-[48px] md:w-[22px] md:items-center md:justify-center lg:h-[55px] lg:w-[24px] xl:h-[60px] xl:w-[25px] pointer-events-auto"
            aria-label="Previous photo"
          >
            <Image
              src="/images/vector8.svg"
              alt=""
              fill
              className="object-contain"
            />
          </button>

          <div className="min-w-0 w-full max-w-[min(100%,26rem)] overflow-hidden max-[639px]:mx-auto max-[639px]:w-[calc(100%-1.5rem)] sm:max-w-[28rem] md:max-w-[30rem] lg:max-w-[32rem] xl:max-w-[36rem]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {extendedPhotos.map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  className="relative flex w-full shrink-0 justify-center px-0.5 sm:px-1"
                >
                  <div className="relative w-full min-h-[200px] rounded-sm bg-[#d9d9d9] p-3 shadow-lg sm:my-0 sm:mt-4 sm:min-h-[240px] sm:p-4 md:min-h-[270px] md:p-6 md:px-6 xl:min-h-[310px] xl:p-10" />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="relative hidden h-[40px] w-[20px] shrink-0 cursor-pointer transition-opacity hover:opacity-80 md:flex md:h-[48px] md:w-[22px] md:items-center md:justify-center lg:h-[55px] lg:w-[24px] xl:h-[60px] xl:w-[25px] pointer-events-auto"
            aria-label="Next photo"
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

      <div className="testimonial-dots mt-5 mb-2 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:mb-0 md:mb-3 md:gap-3 lg:mb-3">
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-[12px] w-[12px] min-h-[12px] min-w-[12px] max-h-[12px] max-w-[12px] flex-shrink-0 rounded-full border-0 p-0 transition-all duration-300 ${
              currentIndex === index
                ? "bg-white opacity-100"
                : "bg-white opacity-30 hover:opacity-50"
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
