import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  content = content.replace(
    /\{\s*title:\s*"Custom Liquid Mastery",\s*desc:\s*"No cookie-cutter templates\. Features coded purely for your brand's unique needs\."\s*\}/,
    '{ title: "Custom Liquid Mastery", desc: "We abandon bloated, cookie-cutter themes in favor of bespoke Liquid architecture. Every line of code is purpose-built for your brand, guaranteeing a unique storefront that doesn\'t sacrifice performance." }'
  );

  content = content.replace(
    /\{\s*title:\s*"Speed Obsessive",\s*desc:\s*"Ultra-fast load times mathematically proven to increase conversion rates\."\s*\}/,
    '{ title: "Speed Obsessive", desc: "We engineer your store with a relentless focus on performance. By optimizing assets and streamlining scripts, we achieve ultra-fast sub-second load times mathematically proven to significantly increase conversion rates and reduce bounce." }'
  );

  content = content.replace(
    /\{\s*title:\s*"Direct Communication",\s*desc:\s*"No middle-men or project managers\. You work directly with the technical architect\."\s*\}/,
    '{ title: "Direct Communication", desc: "Bypass the typical agency bureaucracy and work directly one-on-one with the technical architect. Enjoy clear, proactive updates, fast feedback loops, and zero miscommunications from start to finish." }'
  );
  
  // Also adjust max-w-sm to max-w-md so the text breathes better
  content = content.replace(
    '<p className="text-white/40 leading-relaxed max-w-sm">{item.desc}</p>',
    '<p className="text-white/40 leading-relaxed max-w-md">{item.desc}</p>'
  );
  
  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched Advantage section");
}
main();
