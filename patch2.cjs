const fs = require('fs');
const file = '/app/applet/src/pages/ServiceDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `      try {
        const response = await fetch("https://formspree.io/f/xvgzlypy", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });`;

const replacement = `      formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
      formData.append("subject", \`New Service Inquiry: \${service.title}\`);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
