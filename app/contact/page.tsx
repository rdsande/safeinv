"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _honey: "",
  });
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [notification, setNotification] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setNotification("");

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
        setNotification(
          "Message sent successfully! We will get back to you soon.",
        );
        setFormData({ name: "", email: "", phone: "", message: "", _honey: "" });
      } else {
        setStatus("error");
        setNotification(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setNotification("Failed to send message. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white pt-[80px]">
      <Navbar variant="solid" />

      <div className="flex-grow flex flex-col md:flex-row h-full">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-[50vh] md:min-h-[calc(100vh-80px)] p-3 sm:p-4 md:p-8">
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
        <div className="w-full md:w-1/2 bg-[#f7f8f3] p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto">
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-bold text-safe-accent mb-3 sm:mb-4 block">
              CONTACT
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl md:text-5xl font-semibold text-safe-primary mb-3 sm:mb-4">
              Get in touch
            </h1>
            <p className="text-sm sm:text-base text-[#536153] mb-8 sm:mb-12">
              We'd love to hear from you! Reach out for inquiries about our
              properties, construction services, or investment opportunities.
            </p>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                id="_honey"
                value={formData._honey}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-safe-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white border border-safe-primary/10 focus:border-safe-accent focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-safe-primary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white border border-safe-primary/10 focus:border-safe-accent focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-safe-primary"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+255 700 000 000"
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white border border-safe-primary/10 focus:border-safe-accent focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-safe-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white border border-safe-primary/10 focus:border-safe-accent focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {notification && (
                <div
                  className={`p-4 rounded-2xl text-sm ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {notification}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full bg-safe-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-safe-primary/90 transition duration-200 mt-4 text-xs sm:text-sm ${status === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
