import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "SEO Sprint", href: "/shopify-seo-sprint" },
  { name: "Blog", href: "/blog" },
  { name: "Calculator", href: "/calculator" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-10">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png" 
              alt="Sheun - Shopify Development and Growth Expert" 
              referrerPolicy="no-referrer"
              loading="lazy"
              className={cn(
                "rounded-full object-cover shadow-lg border-2 border-green/20 transition-all duration-500",
                isScrolled ? "h-16 w-16 md:h-20 md:w-20" : "h-20 w-20 md:h-32 md:w-32"
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.2em] transition-all relative group",
                  location.pathname === link.href 
                    ? "text-green" 
                    : isScrolled ? "text-navy font-bold hover:text-green" : "text-white hover:text-green"
                )}
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green"
                  initial={false}
                  animate={{
                    scaleX: location.pathname === link.href ? 1 : 0,
                    opacity: location.pathname === link.href ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            <Link 
              to="/apply" 
              className={cn(
                "px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all",
                isScrolled 
                  ? "bg-navy text-white hover:bg-green hover:text-navy" 
                  : "bg-green text-navy hover:bg-white"
              )}
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-xl transition-all duration-300",
            isScrolled 
              ? "text-navy hover:bg-navy/5" 
              : "text-green hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} className={cn(isScrolled ? "text-navy" : "text-green")} /> : (
            <div className="space-y-1.5 p-1">
              <div className={cn(
                "w-6 h-0.5 rounded-full transition-all duration-300",
                isScrolled ? "bg-navy" : "bg-green"
              )}></div>
              <div className={cn(
                "w-8 h-0.5 rounded-full transition-all duration-300",
                isScrolled ? "bg-navy" : "bg-green"
              )}></div>
              <div className={cn(
                "w-5 h-0.5 rounded-full transition-all duration-300",
                isScrolled ? "bg-navy" : "bg-green"
              )}></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-navy/5 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold flex items-center justify-between tracking-tighter",
                    location.pathname === link.href ? "text-green" : "text-navy"
                  )}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-green" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
