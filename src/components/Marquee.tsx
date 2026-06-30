import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Marquee({ children, speed = 40, reverse = false }: { children: ReactNode, speed?: number, reverse?: boolean }) {
  return (
    <div className="overflow-hidden flex w-full relative">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"]
        }}
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
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"]
        }}
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
