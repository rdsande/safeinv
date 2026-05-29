import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111c11] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Layout */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] pb-16 border-b border-white/10">
          {/* Left Column: Brand, Slogan, Socials */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white tracking-wider">
              SAFE INVESTMENT
            </h2>
            <p className="text-white/60 text-base max-w-sm leading-relaxed">
              Secure spaces. Smart investments. Connecting you with premium residential, commercial, and warehousing solutions in coastal Tanga.
            </p>
            {/* Social Icons - Contelas style rounded-square outlines */}
            <div className="flex gap-3">
              {[
                { icon: "ri-instagram-line", href: "https://instagram.com" },
                { icon: "ri-facebook-fill", href: "https://facebook.com" },
                { icon: "ri-linkedin-fill", href: "https://linkedin.com" },
                { icon: "ri-whatsapp-line", href: "https://wa.me/255770990980" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#111c11] hover:border-white transition-all duration-300"
                >
                  <i className={`${social.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Navigation link groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-safe-accent">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>
                  <Link href="/#about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/#rashid-heights" className="hover:text-white transition">
                    Featured Project
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-safe-accent">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>
                  <span className="hover:text-white transition cursor-default">
                    Property Management
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition cursor-default">
                    Construction & Build
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition cursor-default">
                    Warehousing & Logistics
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-safe-accent">
                Contact
              </h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>
                  <a href="tel:+25574637371" className="hover:text-white transition flex items-center gap-2">
                    <i className="ri-phone-line" /> +255 746 373 71
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@safeinvestment.co.tz" className="hover:text-white transition flex items-center gap-2">
                    <i className="ri-mail-line" /> sales@safeinvestment.co.tz
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2">
                    <i className="ri-map-pin-line" /> Tanga, Tanzania
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Giant Brand Text & Copyright */}
        <div className="pt-12 flex flex-col items-center">
          {/* Massive footer signature text like Contelas mockup */}
          <div className="w-full text-center select-none overflow-hidden h-16 sm:h-20 md:h-24 flex items-center justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-safe-accent/15 tracking-tighter leading-none uppercase whitespace-nowrap">
              SAFE INVESTMENT
            </h1>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30 tracking-wider border-t border-white/5 pt-8">
            <span>© 2026 Safe Investment. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
