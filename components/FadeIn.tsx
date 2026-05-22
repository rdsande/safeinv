"use client";

import React, { useRef } from "react";
import { motion, useInView, UseInViewOptions } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  once?: boolean;
  margin?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  direction = "up",
  fullWidth = false,
  once = true,
  margin = "-100px",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as UseInViewOptions["margin"],
  });

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40, filter: "blur(10px)" };
      case "down":
        return { opacity: 0, y: -40, filter: "blur(10px)" };
      case "left":
        return { opacity: 0, x: 40, filter: "blur(10px)" };
      case "right":
        return { opacity: 0, x: -40, filter: "blur(10px)" };
      case "none":
        return { opacity: 0, filter: "blur(20px)", scale: 1.05 }; // Enhanced blur effect for images
      default:
        return { opacity: 0, y: 40, filter: "blur(10px)" };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0, filter: "blur(0px)" };
      case "left":
      case "right":
        return { opacity: 1, x: 0, filter: "blur(0px)" };
      case "none":
        return { opacity: 1, filter: "blur(0px)", scale: 1 };
      default:
        return { opacity: 1, y: 0, filter: "blur(0px)" };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "premium" smooth feel
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
