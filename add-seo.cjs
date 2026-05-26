const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const pages = [
  { file: 'Home.tsx', title: 'Hire a Shopify Developer | Shopify Expert for Growth | Sheun Hub', desc: 'Expert Shopify developer specializing in custom themes, store setups, migrations, and CRO. Hire a Shopify expert to launch and scale your e-commerce business.' },
  { file: 'About.tsx', title: 'About Sheun | Freelance Shopify Developer & Consultant', desc: 'Learn more about Sheun, a freelance Shopify developer and e-commerce consultant dedicated to helping brands build high-converting Shopify stores.' },
  { file: 'Services.tsx', title: 'Shopify Development Services | Redesigns, Migrations & Speed | Sheun Hub', desc: 'Professional Shopify services including store redesigns, migrations from WooCommerce/Wix, speed optimization, and custom development.' },
  { file: 'Portfolio.tsx', title: 'Shopify Development Portfolio | Case Studies & Store Builds', desc: 'View past Shopify store builds, redesigns, and custom app integration case studies by expert Shopify developer Sheun.' },
  { file: 'Blog.tsx', title: 'Shopify E-commerce Blog | Tips for Store Owners | Sheun Hub', desc: 'Read the latest guides, tips, and strategies for growing your Shopify store, optimizing conversions, and improving site speed.' },
  { file: 'Apply.tsx', title: 'Hire Me | Apply to Work With a Shopify Expert | Sheun Hub', desc: 'Ready to build or scale your Shopify store? Apply to work with an expert Shopify developer to transform your e-commerce vision into reality.' },
  { file: 'Contact.tsx', title: 'Contact Sheun | Get in Touch with a Shopify Developer', desc: 'Have a question or a general inquiry? Reach out to Sheun, a seasoned Shopify specialist, to discuss your next e-commerce project.' }
];

pages.forEach(p => {
  const filePath = path.join(pagesDir, p.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has SEO
  if (content.includes('<SEO')) return;

  // Add the import after the last import line
  const lines = content.split('\n');
  let lastImportIdx = -1;
  lines.forEach((line, idx) => {
    if (line.startsWith('import ')) {
      lastImportIdx = idx;
    }
  });
  lines.splice(lastImportIdx + 1, 0, 'import { SEO } from "../components/SEO";');
  content = lines.join('\n');

  // Insert <SEO .../> right after <PageWrapper> or the first main div if not page wrapper
  const seoTag = `\n      <SEO title="${p.title}" description="${p.desc}" />`;
  if (content.includes('<PageWrapper>')) {
    content = content.replace('<PageWrapper>', '<PageWrapper>' + seoTag);
  } else {
    // If no PageWrapper, let's just insert it randomly after return ( 
    content = content.replace('return (', 'return (\n      <SEO title="' + p.title + '" description="' + p.desc + '" />');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${p.file}`);
});
