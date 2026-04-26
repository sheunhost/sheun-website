import { useLocation } from "react-router-dom";
import { openCalendlyPopup } from "../lib/utils";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCalendly() {
  const location = useLocation();

  // "across all page excetp blog"
  if (location.pathname.startsWith("/blog")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openCalendlyPopup}
        className="bg-navy text-white px-5 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-3 border border-white/10 group cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-green text-navy flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-colors shrink-0">
          <Calendar size={18} />
        </div>
        <span className="text-sm md:text-base hidden sm:inline-block tracking-wide">
          Book Strategy Call
        </span>
      </motion.button>
    </div>
  );
}
