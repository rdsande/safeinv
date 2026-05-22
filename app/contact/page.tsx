"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "iconoir-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    _honey: "", // Honeypot field
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
          "Email sent successfully! We will get back to you soon.",
        );
        setFormData({ name: "", email: "", message: "", _honey: "" }); // Reset form
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
    <main className="min-h-screen flex flex-col font-sans bg-white pt-[80px]">
      <Navbar variant="solid" />

      <div className="flex-grow flex flex-col md:flex-row h-full">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-[calc(100vh-80px)] p-4 md:p-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/img/build1.png"
              alt="Meethaq Tower"
              fill
              className="object-cover"
            />

            {/* Social Media Card */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-lg max-w-xs w-[calc(100%-4rem)] space-y-6">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">
                  Call Us
                </p>
                <a
                  href="tel:+255770990980"
                  className="text-lg font-bold text-meethaq-primary hover:text-meethaq-primary/80 transition"
                >
                  +255 770 990 980
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">
                  Email Us
                </p>
                <a
                  href="mailto:reservation@vanmotz.com"
                  className="text-lg font-bold text-meethaq-primary hover:text-meethaq-primary/80 transition break-words"
                >
                  reservation@vanmotz.com
                </a>
              </div>

              <div>
                <p className="text-gray-600 mb-4 font-medium">
                  Follow us on social media
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-[#F3F3F0] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto">
            <span className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-4 block">
              CONTACT
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a2b4b] mb-4">
              Get in touch
            </h1>
            <p className="text-gray-500 mb-12">We'd love to hear from you!</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot field - hidden from users */}
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
                  className="block text-sm font-medium text-gray-700"
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
                  className="w-full px-4 py-3 rounded-lg bg-[#E8E8E5] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-[#E8E8E5] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your messages
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your messages here"
                  className="w-full px-4 py-3 rounded-lg bg-[#E8E8E5] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition duration-200 outline-none text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {notification && (
                <div
                  className={`p-4 rounded-lg text-sm ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {notification}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200 mt-4 ${status === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
