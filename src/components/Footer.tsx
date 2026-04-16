import { Link } from "react-router-dom";
import { Mail, MessageCircle, Linkedin, Facebook, Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="inline-block">
              <img 
                src="https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png" 
                alt="sheun_hub logo" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-48 w-auto" 
              />
            </Link>
            <p className="text-white/40 text-xl leading-relaxed max-w-md font-serif italic">
              Your Shopify Growth Partner. Building high-converting eCommerce experiences for global brands.
            </p>
            <div className="flex items-center space-x-6">
              {[
                { icon: Mail, href: "mailto:sheunhost@gmail.com" },
                { icon: MessageCircle, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-green hover:border-green hover:bg-green/5 transition-all duration-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white/20 mb-10">Navigation</h4>
            <ul className="space-y-6 text-lg font-medium">
              <li><Link to="/" className="text-white/60 hover:text-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-green transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-green transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white/20 mb-10">Expertise</h4>
            <ul className="space-y-6 text-lg font-medium">
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Store Setup</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Custom Dev</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Migrations</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">SEO & Speed</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white/20 mb-10">Latest Insight</h4>
            <div className="space-y-8">
              <Link to="/blog" className="group block space-y-2">
                <p className="text-[10px] font-bold text-green uppercase tracking-widest">April 12, 2026</p>
                <p className="text-xl font-bold group-hover:text-green transition-colors leading-tight">10 Shopify Settings Most Store Owners Miss</p>
              </Link>
              <Link to="/blog" className="group block space-y-2">
                <p className="text-[10px] font-bold text-green uppercase tracking-widest">April 10, 2026</p>
                <p className="text-xl font-bold group-hover:text-green transition-colors leading-tight">How to Speed Up Your Shopify Store in 2025</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs text-white/20 font-medium">
            © 2026 sheun_hub. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="bg-white/5 text-green text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/5">Shopify Partner</span>
              <span className="bg-white/5 text-green text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/5">Top Rated Freelancer</span>
            </div>
            <div className="flex items-center gap-8 text-xs font-medium text-white/20">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
