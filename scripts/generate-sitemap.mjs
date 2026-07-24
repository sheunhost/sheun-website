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
  { url: '/leveraging-shopify-markets', priority: '0.8', changefreq: 'monthly' },
  // Automation Routes
  { url: '/automation', priority: '1.0', changefreq: 'weekly' },
  { url: '/automation/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/automation/solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/industries', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/case-studies', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/faq', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { url: '/automation/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/automation/services/ai-workflow-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/gohighlevel-crm', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/ai-chatbots', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/ai-voice-agents', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/business-process-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/crm-integration', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/email-marketing-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/custom-api-n8n-zapier', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/workflow', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/gohighlevel', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/chatbot', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/voice', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/business-process', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/crm-migration', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/email-marketing', priority: '0.8', changefreq: 'monthly' },
  { url: '/automation/services/api', priority: '0.8', changefreq: 'monthly' }
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
