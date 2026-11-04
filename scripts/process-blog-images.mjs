import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function processBlogImages() {
  console.log('Processing generated blog images into /public/blog/...');

  const assetsDir = path.resolve(process.cwd(), 'src/assets/images');
  const targetDir = path.resolve(process.cwd(), 'public/blog');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(assetsDir);

  const mappings = [
    { prefix: 'blog_1_settings', index: 1 },
    { prefix: 'blog_2_speed', index: 2 },
    { prefix: 'blog_3_apps', index: 3 },
    { prefix: 'blog_4_fashion', index: 4 },
    { prefix: 'blog_5_migration', index: 5 },
    { prefix: 'blog_6_seo', index: 6 },
    { prefix: 'blog_7_markets', index: 7 },
    { prefix: 'blog_8_converting', index: 8 },
  ];

  for (const item of mappings) {
    const file = files.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
    if (!file) {
      console.warn(`Warning: Could not find image for ${item.prefix}`);
      continue;
    }

    const srcPath = path.join(assetsDir, file);
    const buf = fs.readFileSync(srcPath);

    // 1. Header WebP (~1200x750)
    const headerPath = path.join(targetDir, `blog-${item.index}.webp`);
    await sharp(buf)
      .resize(1200, 750, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(headerPath);

    // 2. Card WebP (~400x250)
    const cardPath = path.join(targetDir, `blog-${item.index}-card.webp`);
    await sharp(buf)
      .resize(400, 250, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(cardPath);

    // 3. Open Graph JPG (~1200x630)
    const ogPath = path.join(targetDir, `blog-${item.index}.jpg`);
    await sharp(buf)
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 85 })
      .toFile(ogPath);

    console.log(`Successfully generated assets for blog-${item.index} (Header, Card, OG JPG)`);
  }

  // Process placeholder image
  const placeholderFile = files.find(f => f.startsWith('blog_placeholder') && f.endsWith('.jpg'));
  if (placeholderFile) {
    const srcPath = path.join(assetsDir, placeholderFile);
    const buf = fs.readFileSync(srcPath);

    await sharp(buf)
      .resize(1200, 750, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(path.join(targetDir, 'placeholder.webp'));

    await sharp(buf)
      .resize(400, 250, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(path.join(targetDir, 'placeholder-card.webp'));

    console.log('Successfully generated placeholder.webp and placeholder-card.webp');
  }

  console.log('All blog image assets processed successfully!');
}

processBlogImages().catch(err => {
  console.error('Error processing blog images:', err);
  process.exit(1);
});
