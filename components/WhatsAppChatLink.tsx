"use client";

import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  phoneNumber?: string;
  defaultMessage?: string;
};

export default function WhatsAppChatLink({
  className,
  children,
  phoneNumber = "255764485751",
  defaultMessage = "Hi, I would like to enquire about your properties.",
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [interest, setInterest] = React.useState("Rashid Heights");
  const [inquiryType, setInquiryType] = React.useState("General Enquiry");

  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const startChat = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      defaultMessage,
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      interest ? `Interested in: ${interest}` : null,
      inquiryType ? `Inquiry type: ${inquiryType}` : null,
    ].filter(Boolean) as string[];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={close}
            aria-label="Close WhatsApp form"
          />

          <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="bg-[#25D366] px-6 py-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-white/15 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-xl" />
                </div>
                <div>
                  <div className="font-semibold leading-tight">WhatsApp Chat</div>
                  <div className="text-xs text-white/85 leading-tight">
                    Safe Investment
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                className="h-9 w-9 rounded-xl bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
                aria-label="Close"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>

            <form onSubmit={startChat} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-safe-primary">
                  Your Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-safe-primary/15 px-4 py-3 outline-none focus:border-[#25D366]"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-safe-primary">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-safe-primary/15 px-4 py-3 outline-none focus:border-[#25D366]"
                  placeholder="+255 7XX XXX XXX"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-safe-primary">
                  Interested In
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-2xl border border-safe-primary/15 px-4 py-3 outline-none focus:border-[#25D366] bg-white"
                >
                  <option>Rashid Heights</option>
                  <option>General</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-safe-primary">
                  Inquiry Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryType("Book Appointment")}
                    className={`rounded-2xl border px-4 py-3 text-xs font-semibold transition ${
                      inquiryType === "Book Appointment"
                        ? "border-[#25D366] text-[#25D366] bg-[#25D366]/5"
                        : "border-safe-primary/15 text-safe-primary hover:bg-black/[0.03]"
                    }`}
                  >
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType("General Enquiry")}
                    className={`rounded-2xl border px-4 py-3 text-xs font-semibold transition ${
                      inquiryType === "General Enquiry"
                        ? "border-[#25D366] text-[#25D366] bg-[#25D366]/5"
                        : "border-safe-primary/15 text-safe-primary hover:bg-black/[0.03]"
                    }`}
                  >
                    General Enquiry
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#25D366] hover:bg-[#1fb85a] transition text-white font-bold py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <i className="ri-send-plane-2-line" />
                Start Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
