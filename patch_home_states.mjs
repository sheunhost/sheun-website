import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  content = content.replace(/const \[testimonialIndex, setTestimonialIndex\] = useState\(0\);\n/, '');
  content = content.replace(/const \[isTestimonialExpanded, setIsTestimonialExpanded\] = useState\(false\);\n/, '');
  
  content = content.replace(/const nextTestimonial = \(\) => \{\n\s*setTestimonialIndex\(\(prev\) => \(prev \+ 1\) % testimonials.length\);\n\s*setIsTestimonialExpanded\(false\);\n\s*\};\n/, '');
  content = content.replace(/const prevTestimonial = \(\) => \{\n\s*setTestimonialIndex\(\(prev\) => \(prev - 1 \+ testimonials.length\) % testimonials.length\);\n\s*setIsTestimonialExpanded\(false\);\n\s*\};\n/, '');

  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched unused states");
}
main();
