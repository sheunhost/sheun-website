import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Visualizer", href: "/visualizer" },
  { name: "Apply", href: "/apply#apply-form" },
  { name: "Contact", href: "/contact" },
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
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-4" 
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
                isScrolled ? "h-20 w-20" : "h-32 w-32"
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
                    : isScrolled ? "text-navy/60 hover:text-navy" : "text-white/40 hover:text-white"
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
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-navy p-2 hover:bg-navy/5 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : (
            <div className="space-y-1.5 p-1">
              <div className="w-6 h-0.5 bg-navy rounded-full transition-all"></div>
              <div className="w-8 h-0.5 bg-navy rounded-full transition-all"></div>
              <div className="w-5 h-0.5 bg-navy rounded-full transition-all"></div>
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
