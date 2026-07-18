import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('scripts/prerender.mjs', 'utf-8');
  
  // Actually, express app.get('*all') relies on dist/index.html to exist during the prerender phase.
  // So we must NOT overwrite dist/index.html while other routes are still prerendering.
  content = content.replace(
    /const filePath = route === '\/' \? path\.join\(distPath, 'index-prerendered\.html'\) : path\.join\(routeDir, 'index\.html'\);/,
    `const filePath = path.join(routeDir, 'index.html');
        if (route === '/') {
          fs.writeFileSync(path.join(distPath, 'index-prerendered.html'), html);
        } else {
          fs.writeFileSync(filePath, html);
        }`
  );

  content = content.replace(/fs\.writeFileSync\(filePath, html\);\n\s*console\.log\(\`Saved \$\{filePath\}\`\);/, "console.log(`Saved ${route}`);");

  await fs.writeFile('scripts/prerender.mjs', content);
  console.log("Patched prerender script completely");
}
main();
