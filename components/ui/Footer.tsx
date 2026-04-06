import Link from "next/link";
import Image from "next/image";

const footerPx = "px-3 sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

const footerColTitle =
  "font-poppins font-semibold text-[15px] sm:text-[17px] md:text-[18px] text-white tracking-tight mb-3 sm:mb-4";

const footerLink =
  "font-poppins text-[14px] sm:text-[15px] md:text-[16px] text-white/90 underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded-sm";

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
          className={`relative box-border my-[clamp(16px,4vw,32px)] mb-10 max-w-4/5 overflow-hidden sm:mb-12 md:mb-16
                    px-4 py-[clamp(18px,4vw,28px)] sm:px-6 sm:py-5 md:px-8 md:py-6
                    bg-[#fcfcfc]
                    flex min-w-0 flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between
                    ${footerNewsletterWidth}`}
        >
          <h3
            className="font-roboto-slab font-semibold text-[#022241] text-center md:text-left
                      text-[clamp(1.05rem,3.2vw,2rem)] leading-snug max-w-full text-balance shrink-0"
          >
            Subscribe to our <br className="hidden sm:block" /> Newsletter
          </h3>

          <div className="flex w-full min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-end">
            <input
              type="email"
              placeholder="Email Address"
              className="min-h-[44px] w-full min-w-0 flex-1 bg-[#011f4b] px-4 text-white
                        placeholder:text-white/50 outline-none ring-0 border-0
                        text-[clamp(13px,2.5vw,1.125rem)] sm:min-h-[40px]"
            />
            <button
              type="button"
              className="min-h-[44px] w-full shrink-0 bg-white px-6 font-poppins font-medium text-black shadow-sm
                        flex items-center justify-center whitespace-nowrap
                        text-[clamp(0.875rem,2.2vw,1.125rem)]
                        sm:w-auto sm:min-w-[7.5rem] md:min-w-[8.5rem] sm:min-h-[40px]
                        hover:bg-white/95 active:scale-[0.99] transition-transform"
            >
              Subscribe
            </button>
          </div>
        </div>

        <nav
          className="relative mt-8 min-w-0 pt-10 sm:mt-10 sm:pt-12 md:mt-12 md:pt-16 pb-8"
          aria-label="Footer"
        >
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-x-16 items-start ${footerContentWidth}`}
          >
            <div className="min-w-0 flex items-center justify-center sm:justify-start">
              <Image
                src="/itc-logo.svg"
                alt="ITC Logo"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>

            <div className="min-w-0">
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

            <div className="min-w-0">
              <h4 className={footerColTitle}>Conference</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="https://itctestweekindia.org/"
                    className={footerLink}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://itctestweekindia.org/"
                    className={footerLink}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://itctestweekindia.org/"
                    className={footerLink}
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://itctestweekindia.org/"
                    className={footerLink}
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://itctestweekindia.org/contactus"
                    className={footerLink}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
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
