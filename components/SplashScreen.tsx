"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 25; // Update every 25ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Call finishLoading when percentage reaches 100
  React.useEffect(() => {
    if (percentage >= 100) {
      setTimeout(() => finishLoading(), 200);
    }
  }, [percentage, finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-safe-accent overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-32 h-32 md:w-64 md:h-64 mb-8"
        >
          <Image
            src="/img/safelogolight.png"
            alt="Safe Investment"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white text-sm md:text-lg tracking-[0.2em]"
        >
          Loading {Math.round(percentage)}%
        </motion.p>
      </div>
    </motion.div>
  );
}
