import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export function Marquee({ children, speed = 40, reverse = false }: { children: ReactNode, speed?: number, reverse?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="overflow-hidden flex w-full relative">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={isInView ? {
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"]
        } : {}}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        <div className="flex gap-16 px-8 shrink-0 items-center justify-center min-w-full">
          {children}
        </div>
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap will-change-transform absolute left-full top-0 h-full"
        animate={isInView ? {
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"]
        } : {}}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        <div className="flex gap-16 px-8 shrink-0 items-center justify-center min-w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
