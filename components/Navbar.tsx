"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppChatLink from "@/components/WhatsAppChatLink";

export default function Navbar({
  variant = "transparent",
}: {
  variant?: "transparent" | "solid";
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTop = variant === "transparent" && !isScrolled;
  const textColor = "text-safe-primary";
  const logoSrc = "/img/safelogo.png";
  const hoverColor = "hover:text-safe-accent";

  const projects = [
    { name: "Rashid Heights", href: "/rashid-heights", location: "Tanga, Tanzania · Now Rising" },
  ];

  const mobileLinks = [
    { name: "ABOUT", href: "/#about" },
    { name: "SERVICES", href: "/#services" },
    { name: "RASHID HEIGHTS", href: "/rashid-heights" },
    { name: "WHATSAPP", href: "https://wa.me/255764485751" },
    { name: "GET IN TOUCH", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          isTop
            ? "bg-white/95 border-gray-100"
            : "bg-white border-gray-200 shadow-sm"
        } ${textColor} text-xs tracking-widest py-4 border-b`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo — left */}
          <div className="relative z-50">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Safe Investment"
                width={150}
                height={50}
                className="h-9 md:h-11 w-auto"
              />
            </Link>
          </div>

          {/* Desktop nav — right */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/#about" className={`${hoverColor} transition`}>
              ABOUT
            </Link>
            <Link href="/#services" className={`${hoverColor} transition`}>
              SERVICES
            </Link>

            {/* OUR PROJECTS dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 ${hoverColor} transition focus:outline-none`}
              >
                OUR PROJECTS
                <i
                  className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                    projectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {projects.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => setProjectsOpen(false)}
                        className="flex flex-col px-5 py-4 hover:bg-[#f7f8f3] transition group"
                      >
                        <span className="text-safe-primary font-semibold text-xs tracking-widest group-hover:text-safe-accent transition">
                          {p.name.toUpperCase()}
                        </span>
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          {p.location}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <WhatsAppChatLink className={`flex items-center gap-1.5 ${hoverColor} transition`}>
              <i className="ri-whatsapp-line text-sm" />
              WHATSAPP
            </WhatsAppChatLink>

            <Link
              href="/#contact"
              className={`px-6 py-2 rounded-full font-bold transition whitespace-nowrap ${
                isTop
                  ? "bg-safe-primary text-white hover:bg-safe-accent"
                  : "bg-safe-accent text-white hover:bg-safe-primary"
              }`}
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3 z-50">
            <Link
              href="/#contact"
              className={`px-4 py-2 rounded-full font-bold text-[10px] transition whitespace-nowrap ${
                isTop
                  ? "bg-safe-primary text-white hover:bg-safe-accent"
                  : "bg-safe-accent text-white hover:bg-safe-primary"
              }`}
            >
              GET IN TOUCH
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} focus:outline-none text-2xl`}
              aria-label="Toggle Menu"
            >
              <i className={isMenuOpen ? "ri-close-line" : "ri-menu-3-line"} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 bg-safe-primary z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col space-y-7 text-center">
              {mobileLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg tracking-widest transition ${
                    link.name === "GET IN TOUCH"
                      ? "text-safe-accent font-semibold"
                      : "text-white hover:text-safe-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex flex-col items-center gap-3 text-white/50 text-xs tracking-wider">
                <a href="tel:+255764485751" className="flex items-center gap-2 hover:text-white transition">
                  <i className="ri-phone-line" /> +255 764 485 751
                </a>
                <a href="mailto:sales@safeinvestment.co.tz" className="flex items-center gap-2 hover:text-white transition">
                  <i className="ri-mail-line" /> sales@safeinvestment.co.tz
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
