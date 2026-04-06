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

  // Replace existing logo header block
  content = content.replace(/<div className="flex items-center justify-center gap-3 md:gap-5 mb-4">[\s\S]*?<h1 className="text-3xl md:text-5xl font-bold[^>]*>[\s\S]*?10<sup>th<\/sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026[\s\S]*?<\/h1>\s*<\/div>/g,
    `<div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={60}
              height={60}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>`);

  // If the file doesn't have the flex container but has just <h1 className="text-3xl md:text-5xl font-bold mb-4">
  content = content.replace(/<h1 className="text-3xl md:text-5xl font-bold mb-4">\s*10<sup>th<\/sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026\s*<\/h1>/g,
    `<div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              width={60}
              height={60}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              10<sup>th</sup> IEEE INTERNATIONAL TEST CONFERENCE INDIA 2026
            </h1>
          </div>`);

  // cfp/page.tsx has <h1 className="text-3xl md:text-5xl font-bold"> so it should be matched by the first regex, wait, let me just run it and see.
  fs.writeFileSync(file, content);
  console.log('Updated', file);
});
