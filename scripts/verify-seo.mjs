import fs from 'fs';

const baseRoutes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/calculator',
  '/apply',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/shopify-seo-sprint',
  '/shopify-store-audit',
  '/shopify-not-converting',
  '/shopify-seo-guide',
  '/shopify-settings-guide',
  '/shopify-speed-optimization',
  '/woocommerce-to-shopify-migration',
  '/best-dropshipping-apps',
  '/fashion-dropshipping-guide',
  '/leveraging-shopify-markets'
];

const serviceIds = ['setup', 'dropshipping', 'migration', 'custom', 'plus', 'bug', 'seo', 'cro', 'apps', 'speed'];
const blogIds = [1, 2, 3, 4, 5, 6, 7, 8];

const routes = [
  ...baseRoutes,
  ...serviceIds.map(id => `/services/${id}`),
  ...blogIds.map(id => `/blog/${id}`)
];

for (const route of routes) {
  const filePath = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
  if (!fs.existsSync(filePath)) {
    console.log(`\n=== Route: ${route} ===\nFile not found!`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"\s*\/?>/);
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="(.*?)"\s*\/?>/);
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/si);
  
  let h1Text = h1Match ? h1Match[1].replace(/<[^>]*>?/gm, '').trim() : '(No H1 found)';
  h1Text = h1Text.replace(/\s+/g, ' ');

  console.log(`\n=== Route: ${route} ===`);
  console.log(`Title: ${titleMatch ? titleMatch[1] : '(No Title)'}`);
  console.log(`Desc: ${descMatch ? descMatch[1] : '(No Description)'}`);
  console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : '(No Canonical)'}`);
  console.log(`H1: ${h1Text}`);
}
