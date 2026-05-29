import React from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const locationData = [
  {
    category: "Connectivity and Accessibility",
    items: [
      {
        name: "Julius Nyerere Int. Airport (JNIA)",
        dist: "12.6 Km",
        time: "30 Min",
      },
      { name: "Magufuli SGR Railway Station", dist: "4.1 Km", time: "14 Min" },
      { name: "Magufuli Bus Terminal", dist: "21.4 Km", time: "44 Min" },
      { name: "Dar es Salaam Port", dist: "3.9 Km", time: "10 Min" },
    ],
  },
  {
    category: "Healthcare and Wellness",
    items: [
      { name: "Muhimbili National Hospital", dist: "0.5 Km", time: "3 Min" },
      { name: "Aga Khan Hospital", dist: "3.8 Km", time: "10 Min" },
      { name: "Tiba Hospital", dist: "1.2 Km", time: "6 Min" },
      { name: "Regency Medical Centre", dist: "1.8 Km", time: "7 Min" },
    ],
  },
  {
    category: "Retail & Shopping",
    items: [
      { name: "Aura Mall", dist: "1.7 Km", time: "7 Min" },
      { name: "GSM Mall", dist: "1.3 Km", time: "6 Min" },
      { name: "Dar Free Market Mall", dist: "5.0 Km", time: "16 Min" },
      { name: "Kariakoo Market", dist: "0.5 Km", time: "3 Min" },
      { name: "Morocco Square Mall", dist: "4.6 Km", time: "12 Min" },
    ],
  },
  {
    category: "Education",
    items: [
      {
        name: "Al Muntazir Islamic Int. School",
        dist: "11.7 Km",
        time: "28 Min",
      },
      { name: "Shaaban Robert Sec. School", dist: "1.8 Km", time: "7 Min" },
      {
        name: "Int. School of Tanganyika (IST)",
        dist: "4.7 Km",
        time: "14 Min",
      },
      { name: "MUHAS", dist: "3.2 Km", time: "9 Min" },
      { name: "IFM", dist: "2.6 Km", time: "10 Min" },
      { name: "University of Dar es Salaam", dist: "5.1 Km", time: "13 Min" },
    ],
  },
  {
    category: "Leisure & Lifestyle",
    items: [
      { name: "Coco Beach", dist: "6.1 Km", time: "14 Min" },
      { name: "Dar es Salaam Serena Hotel", dist: "2.3 Km", time: "10 Min" },
      { name: "Hyatt Regency", dist: "3.3 Km", time: "12 Min" },
      { name: "Johari Rotana", dist: "4.2 Km", time: "13 Min" },
    ],
  },
];

const locationImages = [
  {
    src: "/img/items/happy-black-family-sofa-living-room-their-home-happy-together-care-support-love-happiness-positivity-african-people-cuddle-couch-their-house-bonding-time.jpg",
    label: "JOYFUL MOMENTS",
  },
  {
    src: "/img/items/happy-indian-family-portrait-together-home.jpg",
    label: "FAMILY COMFORT",
  },
  {
    src: "/img/items/happy-islamic-family-sitting-floor-full-shot.jpg",
    label: "SPIRITUAL HARMONY",
  },
  {
    src: "/img/items/muslim-family-gathering-eid-celebration-home-festive-joyful-togetherness.jpg",
    label: "COMMUNITY LIVING",
  },
  {
    src: "/img/items/interior-modern-design.jpg",
    label: "MODERN LIFESTYLE",
  },
];

export default function Location() {
  return (
    <section className="bg-safe-primary py-20 px-4 text-white">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Prime Location Advantage
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-safe-accent font-light italic max-w-3xl mx-auto">
              Few addresses compare to the accessibility and prestige of Tanga.
            </p>
          </FadeIn>
        </div>

        {/* Map Image Section */}
        <FadeIn delay={0.25} className="mb-16">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/img/img003.jpg"
              alt="Meethaq Prime Location Map"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </FadeIn>

        {/* Image Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {locationImages.map((img, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className={index === 4 ? "hidden lg:block" : ""}
            >
              <div className="flex flex-col space-y-4">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {locationData.map((section, idx) => (
            <FadeIn key={idx} delay={0.3 + idx * 0.1}>
              <div className="flex flex-col h-full">
                <h3 className="text-xs font-bold text-safe-accent mb-4 uppercase tracking-widest border-b border-white/20 pb-2">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex flex-col text-[10px]">
                      <span className="text-white/80 font-medium uppercase tracking-wide mb-0.5">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2 text-white/60">
                        <span className="font-bold text-white">
                          {item.dist}
                        </span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/30"></span>
                        <span>{item.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.8}>
            <button className="border border-white text-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-safe-primary transition rounded-full">
              VIEW ON MAP
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
