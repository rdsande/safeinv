"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-safe-primary overflow-hidden"
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

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-safe-accent rounded-full"
          onAnimationComplete={finishLoading}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-white text-sm md:text-xl tracking-[0.2em]"
        >
          SAFE INVESTMENT
        </motion.h1>
      </div>
    </motion.div>
  );
}
