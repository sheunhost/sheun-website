const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const pages = [
  'Home.tsx',
  'About.tsx',
  'Services.tsx',
  'Portfolio.tsx',
  'Blog.tsx',
  'Apply.tsx',
  'Contact.tsx'
];

pages.forEach(p => {
  const filePath = path.join(pagesDir, p);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the <SEO /> tag we just inserted in the wrong place
  content = content.replace(/\n\s*<SEO title="[^"]+" description="[^"]+" \/>/g, '');
  content = content.replace(/import { SEO } from "\.\.\/components\/SEO";\n?/g, '');
  
  fs.writeFileSync(filePath, content);
});
