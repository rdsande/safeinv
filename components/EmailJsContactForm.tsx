"use client";

import React from "react";
import emailjs from "@emailjs/browser";

type Props = {
  className?: string;
  buttonClassName?: string;
  buttonText?: string;
  pageTag?: string;
};

export default function EmailJsContactForm({
  className,
  buttonClassName,
  buttonText = "Send enquiry",
  pageTag = "Website",
}: Props) {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [notification, setNotification] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setNotification("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setNotification(
        "Email service is not configured. Please set EmailJS environment variables.",
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honey = String(formData.get("_honey") || "");
    if (honey) {
      setStatus("success");
      setNotification("Message sent successfully! We will get back to you soon.");
      form.reset();
      return;
    }

    const params = {
      from_name: String(formData.get("name") || ""),
      from_email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      page: pageTag,
    };

    try {
      await emailjs.send(serviceId, templateId, params, {
        publicKey,
      });
      setStatus("success");
      setNotification("Message sent successfully! We will get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setNotification("Failed to send message. Please try again later.");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-[#233123]">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 text-[#233123] placeholder:text-[#536153]/60 outline-none transition focus:border-safe-accent"
            placeholder="Your full name"
          />
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-[#233123]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 text-[#233123] placeholder:text-[#536153]/60 outline-none transition focus:border-safe-accent"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-[#233123]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 text-[#233123] placeholder:text-[#536153]/60 outline-none transition focus:border-safe-accent"
              placeholder="+255 700 000 000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-[#233123]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            required
            className="w-full resize-none rounded-2xl border border-safe-primary/10 bg-white px-4 py-3 sm:px-5 sm:py-4 text-[#233123] placeholder:text-[#536153]/60 outline-none transition focus:border-safe-accent"
            placeholder="Tell us what you are looking for..."
          />
        </div>
      </div>

      {notification ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-safe-primary" : "text-red-600"
          }`}
        >
          {notification}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={
          buttonClassName ||
          "mt-6 sm:mt-8 rounded-full bg-safe-primary px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-safe-primary/90 disabled:opacity-60"
        }
      >
        {status === "submitting" ? "Sending..." : buttonText}
      </button>
    </form>
  );
}
