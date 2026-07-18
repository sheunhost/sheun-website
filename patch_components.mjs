import fs from 'fs/promises';

async function main() {
  const files = [
    'src/components/BlogDeepDive.tsx',
    'src/components/PageWrapper.tsx',
    'src/components/Footer.tsx',
    'src/pages/Portfolio.tsx',
    'src/pages/Apply.tsx',
    'src/pages/Visualizer.tsx'
  ];

  for (let file of files) {
    try {
      let content = await fs.readFile(file, 'utf-8');
      
      // Backgrounds
      content = content.replace(/bg-white([^/a-zA-Z0-9])/g, 'bg-white dark:bg-navy$1');
      content = content.replace(/dark:bg-navy dark:bg-navy/g, 'dark:bg-navy');
      
      // Inner Cards
      content = content.replace(/bg-light([^/])/g, 'bg-light dark:bg-white/5$1');
      content = content.replace(/dark:bg-white\/5 dark:bg-white\/5/g, 'dark:bg-white/5');
      
      // Text colors
      content = content.replace(/text-navy(?!(\/| dark:))/g, 'text-navy dark:text-white');
      content = content.replace(/text-navy\/([0-9]+)(?! dark:)/g, 'text-navy/$1 dark:text-white/$1');
      
      // Borders
      content = content.replace(/border-navy\/([0-9]+)(?! dark:)/g, 'border-navy/$1 dark:border-white/$1');
      
      // Hex colors used in these files (if any)
      content = content.replace(/bg-\[#F8FAFC\]/g, 'bg-[#F8FAFC] dark:bg-white/5');
      content = content.replace(/bg-\[#F4F4F5\]/g, 'bg-[#F4F4F5] dark:bg-white/10');
      content = content.replace(/border-\[#E2E8F0\]/g, 'border-[#E2E8F0] dark:border-white/10');
      content = content.replace(/text-\[#0F172A\]/g, 'text-[#0F172A] dark:text-white');
      content = content.replace(/text-\[#71717a\]/g, 'text-[#71717a] dark:text-white/70');

      await fs.writeFile(file, content);
      console.log(`Patched ${file}`);
    } catch (e) {
      console.log(`Skipped ${file}`);
    }
  }
}
main();
