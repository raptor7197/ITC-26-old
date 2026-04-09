import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "WHO SHOULD ATTEND?",
    a: [
      "Students, researchers, faculty, and industry professionals in VLSI, semiconductor testing, and electronics are encouraged to attend.",
      "It is ideal for anyone interested in chip design, validation, and emerging test technologies.",
    ],
  },
  {
    q: "Is the conference fully offline, virtual, or hybrid?",
    a: [
      "ITC India 2026 is primarily an in-person (offline) conference to enable better networking and collaboration.",
      "Some sessions may be accessible in hybrid or virtual mode based on final arrangements.",
    ],
  },
  {
    q: "What are the key focus areas?",
    a: [
      "The conference covers VLSI testing, DFT, silicon debug, reliability, and hardware security.",
      "It also includes emerging areas like AI in testing and next-gen technologies such as IoT and 5G/6G.",
    ],
  },
  {
    q: "Is there a student research forum or competition?",
    a: [
      "Yes, ITC India features a Student Research Forum and the ART (Academia Research Track) for showcasing student research.",
      "These platforms offer feedback, recognition, and interaction with leading industry experts.",
    ],
  },
  {
    q: "What is the ITC India Hackathon?",
    a: [
      "The hackathon is a team-based challenge focused on solving real-world problems in semiconductor testing.",
      "Participants work on industry-relevant topics with mentorship, competing for prizes and recognition.",
    ],
  },
  {
    q: "What is the ITC India Fellowship Program?",
    a: [
      "The fellowship supports students and researchers with financial aid to attend the conference.",
      "It also offers access to sessions, networking opportunities, and exposure to industry leaders.",
    ],
  },
];

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
        className="faq-heading-mobile font-angkor z-30 text-white max-[639px]:angkor-heading-gutter max-[639px]:relative max-[639px]:mx-auto max-[639px]:mt-10 max-[639px]:mb-8 max-[639px]:w-full max-[639px]:min-w-0 max-[639px]:pt-2 max-[639px]:text-center sm:absolute sm:top-0 sm:left-[4%] sm:right-[4%] sm:mb-0 sm:mt-5 sm:ml-8 sm:pt-0 md:left-[3%] md:right-[3%] lg:left-[2.5%] lg:right-[2.5%] xl:left-[2.25%] xl:right-[2.25%] sm:flex sm:h-[80px] sm:flex-col sm:items-center sm:justify-center sm:pr-[49.2%] sm:pl-2 sm:translate-y-2.5 md:h-[100px] lg:h-[110px] xl:h-[123px]"
        aria-label="Frequently asked questions"
      >
        <span className="angkor-title-pocket flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col items-center justify-center max-[639px]:mx-auto">
          <span className="angkor-section-title inline-flex max-w-full items-baseline gap-0 whitespace-nowrap leading-none sm:hidden">
            <span className="text-white">FAQ</span>
            {/* Uppercase S matches FAQ cap height; lowercase “s” reads tiny in Angkor */}
            <span className="text-[#6aaff1]">s</span>
          </span>
          <span className="hidden w-full min-w-0 max-w-full text-center sm:block sm:text-left angkor-section-title faq-zigzag-title">
            <span className="block whitespace-nowrap text-white">
              FREQUENTLY
            </span>
            <span className="block whitespace-nowrap text-[#6aaff1]">
              ASKED QUESTIONS
            </span>
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
          <div className="bg-white rounded-[5px] px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-black min-h-[260px] sm:min-h-[320px] xl:min-h-[380px] relative w-full min-w-0 box-border flex flex-col items-center justify-center">
            <h3 className="font-poppins font-semibold text-[18px] sm:text-[22px] xl:text-[26px] mt-1 sm:mt-2 mb-2 text-center">
              Still have Questions?
            </h3>
            <p className="font-poppins text-[13px] sm:text-[15px] md:text-[17px] xl:text-[19px] mb-6 sm:mb-8 text-center text-gray-700">
              We're here to help! Reach out to us for any further inquiries.
            </p>

            <Link
              href="/contact"
              className="w-full sm:w-auto min-w-[200px] h-[44px] sm:h-[48px] bg-[#444] hover:bg-[#222] text-white rounded-[40px] text-[14px] sm:text-[16px] xl:text-[18px] font-poppins font-medium flex items-center justify-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5 min-w-0 h-full max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#d9d9d9] shrink-0 rounded-[5px] px-3 py-3 sm:px-5 sm:py-4 md:px-5 md:py-4 text-black min-h-[120px] sm:min-h-[150px] xl:min-h-[165px] w-full min-w-0 box-border overflow-hidden"
            >
              <h3 className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] mb-2 text-center md:text-left">
                {faq.q}
              </h3>
              <div className="font-poppins text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] text-center md:text-left break-words [overflow-wrap:break-word] [word-break:break-word] space-y-1">
                {faq.a.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
