const fs = require('fs');

let content = fs.readFileSync('app/art/page.tsx', 'utf8');

// Replace the div grid with ul grid, and inner divs with lis
content = content.replace(
  /<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-200">([\s\S]*?)<\/div>\s*<\/section>/,
  (match, p1) => {
    let items = p1.replace(/<div>/g, '<li>').replace(/<\/div>/g, '</li>');
    return `<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-200 list-disc list-inside md:list-outside md:ml-4 text-center md:text-left">${items}</ul>\n            </section>`;
  }
);

fs.writeFileSync('app/art/page.tsx', content);
console.log('Fixed ART bullets');
