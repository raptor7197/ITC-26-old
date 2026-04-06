const fs = require('fs');

const files = [
  'app/cfp/page.tsx',
  'app/cft/page.tsx',
  'app/art/page.tsx',
  'app/call-for-posters/page.tsx',
  'app/call-for-workshop/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace flex row with flex col, and bump the size slightly since it's on its own line
  content = content.replace(/<div className="flex items-center justify-center gap-3 md:gap-5 mb-4">\s*<Image\s*src="\/itc-logo\.svg"\s*alt="ITC Logo"\s*width=\{60\}\s*height=\{60\}\s*className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"\s*\/>\s*<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">\s*10<sup>th<\/sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026\s*<\/h1>\s*<\/div>/g,
    `<div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>`);

  fs.writeFileSync(file, content);
  console.log('Updated', file);
});
