"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ExclusiveLiving() {
  const containerRef = useRef<HTMLElement>(null);

  // Use scroll progress for the animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create smooth scroll values
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate transforms for the text movement
  // Adjust the range values to control speed and direction
  const xLeft = useTransform(smoothScroll, [0, 1], ["20%", "-40%"]); // Moves right to left (Foreground)
  const xRight = useTransform(smoothScroll, [0, 1], ["-40%", "20%"]); // Moves left to right (Background)

  return (
    <section
      ref={containerRef}
      className="relative bg-meethaq-secondary h-[100vh] min-h-[600px] overflow-hidden hidden md:flex items-center justify-center"
    >
      {/* Background Text Layer (Behind Image) - Left to Right - Positioned at Top */}
      <div className="absolute top-[15%] left-0 right-0 flex justify-center items-center pointer-events-none z-0">
        <motion.div style={{ x: xRight }} className="whitespace-nowrap">
          <span className="text-[5rem] md:text-[7.5vw] leading-[5] font-serif text-white/30 select-none">
            EXCLUSIVE LIVING REDEFINED EXCLUSIVE LIVING REDEFINED
          </span>
        </motion.div>
      </div>

      {/* Main Image Layer - Absolute Cover - Height 115% */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-visible flex items-end justify-center">
        <div className="relative w-full h-[115%]">
          <Image
            src="/img/bld.png"
            alt="Meethaq Tower Exclusive Living"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>

      {/* Foreground Text Layer (On Top of Image) - Right to Left - Positioned at Bottom */}
      <div className="absolute bottom-[15%] left-0 right-0 flex justify-center items-center pointer-events-none z-20">
        <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
          <span className="text-[5rem] md:text-[7.5vw] leading-[5] font-serif text-white select-none">
            EXCLUSIVE LIVING REDEFINED EXCLUSIVE LIVING REDEFINED
          </span>
        </motion.div>
      </div>

      {/* Gradient Overlay - Transparent to White - Fades Bottom of Image */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent z-30 pointer-events-none" />
    </section>
  );
}
