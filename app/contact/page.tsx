"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import EmailJsContactForm from "@/components/EmailJsContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white pt-[80px]">
      <Navbar variant="solid" />

      <div className="flex-grow flex flex-col md:flex-row h-full">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative min-h-[45vh] md:min-h-[calc(100vh-80px)] p-3 sm:p-4 md:p-6">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/imgs2/JPEG/rashidheights.jpg"
              alt="Safe Investment"
              fill
              className="object-cover"
            />

            {/* Contact Info Card */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white/95 backdrop-blur p-4 sm:p-6 rounded-2xl shadow-lg max-w-[280px] sm:max-w-xs w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] space-y-4 sm:space-y-6">
              <div>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">
                  Call Us
                </p>
                <a
                  href="tel:+255764485751"
                  className="text-base sm:text-lg font-bold text-safe-primary hover:text-safe-accent transition"
                >
                  +255 764 485 751
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">
                  Email Us
                </p>
                <a
                  href="mailto:sales@safeinvestment.co.tz"
                  className="text-base sm:text-lg font-bold text-safe-primary hover:text-safe-accent transition break-words"
                >
                  sales@safeinvestment.co.tz
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">
                  Location
                </p>
                <p className="text-sm sm:text-base font-medium text-safe-primary">
                  Tanga, Tanzania
                </p>
              </div>

              <div>
                <p className="text-gray-600 mb-3 sm:mb-4 font-medium text-xs sm:text-sm">
                  Connect with us
                </p>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-safe-primary text-white flex items-center justify-center rounded-xl hover:bg-safe-accent transition"
                  >
                    <i className="ri-instagram-line text-base sm:text-lg" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-safe-primary text-white flex items-center justify-center rounded-xl hover:bg-safe-accent transition"
                  >
                    <i className="ri-facebook-fill text-base sm:text-lg" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-safe-primary text-white flex items-center justify-center rounded-xl hover:bg-safe-accent transition"
                  >
                    <i className="ri-linkedin-fill text-base sm:text-lg" />
                  </a>
                  <a
                    href="https://wa.me/255764485751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-safe-primary text-white flex items-center justify-center rounded-xl hover:bg-safe-accent transition"
                  >
                    <i className="ri-whatsapp-line text-base sm:text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-[#f7f8f3] p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto">
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-bold text-safe-accent mb-3 sm:mb-4 block">
              CONTACT
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-safe-primary mb-3 sm:mb-4">
              Get in touch
            </h1>
            <p className="text-sm sm:text-base text-[#536153] mb-8 sm:mb-12">
              We'd love to hear from you! Reach out for inquiries about our
              properties, construction services, or investment opportunities.
            </p>

            <EmailJsContactForm
              pageTag="Contact"
              className="space-y-4 sm:space-y-6"
              buttonClassName="w-full bg-safe-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-safe-primary/90 transition duration-200 mt-4 text-xs sm:text-sm disabled:opacity-60"
              buttonText="Send Message"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
