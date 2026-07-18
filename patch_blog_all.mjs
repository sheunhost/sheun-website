import fs from 'fs/promises';

async function main() {
  const files = [
    'src/pages/ShopifySettingsGuide.tsx',
    'src/pages/BestDropshippingApps.tsx',
    'src/pages/FashionDropshippingGuide.tsx',
    'src/pages/WooCommerceToShopifyMigration.tsx',
    'src/pages/ShopifySEOGuide.tsx',
    'src/pages/LeveragingShopifyMarkets.tsx',
    'src/pages/ConversionKillers.tsx'
  ];

  for (let file of files) {
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
    
    await fs.writeFile(file, content);
  }
  console.log("Patched All Blogs");
}
main();
