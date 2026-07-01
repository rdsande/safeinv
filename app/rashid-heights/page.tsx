import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import FloorPlans from "@/components/FloorPlans";
import Amenities from "@/components/Amenities";
import EmailJsContactForm from "@/components/EmailJsContactForm";
import Image from "next/image";

export default function RashidHeightsPage() {
  const galleryImages = [
    "/imgs2/JPEG/rashidheights.jpg",
    "/imgs2/penthouse.jpg",
    "/imgs2/JPEG/1.%20ground%20floor.jpg",
    "/imgs2/JPEG/2.%20typical%20office%20floor-%20%202nd%20floor.jpg",
    "/imgs2/JPEG/3.%204%20bhk%20apartment%20-%203rd%20floor%20level.jpg",
    "/imgs2/JPEG/4.%20typical%20floor%20plan%20-%204th%20to%208th%20floor.jpg",
    "/imgs2/JPEG/5.%20penthouse%20entry%20levelv%20-%209th%20floor.jpg",
    "/imgs2/JPEG/6.%20penthouse%20upper%20level%20-%2010th%20floor.jpg",
  ];

  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] sm:h-[calc(70vh+124px)] sm:min-h-[644px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile image */}
          <Image
            src="/rashidmobile.jpg"
            alt="Rashid Heights"
            fill
            className="object-cover block sm:hidden"
            priority
          />
          {/* Desktop image */}
          <Image
            src="/coverhero.jpg"
            alt="Rashid Heights"
            fill
            className="object-cover hidden sm:block"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111c11]/70 via-[#111c11]/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white pb-10 sm:pb-16 md:pb-20">
          <FadeInUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-3 sm:mb-4">
              Rashid Tower
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
              Exclusive apartments, duplexes & penthouses in Tanga — Available for Purchase.
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
                <strong>Overview:</strong> Large Sitting Area, Dining Room, Pantry, 
                3 and 4 Bedrooms and Duplex with Closet Rooms (C/R). Each bedroom 
                with private W/C. Multiple Balconies.
              </p>
              <p>
                <strong>Available for Purchase:</strong> 3 Bedroom Apartment (Exclusive Styles), 
                4 Bedroom Apartment (Modern Layout), 4 Bedroom Duplex (Exclusive Styles), 
                Sea Facing Penthouse, and Office Space Layout.
              </p>
              <p>
                The penthouses at Rashid Tower are designed as exclusive duplex residences 
                (366 – 383 m²). By separating living and entertainment areas from private 
                sleeping quarters, the layout creates a well-balanced home that feels both 
                open and personal.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.25} className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">3 Bedroom</div>
                <p className="text-xs sm:text-sm text-[#536153]">Exclusive Styles Available</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">4 Bedroom</div>
                <p className="text-xs sm:text-sm text-[#536153]">Modern Layout & Duplex</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-[#f7f8f3] rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-safe-accent mb-2">Penthouse</div>
                <p className="text-xs sm:text-sm text-[#536153]">366 – 383 m² Sea Facing</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 sm:py-20 bg-[#111c11]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp className="text-center mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-safe-accent">
                Investment Opportunity
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Why Consider Investing in Rashid Tower?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15} className="space-y-6 text-base sm:text-lg leading-7 text-white/80">
              <p>
                In Tanga's short-term rental market, 3-bedroom listings make up ~50% of the 
                active inventory, reflecting strong demand for family-sized spaces.
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li>Urban migration trends and infrastructure investment (roads, ports) in Tanzania 
                    are boosting real estate demand, especially in coastal cities like Tanga.</li>
                <li>Mixed-use buildings outperform single-use properties as they capture retail, 
                    office, and residential demand simultaneously.</li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-safe-accent">4–8%</div>
                  <p className="text-xs text-white/60 mt-1">Annual Property Price Growth (to 2030)</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-safe-accent">~86%</div>
                  <p className="text-xs text-white/60 mt-1">Cumulative Price Increase (5 years)</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-safe-accent">6–8%</div>
                  <p className="text-xs text-white/60 mt-1">Residential Rental Yields</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-safe-accent">7–10%</div>
                  <p className="text-xs text-white/60 mt-1">Commercial Yields (Retail/Office)</p>
                </div>
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
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
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
                This is the perfect moment to invest in the expanding landscape of Tanga!
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#536153]">
                We simplify the home-buying process for you by taking care of all the paperwork and formalities. 
                Contact us about available units, pricing, payment options and the next steps.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <EmailJsContactForm
                pageTag="Rashid Heights"
                className="rounded-[2rem] bg-white p-4 sm:p-6 md:p-10 shadow-sm"
                buttonText="Send Inquiry"
              />
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
