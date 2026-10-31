const https = require('https');
const fs = require('fs');
const path = require('path');

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, data: Buffer.concat(data) }));
      res.on('error', reject);
    });
  });
}

async function main() {
  const cssRes = await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:ital,wght@0,400;0,600;1,400&display=swap', { 'User-Agent': userAgent });
  const css = cssRes.data.toString('utf8');

  fs.mkdirSync('public/fonts', { recursive: true });

  const blocks = css.split('@font-face');
  let downloaded = 0;
  const fontFaces = [];

  for (const block of blocks) {
    if (!block.includes('unicode-range') || !block.includes('U+0000-00FF')) continue;
    const familyMatch = block.match(/font-family:\s*['"]?([^'"]+)['"]?/);
    const weightMatch = block.match(/font-weight:\s*(\d+)/);
    const styleMatch = block.match(/font-style:\s*(\w+)/);
    const urlMatch = block.match(/url\((https:[^)]+)\)/);

    if (familyMatch && weightMatch && urlMatch) {
      const family = familyMatch[1];
      const weight = weightMatch[1];
      const style = styleMatch ? styleMatch[1] : 'normal';
      const fontUrl = urlMatch[1];
      const cleanFamily = family.replace(/\s+/g, '-').toLowerCase();
      const fileName = `${cleanFamily}-${style}-${weight}-latin.woff2`;
      const filePath = path.join('public/fonts', fileName);

      console.log(`Downloading ${family} ${style} ${weight}...`);
      const fontRes = await fetch(fontUrl);
      fs.writeFileSync(filePath, fontRes.data);
      console.log(`Saved ${filePath} (${(fontRes.data.length / 1024).toFixed(1)} KB)`);

      fontFaces.push(`@font-face {
  font-family: '${family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${fileName}') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`);
      downloaded++;
    }
  }

  fs.writeFileSync('src/fonts.css', fontFaces.join('\n\n') + '\n');
  console.log(`Successfully downloaded ${downloaded} latin font files and created src/fonts.css`);
}

main().catch(console.error);
