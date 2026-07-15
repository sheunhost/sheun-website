import fs from 'fs';

let content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf-8');

const replacement = `                    ))}
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* How It Works Section */}
        {service.howItWorks && (
          <section className="py-24 bg-white relative overflow-hidden">
             <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto flex gap-6">
                  <div className="hidden md:block w-32 shrink-0">
                    <div className="sticky top-32 w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-2xl font-serif italic">03</div>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-navy mb-12">How It Works</h2>
                    <div className="space-y-6">
                      {service.howItWorks.map((step, idx) => {
                        const parts = step.split(': ');
                        const title = parts[0];
                        const desc = parts.slice(1).join(': ');
                        return (
                          <div key={idx} className="bg-light p-8 rounded-3xl border border-navy/5 flex gap-6 items-start hover:border-green/30 transition-colors">
                            <div className="w-12 h-12 bg-green/10 text-green font-bold text-xl rounded-full flex items-center justify-center shrink-0">
                              {idx + 1}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
                              <p className="text-navy/70 leading-relaxed font-medium">{desc || title}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* Pricing Section */}
        {service.pricing && (
          <section className="py-24 bg-light border-y border-navy/5">
             <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto flex gap-6">
                  <div className="hidden md:block w-32 shrink-0">
                    <div className="sticky top-32 w-16 h-16 bg-green/20 rounded-full flex items-center justify-center text-green font-bold text-2xl font-serif italic">04</div>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-navy mb-8">Investment</h2>
                    <div className="bg-white p-10 md:p-12 rounded-[40px] border-2 border-green/20 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 rounded-full blur-[80px] pointer-events-none" />
                      <p className="text-sm font-bold uppercase tracking-widest text-navy/40 mb-4">Starting At</p>
                      <div className="text-5xl md:text-6xl font-bold text-navy tracking-tight mb-6">{service.pricing.startingAt}</div>
                      <p className="text-xl text-navy/70 font-medium leading-relaxed">{service.pricing.details}</p>
                      <a href="#service-form" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold mt-8 hover:bg-green hover:text-navy transition-colors">
                        Request Custom Quote <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* Recent Work Section */}
        {service.recentWork && (
          <section className="py-24 bg-white">
             <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto flex gap-6">
                  <div className="hidden md:block w-32 shrink-0">
                    <div className="sticky top-32 w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-2xl font-serif italic">05</div>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-navy mb-8">Recent {service.title} Work</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.recentWork.map((work, idx) => (
                        <Link to={work.link} key={idx} onClick={() => window.scrollTo(0, 0)} className="group block bg-light p-8 rounded-3xl border border-navy/5 hover:border-green/50 transition-all">
                          <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-green transition-colors">{work.name}</h3>
                          <p className="text-navy/70 font-medium mb-6">{work.result}</p>
                          <div className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-navy/40 group-hover:text-navy transition-colors">
                            View Project <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* Testimonial Section */}
        {service.testimonial && (
          <section className="py-24 bg-navy text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-green)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-10" />
             <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-4xl mx-auto flex gap-6">
                  <div className="hidden md:block w-32 shrink-0">
                    <div className="sticky top-32 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-2xl font-serif italic">06</div>
                  </div>
                  <div className="w-full">
                    <Star className="w-12 h-12 text-green fill-green mb-8" />
                    <blockquote className="text-3xl md:text-4xl font-serif italic leading-snug mb-10 text-balance">
                      "{service.testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-xl">{service.testimonial.author}</div>
                      <div className="text-green/80 font-medium">{service.testimonial.role}</div>
                    </div>
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* Comparison Section */}
        {service.comparison && (
          <section className="py-24 bg-light border-b border-navy/5">
             <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto flex gap-6">
                  <div className="hidden md:block w-32 shrink-0">
                    <div className="sticky top-32 w-16 h-16 bg-green/20 rounded-full flex items-center justify-center text-green font-bold text-2xl font-serif italic">07</div>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-navy mb-8">Why Choose Sheun Hub?</h2>
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-navy/5 hover:border-green/20 transition-all">
                      <p className="text-xl text-navy/70 leading-relaxed font-medium">
                        {service.comparison}
                      </p>
                    </div>
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* FAQs Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex gap-6">
                <div className="hidden md:block w-32 shrink-0">
                  <div className="sticky top-32 w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold text-2xl font-serif italic">08</div>
                </div>`;

const search = `                    ))}
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* FAQs Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex gap-6">
                <div className="hidden md:block w-32 shrink-0">
                  <div className="sticky top-32 w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold text-2xl font-serif italic">03</div>
                </div>`;

if (!content.includes(search)) {
  console.log("Could not find search string in file. Let's try matching a shorter block.");
} else {
  content = content.replace(search, replacement);
}

// Add FAQ Schema logic
const faqSchemaScript = `  const faqSchema = service ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;
`;

if (!content.includes("const faqSchema =")) {
  content = content.replace('  if (!service) {', faqSchemaScript + '\n  if (!service) {');
}

if (!content.includes('faqSchema &&')) {
  content = content.replace('    </PageWrapper>', `      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </PageWrapper>`);
}

fs.writeFileSync('src/pages/ServiceDetail.tsx', content);
console.log('Successfully updated ServiceDetail.tsx');
