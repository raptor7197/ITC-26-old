// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 px-[5%] sm:px-6 md:px-8 xl:px-[86px] text-white overflow-x-hidden">
//       <div
//         className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[1px] my-10 opacity-60 sm:opacity-70 md:opacity-80"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 7px, transparent 7px, transparent 12px)",
//         }}
//       ></div>

//       <div className="relative w-4/5 max-w-5/6 mt-3 sm:max-w-[1027px] mx-auto min-h-[100px] sm:min-h-[120px] md:min-h-[140px] bg-[#fcfcfc] rounded mb-4 sm:mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between px-2 sm:px-4 md:px-6 py-4 sm:py-0 gap-2 sm:gap-0">
//         <div className="flex-1 mb-0 sm:mb-0 text-center sm:text-left">
//           <h3 className="font-roboto-slab font-semibold text-[16px] sm:text-[24px] md:text-[28px] xl:text-[32px] text-[#022241]">
//             Subscribe to our <br className="hidden sm:block" /> Newsletter
//           </h3>
//         </div>

//         <div className="relative w-3/5 sm:w-auto">
//           <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-4/5 sm:w-auto">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-4/5 sm:w-[280px] md:w-[323px] h-[36px] sm:h-[32px] rounded-[32px] px-3 bg-[#011f4b] text-white placeholder-white/50 border-none outline-none text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px]"
//             />
//             <button className="w-1/5 sm:w-[120px] md:w-[136px] h-[36px] sm:h-[32px] bg-white text-black rounded-[32px] font-poppins text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] shadow-sm flex items-center justify-center">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap justify-between gap-6 sm:gap-8 xl:gap-10 border-t border-white/20 pt-6 sm:pt-8 md:pt-10 relative mt-4 sm:mt-0">
//         <div className="w-full sm:w-[45%] xl:w-auto min-w-0 mb-4 sm:mb-0">
//           <h4 className="font-inter text-[14px] sm:text-[18px] xl:text-[20px] mb-2 sm:mb-4">
//             Email ID
//           </h4>
//           <a
//             href="mailto:info@itctestweekindia.org"
//             className="opacity-80 hover:opacity-100 text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] break-all"
//           >
//             info@itctestweekindia.org
//           </a>
//         </div>

//         <div className="font-poppins text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full sm:w-[45%] xl:w-auto min-w-0 mb-4 sm:mb-0">
//           <h4 className="mb-2 sm:mb-4">Submissions</h4>
//           <ul className="space-y-2">
//             <li>
//               <Link
//                 href="/cfp"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 Call for Papers
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/cft"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 Call for Tutorials
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/art"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 Academia Research Track
//               </Link>
//             </li>
//             {/*<li><Link href="/CFP" className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]">Call for Papers</Link></li>*/}
//           </ul>
//         </div>

//         <div className="font-poppins text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full sm:w-[45%] xl:w-auto min-w-0 mb-4 sm:mb-0">
//           <h4 className="mb-2 sm:mb-4">Conference</h4>
//           <ul className="space-y-2">
//             <li>
//               <Link
//                 href="https://itctestweekindia.org/"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="https://itctestweekindia.org/"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 Privacy Policy
//               </Link>
//             </li>
//             {/*<li><Link href="https://itctestweekindia.org/" className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]">Refund Policy</Link></li>*/}
//             <li>
//               <Link
//                 href="https://itctestweekindia.org/"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 Terms & Conditions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="https://itctestweekindia.org/contactus"
//                 className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="font-poppins text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full sm:w-[45%] xl:w-auto min-w-0 mb-4 sm:mb-0">
//           <h4 className="mb-2 sm:mb-4">Conference Location</h4>
//           <Link
//             href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA"
//             className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
//           >
//             Radisson Blu, Bengaluru
//           </Link>
//         </div>
//       </div>

//       <div className="text-center font-poppins text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] mt-6 sm:mt-10">
//         2026 © ITC Test Week India | All rights reserved
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";

const footerPx =
  "px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%]";

const footerColTitle =
  "font-poppins font-semibold text-[13px] sm:text-[15px] text-white tracking-tight mb-3 sm:mb-4";

const footerLink =
  "font-poppins text-[13px] sm:text-[15px] md:text-[16px] text-white/80 no-underline transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded-sm";

/** Footer link grid — same inset as Testimonials carousel shell */
const footerContentWidth =
  "mx-auto min-w-0 w-full max-w-[min(100%,26rem)] max-[639px]:w-[calc(100%-1.5rem)] sm:max-w-[28rem] md:max-w-[30rem] lg:max-w-[32rem] xl:max-w-[36rem]";

/** Newsletter card — wider than link columns; still safe on narrow phones */
const footerNewsletterWidth =
  "mx-auto min-w-0 w-full max-w-[min(100%,72rem)] max-[639px]:max-w-[calc(100%-1.5rem)]";

/** 100px left + right from `sm` up; `mx-4` on very narrow phones */
const footerMainMargin = "min-w-0 mx-4 sm:mx-[100px]";

export default function Footer() {
  return (
    <footer
      className={`relative w-full min-w-0 overflow-x-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 text-white ${footerPx}`}
    >
      <div
        className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[1px] my-10 opacity-60 sm:opacity-70 md:opacity-80"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 7px, transparent 7px, transparent 12px)",
        }}
      ></div>

      <div className={footerMainMargin}>
      <div
        className={`relative box-border my-[clamp(16px,4vw,32px)] mb-10 max-w-full overflow-hidden sm:mb-12 md:mb-16
                   px-4 py-[clamp(18px,4vw,28px)] sm:px-6 sm:py-5 md:px-8 md:py-6
                   bg-[#fcfcfc] rounded-xl sm:rounded-2xl
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
            className="min-h-[44px] w-full min-w-0 flex-1 rounded-full bg-[#011f4b] px-4 text-white
                       placeholder:text-white/50 outline-none ring-0 border-0
                       text-[clamp(13px,2.5vw,1.125rem)] sm:min-h-[40px]"
          />
          <button
            type="button"
            className="min-h-[44px] w-full shrink-0 rounded-full bg-white px-6 font-poppins font-medium text-black shadow-sm
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
        className="relative mt-8 min-w-0 border-t border-white/15 pt-10 sm:mt-10 sm:pt-12 md:mt-12 md:pt-16"
        aria-label="Footer"
      >
        <div
          className={`grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-12 ${footerContentWidth}`}
        >
          <div className="min-w-0 pr-1 sm:pr-2">
            <h4 className={footerColTitle}>Email ID</h4>
            <a
              href="mailto:info@itctestweekindia.org"
              className={`${footerLink} inline-block break-all sm:break-normal`}
            >
              info@itctestweekindia.org
            </a>
          </div>

          <div className="min-w-0 pl-1 sm:pl-2">
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
            </ul>
          </div>

          <div className="min-w-0 pr-1 sm:pr-2">
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

          <div className="min-w-0 pl-1 sm:pl-2">
            <h4 className={footerColTitle}>Conference location</h4>
            <Link
              href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA"
              className={`${footerLink} inline-block font-medium text-white/90 hover:text-white`}
            >
              Radisson Blu, Bengaluru
            </Link>
            <p className="mt-3 max-w-[16rem] font-poppins text-[12px] leading-relaxed text-white/45 sm:text-[13px]">
              In-person conference · Open the link for directions on Google Maps
            </p>
          </div>
        </div>
      </nav>

      <div
        className={`mt-12 border-t border-white/10 pt-8 text-center font-poppins text-[11px] leading-relaxed text-white/45 sm:mt-14 sm:pt-10 sm:text-[13px] md:text-sm ${footerContentWidth}`}
      >
        2026 © ITC Test Week India · All rights reserved
      </div>
      </div>
    </footer>
  );
}
