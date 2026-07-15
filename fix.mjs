import fs from 'fs';
let content = fs.readFileSync('src/data/servicesData.ts', 'utf-8');
content = content.replace(
  /"startingAt": "\$1,000",\s*"details": "Bespoke Liquid coding/,
  '"startingAt": "$2,000",\n      "details": "Bespoke Liquid coding'
);
fs.writeFileSync('src/data/servicesData.ts', content);
