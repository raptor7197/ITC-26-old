const fs = require('fs');

const fixHidden = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/object-contain md:hidden/g, 'object-contain');
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
};

fixHidden('app/fellowship/page.tsx');
fixHidden('app/hackathon/page.tsx');
