const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      if (content.includes('w-[85%] sm:w-[90%] md:w-[92%]')) {
        content = content.replace(/w-\[85%\] sm:w-\[90%\] md:w-\[92%\]/g, 'w-[85%] sm:w-[90%] md:w-full md:px-10');
        changed = true;
      }
      if (content.includes('px-4 md:px-10')) {
        content = content.replace(/px-4 md:px-10/g, 'w-[85%] sm:w-[90%] md:w-full md:px-10');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir('app');
