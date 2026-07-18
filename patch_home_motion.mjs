import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  content = content.replace(
    /<div\s+exit=\{\{ opacity: 0 \}\}/,
    '<motion.div\n        initial={{ opacity: 0 }}\n        animate={{ opacity: 1 }}\n        exit={{ opacity: 0 }}'
  );

  content = content.replace(
    /<div\s+exit=\{\{ opacity: 0, scale: 0\.9, y: 20 \}\}/,
    '<motion.div\n        initial={{ opacity: 0, scale: 0.9, y: 20 }}\n        animate={{ opacity: 1, scale: 1, y: 0 }}\n        exit={{ opacity: 0, scale: 0.9, y: 20 }}'
  );

  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched ServiceModal motion");
}
main();
