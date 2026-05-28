const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const servicesStart = content.indexOf('{/* Services Preview - Visible Grid Recipe */}');
const servicesEnd = content.indexOf('      {/* AI Store Visualizer Tool */}');

if (servicesStart === -1 || servicesEnd === -1) {
  console.log('Could not find sections.', servicesStart, servicesEnd);
  process.exit(1);
}

const servicesSection = content.substring(servicesStart, servicesEnd);

// Remove the section from its original place
content = content.replace(servicesSection, '');

const insertStart = content.indexOf('      {/* Narrative Section - The Methodology */}');
if (insertStart === -1) {
  console.log('Could not find narrative section');
  process.exit(1);
}

// Insert before the Narrative section
content = content.substring(0, insertStart) + servicesSection + content.substring(insertStart);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Moved successfully.');
