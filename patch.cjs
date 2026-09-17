const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const testimonialsCode = `
const testimonials = [
  {
    name: "Sarah Jenkins",
    rating: 5,
    content: "Sheun Hub completely transformed our online presence. Our conversion rate doubled within the first month after the redesign.",
  },
  {
    name: "Michael Chen",
    rating: 5,
    content: "The level of expertise in Shopify development is unmatched. They handled our complex migration flawlessly without any downtime.",
  },
  {
    name: "Emma Watson",
    rating: 5,
    content: "Incredible attention to detail and UX. Our new custom theme perfectly captures our brand identity while being lightning fast.",
  },
  {
    name: "David Rodriguez",
    rating: 5,
    content: "The best investment we've made for our e-commerce business. The technical SEO improvements alone brought in massive organic traffic.",
  },
];

`;

const newContent = content.replace('const SEOReport = ', testimonialsCode + 'const SEOReport = ');
fs.writeFileSync('src/pages/Home.tsx', newContent);
console.log("Patched!");
