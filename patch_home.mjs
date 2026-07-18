import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  // The Comparison Section - Pill
  content = content.replace(
    'bg-[#F4F4F5] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0F172A]',
    'bg-[#F4F4F5] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white/80'
  );
  
  // The Comparison Section - Intro Text
  content = content.replace(
    '<p className="text-[#71717a] text-lg sm:text-xl font-serif italic leading-relaxed">',
    '<p className="text-[#71717a] dark:text-white/70 text-lg sm:text-xl font-serif italic leading-relaxed">'
  );
  
  // The Comparison Section - Option 1 & 2 Cards (border, bg)
  content = content.replace(
    /border border-\[#E2E8F0\] bg-\[#F8FAFC\] dark:bg-navy\/60/g,
    'border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-navy/40'
  );

  // The Comparison Section - Card Titles
  content = content.replace(
    /<h3 className="text-2xl font-bold text-\[#0F172A\] tracking-tight">/g,
    '<h3 className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight">'
  );

  // The Comparison Section - Card Text (Option 01 / 02)
  content = content.replace(
    /<span className="text-xs font-bold uppercase tracking-widest text-\[#71717a\]">/g,
    '<span className="text-xs font-bold uppercase tracking-widest text-[#71717a] dark:text-white/40">'
  );

  // The Comparison Section - List text
  content = content.replace(
    /<li className="flex items-start gap-3 text-\[#71717a\] text-sm leading-relaxed">/g,
    '<li className="flex items-start gap-3 text-[#71717a] dark:text-white/60 text-sm leading-relaxed">'
  );

  // The Comparison Section - Hidden Cost
  content = content.replace(
    /<p className="text-\[#71717a\] font-bold text-xs uppercase tracking-wider">/g,
    '<p className="text-[#71717a] dark:text-white/40 font-bold text-xs uppercase tracking-wider">'
  );

  // The Comparison Section - Hover states
  content = content.replace(
    /hover:border-red-200 transition-all/g,
    'hover:border-red-200 dark:hover:border-red-500/30 transition-all'
  );

  // The Comparison Section - border-t
  content = content.replace(
    /border-t border-\[#E2E8F0\]/g,
    'border-t border-[#E2E8F0] dark:border-white/10'
  );
  
  // Testimonials / Client Success Card (Trusted by)
  content = content.replace(
    'className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-navy/5 flex flex-col md:flex-row items-center gap-8"',
    'className="bg-white dark:bg-navy/80 p-6 md:p-10 rounded-3xl shadow-xl border border-navy/5 dark:border-white/5 flex flex-col md:flex-row items-center gap-8"'
  );

  // Testimonial Background Section
  content = content.replace(
    'className="py-32 bg-light relative overflow-hidden border-t border-navy/5"',
    'className="py-32 bg-light dark:bg-navy relative overflow-hidden border-t border-navy/5 dark:border-white/5"'
  );
  
  // Testimonials Left/Right Arrows Background
  content = content.replace(
    /bg-white border border-navy\/10 flex items-center justify-center text-navy dark:text-white hover:bg-green hover:border-green transition-all shadow-lg hover:scale-105/g,
    'bg-white dark:bg-navy/80 border border-navy/10 dark:border-white/10 flex items-center justify-center text-navy dark:text-white hover:bg-green dark:hover:bg-green hover:border-green dark:hover:border-green hover:text-navy dark:hover:text-navy transition-all shadow-lg hover:scale-105'
  );
  
  // "The Sheun Hub Advantage" Background - the user says: "sections that were clearly designed dark-mode-first and light mode just inverts colors without proper adjustment"
  // Wait, let's look at it again.
  //   <section className="py-32 bg-navy text-white relative overflow-hidden">
  // In light mode, this section is dark navy with white text, which is fine since the brand color is navy/green.
  // But maybe the 100% badge looks weird? 
  // `<div className="absolute -bottom-10 -left-10 bg-green text-navy dark:text-white p-10 rounded-2xl shadow-2xl border-4 border-navy border-t-0 animate-bounce-slow">`
  // border-navy is dark. Wait, if it's over a bg-navy background, border-navy makes it blend in. In dark mode, bg-navy is still bg-navy, border is still border-navy.
  // Wait, maybe the text-white inside the badge has bad contrast against bg-green? `bg-green text-navy dark:text-white`. #10b981 (green) with white text has a contrast ratio of 1.7:1 (very low). White on green is illegible!
  // It should be `text-navy` in BOTH modes, or `text-navy` and not `dark:text-white`. Let's fix that.
  content = content.replace(
    'bg-green text-navy dark:text-white p-10',
    'bg-green text-navy p-10'
  );
  // Remove dark:text-white from that badge entirely.
  
  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched Home.tsx");
}
main();
