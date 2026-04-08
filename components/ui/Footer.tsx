import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/ui/NewsletterForm";

const footerPx = "px-3 sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

const footerColTitle =
  "font-poppins font-semibold text-[15px] sm:text-[17px] md:text-[18px] text-white tracking-tight mb-3 sm:mb-4 underline decoration-white/40 underline-offset-4";

const footerLink =
  "font-poppins text-[14px] sm:text-[15px] md:text-[16px] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded-sm";

const footerContentWidth = "mx-auto min-w-0 w-full max-w-[min(100%,72rem)]";

const footerNewsletterWidth =
  "mx-auto min-w-0 w-full max-w-[min(100%,72rem)] max-[639px]:max-w-[calc(100%-1.5rem)]";

const footerMainMargin = "min-w-0 mx-2 sm:mx-[100px]";

export default function Footer() {
  return (
    <footer
      className={`relative w-full min-w-0 overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 text-white ${footerPx}`}
    >
      <div className={`relative z-10 ${footerMainMargin}`}>
        <div
          className={`relative box-border my-[clamp(8px,2vw,16px)] mb-5 max-w-4/5 overflow-hidden sm:mb-6 md:mb-8
                    px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4
                    bg-[#fcfcfc]
                    flex min-w-0 flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between
                    ${footerNewsletterWidth}`}
        >
          <h3
            className="font-roboto-slab font-semibold text-[#022241] text-center md:text-left
                      text-[clamp(1.05rem,3.2vw,2rem)] leading-snug max-w-full text-balance shrink-0"
          >
            Subscribe to our <br className="hidden sm:block" /> Newsletter
          </h3>

          <NewsletterForm />
        </div>
      </div>

      <div className="w-full border-t border-dashed border-white/40 mt-8 sm:mt-10 relative z-10" />

      <div className={`relative z-10 ${footerMainMargin}`}>
        <nav
          className="relative mt-8 min-w-0 pt-10 sm:mt-10 sm:pt-12 md:mt-12 md:pt-16 pb-8"
          aria-label="Footer"
        >
          <div
            className={`grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 sm:gap-y-12 lg:gap-x-16 items-start ${footerContentWidth}`}
          >
            <div className="min-w-0 col-span-2 flex items-center justify-center sm:justify-start sm:col-span-1">
              <Image
                src="/itc-logo.svg"
                alt="ITC Logo"
                width={120}
                height={120}
                className="w-24 h-24 md:w-48 md:h-48 object-contain"
              />
            </div>

            <div className="min-w-0 ml-5">
              <h4 className={footerColTitle}>Submissions</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/cfp" className={footerLink}>
                    Call for Papers
                  </Link>
                </li>
                <li>
                  <Link href="/cft" className={footerLink}>
                    Call for Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/art" className={footerLink}>
                    Academia Research Track
                  </Link>
                </li>
                <li>
                  <Link href="/call-for-posters" className={footerLink}>
                    Call for Posters
                  </Link>
                </li>
                <li>
                  <Link href="/call-for-workshop" className={footerLink}>
                    Call for Workshops
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0 ml-10">
              <h4 className={footerColTitle}>Conference</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/" className={footerLink}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className={footerLink}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className={footerLink}>
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className={footerLink}>
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={footerLink}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0 ml-5">
              <h4 className={footerColTitle}>Conference Location</h4>
              <Link
                href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA"
                className={`${footerLink} inline-block font-medium`}
              >
                Radisson Blu, Bengaluru
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-full border-t border-dashed border-white/40 mt-12 sm:mt-14 relative z-10">
        <div
          className={`pt-6 pb-2 text-center font-poppins text-[11px] leading-relaxed text-white sm:pt-8 sm:text-[13px] md:text-sm ${footerContentWidth}`}
        >
          2026 © ITC Test Week India | All rights reserved
        </div>
      </div>
    </footer>
  );
}
