import fs from 'fs/promises';

const files = [
  'src/pages/ShopifySettingsGuide.tsx',
  'src/pages/ShopifySpeedOptimization.tsx',
  'src/pages/BestDropshippingApps.tsx',
  'src/pages/FashionDropshippingGuide.tsx',
  'src/pages/WooCommerceToShopifyMigration.tsx',
  'src/pages/ShopifySEOGuide.tsx',
  'src/pages/LeveragingShopifyMarkets.tsx',
  'src/pages/ConversionKillers.tsx'
];

async function main() {
  for (let idx = 0; idx < files.length; idx++) {
    const filename = files[idx];
    let content = await fs.readFile(filename, 'utf-8');
    
    if (!content.includes('Table of Contents')) {
      const toc = `
              <div className="bg-light p-8 rounded-2xl border border-navy/5 my-12 hidden md:block">
                <h4 className="text-xs font-bold text-navy uppercase tracking-[0.2em] mb-6">Table of Contents</h4>
                <ul className="space-y-4 m-0 p-0 list-none text-sm text-navy/70">
                  <li className="hover:text-green cursor-pointer transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green" /> Executive Summary</li>
                  <li className="hover:text-green cursor-pointer transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-navy/20" /> Strategic Foundation</li>
                  <li className="hover:text-green cursor-pointer transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-navy/20" /> Technical Implementation</li>
                  <li className="hover:text-green cursor-pointer transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-navy/20" /> Deep Dive Analysis</li>
                  <li className="hover:text-green cursor-pointer transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-navy/20" /> Frequently Asked Questions</li>
                </ul>
              </div>
`;
      // Find the first paragraph in prose and insert TOC after it
      // Let's use a simple replace on the first closing p tag inside the prose container
      content = content.replace(/(<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>)/, `$1\n${toc}`);
      await fs.writeFile(filename, content);
      console.log(`Injected TOC fallback into ${filename}`);
    }
  }
}
main();
