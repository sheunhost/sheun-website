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
  for (let filename of files) {
    let content = await fs.readFile(filename, 'utf-8');
    
    // Fix <span ...>...</div> where there are no inner tags
    let prev;
    do {
      prev = content;
      content = content.replace(/<span([^>]*)>([^<]*)<\/div>/g, '<span$1>$2</span>');
    } while (content !== prev);

    // Also fix <span ...>... <ArrowRight ... /></div>
    do {
      prev = content;
      content = content.replace(/<span([^>]*)>([^<]*)<([A-Z][a-zA-Z0-9]*)([^>]*) \/>([^<]*)<\/div>/g, '<span$1>$2<$3$4 />$5</span>');
    } while (content !== prev);

    await fs.writeFile(filename, content);
  }
  console.log("Fixed mismatched spans");
}
main();
