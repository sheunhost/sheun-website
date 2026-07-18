import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  content = content.replace(/const nextTestimonial = \(\) => \{[\s\S]*?\};\n/, '');
  content = content.replace(/const prevTestimonial = \(\) => \{[\s\S]*?\};\n/, '');
  content = content.replace(/useEffect\(\(\) => \{\n\s*if \(isTestimonialExpanded\) return;\n\s*const timer = setInterval\(nextTestimonial, 8000\);\n\s*return \(\) => clearInterval\(timer\);\n\s*\}, \[isTestimonialExpanded\]\);\n/, '');

  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched unused functions");
}
main();
