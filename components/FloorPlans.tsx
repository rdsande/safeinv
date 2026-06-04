import React from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { InfoCircle } from "iconoir-react";

const units = [
  {
    id: "1 Bedroom",
    icon: "ri-home-4-line",
    image: "/imgs2/JPEG/4.%20typical%20floor%20plan%20-%204th%20to%208th%20floor.jpg",
    area: "106.57M²",
    internal: "90.27M²",
    external: "16.3M²",
    beds: "1 BEDROOM",
    baths: "2 BATHROOM",
    reverse: false,
  },
  {
    id: "2 Bedroom",
    icon: "ri-home-5-line",
    image: "/imgs2/JPEG/4.%20typical%20floor%20plan%20-%204th%20to%208th%20floor%202.jpg",
    area: "117.41M²",
    internal: "99.45M²",
    external: "17.96M²",
    beds: "2 BEDROOM",
    baths: "2 BATHROOM",
    reverse: true,
  },
  {
    id: "3 Bedroom",
    icon: "ri-home-8-line",
    image: "/imgs2/JPEG/3.%204%20bhk%20apartment%20-%203rd%20floor%20level.jpg",
    area: "184.94M²",
    internal: "156.65M²",
    external: "28.29M²",
    beds: "3 BEDROOM",
    baths: "3 BATHROOM",
    reverse: false,
  },
  {
    id: "Office Space",
    icon: "ri-building-line",
    image: "/imgs2/JPEG/2.%20typical%20office%20floor-%20%202nd%20floor.jpg",
    area: "150.00M²",
    internal: "130.00M²",
    external: "20.00M²",
    beds: "COMMERCIAL",
    baths: "2 BATHROOM",
    reverse: true,
  },
  {
    id: "Shop Space",
    icon: "ri-store-3-line",
    image: "/imgs2/JPEG/1.%20ground%20floor.jpg",
    area: "80.00M²",
    internal: "70.00M²",
    external: "10.00M²",
    beds: "RETAIL",
    baths: "1 BATHROOM",
    reverse: false,
  },
  {
    id: "Restaurant",
    icon: "ri-restaurant-line",
    image: "/imgs2/JPEG/1.%20ground%20floor.jpg",
    area: "200.00M²",
    internal: "170.00M²",
    external: "30.00M²",
    beds: "DINING",
    baths: "4 BATHROOM",
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
              className={`flex flex-col ${unit.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 lg:gap-24`}
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
                <div className="flex items-baseline gap-3 sm:gap-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className={`${unit.icon} text-2xl sm:text-3xl text-safe-accent`} />
                    <span className="text-2xl sm:text-3xl font-bold text-safe-primary">
                      {unit.id}
                    </span>
                  </div>
                  <span className="text-lg sm:text-xl font-medium text-gray-500">
                    {unit.area}
                  </span>
                </div>

                {/* Main Features */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-safe-primary">
                    {unit.beds}
                  </h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-safe-primary opacity-80">
                    {unit.baths}
                  </h3>
                </div>

                {/* Measurements */}
                <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      Internal
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-safe-primary">
                      {unit.internal}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      External
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-safe-primary">
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
