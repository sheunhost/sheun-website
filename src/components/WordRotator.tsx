import { useState, useEffect, useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";

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
  const [hasRotated, setHasRotated] = useState(false);

  // Determine longest word to reserve exact width and height, preventing any layout shift (CLS = 0)
  const longestWord = useMemo(() => {
    if (!words || words.length === 0) return "";
    return words.reduce((a, b) => (a.length >= b.length ? a : b), words[0]);
  }, [words]);

  useEffect(() => {
    let intervalTimer: ReturnType<typeof setInterval> | null = null;
    let delayTimeout: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;

    const startRotating = () => {
      intervalTimer = setInterval(() => {
        setHasRotated(true);
        setIndex((prev) => (prev + 1) % words.length);
      }, interval);
    };

    // Delay word rotation until after initial hydration and page is idle to keep LCP fast
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => {
          delayTimeout = setTimeout(startRotating, 2500);
        },
        { timeout: 3500 }
      );
    } else {
      delayTimeout = setTimeout(startRotating, 2500);
    }

    return () => {
      if (intervalTimer) clearInterval(intervalTimer);
      if (delayTimeout) clearTimeout(delayTimeout);
      if (idleId !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
    };
  }, [words, interval]);

  return (
    <span className={`inline-grid grid-cols-1 grid-rows-1 align-baseline relative overflow-visible ${className}`}>
      {/* Invisible sizer to lock container dimensions to the largest word */}
      <span className="col-start-1 row-start-1 invisible select-none pointer-events-none" aria-hidden="true">
        {longestWord}
      </span>
      <span className="col-start-1 row-start-1 inline-block" style={{ transformOrigin: "bottom center" }}>
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={index}
            initial={hasRotated ? { opacity: 0, y: 20, rotateX: 90 } : false}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -90 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block"
            style={{ transformOrigin: "bottom center" }}
          >
            {words[index]}
          </m.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
