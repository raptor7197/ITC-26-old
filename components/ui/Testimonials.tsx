"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const extendedTestimonials = [...testimonials, testimonials[0]];
  const totalSlides = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % totalSlides;
      });
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
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="relative flex w-full shrink-0 justify-center px-0.5 sm:px-1"
                >
                  <div className="relative flex w-full min-h-[160px] flex-col rounded-sm bg-[#d9d9d9] p-3 shadow-lg sm:min-h-[200px] sm:mt-4 sm:my-0 sm:p-4 md:min-h-[220px] md:p-6 md:px-6 xl:min-h-[250px] xl:p-10">
                    <div className="flex shrink-0 items-start gap-2 self-start sm:gap-3 md:gap-4">
                      <div className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] xl:h-[66px] xl:w-[66px]">
                        <Image
                          src={testimonial.img}
                          alt="Avatar"
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="mb-1 font-poppins text-[14px] leading-none text-black sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[24px]">
                          {testimonial.name}
                        </h4>
                        <p className="font-poppins text-[12px] leading-none text-black sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px]">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex w-full flex-col items-center sm:mt-10 md:mt-12">
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
                            {testimonial.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

      <div className="testimonial-dots mt-5 mb-2 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:mb-0 md:mb-3 md:gap-3 lg:mb-9">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[12px] h-[12px] min-w-[12px] min-h-[12px] max-w-[12px] max-h-[12px] rounded-full transition-all duration-300 flex-shrink-0 p-0 border-0 ${
              currentIndex === index
                ? "bg-white opacity-100"
                : "bg-white opacity-30 hover:opacity-50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
