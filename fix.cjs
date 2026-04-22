const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's simply replace EVERYTHING about Twitter with Facebook
  // First, fix the duplicate handleFacebookShare issue
  content = content.replace(/const handleFacebookShare = \(\) => \{\n\s*window\.open\(`https:\/\/twitter\.com[^`]+`, "_blank"\);\n\s*\};\n/g, '');
  content = content.replace(/const handleTwitterShare = \(\) => \{\n\s*window\.open\(`https:\/\/twitter\.com[^`]+`, "_blank"\);\n\s*\};\n/g, '');

  content = content.replace(/handleTwitterShare/g, 'handleFacebookShare');

  // Replace lucide-react imports if Facebook is missing
  if (content.includes('lucide-react') && !content.includes('Facebook')) {
     content = content.replace(/import \{([^}]+)\} from ["']lucide-react["']/, 'import { Facebook, $1 } from "lucide-react"');
  }

  // Replace the SVG tag for Twitter completely with <Facebook size={18} />
  const svgRegex = /<span className="sr-only">Twitter<\/span>\s*<svg[\s\S]*?<\/svg>/g;
  content = content.replace(svgRegex, '<Facebook size={18} />');

  // Replace <Twitter > components
  content = content.replace(/<Twitter([^>]+)>/g, '<Facebook$1>');

  // Replace colors
  content = content.replace(/#1DA1F2/g, '#1877F2');

  fs.writeFileSync(filePath, content);
  console.log('Fixed', filePath);
});
