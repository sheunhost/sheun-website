import fs from 'fs';
import path from 'path';

const distPath = path.resolve(process.cwd(), 'dist');

// Define all routes to validate (both numeric and semantic slugs for blog posts, plus core pages)
const testRoutes = [
  // Numeric Blog Routes
  { route: '/blog/1', expectedType: 'article', isBlog: true, name: '10 Shopify Settings Most Store Owners Miss' },
  { route: '/blog/2', expectedType: 'article', isBlog: true, name: 'How to Speed Up Your Shopify Store in 2026' },
  { route: '/blog/3', expectedType: 'article', isBlog: true, name: 'The Best Shopify Apps for Dropshipping Stores in 2026' },
  { route: '/blog/4', expectedType: 'article', isBlog: true, name: 'Fashion Dropshipping Shopify Store Design & Strategy' },
  { route: '/blog/5', expectedType: 'article', isBlog: true, name: 'WooCommerce to Shopify Migration SEO Checklist 2026' },
  { route: '/blog/6', expectedType: 'article', isBlog: true, name: 'Shopify SEO in 2026: The Beginner Complete Guide' },
  { route: '/blog/7', expectedType: 'article', isBlog: true, name: 'How to Leverage Shopify Markets for International Sales' },
  { route: '/blog/8', expectedType: 'article', isBlog: true, name: 'Why Your Shopify Store Isn Selling: 8 Conversion Killers' },

  // Semantic Slug Blog Routes
  { route: '/blog/shopify-settings-guide', expectedType: 'article', isBlog: true, name: 'Shopify Settings Guide' },
  { route: '/blog/shopify-speed-optimization', expectedType: 'article', isBlog: true, name: 'Shopify Speed Optimization' },
  { route: '/blog/best-dropshipping-apps', expectedType: 'article', isBlog: true, name: 'Best Dropshipping Apps' },
  { route: '/blog/fashion-dropshipping-guide', expectedType: 'article', isBlog: true, name: 'Fashion Dropshipping Guide' },
  { route: '/blog/woocommerce-to-shopify-migration', expectedType: 'article', isBlog: true, name: 'WooCommerce Migration Guide' },
  { route: '/blog/shopify-seo-guide', expectedType: 'article', isBlog: true, name: 'Shopify SEO Guide' },
  { route: '/blog/leveraging-shopify-markets', expectedType: 'article', isBlog: true, name: 'Leveraging Shopify Markets' },
  { route: '/blog/shopify-not-converting', expectedType: 'article', isBlog: true, name: 'Shopify Not Converting Guide' },

  // Core Standalone & Landing Routes
  { route: '/', expectedType: 'website', isBlog: false, name: 'Homepage' },
  { route: '/about', expectedType: 'website', isBlog: false, name: 'About Page' },
  { route: '/services', expectedType: 'website', isBlog: false, name: 'Services Directory' },
  { route: '/portfolio', expectedType: 'website', isBlog: false, name: 'Portfolio' },
  { route: '/blog', expectedType: 'blog', isBlog: false, name: 'Blog Index' },
  { route: '/contact', expectedType: 'website', isBlog: false, name: 'Contact' },
  { route: '/services/speed', expectedType: 'website', isBlog: false, name: 'Shopify Speed Service' },
  { route: '/services/seo', expectedType: 'website', isBlog: false, name: 'Shopify SEO Service' },
  { route: '/services/cro', expectedType: 'website', isBlog: false, name: 'Shopify CRO Service' }
];

function extractTag(html, regex) {
  const match = html.match(regex);
  return match ? match[1] : null;
}

function validateHtml(route, html, isBlog, expectedType) {
  const errors = [];
  const warnings = [];
  const findings = {};

  // 1. Title tag
  findings.title = extractTag(html, /<title>(.*?)<\/title>/i);
  if (!findings.title) errors.push('Missing <title> tag');
  else if (!findings.title.includes('Sheun Hub')) warnings.push('Title does not mention brand "Sheun Hub"');

  // 2. Canonical tag
  findings.canonical = extractTag(html, /<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  if (!findings.canonical) errors.push('Missing <link rel="canonical"> tag');
  else if (!findings.canonical.startsWith('https://www.sheun.online')) errors.push(`Canonical is not absolute HTTPS URL: ${findings.canonical}`);

  // 3. Meta Description
  findings.description = extractTag(html, /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  if (!findings.description) errors.push('Missing <meta name="description"> tag');
  else if (findings.description.length < 30) errors.push(`Meta description too short (${findings.description.length} chars)`);

  // 4. Open Graph Tags (Facebook & LinkedIn)
  findings.ogTitle = extractTag(html, /<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i);
  findings.ogDesc = extractTag(html, /<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i);
  findings.ogUrl = extractTag(html, /<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i);
  findings.ogType = extractTag(html, /<meta\s+property=["']og:type["']\s+content=["'](.*?)["']/i);
  findings.ogSiteName = extractTag(html, /<meta\s+property=["']og:site_name["']\s+content=["'](.*?)["']/i);
  findings.ogImage = extractTag(html, /<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i);

  if (!findings.ogTitle) errors.push('Missing og:title');
  if (!findings.ogDesc) errors.push('Missing og:description');
  if (!findings.ogUrl) errors.push('Missing og:url');
  if (!findings.ogType) errors.push('Missing og:type');
  if (findings.ogSiteName !== 'Sheun Hub') errors.push(`og:site_name must be "Sheun Hub", found: "${findings.ogSiteName}"`);

  if (!findings.ogImage) {
    errors.push('Missing og:image');
  } else {
    if (!findings.ogImage.startsWith('https://')) {
      errors.push(`og:image must be an absolute HTTPS URL, found: "${findings.ogImage}"`);
    }
    if (isBlog && findings.ogImage.endsWith('/logo.png')) {
      errors.push(`FAIL: Blog post og:image is falling back to generic website logo: "${findings.ogImage}"`);
    }
  }

  // 5. Twitter / X Card Tags
  findings.twitterCard = extractTag(html, /<meta\s+name=["']twitter:card["']\s+content=["'](.*?)["']/i);
  findings.twitterTitle = extractTag(html, /<meta\s+name=["']twitter:title["']\s+content=["'](.*?)["']/i);
  findings.twitterDesc = extractTag(html, /<meta\s+name=["']twitter:description["']\s+content=["'](.*?)["']/i);
  findings.twitterImage = extractTag(html, /<meta\s+name=["']twitter:image["']\s+content=["'](.*?)["']/i);

  if (findings.twitterCard !== 'summary_large_image') errors.push(`twitter:card must be "summary_large_image", found: "${findings.twitterCard}"`);
  if (!findings.twitterTitle) errors.push('Missing twitter:title');
  if (!findings.twitterDesc) errors.push('Missing twitter:description');
  if (!findings.twitterImage) {
    errors.push('Missing twitter:image');
  } else {
    if (!findings.twitterImage.startsWith('https://')) {
      errors.push(`twitter:image must be an absolute HTTPS URL, found: "${findings.twitterImage}"`);
    }
    if (isBlog && findings.twitterImage.endsWith('/logo.png')) {
      errors.push(`FAIL: Blog post twitter:image is falling back to generic website logo: "${findings.twitterImage}"`);
    }
  }

  // 6. Schema.org JSON-LD Structured Data
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (!jsonLdMatch) {
    errors.push('Missing <script type="application/ld+json"> structured data block');
  } else {
    try {
      const parsedJson = JSON.parse(jsonLdMatch[1]);
      findings.schemaType = parsedJson['@type'] || (parsedJson['@graph'] ? 'Graph' : 'Unknown');
      if (isBlog && parsedJson['@type'] !== 'BlogPosting') {
        errors.push(`Blog route Schema.org @type must be "BlogPosting", found "${parsedJson['@type']}"`);
      }
    } catch (e) {
      errors.push(`Malformed JSON-LD script: ${e.message}`);
    }
  }

  return { errors, warnings, findings };
}

async function runValidation() {
  console.log('===============================================================');
  console.log(' SOCIAL METADATA & CRAWLER PREVIEW AUDIT (FB, LINKEDIN, X)');
  console.log('===============================================================\n');

  let passed = 0;
  let failed = 0;

  for (const item of testRoutes) {
    const filePath = item.route === '/' 
      ? path.join(distPath, 'index.html') 
      : path.join(distPath, item.route.replace(/^\//, ''), 'index.html');

    if (!fs.existsSync(filePath)) {
      console.log(`[FAIL] ${item.route} - File not found: ${filePath}`);
      failed++;
      continue;
    }

    const htmlContent = fs.readFileSync(filePath, 'utf8');
    const { errors, warnings, findings } = validateHtml(item.route, htmlContent, item.isBlog, item.expectedType);

    if (errors.length > 0) {
      console.log(`[FAIL] ${item.route} (${item.name})`);
      errors.forEach(err => console.log(`   - ERROR: ${err}`));
      failed++;
    } else {
      console.log(`[PASS] ${item.route} (${item.name})`);
      console.log(`   - Title: ${findings.title}`);
      console.log(`   - Canonical: ${findings.canonical}`);
      console.log(`   - OG Type: ${findings.ogType} | Site Name: ${findings.ogSiteName}`);
      console.log(`   - Featured Image: ${findings.ogImage}`);
      console.log(`   - Twitter Card: ${findings.twitterCard}`);
      if (warnings.length > 0) {
        warnings.forEach(warn => console.log(`   * NOTE: ${warn}`));
      }
      passed++;
    }
    console.log('---------------------------------------------------------------');
  }

  console.log(`\nAUDIT COMPLETE: ${passed} Passed, ${failed} Failed out of ${testRoutes.length} Tested Routes.`);

  if (failed > 0) {
    process.exit(1);
  }
}

runValidation();
