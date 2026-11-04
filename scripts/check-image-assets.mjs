import fs from 'fs';
import path from 'path';

function checkImageAssets() {
  console.log('🔍 Checking build-time image assets...');

  const publicDir = path.resolve(process.cwd(), 'public');
  const filesToScan = [
    'src/data/blogPostsData.ts',
    'src/pages/Blog.tsx',
    'src/pages/Portfolio.tsx',
    'scripts/prerender.mjs'
  ];

  const localImagePathRegex = /["'](\/(?:blog|portfolio|about|assets|images)\/[^"'\s?]+(?:\.(?:webp|png|jpg|jpeg|svg|gif|ico)))["']/gi;
  const externalUrlRegex = /["'](https?:\/\/[^"'\s]+\.(?:webp|png|jpg|jpeg|svg|gif))["']/gi;

  const foundLocalImages = new Set();
  const foundExternalUrls = new Set();

  for (const relativeFilePath of filesToScan) {
    const absoluteFilePath = path.resolve(process.cwd(), relativeFilePath);
    if (!fs.existsSync(absoluteFilePath)) {
      console.warn(`Warning: File to scan not found: ${relativeFilePath}`);
      continue;
    }

    const content = fs.readFileSync(absoluteFilePath, 'utf-8');

    let match;
    localImagePathRegex.lastIndex = 0;
    while ((match = localImagePathRegex.exec(content)) !== null) {
      foundLocalImages.add(match[1]);
    }

    externalUrlRegex.lastIndex = 0;
    while ((match = externalUrlRegex.exec(content)) !== null) {
      foundExternalUrls.add(match[1]);
    }
  }

  // Also check card variants for blog images
  for (let i = 1; i <= 8; i++) {
    foundLocalImages.add(`/blog/blog-${i}.webp`);
    foundLocalImages.add(`/blog/blog-${i}-card.webp`);
    foundLocalImages.add(`/blog/blog-${i}.jpg`);
  }
  foundLocalImages.add('/blog/placeholder.webp');
  foundLocalImages.add('/blog/placeholder-card.webp');

  if (foundExternalUrls.size > 0) {
    console.warn(`⚠️ Warning: Found ${foundExternalUrls.size} external image URL(s) in scan:`);
    for (const url of foundExternalUrls) {
      console.warn(`   - ${url}`);
    }
  }

  let missingCount = 0;
  console.log(`Checking ${foundLocalImages.size} unique local image asset paths...`);

  for (const localPath of foundLocalImages) {
    // Strip query parameters or hash if any
    const cleanPath = localPath.split('?')[0].split('#')[0];
    const diskPath = path.join(publicDir, cleanPath);

    if (!fs.existsSync(diskPath)) {
      console.error(`❌ MISSING IMAGE ASSET: public${cleanPath} (Referenced path: ${localPath})`);
      missingCount++;
    }
  }

  if (missingCount > 0) {
    console.error(`\n💥 Build failed: ${missingCount} required local image asset(s) are missing from /public!`);
    process.exit(1);
  }

  console.log(`✅ All ${foundLocalImages.size} local image assets verified successfully in /public!`);
}

checkImageAssets();
