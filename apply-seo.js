import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updates = {
  'Home.tsx': {
    title: 'Shopify Expert Developer | US & UK | Sheun Hub',
    description: 'Hire a top-rated Shopify Developer for store builds, redesigns, speed optimization, and CRO. Start growing your e-commerce business today. Apply now!'
  },
  'About.tsx': {
    title: 'About Sheun | Expert Shopify Developer',
    description: "Meet Sheun, a specialized freelance Shopify developer helping entrepreneurs in the US, UK, CA, and AU scale their stores. Let's discuss your next project!"
  },
  'Services.tsx': {
    title: 'Shopify Development Services | Sheun Hub',
    description: 'Professional Shopify services: store builds, redesigns, dropshipping setup, migrations, and CRO. Ready to scale your e-commerce sales? View our services!'
  },
  'Portfolio.tsx': {
    title: 'Shopify Developer Portfolio & Case Studies',
    description: 'Explore our successful Shopify store builds, redesigns, and custom app integrations. See how we help brands scale online. View our latest work today!'
  },
  'Apply.tsx': {
    title: 'Hire a Shopify Developer | Apply Now',
    description: 'Ready to build or scale your Shopify store? Apply to work with an expert Shopify developer to transform your e-commerce vision into reality. Get in touch!'
  },
  'Contact.tsx': {
    title: 'Contact Sheun | Shopify Developer',
    description: 'Have a question about Shopify development or e-commerce growth? Reach out to Sheun today for expert advice and technical solutions. Contact me now!'
  },
  'Blog.tsx': {
    title: 'Shopify E-commerce Blog | Sheun Hub',
    description: 'Read our latest guides and strategies for growing your Shopify store. Learn about SEO, speed optimization, conversions, and more. Read the blog now!'
  }
};

const pagesDir = path.join(__dirname, 'src', 'pages');

Object.keys(updates).forEach(filename => {
  const filePath = path.join(pagesDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filename}, not found`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace title
  content = content.replace(/<PageWrapper\s+title="[^"]*"/, `<PageWrapper \n      title="${updates[filename].title}"`);
  
  // Replace description (handle it being on the same line or next line, matching it generically)
  content = content.replace(/description="[^"]*"/, `description="${updates[filename].description}"`);

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filename}`);
});
