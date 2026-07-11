import fs from 'fs';
import path from 'path';

const baseRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { url: '/calculator', priority: '0.7', changefreq: 'monthly' },
  { url: '/apply', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms-of-service', priority: '0.5', changefreq: 'yearly' },
  { url: '/shopify-seo-sprint', priority: '0.8', changefreq: 'monthly' },
  { url: '/shopify-store-audit', priority: '0.8', changefreq: 'monthly' },
  { url: '/shopify-not-converting', priority: '0.8', changefreq: 'monthly' },
  { url: '/shopify-seo-guide', priority: '0.8', changefreq: 'monthly' },
  { url: '/shopify-settings-guide', priority: '0.8', changefreq: 'monthly' },
  { url: '/shopify-speed-optimization', priority: '0.8', changefreq: 'monthly' },
  { url: '/woocommerce-to-shopify-migration', priority: '0.8', changefreq: 'monthly' },
  { url: '/best-dropshipping-apps', priority: '0.8', changefreq: 'monthly' },
  { url: '/fashion-dropshipping-guide', priority: '0.8', changefreq: 'monthly' },
  { url: '/leveraging-shopify-markets', priority: '0.8', changefreq: 'monthly' }
];

const serviceIds = ['setup', 'dropshipping', 'migration', 'custom', 'plus', 'bug', 'seo', 'cro', 'apps', 'speed'];
const blogIds = [1, 2, 3, 4, 5, 6, 7, 8];

const routes = [
  ...baseRoutes,
  ...serviceIds.map(id => ({ url: `/services/${id}`, priority: '0.8', changefreq: 'monthly' })),
  ...blogIds.map(id => ({ url: `/blog/${id}`, priority: '0.8', changefreq: 'monthly' }))
];

const date = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>https://sheun.online${r.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Sitemap generated!');
