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
    img: "https://media.licdn.com/dms/image/v2/C4D03AQG4y_6qtMBuyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631805653078?e=1776902400&v=beta&t=Ekg2FWCMuSHr09pKlqyeTDgIeFuW39d0SX7vRqMkccg",
  },
  {
    id: 2,
    name: "Ramesh Saidapet",
    company: "NXP Semiconductor",
    quote:
      "It was really exciting to see the energy and the combination of the young and experienced engineers.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQG6ODB5AsuGpg/profile-displayphoto-scale_400_400/B56ZnLIxk2KEAk-/0/1760049700586?e=1776902400&v=beta&t=Mq9PTLpiXy0MBFpKtgDUO_Klxwleb5LnzVLrJzoJQos",
  },
  {
    id: 3,
    name: "Dr. Sakthivel Ramachandran",
    company: "VIT Vellore",
    quote:
      "This is one of the beautiful workshops as this conference aims for promoting testing all over India.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFi2QhuCTLLeA/profile-displayphoto-scale_400_400/B56Zwsgk6JHQAg-/0/1770273265209?e=1776902400&v=beta&t=BM3OsHn5wi7zBvvBPcyKYB0ACiw4LWql5YoJVgzUEgo",
  },
  {
    id: 4,
    name: "Kshitij Kulshreshtha",
    company: "Synopsys",
    quote:
      "I really enjoyed the ambience around it, the energy that the different tech guys were having here, it was quite the enjoyable ambience for me.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGmesUfhw76Cg/profile-displayphoto-shrink_400_400/B56ZRE8V2vH0Ag-/0/1736323456867?e=1776902400&v=beta&t=gldZMq-agJAZhpr4cKxpvk1Bdzl87Gbu1nEtfw2nz24",
  },
  {
    id: 5,
    name: "Suresh Babu",
    company: "Caliber Interconnect",
    quote: "I appreciate the IEEE organising committee.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFa4uV5hBXVtA/profile-displayphoto-scale_400_400/B56ZkwtnhSHkAk-/0/1757458891009?e=1776902400&v=beta&t=ip85HoG0MinAwoXsLJeztZTOVDdxqbmz9jC17AM0Sjo",
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

          <div className="min-w-0 w-full max-w-[min(100%,26rem)] overflow-hidden max-[639px]:mx-auto max-[639px]:w-[calc(100%-1.5rem)] sm:max-w-[28rem] md:max-w-[30rem] lg:max-w-[32rem] xl:max-w-[36rem]">
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
                  <div className="relative flex w-full min-h-[200px] flex-col rounded-sm bg-[#d9d9d9] p-3 shadow-lg sm:min-h-[240px] sm:mt-4 sm:my-0 sm:p-4 md:min-h-[270px] md:p-6 md:px-6 xl:min-h-[310px] xl:p-10">
                    <div className="flex shrink-0 items-start gap-2 self-start sm:gap-3 md:gap-4">
                      <div className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] xl:h-[66px] xl:w-[66px]">
                        <Image
                          src={testimonial.img}
                          alt="Avatar"
                          fill
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

                    <div className="mt-8 flex w-full justify-center sm:mt-10 md:mt-12">
                      <div className="relative w-full max-w-[92%] overflow-hidden break-words pl-5 text-left font-poppins text-[11px] text-black sm:max-w-[88%] sm:pl-6 sm:text-[13px] md:max-w-[85%] md:pl-9 md:text-[16px] md:pr-6 xl:max-w-[82%] xl:text-[18px] 2xl:text-[24px] xl:pr-10">
                        <div className="absolute left-0 top-0 h-[8px] w-[10px] sm:h-[11px] sm:w-[14px] md:h-[14px] md:w-[18px] xl:h-[18px] xl:w-[24px]">
                          <Image
                            src="/images/vector.svg"
                            alt=""
                            fill
                            className="object-contain object-top"
                            aria-hidden
                          />
                        </div>
                        <p className="flex items-baseline gap-4">
                          <span>{testimonial.quote}</span>
                          <span className="relative inline-flex h-[8px] w-[10px] shrink-0 sm:h-[11px] sm:w-[14px] md:h-[14px] md:w-[18px] xl:h-[18px] xl:w-[24px]">
                            <Image
                              src="/images/vector-open.svg"
                              alt=""
                              fill
                              className="object-contain object-bottom"
                              aria-hidden
                            />
                          </span>
                        </p>
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
