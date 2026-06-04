import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import Image from "next/image";

export default function RashidHeightsPage() {
  const galleryImages = [
    "/imgs2/JPEG/rashidheights.jpg",
    "/imgs2/JPEG/1.%20ground%20floor.jpg",
    "/imgs2/JPEG/2.%20typical%20office%20floor-%20%202nd%20floor.jpg",
    "/imgs2/JPEG/3.%204%20bhk%20apartment%20-%203rd%20floor%20level.jpg",
    "/imgs2/JPEG/4.%20typical%20floor%20plan%20-%204th%20to%208th%20floor.jpg",
    "/imgs2/JPEG/5.%20penthouse%20entry%20levelv%20-%209th%20floor.jpg",
    "/imgs2/JPEG/6.%20penthouse%20upper%20level%20-%2010th%20floor.jpg",
  ];

  return (
    <main className="min-h-screen">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[420px] sm:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/imgs2/JPEG/rashidheights.jpg"
            alt="Rashid Heights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111c11]/85 via-[#111c11]/55 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <FadeInUp>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-3 sm:mb-4">
              Rashid Heights
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl">
              A clear property investment opportunity in Tanga.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp className="text-center mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
                About the project
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
                A practical place to live, work and invest.
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.15} className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
              <p>
                Rashid Heights brings apartments, offices, shops and restaurant
                spaces into one planned development. It is designed for people
                who want a property opportunity that is easy to understand and
                built for long-term value.
              </p>
              <p>
                Our team can walk you through the available units, expected use,
                payment options and ownership process in simple terms.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.25} className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Clear</div>
                <p className="text-xs sm:text-sm text-[#536153]">Simple guidance before you decide</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Useful</div>
                <p className="text-xs sm:text-sm text-[#536153]">Residential and commercial options</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Valuable</div>
                <p className="text-xs sm:text-sm text-[#536153]">Built with long-term potential</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <FloorPlans />

      {/* Amenities Section */}
      <Amenities />

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-[#fbfcf8]">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              Project images
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
              View the plans and project images
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group">
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-16 sm:py-24 bg-[#f7f8f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeInUp className="text-center mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
                Get in Touch
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
                Speak to us about Rashid Heights.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#536153]">
                Contact us to ask about available units, pricing, payment
                options and the next steps.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <form
                action="/send-mail.php"
                method="POST"
                className="rounded-[2rem] bg-white p-4 sm:p-6 md:p-10 shadow-sm"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-safe-primary">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-safe-primary bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent focus:border-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-safe-primary">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-2xl border border-safe-primary bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent focus:border-2"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-safe-primary">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-2xl border border-safe-primary bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent focus:border-2"
                        placeholder="+255 700 000 000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-safe-primary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-2xl border border-safe-primary bg-white px-4 py-3 sm:px-5 sm:py-4 outline-none transition focus:border-safe-accent focus:border-2"
                      placeholder="Tell us what you are looking for..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 sm:mt-8 rounded-full bg-safe-primary px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-primary/90"
                >
                  Send Inquiry
                </button>
              </form>
            </FadeInUp>

            <FadeInUp delay={0.25} className="mt-8 sm:mt-12 text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-[#536153]">
                <a
                  href="tel:+255764485751"
                  className="flex items-center gap-2 hover:text-safe-accent transition text-sm sm:text-base"
                >
                  <i className="ri-phone-line" /> +255 764 485 751
                </a>
                <a
                  href="mailto:sales@safeinvestment.co.tz"
                  className="flex items-center gap-2 hover:text-safe-accent transition text-sm sm:text-base"
                >
                  <i className="ri-mail-line" /> sales@safeinvestment.co.tz
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
