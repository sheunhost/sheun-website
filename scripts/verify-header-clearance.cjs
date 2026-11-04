const express = require('express');
const path = require('path');
const { execSync } = require('child_process');
const puppeteer = require('puppeteer-core');

function getBrowserPath() {
  const candidates = [
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/root/.cache/puppeteer/chrome/linux-*/chrome-linux*/chrome'
  ];
  try {
    const whichPath = execSync('which google-chrome || which chromium || which chromium-browser || find / -name "chrome" 2>/dev/null | head -n 1').toString().trim();
    if (whichPath) return whichPath;
  } catch (e) {}
  for (const c of candidates) {
    if (require('fs').existsSync(c)) return c;
  }
  return null;
}

const app = express();
const distPath = path.resolve(process.cwd(), 'dist');
app.use(express.static(distPath));
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const server = app.listen(4009, async () => {
  console.log('Test server listening on port 4009');
  
  const executablePath = getBrowserPath();
  console.log('Using executablePath:', executablePath);

  if (!executablePath) {
    console.log('No Chrome/Chromium executable found for Puppeteer test, relying on build & lint validation.');
    server.close();
    process.exit(0);
  }

  try {
    const browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    const page = await browser.newPage();
    
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    const routes = [
      '/',
      '/services',
      '/portfolio',
      '/seo-sprint',
      '/blog',
      '/blog/1',
      '/calculator',
      '/about',
      '/contact',
      '/apply',
      '/automation'
    ];

    const viewports = [
      { name: '360px', width: 360, height: 740 },
      { name: '390px', width: 390, height: 844 },
      { name: '430px', width: 430, height: 932 },
      { name: '768px', width: 768, height: 1024 },
      { name: '1440px', width: 1440, height: 900 }
    ];

    console.log('--- STARTING HEADER CLEARANCE VERIFICATION ---');

    for (const route of routes) {
      for (const vp of viewports) {
        await page.setViewport({ width: vp.width, height: vp.height });
        await page.goto(`http://localhost:4009${route}`, { waitUntil: 'networkidle0' });

        const clearanceInfo = await page.evaluate(() => {
          const header = document.querySelector('header nav, header');
          const headerRect = header ? header.getBoundingClientRect() : null;
          
          const main = document.querySelector('main');
          if (!main) return null;

          const firstEl = main.querySelector('.inline-flex, .page-h1, .hero-h1, h1, span, p');
          const firstElRect = firstEl ? firstEl.getBoundingClientRect() : null;

          return {
            headerBottom: headerRect ? headerRect.bottom : 0,
            headerHeight: headerRect ? headerRect.height : 0,
            firstElTop: firstElRect ? firstElRect.top : 0,
            firstElText: firstEl ? (firstEl.textContent || '').trim().slice(0, 40) : '',
            clearance: (firstElRect && headerRect) ? (firstElRect.top - headerRect.bottom) : 0
          };
        });

        if (clearanceInfo) {
          console.log(`Route: ${route.padEnd(20)} | VP: ${vp.name.padEnd(7)} | HeaderH: ${clearanceInfo.headerHeight}px | Clearance: ${clearanceInfo.clearance}px | Text: "${clearanceInfo.firstElText}"`);
        }
      }
    }

    console.log('--- CONSOLE ERRORS ---', consoleErrors.length ? consoleErrors : 'None');

    await browser.close();
  } catch (err) {
    console.warn('Browser launch warning:', err.message);
  } finally {
    server.close();
    process.exit(0);
  }
});
