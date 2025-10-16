import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderCounterProps {
  onComplete?: () => void;
  duration?: number;
}

export default function LoaderCounter({ onComplete, duration = 2000 }: LoaderCounterProps) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalSteps = 100;
    const baseInterval = duration / totalSteps;
    let currentCount = 0;
    let accumulatedTime = 0;

    const interval = setInterval(() => {
      currentCount++;
      accumulatedTime += baseInterval;

      // Organic pacing with micro-pauses
      const progress = currentCount / totalSteps;
      let delay = baseInterval;

      if (progress < 0.3) {
        delay = baseInterval * 0.6; // Fast start
      } else if (progress < 0.7) {
        delay = baseInterval * 1.2; // Slow down
      } else if (progress < 0.9) {
        delay = baseInterval * 1.5; // Micro-pauses
      } else {
        delay = baseInterval * 2; // Slow finish
      }

      if (currentCount >= totalSteps) {
        setCount(100);
        setIsComplete(true);
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      } else {
        setCount(currentCount);
      }
    }, baseInterval);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  const color1 = "rgb(250, 204, 21)"; // golden
  const color2 = "rgb(234, 179, 8)"; // darker golden

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          data-testid="loader-counter"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="font-display text-6xl font-bold text-primary">
                Phoenix Secure
              </h1>
            </motion.div>

            <motion.div
              className="text-9xl font-bold font-display tabular-nums"
              style={{
                background: `linear-gradient(90deg, ${color1}, ${color2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {count}%
            </motion.div>

            <motion.div
              className="mt-8 h-2 w-64 bg-muted rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
