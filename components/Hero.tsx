import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/imgs2/coverimagebld.jpg"
        alt="The Meethaq Tower"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Gradient overlay for Navbar visibility */}
      <div className="absolute top-0 left-0 w-full h-[98px] bg-gradient-to-b from-black/60 to-transparent z-10"></div>
    </div>
  );
}
