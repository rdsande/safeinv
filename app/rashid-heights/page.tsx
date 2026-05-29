import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import Image from "next/image";

export default function RashidHeightsPage() {
  const galleryImages = [
    "/img/build1.png",
    "/img/a1.png",
    "/img/b1.png",
    "/img/c1.png",
    "/img/img001.jpg",
    "/img/img002.jpg",
  ];

  return (
    <main className="min-h-screen">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/build1.png"
            alt="Rashid Heights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111c11]/90 via-[#111c11]/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <FadeInUp>
            <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-white/30 bg-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] backdrop-blur mb-4 sm:mb-6">
              Featured Project
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-3 sm:mb-4">
              Rashid Heights
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl">
              Now rising in Tanga, Tanzania
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
                About the Project
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
                Introducing Rashid Heights
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.15} className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#536153]">
              <p>
                A new landmark rising in Tanga, Tanzania. From peaceful sea-facing
                mornings to elegant penthouse evenings, every space is designed
                for people who want more than just an address.
              </p>
              <p>
                Whether you&apos;re building a future, investing in lifestyle, or
                creating a home for generations, this is your opportunity to secure a
                place in one of Tanga&apos;s most prestigious developments.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.25} className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Sea Facing</div>
                <p className="text-xs sm:text-sm text-[#536153]">Prime ocean views from select units</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Freehold</div>
                <p className="text-xs sm:text-sm text-[#536153]">Full ownership rights</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Premium</div>
                <p className="text-xs sm:text-sm text-[#536153]">High-end finishes throughout</p>
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
      <section className="py-16 sm:py-24 bg-[#f7f8f3]">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              Gallery
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
              Project Gallery
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

      {/* Video Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
              Video Tour
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary">
              Experience Rashid Heights
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#111c11] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-safe-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <i className="ri-play-fill text-2xl sm:text-3xl ml-1" />
                </div>
                <p className="text-base sm:text-lg">Watch the project video</p>
                <p className="text-xs sm:text-sm text-white/60 mt-2">Coming soon</p>
              </div>
            </div>
          </FadeInUp>
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
                Interested in Rashid Heights?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#536153]">
                Contact us to learn more about availability, pricing, and to schedule
                a viewing.
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
                  href="tel:+25574637371"
                  className="flex items-center gap-2 hover:text-safe-accent transition text-sm sm:text-base"
                >
                  <i className="ri-phone-line" /> +255 746 373 71
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
