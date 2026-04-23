import fs from "fs";

const content = fs.readFileSync("src/pages/Home.tsx", "utf-8");

// We need to extract the sections:
// 1. Hero
// 2. SEO Audit Section
// 3. Services Preview
// 4. Portfolio Preview
// 5. Contact Section
// 6. Newsletter Section
// 7. CTA Banner Modal & general footer wrappers

// Find indexes
const heroStart = content.indexOf("{/* Hero Section */}");
const subBannerStart = content.indexOf("{/* 2 Sub-banners Section */}");
const servicesStart = content.indexOf("{/* Services Preview - Visible Grid Recipe */}");
const narrativeStart = content.indexOf("{/* Narrative Section - The Methodology");
const portfolioStart = content.indexOf("{/* Portfolio Preview - Bento Grid */}");
const nicheStart = content.indexOf("{/* Niche Specializations */}");
const seoStart = content.indexOf("{/* SEO Audit Section */}");
const testimonialsStart = content.indexOf("{/* Happy Clients / Testimonials Section */}");
const contactStart = content.indexOf("{/* Contact Section - Visible Grid Style */}");
const newsletterStart = content.indexOf("{/* Newsletter Section */}");
const ctaStart = content.indexOf("{/* CTA Banner - Recipe 2 */}");

if (
  heroStart === -1 || subBannerStart === -1 || servicesStart === -1 || narrativeStart === -1 || 
  portfolioStart === -1 || nicheStart === -1 || seoStart === -1 || testimonialsStart === -1 || 
  contactStart === -1 || newsletterStart === -1 || ctaStart === -1
) {
  console.log("Could not find all sections!");
  process.exit(1);
}

// Extract blocks
const part1 = content.substring(0, subBannerStart); // Everything up to sub banners (includes Hero)
const seoAudit = content.substring(seoStart, testimonialsStart); // SEO Audit Section
const servicesBlock = content.substring(servicesStart, narrativeStart); // Services + Modal
const portfolioBlock = content.substring(portfolioStart, nicheStart); // Portfolio
const remainingContent = content.substring(contactStart); // Contact, Newsletter, CTA, and End of Page

const newContent = part1 + seoAudit + servicesBlock + portfolioBlock + remainingContent;

fs.writeFileSync("src/pages/Home.tsx", newContent);
console.log("Successfully simplified Home.tsx!");
