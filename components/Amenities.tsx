import React from "react";
import FadeIn from "./FadeIn";
import {
  HomeSimple,
  LayoutLeft,
  Garage,
  EvCharge,
  SecurityPass,
  Community,
  Gym,
  BasketballField,
  SeaWaves,
  LightBulb,
  Shop,
  Balcony,
} from "iconoir-react";

const amenities = [
  {
    name: "LARGE SITTING AREA",
    icon: <HomeSimple className="w-6 h-6" />,
  },
  {
    name: "DINING ROOM",
    icon: <LayoutLeft className="w-6 h-6" />,
  },
  {
    name: "PANTRY",
    icon: <Shop className="w-6 h-6" />,
  },
  {
    name: "3 & 4 BEDROOMS",
    icon: <Community className="w-6 h-6" />,
  },
  {
    name: "CLOSET ROOMS (C/R)",
    icon: <Garage className="w-6 h-6" />,
  },
  {
    name: "PRIVATE W/C EACH",
    icon: <SecurityPass className="w-6 h-6" />,
  },
  {
    name: "MULTIPLE BALCONIES",
    icon: <Balcony className="w-6 h-6" />,
  },
  {
    name: "SEA FACING VIEWS",
    icon: <SeaWaves className="w-6 h-6" />,
  },
  {
    name: "DUPLEX LIVING",
    icon: <HomeSimple className="w-6 h-6" />,
  },
  {
    name: "OFFICE SPACE",
    icon: <LayoutLeft className="w-6 h-6" />,
  },
  {
    name: "EXCLUSIVE PENTHOUSE",
    icon: <LightBulb className="w-6 h-6" />,
  },
  {
    name: "ROOFTOP TERRACE",
    icon: <Balcony className="w-6 h-6" />,
  },
];

export default function Amenities() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-serif text-safe-primary mb-4">
              Premium Amenities
            </h2>
            <div className="h-1 w-20 bg-safe-accent"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {amenities.map((amenity, index) => (
            <FadeIn key={index} delay={index * 0.05} className="h-full">
              <div className="flex flex-col items-center justify-center p-8 bg-[#f9f9f9] rounded-lg hover:shadow-md transition duration-300 border border-transparent hover:border-safe-accent/20 group h-full">
                <div className="mb-4 text-safe-primary group-hover:text-safe-accent transition duration-300 bg-white p-3 rounded-full shadow-sm">
                  {amenity.icon}
                </div>
                <h3 className="text-xs font-bold text-safe-primary text-center tracking-widest uppercase">
                  {amenity.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
