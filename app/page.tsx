import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import Image from "next/image";

export default async function Home() {
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
      img: "/img/img001.jpg",
    },
    {
      label: "Sea View Apartments",
      icon: "ri-sailboat-line",
      desc: "Wake up to the Indian Ocean. Prime units positioned to capture Tanga's coastal beauty.",
      img: "/img/img004.jpg",
    },
    {
      label: "Large Office Spaces",
      icon: "ri-building-4-line",
      desc: "Professional-grade commercial floors for businesses seeking a prestigious Tanga address.",
      img: "/img/img006.jpg",
    },
    {
      label: "Shops & Retail Units",
      icon: "ri-store-2-line",
      desc: "Ground-floor retail in a high-visibility landmark location at the heart of Tanga.",
      img: "/img/build3d.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f3] text-[#233123]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/img/hero.jpg"
          alt="Safe Investment property development in Tanga"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172417]/90 via-[#172417]/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto flex min-h-screen items-center px-4 pt-24 sm:pt-32 md:pt-36">
          <FadeInUp className="max-w-3xl text-white">
            <span className="mb-4 sm:mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] backdrop-blur">
              Tanga, Tanzania
            </span>
            <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] sm:leading-[1.1] tracking-tight">
              Safe Investment for property, construction and growth.
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85">
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
              <a
                href="https://wa.me/255770990980"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 sm:px-8 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-safe-primary"
              >
                <i className="ri-whatsapp-line mr-2" />
                WhatsApp us
              </a>
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
              Property expertise rooted in Tanga.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15} className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
            <p>
              Safe Investment works across property management, construction,
              sales and strategic real estate opportunities for people and
              businesses looking to secure quality spaces in the Tanga region.
            </p>
            <p>
              From homes and commercial addresses to warehousing requirements,
              we help connect clients with practical, future-focused property
              solutions.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <FadeInUp className="mb-8 sm:mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              What we do
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
              Real estate solutions for living, working and investing.
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

      {/* RASHID HEIGHTS */}
      <section id="rashid-heights" className="bg-safe-primary text-white">
        {/* Main intro */}
        <div className="py-16 sm:py-24">
          <div className="container mx-auto grid gap-8 lg:gap-12 px-4 lg:grid-cols-2 lg:items-center">
            <FadeInUp className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] overflow-hidden rounded-[2rem]">
              <Image
                src="/img/build1.png"
                alt="Rashid Heights development"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 sm:left-8 sm:right-8 rounded-3xl bg-white/10 p-4 sm:p-6 backdrop-blur">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                  Now rising
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold">Rashid Heights</h3>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                Featured project
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                Introducing Rashid Heights.
              </h2>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/80">
                A new landmark rising in Tanga, Tanzania. From peaceful
                sea-facing mornings to elegant penthouse evenings, every space
                is designed for people who want more than just an address.
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/80">
                Whether you&apos;re building a future, investing in lifestyle,
                or creating a home for generations, this is your opportunity to
                secure a place.
              </p>
              <a
                href="#contact"
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-safe-primary transition hover:bg-white/85"
              >
                <i className="ri-arrow-right-line" />
                Secure your place
              </a>
            </FadeInUp>
          </div>
        </div>

        {/* Unit types */}
        <div className="border-t border-white/10 pb-16 sm:pb-24">
          <div className="container mx-auto px-4">
            <FadeInUp className="pt-12 sm:pt-16 mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                What&apos;s inside
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Available unit types
              </h3>
            </FadeInUp>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {unitTypes.map((unit, i) => (
                <FadeInUp key={unit.label} delay={i * 0.1}>
                  <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 h-full flex flex-col">
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
                      <p className="mt-2 text-xs sm:text-sm text-white/60 leading-5 sm:leading-6 flex-1">
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

      {/* IMAGE STRIP */}
      <section className="grid md:grid-cols-3">
        {["/img/a1.png", "/img/b1.png", "/img/c1.png"].map((src, index) => (
          <div key={src} className="relative h-[360px] overflow-hidden">
            <Image
              src={src}
              alt={`Safe Investment property view ${index + 1}`}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
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
                href="https://wa.me/255770990980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-safe-accent px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-accent/90 w-fit"
              >
                <i className="ri-whatsapp-line text-base sm:text-lg" />
                Message on WhatsApp
              </a>
              <a
                href="tel:+25574637371"
                className="inline-flex items-center gap-2 text-safe-primary hover:text-safe-accent transition text-xs sm:text-sm mt-2"
              >
                <i className="ri-phone-line" /> +255 746 373 71
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
            <form
              action="/send-mail.php"
              method="POST"
              className="rounded-[2rem] bg-[#f7f8f3] p-4 sm:p-6 md:p-10 shadow-sm"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent"
                      placeholder="+255 700 000 000"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  className="w-full resize-none rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent"
                  placeholder="Tell us what you are looking for..."
                />
              </div>
              <button
                type="submit"
                className="mt-6 sm:mt-8 rounded-full bg-safe-primary px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-primary/90"
              >
                Send enquiry
              </button>
            </form>
          </FadeInUp>
        </div>
      </section>
      <Footer />
    </main>
  );
}
