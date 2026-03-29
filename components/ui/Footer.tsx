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
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full min-w-0 overflow-x-hidden pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 px-[5%] sm:px-6 md:px-8 xl:px-[86px] text-white">
      <div
        className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[1px] my-10 opacity-60 sm:opacity-70 md:opacity-80"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 7px, transparent 7px, transparent 12px)",
        }}
      ></div>

      <div
        className="relative mx-auto w-full min-w-0 max-w-full box-border
                   my-[clamp(16px,4vw,32px)] mb-6 max-[639px]:w-[calc(100%-1.5rem)] sm:mb-8 md:mb-12
                   px-[clamp(14px,4vw,28px)] py-[clamp(18px,4vw,28px)] sm:py-5 md:py-6
                   bg-[#fcfcfc] rounded-xl sm:rounded-2xl
                   flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between"
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

      <div className="grid min-w-0 grid-cols-2 sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:flex-nowrap justify-between gap-6 sm:gap-x-12 sm:gap-y-8 xl:gap-10 border-t border-white/20 pt-6 sm:pt-8 md:pt-10 relative mt-4 max-[639px]:mx-auto max-[639px]:w-[calc(100%-1.5rem)] sm:mt-0 sm:w-full sm:px-8 md:px-12 xl:px-0">
        <div className="w-full xl:w-auto min-w-0 sm:mb-0">
          <h4 className="font-inter text-[14px] sm:text-[18px] xl:text-[20px] mb-2 sm:mb-4 whitespace-nowrap">
            Email ID
          </h4>
          <a
            href="mailto:info@itctestweekindia.org"
            className="opacity-80 hover:opacity-100 break-all text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] sm:break-normal sm:whitespace-nowrap"
          >
            info@itctestweekindia.org
          </a>
        </div>

        <div className="font-poppins text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full xl:w-auto min-w-0 sm:mb-0">
          <h4 className="mb-2 sm:mb-4 whitespace-nowrap">Submissions</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/cfp"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                Call for Papers
              </Link>
            </li>
            <li>
              <Link
                href="/cft"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                Call for Tutorials
              </Link>
            </li>
            <li>
              <Link
                href="/art"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                Academia Research Track
              </Link>
            </li>
          </ul>
        </div>

        <div className="font-poppins text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full xl:w-auto min-w-0 sm:mb-0">
          <h4 className="mb-2 sm:mb-4 whitespace-nowrap">Conference</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://itctestweekindia.org/"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="https://itctestweekindia.org/"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://itctestweekindia.org/"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="https://itctestweekindia.org/contactus"
                className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="font-poppins text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full xl:w-auto min-w-0 sm:mb-0">
          <h4 className="mb-2 sm:mb-4 whitespace-nowrap">
            Conference Location
          </h4>
          <Link
            href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA"
            className="underline decoration-solid text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] whitespace-nowrap"
          >
            Radisson Blu, Bengaluru
          </Link>
        </div>
      </div>

      <div className="text-center font-poppins text-[12px] sm:text-[16px] md:text-[18px] xl:text-[22px] mt-6 sm:mt-10">
        2026 © ITC Test Week India | All rights reserved
      </div>
    </footer>
  );
}
