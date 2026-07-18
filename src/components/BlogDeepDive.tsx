import { ReactNode } from "react";
import { Info, HelpCircle, ArrowRight, Quote } from "lucide-react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <div className="my-12 relative">
      <div className="absolute -left-4 top-0 text-green/20">
        <Quote size={48} />
      </div>
      <blockquote className="text-2xl md:text-3xl font-serif text-navy dark:text-white italic pl-8 border-l-4 border-green">
        {children}
      </blockquote>
    </div>
  );
}

export function CalloutBox({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="bg-navy/[0.02] p-8 rounded-2xl border border-navy/5 dark:border-white/5 my-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center text-green">
          <Info size={20} />
        </div>
        <h4 className="text-xl font-bold text-navy dark:text-white m-0 font-sans">{title}</h4>
      </div>
      <div className="text-navy/80 dark:text-white/80 space-y-4">
        {children}
      </div>
    </div>
  );
}

export function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mt-20 pt-16 border-t border-navy/10 dark:border-white/10">
      <h3 className="text-3xl font-bold text-navy dark:text-white mb-10 font-sans">Frequently Asked Questions</h3>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white dark:bg-navy p-6 rounded-2xl border border-navy/5 dark:border-white/5 premium-shadow">
            <h4 className="text-lg font-bold text-navy dark:text-white flex items-start gap-3 mb-3">
              <HelpCircle className="text-green shrink-0 mt-1" size={20} />
              {faq.q}
            </h4>
            <p className="text-navy/70 dark:text-white/70 ml-8 mb-0">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
