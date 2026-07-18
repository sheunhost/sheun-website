import fs from 'fs/promises';
async function main() {
  let content = await fs.readFile('src/pages/ConversionKillers.tsx', 'utf-8');
  content = content.replace(/ConversionKillers/g, 'ShopifySettingsGuide');
  content = content.replace(/Shopify Store Not Converting\? CRO Optimization Guide \(UK, US, CA, AU, FR, DE\)/g, 'Shopify Backend Settings Optimization Guide (UK, US, CA, AU, FR, DE)');
  content = content.replace(/Is your Shopify storefront getting traffic but no sales\? Fix low Shopify conversion rates, checkout drop-offs, and design errors\. Professional CRO audit services in the UK, US, Canada, Australia, France, and Germany\./g, 'Hidden Shopify settings to boost conversion rates, optimize checkout checkout pipelines, and streamline global delivery. Expert setup audit tips for international merchants.');
  content = content.replace(/Shopify store not converting UK, Shopify conversion optimization USA, e-commerce CRO audit Canada, fix checkout drop-off Australia, Shopify checkout audit France, Shopify CRO expert Germany/g, 'Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit, Shopify international markets setup, Shopify expert UK, Shopify developer Canada, Shopify consultant Germany');
  content = content.replace(/\/blog\/conversion-killers/g, '/blog/shopify-settings-guide');
  
  await fs.writeFile('src/pages/ShopifySettingsGuide.tsx', content);
  console.log("Restored ShopifySettingsGuide.tsx");
}
main();
