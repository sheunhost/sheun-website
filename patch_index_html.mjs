import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('index.html', 'utf-8');
  const themeScript = `
    <!-- Theme initialization to prevent FOUC -->
    <script>
      (function() {
        try {
          var theme = localStorage.getItem('ui-theme');
          if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();
    </script>
  `;
  content = content.replace('<!-- Manifest -->', themeScript + '<!-- Manifest -->');
  await fs.writeFile('index.html', content);
  console.log("Patched index.html with FOUC script");
}
main();
