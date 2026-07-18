import fs from 'fs/promises';

async function main() {
  let content = await fs.readFile('src/pages/Home.tsx', 'utf-8');
  
  // 1. Expand "Generic Freelancer" list
  content = content.replace(
    'Language & communication barriers',
    'Struggles with communication, frequently misinterpreting complex requirements leading to costly re-dos.'
  );
  content = content.replace(
    'Cookie-cutter, generic template stores',
    'Relies on generic, bloated templates that fail to capture your unique brand identity or build trust.'
  );
  content = content.replace(
    'Unreliable timelines, delays & ghosting',
    'Plagued by unreliable timelines, sudden disappearances, and a lack of professional accountability.'
  );
  content = content.replace(
    'No understanding of commercial conversion strategy',
    'Focuses solely on getting the code working without any understanding of what actually drives sales.'
  );

  // Expand "Sheun Hub" list
  content = content.replace(
    'Direct partnership with a certified remote specialist',
    'Work directly with a dedicated Shopify specialist—ensuring no details are lost in translation.'
  );
  content = content.replace(
    'Bespoke Liquid coding, zero theme-bloat & technical SEO',
    'Bespoke, lightweight Liquid code built from the ground up for maximum speed and technical SEO.'
  );
  content = content.replace(
    'Strategic focus on conversion metrics & commercial growth',
    'Every technical decision is driven by conversion psychology, ROI, and commercial growth metrics.'
  );
  content = content.replace(
    'Transparent project cost structures without agency bloat',
    'Clear, upfront project pricing that eliminates the hidden fees and bloated overhead of traditional agencies.'
  );
  content = content.replace(
    'Highly proactive, clear, and direct communications',
    'Experience highly proactive, crystal-clear communication and rapid feedback loops throughout the project.'
  );

  // Expand "Big Digital Agency" list
  content = content.replace(
    '$5k+ minimum project setup & monthly retainers',
    'Forces you into massive minimum engagement fees and insists on locking you into long-term retainers.'
  );
  content = content.replace(
    'Your project is outsourced to junior developers/interns',
    'Quietly outsources the actual execution of your project to inexperienced junior developers or interns.'
  );
  content = content.replace(
    'Overwhelming bureaucracy & slow ticket-system responses',
    'Stifles progress with overwhelming bureaucracy, account managers, and slow support-ticket systems.'
  );
  content = content.replace(
    "You're treated as just another ticket in their queue",
    "Treats your ambitious brand as just another number in their massive queue rather than a strategic partner."
  );

  // 2. Fix "Trusted By" Section
  // Find the AnimatePresence and replace it with a grid mapping all testimonials
  const testimonialRegex = /<div className="max-w-3xl mx-auto relative">[\s\S]*?(?=<\/section>)/;
  
  const newTestimonialSection = `
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-navy/80 p-8 rounded-3xl shadow-xl border border-navy/5 dark:border-white/5 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green text-navy rounded-full flex items-center justify-center shadow z-20">
                      <Quote size={10} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-navy dark:text-white font-bold text-lg leading-tight">{testimonial.name}</h3>
                    <p className="text-navy dark:text-white/40 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" className="text-[#FFC107]" />
                  ))}
                </div>
                
                <p className="text-navy dark:text-white/70 font-serif italic text-base leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
`;

  content = content.replace(testimonialRegex, newTestimonialSection);

  // 3. Expand "The Sheun Hub Advantage" points
  // Wait, I'll need to locate the exact array in the file for this.
  
  await fs.writeFile('src/pages/Home.tsx', content);
  console.log("Patched Home part 1");
}
main();
