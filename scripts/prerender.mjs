import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

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

async function prerender() {
  const app = express();
  app.use(express.static(distPath));
  app.get('*all', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Test server running on port ${port}`);

    // Check if google-chrome binary is present locally
    const isLocal = !process.env.VERCEL && !process.env.CI;
    const hasGoogleChrome = fs.existsSync('/usr/bin/google-chrome');
    
    let browser;
    try {
      if (isLocal && hasGoogleChrome) {
        browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          defaultViewport: chromium.defaultViewport,
          executablePath: '/usr/bin/google-chrome',
          headless: 'new',
        });
      } else {
        browser = await puppeteer.launch({
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath(),
          headless: chromium.headless,
        });
      }
    } catch (e) {
      console.log('Initial launch failed, trying fallback launch...');
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    }

    for (const route of routes) {
      const page = await browser.newPage();
      
      // Block third-party scripts that might keep network busy
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const url = req.url();
        if (url.includes('google-analytics') || url.includes('googletagmanager') || url.includes('calendly') || url.includes('turnstile')) {
          req.abort();
        } else {
          req.continue();
        }
      });

      console.log(`Prerendering ${route}...`);
      try {
        await page.goto(`http://localhost:${port}${route}`, { 
          waitUntil: 'domcontentloaded',
          timeout: 15000 
        });
        
        // Wait a short moment for React to hydrate and Helmet to inject tags
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const html = await page.content();
        
        const routeDir = path.join(distPath, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        
        const filePath = path.join(routeDir, 'index.html');
        if (route === '/') {
          fs.writeFileSync(path.join(distPath, 'index-prerendered.html'), html);
        } else {
          fs.writeFileSync(filePath, html);
        }
        console.log(`Saved ${route}`);
      } catch (err) {
        console.error(`Error prerendering ${route}:`, err);
      } finally {
        await page.close();
      }
    }

    await browser.close();
    server.close();
    fs.renameSync(path.join(distPath, 'index-prerendered.html'), path.join(distPath, 'index.html'));
    console.log('Prerendering complete!');
  });
}

prerender().catch(console.error);
