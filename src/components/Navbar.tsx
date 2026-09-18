import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

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
              src="/logo.png" 
              alt="Sheun Hub - Shopify Development and Growth Expert" 
              referrerPolicy="no-referrer"
              loading="lazy"
              className={cn(
                "rounded-full object-cover shadow-lg border-2 border-[#6D28D9]/20 transition-all duration-500",
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
                    ? "text-[#8B5CF6]" 
                    : isScrolled ? "text-navy font-bold hover:text-[#8B5CF6]" : "text-white hover:text-[#8B5CF6]"
                )}
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#8B5CF6]"
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
                "px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md",
                isScrolled 
                  ? "bg-[#08090B] text-white hover:bg-[#6D28D9]" 
                  : "bg-[#6D28D9] text-white hover:bg-[#8B5CF6] shadow-[#6D28D9]/25"
              )}
            >
              Apply Now
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            className={cn(
              "p-2 rounded-xl transition-all duration-300",
              isScrolled 
                ? "text-navy hover:bg-navy/5" 
                : "text-[#8B5CF6] hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} className={cn(isScrolled ? "text-navy" : "text-[#8B5CF6]")} /> : (
              <div className="space-y-1.5 p-1">
                <div className={cn(
                  "w-6 h-0.5 rounded-full transition-all duration-300",
                  isScrolled ? "bg-navy" : "bg-[#8B5CF6]"
                )}></div>
                <div className={cn(
                  "w-8 h-0.5 rounded-full transition-all duration-300",
                  isScrolled ? "bg-navy" : "bg-[#8B5CF6]"
                )}></div>
                <div className={cn(
                  "w-5 h-0.5 rounded-full transition-all duration-300",
                  isScrolled ? "bg-navy" : "bg-[#8B5CF6]"
                )}></div>
              </div>
            )}
          </button>
        </div>
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
                    location.pathname === link.href ? "text-[#8B5CF6]" : "text-navy"
                  )}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-[#8B5CF6]" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
