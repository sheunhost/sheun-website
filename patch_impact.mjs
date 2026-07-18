import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/components/ImpactMetrics.tsx', 'utf-8');
  
  // Make the YAxis format large numbers compactly and give it a bit more width/margin
  content = content.replace(
    /margin=\{\{ top: 20, right: 30, left: 0, bottom: 0 \}\}/,
    'margin={{ top: 20, right: 30, left: 20, bottom: 0 }}'
  );

  content = content.replace(
    /const m = metrics.find\(m => m.id === activeMetric\);\s+return \`\$\{m\?.prefix\}\$\{value\}\$\{m\?.suffix\}\`;/,
    `const m = metrics.find(m => m.id === activeMetric);
                    const formattedValue = value >= 1000 ? (value / 1000) + 'k' : value;
                    return \`\${m?.prefix}\${formattedValue}\${m?.suffix}\`;`
  );

  // Background fix for ImpactMetrics if needed
  content = content.replace(/bg-white/g, 'bg-white dark:bg-navy');
  content = content.replace(/text-navy(?!(\/| dark:))/g, 'text-navy dark:text-white');
  content = content.replace(/bg-\[#F4F4F5\]/g, 'bg-[#F4F4F5] dark:bg-white/10');
  content = content.replace(/border-\[#E2E8F0\]/g, 'border-[#E2E8F0] dark:border-white/10');
  content = content.replace(/text-\[#0F172A\]/g, 'text-[#0F172A] dark:text-white');
  content = content.replace(/text-\[#71717a\]/g, 'text-[#71717a] dark:text-white/70');
  
  await fs.writeFile('src/components/ImpactMetrics.tsx', content);
  console.log("Patched ImpactMetrics");
}
main();
