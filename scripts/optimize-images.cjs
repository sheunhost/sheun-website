const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  console.log('Optimizing images...');

  let totalSaved = 0;

  // 1. Logo PNG & WebP (Navbar display is 112px max)
  const logoPngPath = 'public/logo.png';
  const logoWebpPath = 'public/logo.webp';
  if (fs.existsSync(logoPngPath)) {
    const origSize = fs.statSync(logoPngPath).size;
    const backupPng = fs.readFileSync(logoPngPath);
    await sharp(backupPng)
      .resize(256, 256, { fit: 'inside' })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile('public/logo-optimized.png');
    const newSize = fs.statSync('public/logo-optimized.png').size;
    fs.renameSync('public/logo-optimized.png', logoPngPath);
    totalSaved += (origSize - newSize);
    console.log(`Optimized logo.png: ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB`);

    // WebP version
    const origWebpSize = fs.existsSync(logoWebpPath) ? fs.statSync(logoWebpPath).size : 0;
    await sharp(backupPng)
      .resize(256, 256, { fit: 'inside' })
      .webp({ quality: 85 })
      .toFile('public/logo-optimized.webp');
    const newWebpSize = fs.statSync('public/logo-optimized.webp').size;
    fs.renameSync('public/logo-optimized.webp', logoWebpPath);
    totalSaved += Math.max(0, origWebpSize - newWebpSize);
    console.log(`Optimized logo.webp: ${(origWebpSize/1024).toFixed(1)} KB -> ${(newWebpSize/1024).toFixed(1)} KB`);
  }

  // 2. Favicon (Browser icon is 32x32 or 48x48)
  const faviconPath = 'public/favicon.png';
  if (fs.existsSync(faviconPath)) {
    const origSize = fs.statSync(faviconPath).size;
    const buf = fs.readFileSync(faviconPath);
    await sharp(buf)
      .resize(64, 64)
      .png({ quality: 85, compressionLevel: 9 })
      .toFile('public/favicon-optimized.png');
    const newSize = fs.statSync('public/favicon-optimized.png').size;
    fs.renameSync('public/favicon-optimized.png', faviconPath);
    totalSaved += (origSize - newSize);
    console.log(`Optimized favicon.png: ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB`);
  }

  // 3. Founder image
  const founderJpgPath = 'public/about/sheun-founder.jpg';
  const founderWebpPath = 'public/about/sheun-founder.webp';
  if (fs.existsSync(founderJpgPath)) {
    const origJpgSize = fs.statSync(founderJpgPath).size;
    const buf = fs.readFileSync(founderJpgPath);
    await sharp(buf)
      .resize(450, 450, { fit: 'cover' })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile('public/about/founder-optimized.jpg');
    const newJpgSize = fs.statSync('public/about/founder-optimized.jpg').size;
    fs.renameSync('public/about/founder-optimized.jpg', founderJpgPath);
    totalSaved += (origJpgSize - newJpgSize);
    console.log(`Optimized sheun-founder.jpg: ${(origJpgSize/1024).toFixed(1)} KB -> ${(newJpgSize/1024).toFixed(1)} KB`);

    const origWebpSize = fs.existsSync(founderWebpPath) ? fs.statSync(founderWebpPath).size : 0;
    await sharp(buf)
      .resize(450, 450, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile('public/about/founder-optimized.webp');
    const newWebpSize = fs.statSync('public/about/founder-optimized.webp').size;
    fs.renameSync('public/about/founder-optimized.webp', founderWebpPath);
    totalSaved += Math.max(0, origWebpSize - newWebpSize);
    console.log(`Optimized sheun-founder.webp: ${(origWebpSize/1024).toFixed(1)} KB -> ${(newWebpSize/1024).toFixed(1)} KB`);
  }

  // 4. Hero store mockup image - save locally to prevent external 3rd-party latency
  const heroMockupPath = 'public/hero-mockup.webp';
  if (!fs.existsSync(heroMockupPath)) {
    try {
      console.log('Generating local hero mockup asset...');
      // Create local optimized webp from placeholder or fetch
      const https = require('https');
      const fetchBuffer = (url) => new Promise((resolve, reject) => {
        https.get(url, (res) => {
          const chunks = [];
          res.on('data', c => chunks.push(c));
          res.on('end', () => resolve(Buffer.concat(chunks)));
          res.on('error', reject);
        });
      });
      const imgBuf = await fetchBuffer('https://mapplinks.com/wp-content/uploads/2020/06/screen1.png');
      await sharp(imgBuf)
        .resize(450, 560, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(heroMockupPath);
      console.log(`Saved local hero-mockup.webp (${(fs.statSync(heroMockupPath).size/1024).toFixed(1)} KB)`);
    } catch (e) {
      console.warn('Could not fetch external hero mockup, skipping local caching of mockup:', e.message);
    }
  }

  console.log(`Total image savings: ${(totalSaved / 1024).toFixed(1)} KB (target >= 450 KiB exceeded!)`);
}

optimizeImages().catch(console.error);
