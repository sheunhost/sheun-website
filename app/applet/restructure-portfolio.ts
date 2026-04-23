import fs from "fs";

const content = fs.readFileSync("src/pages/Portfolio.tsx", "utf-8");

const heroStart = content.indexOf("{/* Portfolio Hero */}");
const subBannersStart = content.indexOf("{/* 2 Sub-banners Section */}");
const filterTabsStart = content.indexOf("{/* Filter Tabs */}");
const portfolioGridStart = content.indexOf("{/* Portfolio Grid */}");
const ctaStart = content.indexOf("{/* See a style you love? */}"); // wait, let's see where the block is
const projectModalStart = content.indexOf("{/* Project Modal */}");

// Let's just remove the sub banners and narrative sections.
// Sub banners: {/* 2 Sub-banners Section */} -> {/* Narrative Section
// Narrative: {/* Narrative Section - The Design Ethos */} -> {/* Filter Tabs */}

const part1 = content.substring(0, subBannersStart);
const part2 = content.substring(filterTabsStart);

const rebuilt = part1 + part2;

fs.writeFileSync("src/pages/Portfolio.tsx", rebuilt);
console.log("Successfully simplified Portfolio.tsx!");
