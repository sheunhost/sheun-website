import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Services.tsx', 'utf-8');
  content = content.replace(/"From \$700"/g, '"From $350"');
  content = content.replace(/"From \$500"/g, '"From $250"');
  content = content.replace(/"\$800"/g, '"$400"');
  content = content.replace(/"\$300"/g, '"$150"');
  content = content.replace(/"\$400"/g, '"$200"');
  content = content.replace(/"\$700"/g, '"$350"');
  content = content.replace(/"\$1200\+"/g, '"$600+"');
  await fs.writeFile('src/pages/Services.tsx', content);
  
  let content2 = await fs.readFile('src/pages/ServiceDetail.tsx', 'utf-8');
  content2 = content2.replace(/"From \$700"/g, '"From $350"');
  content2 = content2.replace(/"From \$500"/g, '"From $250"');
  content2 = content2.replace(/"\$800"/g, '"$400"');
  content2 = content2.replace(/"\$300"/g, '"$150"');
  content2 = content2.replace(/"\$400"/g, '"$200"');
  content2 = content2.replace(/"\$700"/g, '"$350"');
  content2 = content2.replace(/"\$1200\+"/g, '"$600+"');
  await fs.writeFile('src/pages/ServiceDetail.tsx', content2);
  console.log("Prices updated.");
}
main();
