import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { RelevantService } from "../data/blogPostsData";

interface BlogRelatedServicesProps {
  services: RelevantService[];
  category?: string;
}

export default function BlogRelatedServices({ services, category }: BlogRelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-navy/10 dark:border-white/10">
      <div className="bg-gradient-to-br from-light via-white to-light dark:from-white/5 dark:via-navy dark:to-white/5 p-8 md:p-12 rounded-3xl border border-navy/10 dark:border-white/10 shadow-xl">
        <div className="flex items-center gap-3 text-green mb-4">
          <Sparkles size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">
            Relevant Shopify Services
          </span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-3 tracking-tight">
          Turn These Insights Into High-Converting Execution
        </h3>
        
        <p className="text-navy/70 dark:text-white/70 mb-8 max-w-2xl text-base leading-relaxed">
          Need hands-on technical execution or custom Shopify engineering? Explore the specialized services below designed specifically to solve these challenges:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <Link
              key={idx}
              to={service.path}
              className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-navy/5 dark:border-white/10 hover:border-green/40 dark:hover:border-green/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-green/10 text-green">
                    {service.tag}
                  </span>
                  <ArrowRight size={16} className="text-navy/40 dark:text-white/40 group-hover:text-green group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-lg font-bold text-navy dark:text-white group-hover:text-green transition-colors mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-navy/60 dark:text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-navy/5 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-green">
                <CheckCircle2 size={14} />
                <span>Learn more about this service</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
