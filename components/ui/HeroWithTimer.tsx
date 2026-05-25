import Image from "next/image";
import RegistrationHeroCTA from "@/components/ui/RegistrationHeroCTA";

export default function HeroWithTimer() {
  const px = "px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

  return (
    <div className="relative w-full">
      <section
        id="hero"
        className={`hero-section relative w-full flex flex-col ${px} pt-[88px] sm:pt-[90px] md:pt-[100px] lg:pt-[110px] xl:pt-[120px] pb-0`}
      >
        <div className="relative w-full flex flex-col">
          <div
            className="hidden sm:block absolute inset-0 pointer-events-none z-0 overflow-hidden"
            aria-hidden
          >
            <div
              className="absolute top-0 bottom-0
                            left-[52%] sm:left-[54%] md:left-[53%] lg:left-[51%] xl:left-[49%]
                            right-0"
            >
              <Image
                src="/images/arduino.svg"
                alt="Circuit Illustration"
                fill
                className="object-contain object-right-bottom"
                priority
                sizes="(max-width: 768px) 0vw, (max-width: 1024px) 47vw, 51vw"
              />
            </div>
          </div>

          <div className="relative z-10 w-full flex flex-col sm:flex-row items-start gap-0">
            <div
              className="relative z-30 flex w-full min-w-0 max-w-full flex-col items-start max-sm:items-center
                         sm:w-[55%] md:w-[54%] lg:w-[52%] xl:w-[50%]
                         sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 sm:pr-0"
            >
              <div
                className="relative flex-shrink-0 mb-2 sm:mb-3 md:mb-4 lg:mb-5
                           w-[90px]  h-[90px]
                           sm:w-[110px] sm:h-[110px]
                           md:w-[130px] md:h-[130px]
                           lg:w-[155px] lg:h-[155px]
                           xl:w-[175px] xl:h-[175px]"
              >
                <Image
                  src="/itc-logo.svg"
                  alt="ITC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="w-full min-w-0 max-w-full max-sm:text-center text-white font-space-grotesk font-bold">
                <div
                  className="hero-title
                             text-[28px]  leading-[1.05]
                             sm:text-[38px] sm:leading-tight
                             md:text-[44px]
                             lg:text-[50px]
                             xl:text-[60px]"
                >
                  <p className="whitespace-normal">
                    10<sup>th</sup> IEEE International
                  </p>
                  <p>Test Conference 2026</p>
                  <p>INDIA</p>
                </div>

                <h3
                  className="hero-subtitle font-space-grotesk font-bold uppercase
                             text-[11px]  leading-[1.3]  mt-2
                             sm:text-[15px] sm:mt-3
                             md:text-[17px] md:mt-4
                             lg:text-[19px]
                             xl:text-[21px] xl:mt-5
                             max-w-full"
                >
                  Theme: REIMAGINING TEST IN THE ERA OF INTELLIGENT SILICON
                </h3>
                <p className="mt-3 sm:mt-4 text-[#6aaff1] font-semibold text-sm sm:text-base md:text-lg">
                  JULY 19-21, 2026 | RADISSON BLU, BENGALURU
                </p>
                <RegistrationHeroCTA compact variant="page" />
              </div>
            </div>

            <div className="hidden sm:block flex-1 min-w-0" aria-hidden />
          </div>
        </div>
      </section>
    </div>
  );
}
