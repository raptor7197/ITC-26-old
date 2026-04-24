import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function HeroWithTimer() {
  const px =
    "px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

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
              className="absolute top-0 bottom-0 sm:bottom-[70px] md:bottom-[90px] lg:bottom-[100px] xl:bottom-[115px]
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

          {/* ── Content row ── */}
          <div
            className="relative z-10 w-full flex flex-col sm:flex-row items-start gap-0
                       min-h-[220px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px] xl:min-h-[500px]"
          >
            {/* Left: logo + headings */}
            <div
              className="relative z-30 flex w-full min-w-0 max-w-full flex-col items-start max-sm:items-center
                         sm:w-[55%] md:w-[54%] lg:w-[52%] xl:w-[50%]
                         sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 sm:pr-0"
            >
              {/* ITC Logo — bigger across all breakpoints */}
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

              {/* Headings */}
              <div className="w-full min-w-0 max-w-full max-sm:text-center text-white font-space-grotesk font-bold">
                <div
                  className="hero-title
                             text-[28px]  leading-[1.05]
                             sm:text-[38px] sm:leading-tight
                             md:text-[44px]
                             lg:text-[50px]
                             xl:text-[60px]"
                >
                  <p className="whitespace-normal">10<sup>th</sup> IEEE International</p>
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

                {/* Below sm (640px): skew paints past layout box — clip + narrow so bar stays inside dashed guides */}
                <div className="mt-5 flex w-full min-w-0 max-w-full flex-col items-stretch overflow-x-clip sm:hidden">
                  <div className="mx-auto w-[calc(100%-2.5rem)] min-w-0 max-w-full">
                    <div
                      className="w-full -skew-x-[20deg] rounded-sm border border-white/35 bg-gradient-to-r from-[#022241] to-[#0557A7] py-2 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                    >
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
              </div>
            </div>

            {/* Right spacer — keeps the left column from stretching to full width */}
            <div className="hidden sm:block flex-1 min-w-0" aria-hidden />
          </div>

          {/* Timer / zig-zag bar: hidden below sm; mobile uses skewed capsule timer + ABOUT US in hero column */}
          <header
            className="relative hidden w-full flex-shrink-0 min-w-0 z-10
                       h-[55px] sm:block sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[115px]
                       mt-3 sm:mt-5 md:mt-7 lg:mt-9 xl:mt-11"
          >
            {/* Dashed zig-zag SVG line */}
            <div className="absolute inset-0 pointer-events-none opacity-60 sm:opacity-70 md:opacity-80 z-0">
              <Image
                src="/images/vector9.svg"
                alt=""
                fill
                className="object-fill"
              />
            </div>

            {/* ABOUT US label (sm+) */}
            <div className="hero-zigzag-title-pocket absolute top-4 left-0 z-20 flex h-full w-[41%] min-w-0 items-center justify-center overflow-hidden px-1">
              <h2 className="font-angkor min-w-0 max-w-full text-center whitespace-nowrap text-white">
                <span className="angkor-section-title">ABOUT US</span>
              </h2>
            </div>

            {/* Countdown timer */}
            <div
              className="absolute top-0 right-0 left-[41%] h-full overflow-hidden z-20"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 15.5% 100%, 0 0)",
              }}
            >
              <CountdownTimer variant="desktop" />
            </div>
          </header>
        </div>
      </section>
    </div>
  );
}
