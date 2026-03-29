import Image from "next/image";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="faq-section relative w-full min-w-0 overflow-x-hidden px-[6%] pt-6 pb-8 text-white sm:px-[5%] sm:py-12 md:px-[5%] md:py-16 lg:px-[4.5%] xl:px-[4%]"
    >
      <div className="max-[640px]:hidden absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
        <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1] scale-x-[-1]">
          <Image
            src="/images/vector11.svg"
            alt="Separator"
            fill
            className="object-fill"
          />
        </div>
      </div>

      {/* Phones: short label + globals media query caps size; sm+: full title in zig-zag pocket */}
      <h2
        className="faq-heading-mobile font-angkor angkor-section-title z-30 text-white max-[639px]:angkor-heading-gutter max-[639px]:relative max-[639px]:mx-auto max-[639px]:mt-10 max-[639px]:mb-8 max-[639px]:w-full max-[639px]:min-w-0 max-[639px]:pt-2 max-[639px]:text-center sm:absolute sm:top-0 sm:left-[4%] sm:right-[4%] sm:mb-0 sm:mt-5 sm:ml-8 sm:pt-0 md:left-[3%] md:right-[3%] lg:left-[2.5%] lg:right-[2.5%] xl:left-[2.25%] xl:right-[2.25%] sm:flex sm:h-[80px] sm:flex-col sm:items-center sm:justify-center sm:pr-[49.2%] sm:pl-2 sm:translate-y-2.5 md:h-[100px] lg:h-[110px] xl:h-[123px]"
        aria-label="Frequently asked questions"
      >
        <span className="inline-flex max-w-full items-baseline gap-0 whitespace-nowrap leading-none sm:hidden">
          <span className="text-white">FAQ</span>
          {/* Uppercase S matches FAQ cap height; lowercase “s” reads tiny in Angkor */}
          <span className="text-[#6aaff1]">s</span>
        </span>
        <span className="hidden leading-[1.08] sm:inline-block sm:text-left">
          FREQUENTLY
          <br />
          <span className="whitespace-nowrap text-[#6aaff1]">
            ASKED QUESTIONS
          </span>
        </span>
      </h2>

      <div
        className="hidden shrink-0 sm:block sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px]"
        aria-hidden
      />

      {/* <h2 className="font-angkor text-[24px] leading-[1.1] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[70px] text-white mb-2 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-12 relative xl:absolute top-0 md:top-0 xl:top-[40px] 2xl:top-[45px] xl:right-[3%] z-10 text-center md:text-right w-full xl:w-auto whitespace-nowrap pr-2 ">
        FREQUENTLY <span className="text-[#6aaff1]">ASKED QUESTIONS</span>
      </h2> */}

      <div className="mt-4 flex w-full min-w-0 max-w-full flex-col-reverse gap-4 max-[639px]:mx-auto max-[639px]:w-[calc(100%-1.5rem)] sm:mt-6 sm:w-full sm:gap-8 md:mt-8 md:gap-10 xl:flex-row xl:gap-14">
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 md:gap-7 min-w-0 items-stretch">
          <div className="bg-white rounded-[5px] px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-black min-h-[260px] sm:min-h-[320px] xl:min-h-[380px] relative w-full min-w-0 box-border">
            <h3 className="font-poppins font-semibold text-[18px] sm:text-[22px] xl:text-[26px] mt-1 sm:mt-2 mb-1 text-center md:text-left">
              Still have Questions?
            </h3>
            <p className="font-poppins text-[13px] sm:text-[15px] md:text-[17px] xl:text-[19px] mb-4 sm:mb-6 text-center md:text-left">
              Contact Us.
            </p>

            <form className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full h-[44px] sm:h-[40px] bg-[#e0e0e0] rounded-[40px] px-4 sm:px-5 text-[13px] sm:text-[15px] md:text-[16px] xl:text-[18px] font-poppins placeholder-black"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email ID*"
                  className="w-full h-[44px] sm:h-[40px] bg-[#e0e0e0] rounded-[40px] px-4 sm:px-5 text-[13px] sm:text-[15px] md:text-[16px] xl:text-[18px] font-poppins placeholder-black"
                />
              </div>
              <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="text"
                  placeholder="Querie*"
                  className="flex-1 h-[44px] sm:h-[40px] bg-[#e0e0e0] rounded-[40px] px-4 sm:px-5 text-[13px] sm:text-[15px] md:text-[16px] xl:text-[18px] font-poppins placeholder-black"
                />
                <button
                  type="submit"
                  className="w-full sm:w-[160px] h-[44px] sm:h-[40px] bg-[#444] text-white rounded-[40px] text-[13px] sm:text-[15px] md:text-[16px] xl:text-[18px] font-poppins"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5 min-w-0">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#d9d9d9] rounded-[5px] px-3 py-3 sm:px-5 sm:py-4 md:px-5 md:py-4 text-black min-h-[120px] sm:min-h-[150px] xl:min-h-[165px] w-full min-w-0 box-border overflow-hidden"
            >
              <h3 className="font-poppins font-semibold text-[16px] sm:text-[20px] xl:text-[24px] mb-1 text-center md:text-left">
                How to join?
              </h3>
              <div className="font-poppins text-[13px] sm:text-[15px] md:text-[17px] xl:text-[19px] text-center md:text-left break-words [overflow-wrap:break-word] [word-break:break-word]">
                <p>loremjhebgjhdsbkjdvkjdkvhbjdhj</p>
                <p>hesbdjcsudyub</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
