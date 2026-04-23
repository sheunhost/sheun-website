const fs = require("fs");

const content = fs.readFileSync("src/pages/Portfolio.tsx", "utf-8");

const subBannersStart = content.indexOf("{/* 2 Sub-banners Section */}");
const filterTabsStart = content.indexOf("{/* Filter Tabs *\/}");

if (subBannersStart !== -1 && filterTabsStart !== -1) {
  const part1 = content.substring(0, subBannersStart);
  const part2 = content.substring(filterTabsStart);
  fs.writeFileSync("src/pages/Portfolio.tsx", part1 + part2);
  console.log("Portfolio.tsx simplified.");
} else {
  console.log("Could not find sections in Portfolio.tsx.");
}

const servicesContent = fs.readFileSync("src/pages/Services.tsx", "utf-8");
const subBannersStartS = servicesContent.indexOf("{/* 2 Sub-banners Section */}");
const servicesGridStartS = servicesContent.indexOf("{/* Services Grid - Visible Grid Recipe */}");
const faqStartS = servicesContent.indexOf("{/* FAQ - Bento Layout */}");
const ctaStartS = servicesContent.indexOf("{/* Free Audit CTA - Recipe 2 */}");

if (subBannersStartS !== -1 && servicesGridStartS !== -1 && faqStartS !== -1 && ctaStartS !== -1) {
  const part1 = servicesContent.substring(0, subBannersStartS);
  const part2 = servicesContent.substring(servicesGridStartS, faqStartS);
  
  // Create completely stripped down version.
  const rebuilt = part1 + part2 + "\n    </PageWrapper>\n  );\n}\n";
  fs.writeFileSync("src/pages/Services.tsx", rebuilt);
  console.log("Services.tsx simplified.");
} else {
  console.log("Could not find sections in Services.tsx.");
}
