import React from "react";

export default function CustomMap() {
  return (
    <section className="relative w-full h-[600px] bg-meethaq-primary overflow-hidden">
      {/* Map Iframe with styling filters */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.713673483453!2d39.27226151229793!3d-6.804643866528431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b5ecd403851%3A0x16f1c6c1c033ee06!2sThe%20Meethaq%20Tower!5e0!3m2!1sen!2stz!4v1769097646549!5m2!1sen!2stz"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter:
              "grayscale(100%) invert(90%) contrast(1.2) hue-rotate(200deg)",
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full pointer-events-none"
        />
      </div>

      {/* Overlay to enforce theme color tint and vignette to hide peripheral icons */}
      <div className="absolute inset-0 bg-meethaq-primary mix-blend-color opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#171d2b_80%)] pointer-events-none mix-blend-multiply opacity-90" />

      {/* Rippling Dot - Centered on the map location */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mt-[-20px]">
        {" "}
        {/* Adjusted margin for pin height offset */}
        <div className="relative flex items-center justify-center">
          {/* Core Dot */}
          <div className="w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37] z-20" />

          {/* Inner Ripple */}
          <div className="absolute w-4 h-4 bg-[#d4af37] rounded-full animate-ping opacity-75" />

          {/* Outer Ripple */}
          <div className="absolute w-16 h-16 border border-[#d4af37]/50 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />

          {/* Expanding Wave */}
          <div className="absolute w-32 h-32 border border-[#d4af37]/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </div>
      </div>
    </section>
  );
}
