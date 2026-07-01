import React from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { InfoCircle } from "iconoir-react";

const units = [
  {
    id: "3 Bedroom Apartment",
    icon: "ri-home-4-line",
    image: "/imgs2/JPEG/3.%204%20bhk%20apartment%20-%203rd%20floor%20level.jpg",
    area: "Exclusive Styles",
    internal: "Large Sitting Area",
    external: "Multiple Balconies",
    beds: "3 BEDROOM + C/R",
    baths: "PRIVATE W/C EACH",
    reverse: false,
  },
  {
    id: "4 Bedroom Apartment",
    icon: "ri-home-8-line",
    image: "/imgs2/JPEG/4.%20typical%20floor%20plan%20-%204th%20to%208th%20floor.jpg",
    area: "Modern Layout",
    internal: "Spacious Design",
    external: "4th to 8th Floor",
    beds: "4 BEDROOM + C/R",
    baths: "PRIVATE W/C EACH",
    reverse: true,
  },
  {
    id: "4 Bedroom Duplex",
    icon: "ri-building-4-line",
    image: "/imgs2/JPEG/4.%20typical%20floor%20plan%20-%204th%20to%208th%20floor%202.jpg",
    area: "Exclusive Styles",
    internal: "Large Sitting Area",
    external: "Dining + Pantry",
    beds: "4 BEDROOM DUPLEX",
    baths: "PRIVATE W/C EACH",
    reverse: false,
  },
  {
    id: "Sea Facing Penthouse",
    icon: "ri-home-smile-line",
    image: "/imgs2/JPEG/5.%20penthouse%20entry%20levelv%20-%209th%20floor.jpg",
    area: "366 – 383 M²",
    internal: "Duplex Residence",
    external: "Entry Level (9th)",
    beds: "PENTHOUSE DUPLEX",
    baths: "MULTIPLE BATHS",
    reverse: true,
  },
  {
    id: "Penthouse Upper Level",
    icon: "ri-home-gear-line",
    image: "/imgs2/JPEG/6.%20penthouse%20upper%20level%20-%2010th%20floor.jpg",
    area: "Private Retreat",
    internal: "Main Bedrooms",
    external: "Upper Level (10th)",
    beds: "PRIVATE QUARTERS",
    baths: "EN-SUITE BATHS",
    reverse: false,
  },
  {
    id: "Office Space",
    icon: "ri-building-line",
    image: "/imgs2/JPEG/2.%20typical%20office%20floor-%20%202nd%20floor.jpg",
    area: "Commercial Layout",
    internal: "Office Plan",
    external: "2nd Floor",
    beds: "OFFICE SPACE",
    baths: "",
    reverse: true,
  },
];

export default function FloorPlans() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
        {units.map((unit, index) => (
          <FadeIn key={unit.id} delay={index * 0.1}>
            <div
              className={`flex flex-col ${unit.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-12 lg:gap-24`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative group">
                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full">
                  <Image
                    src={unit.image}
                    alt={`Floor Plan ${unit.id}`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Disclaimer Icon & Tooltip */}
                <div className="absolute bottom-4 right-4 group/tooltip z-10">
                  <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm cursor-help hover:bg-white transition-colors">
                    <InfoCircle className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Disclaimer: Floor plans are for general reference only and
                    illustrate the proposed layout.
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-2/5 space-y-6 sm:space-y-8 md:space-y-12">
                {/* Header */}
                <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className={`${unit.icon} text-xl sm:text-2xl text-safe-accent`} />
                    <span className="text-lg sm:text-2xl font-bold text-safe-primary leading-tight">
                      {unit.id}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-500 pl-7 sm:pl-9">
                    {unit.area}
                  </span>
                </div>

                {/* Main Features */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-safe-primary">
                    {unit.beds}
                  </h3>
                  {unit.baths ? (
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-safe-primary opacity-80">
                      {unit.baths}
                    </h3>
                  ) : null}
                </div>

                {/* Measurements */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                  <div className="space-y-1">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                      Internal
                    </p>
                    <p className="text-sm sm:text-base font-bold text-safe-primary">
                      {unit.internal}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                      External
                    </p>
                    <p className="text-sm sm:text-base font-bold text-safe-primary">
                      {unit.external}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-safe-primary text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider hover:bg-safe-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
