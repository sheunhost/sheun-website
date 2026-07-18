import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('scripts/prerender.mjs', 'utf-8');
  
  // Fix the prerender script overwriting the root index.html causing ENOENT issues
  content = content.replace(
    /const filePath = route === '\/' \? path\.join\(distPath, 'index\.html'\) : path\.join\(routeDir, 'index\.html'\);/,
    `const filePath = route === '/' ? path.join(distPath, 'index-prerendered.html') : path.join(routeDir, 'index.html');`
  );
  
  // Then we can rename it back at the end
  content = content.replace(
    /console\.log\('Prerendering complete!'\);/,
    `fs.renameSync(path.join(distPath, 'index-prerendered.html'), path.join(distPath, 'index.html'));
    console.log('Prerendering complete!');`
  );

  await fs.writeFile('scripts/prerender.mjs', content);
  console.log("Patched prerender script");
}
main();
