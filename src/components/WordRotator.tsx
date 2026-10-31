import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WordRotator({ 
  words, 
  interval = 3000, 
  className = "" 
}: { 
  words: string[]; 
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  if (!isMounted) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={index === 0 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: -90 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom center" }}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
