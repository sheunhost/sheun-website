import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
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
        <Link to="/" className="flex items-center space-x-2 group">
          <img 
            src="https://ik.imagekit.io/pedgmrihq/image.png" 
            alt="sheun_hub logo" 
            className={cn(
              "h-24 w-auto transition-all duration-500",
              isScrolled ? "h-16" : "h-24"
            )} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group",
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
          <Link
            to="/contact"
            className="bg-green text-navy px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-xl green-glow"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy p-2 hover:bg-navy/5 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-navy/5 p-8 md:hidden shadow-2xl"
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
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-green text-navy text-center py-6 rounded-[32px] font-bold text-xl mt-4 shadow-xl"
              >
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { AnimatePresence } from "framer-motion";
