import { Link } from "react-router-dom";
import { ShieldCheck, Search, HeadphonesIcon, Lock } from "lucide-react";
import ConfigChecker from "./ConfigChecker";

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* API Status Check (Development Only or hidden) */}
        <div className="hidden">
           <ConfigChecker />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Company */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <img 
                src="https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png" 
                alt="Sheun - Shopify Development and Growth Expert" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-20 w-auto object-contain drop-shadow-xl" 
              />
            </Link>
            <p className="text-white/40 text-lg leading-relaxed font-serif italic">
              Your Shopify Growth Partner. Building high-converting eCommerce experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Services</h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Store Setup</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Custom Dev</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">Migrations</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-green transition-colors">SEO & Speed</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Resources</h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/about" className="text-white/60 hover:text-green transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-green transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-green transition-colors">Blog</Link></li>
              <li><Link to="/apply#apply-form" className="text-white/60 hover:text-green transition-colors">Apply</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Social & Contact</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="mailto:sheunhost@gmail.com" className="text-white/60 hover:text-green transition-colors flex items-center gap-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-4 h-4 object-contain" /> Email</a></li>
              <li><a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-green transition-colors flex items-center gap-3"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-4 h-4 object-contain" /> WhatsApp</a></li>
              <li><a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-green transition-colors flex items-center gap-3"><img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-4 h-4 object-contain" /> LinkedIn</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61581094591044" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-green transition-colors flex items-center gap-3"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-4 h-4 object-contain" /> Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-between items-center gap-8 mb-12 py-10 border-y border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-green border border-white/10 group-hover:bg-green group-hover:text-navy transition-all">
              <Search size={22} />
            </div>
            <span className="text-white/80 font-medium tracking-wide">Free Store Audit</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-green border border-white/10 group-hover:bg-green group-hover:text-navy transition-all">
              <HeadphonesIcon size={22} />
            </div>
            <span className="text-white/80 font-medium tracking-wide">24/7 Support</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-green border border-white/10 group-hover:bg-green group-hover:text-navy transition-all">
              <Lock size={22} />
            </div>
            <span className="text-white/80 font-medium tracking-wide">100% Secure Checkout</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs text-white/20 font-medium text-center md:text-left">
            © 2026 Sheun Hub. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="bg-white/5 text-green text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 flex items-center gap-2">
              <ShieldCheck size={12} /> Verified & Secure
            </span>
            <div className="flex items-center gap-6 text-xs font-medium text-white/20">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
