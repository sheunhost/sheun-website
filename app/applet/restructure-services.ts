import fs from "fs";

const content = fs.readFileSync("src/pages/Services.tsx", "utf-8");

// We need to keep:
// 1. imports, arrays, Component definitions
// 2. Services Hero
// 3. Services Grid
// 4. Pricing Tiers
// 5. ServiceModal / AnimatePresence

const heroStart = content.indexOf("{/* Services Hero - Editorial Style */}");
const subBannersStart = content.indexOf("{/* 2 Sub-banners Section */}");
const servicesGridStart = content.indexOf("{/* Services Grid - Visible Grid Recipe */}");
const pricingStart = content.indexOf("{/* Pricing Tiers - Bento Grid */}");
const faqStart = content.indexOf("{/* FAQ - Bento Layout */}");
const ctaStart = content.indexOf("{/* Free Audit CTA - Recipe 2 */}");

if (
  heroStart === -1 || subBannersStart === -1 || servicesGridStart === -1 || 
  pricingStart === -1 || faqStart === -1 || ctaStart === -1
) {
  console.log("Could not find all sections!");
  process.exit(1);
}

const head = content.substring(0, subBannersStart);
const servicesGrid = content.substring(servicesGridStart, faqStart); // Keeps Services Grid + Pricing Tiers

// Constructing completely simplified render blocks
const rebuilt = head + servicesGrid + "\n    </PageWrapper>\n  );\n}\n";

fs.writeFileSync("src/pages/Services.tsx", rebuilt);
console.log("Successfully simplified Services.tsx!");
