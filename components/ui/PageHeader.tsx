import Image from "next/image";

interface PageHeaderProps {
  title?: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="text-center mb-12 sm:mb-16 w-full flex flex-col items-center px-6 sm:px-8 md:px-12">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-5 mb-5">
        <Image
          src="/itc-logo.svg"
          alt="ITC Logo"
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          priority
        />
        <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-bold text-center text-white font-poppins">
          10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA<br />
          2026
        </h1>
      </div>
      <p className="text-[17px] sm:text-xl md:text-[22px] font-semibold text-[#6aaff1] font-poppins tracking-wide">
        JULY 19-21, 2026 | RADISSON BLU, MARATHAHALLI, BENGALURU
      </p>
      {title && (
        <h2 className="text-2xl sm:text-4xl md:text-[56px] font-bold mt-8 md:mt-10 tracking-tight text-white uppercase font-poppins">
          {title}
        </h2>
      )}
    </div>
  );
}
