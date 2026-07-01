"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import WhatsAppChatLink from "@/components/WhatsAppChatLink";
import EmailJsContactForm from "@/components/EmailJsContactForm";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      name: "Property Management",
      icon: "ri-building-2-line",
      desc: "End-to-end management of residential and commercial properties in the Tanga region.",
    },
    {
      name: "Construction & Development",
      icon: "ri-hammer-line",
      desc: "Quality build projects delivered on time and on budget, from foundations to finishing.",
    },
    {
      name: "Residential Sales",
      icon: "ri-home-smile-line",
      desc: "Helping families and investors find and secure the right property in Tanga.",
    },
    {
      name: "Commercial Leasing",
      icon: "ri-store-3-line",
      desc: "Matching businesses with the right commercial spaces for growth.",
    },
    {
      name: "Warehousing Solutions",
      icon: "ri-archive-2-line",
      desc: "Logistics-ready storage and warehousing facilities tailored to your requirements.",
    },
    {
      name: "Investment Advisory",
      icon: "ri-line-chart-line",
      desc: "Strategic guidance for smart, future-focused property investment decisions.",
    },
  ];

  const unitTypes = [
    {
      label: "Spacious Apartments",
      icon: "ri-home-4-line",
      desc: "Generously sized living units with premium finishes designed for modern family life.",
      img: "/imgs2/penthouse.jpg",
    },
    {
      label: "Sea View Apartments",
      icon: "ri-sailboat-line",
      desc: "Wake up to the Indian Ocean. Prime units positioned to capture Tanga's coastal beauty.",
      img: "/imgs2/JPEG/rashidheights.jpg",
    },
    {
      label: "Large Office Spaces",
      icon: "ri-building-4-line",
      desc: "Professional-grade commercial floors for businesses seeking a prestigious Tanga address.",
      img: "/imgs2/JPEG/2.%20typical%20office%20floor-%20%202nd%20floor.jpg",
    },
    {
      label: "Shops & Retail Units",
      icon: "ri-store-2-line",
      desc: "Ground-floor retail in a high-visibility landmark location at the heart of Tanga.",
      img: "/imgs2/JPEG/1.%20ground%20floor.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#233123] pt-[80px]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px+124px)] w-full overflow-hidden">
        <Image
          src="/coverhero.jpg"
          alt="Safe Investment property development in Tanga"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172417]/70 via-[#172417]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto flex min-h-[calc(100vh-80px+124px)] items-center px-4 pt-16 sm:pt-32 md:pt-36 pb-14 sm:pb-16">
          <FadeInUp className="max-w-3xl text-white">
            <h1 className="mt-4 sm:mt-6 text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] sm:leading-[1.1] tracking-tight">
              Build, buy, and invest in Tanga with confidence.
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-sm md:text-base leading-relaxed text-white/85">
              Connecting you with residential, commercial and warehousing
              solutions in the region of Tanga.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#rashid-heights"
                className="rounded-full bg-safe-accent px-6 py-3 sm:px-8 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-accent/90"
              >
                Explore Our Projects
              </a>
              <WhatsAppChatLink className="rounded-full border border-white/40 px-6 py-3 sm:px-8 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-safe-primary">
                <i className="ri-whatsapp-line mr-2" />
                WhatsApp us
              </WhatsAppChatLink>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-12">
          <FadeInUp>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              Safe Investment
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-safe-primary">
              Straightforward property support you can trust.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15} className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
            <p>
              Safe Investment works with clients who want dependable property
              opportunities without confusion. We explain the options clearly,
              guide each step, and focus on practical long-term value.
            </p>
            <p>
              Whether you are buying for family, rental income, or future
              security, our team helps you make informed decisions with
              confidence.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* RASHID HEIGHTS */}
      <section id="rashid-heights" className="bg-white text-safe-primary">
        {/* Main intro */}
        <div className="py-16 sm:py-24">
          <div className="container mx-auto grid gap-8 lg:gap-12 px-4 lg:grid-cols-2 lg:items-center">
            <FadeInUp className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] overflow-hidden rounded-[2rem]">
              <Image
                src="/imgs2/JPEG/rashidheights.jpg"
                alt="Rashid Heights development"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 sm:left-8 sm:right-8 rounded-3xl bg-white/10 p-4 sm:p-6 backdrop-blur">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white">
                  Now rising
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                  Rashid Heights
                </h3>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
                Featured project
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Rashid Heights, a practical investment in Tanga.
              </h2>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
                Rashid Heights offers homes, offices, shops and restaurant
                spaces in one planned development. It is designed for people
                who want a clear property opportunity with long-term potential.
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
                Our team can explain the available units, pricing, payment
                options and ownership process in simple terms.
              </p>
              <a
                href="#contact"
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-safe-primary px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-accent"
              >
                <i className="ri-arrow-right-line" />
                Secure your place
              </a>
            </FadeInUp>
          </div>
        </div>

        {/* Unit types */}
        <div className="border-t border-safe-primary/10 pb-16 sm:pb-24">
          <div className="container mx-auto px-4">
            <FadeInUp className="pt-12 sm:pt-16 mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
                What&apos;s inside
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Available unit types
              </h3>
            </FadeInUp>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {unitTypes.map((unit, i) => (
                <FadeInUp key={unit.label} delay={i * 0.1}>
                  <div className="rounded-2xl overflow-hidden bg-white border border-safe-primary/10 shadow-sm h-full flex flex-col">
                    <div className="relative h-36 sm:h-48 flex-shrink-0">
                      <Image
                        src={unit.img}
                        alt={unit.label}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <i className={`${unit.icon} text-xl sm:text-2xl text-safe-accent`} />
                      <h4 className="mt-2 font-semibold text-sm sm:text-base">
                        {unit.label}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-[#536153] leading-5 sm:leading-6 flex-1">
                        {unit.desc}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#fbfcf8] py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <FadeInUp className="mb-8 sm:mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              What we do
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
              Simple services for property owners and investors.
            </h2>
          </FadeInUp>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeInUp key={service.name} delay={i * 0.07}>
                <div className="rounded-3xl border border-safe-primary/10 bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl h-full">
                  <i className={`${service.icon} text-3xl text-safe-accent`} />
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-safe-primary">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#536153]">
                    {service.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto grid gap-8 lg:gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeInUp>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              Get in touch
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-safe-primary">
              Ready to talk property in Tanga?
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
              Contact Safe Investment to learn more about Rashid Heights,
              available property opportunities, construction services and
              management support.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/255764485751"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-safe-accent px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-accent/90 w-fit"
              >
                <i className="ri-whatsapp-line text-base sm:text-lg" />
                Message on WhatsApp
              </a>
              <a
                href="tel:+255764485751"
                className="inline-flex items-center gap-2 text-safe-primary hover:text-safe-accent transition text-xs sm:text-sm mt-2"
              >
                <i className="ri-phone-line" /> +255 764 485 751
              </a>
              <a
                href="mailto:sales@safeinvestment.co.tz"
                className="inline-flex items-center gap-2 text-safe-primary hover:text-safe-accent transition text-xs sm:text-sm"
              >
                <i className="ri-mail-line" /> sales@safeinvestment.co.tz
              </a>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <EmailJsContactForm
              pageTag="Home"
              className="rounded-[2rem] bg-[#f7f8f3] p-4 sm:p-6 md:p-10 shadow-sm"
              buttonText="Send enquiry"
            />
          </FadeInUp>
        </div>
      </section>
      <Footer />
    </main>
  );
}
