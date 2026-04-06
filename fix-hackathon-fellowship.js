const fs = require('fs');

// Fellowship
let fellowship = fs.readFileSync('app/fellowship/page.tsx', 'utf8');
if (!fellowship.includes('import Image')) {
  fellowship = fellowship.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
}

const fellowshipLogo = `
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain md:hidden"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold mt-8 tracking-tight text-white uppercase leading-tight md:leading-tight">
`;

fellowship = fellowship.replace(/<h2 className="text-3xl sm:text-4xl md:text-\[64px\] font-bold mt-8 tracking-tight text-white uppercase leading-tight md:leading-tight">/g, fellowshipLogo);
fs.writeFileSync('app/fellowship/page.tsx', fellowship);

// Hackathon
let hackathon = fs.readFileSync('app/hackathon/page.tsx', 'utf8');

const hackLogo = `
            <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-4 md:gap-6 mb-6">
              <Image
                src="/itc-logo.svg"
                alt="ITC Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain md:hidden"
              />
            </div>
            <p className="text-sm md:text-base font-semibold text-[#6aaff1] uppercase tracking-wider mb-2">
`;

hackathon = hackathon.replace(/<p className="text-sm md:text-base font-semibold text-\[\#6aaff1\] uppercase tracking-wider mb-2">/g, hackLogo);

// Center the Register Now buttons in Hackathon
hackathon = hackathon.replace(/<div className="flex min-w-0 flex-col sm:flex-row gap-4 mb-12">/g, '<div className="flex min-w-0 flex-col sm:flex-row gap-4 mb-12 items-center sm:items-start w-full">');
hackathon = hackathon.replace(/<div className="mt-8">/g, '<div className="mt-8 flex flex-col items-center sm:items-start">');
hackathon = hackathon.replace(/<div className="mb-6 text-center md:text-left">/g, '<div className="mb-6 flex flex-col items-center md:items-start text-center md:text-left">');

fs.writeFileSync('app/hackathon/page.tsx', hackathon);

console.log('Done');
