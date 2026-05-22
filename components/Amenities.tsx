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
    name: "FREEHOLD",
    icon: <HomeSimple className="w-6 h-6" />,
  },
  {
    name: "PRACTICAL LAYOUT",
    icon: <LayoutLeft className="w-6 h-6" />,
  },
  {
    name: "SPACIOUS CARPARKS",
    icon: <Garage className="w-6 h-6" />,
  },
  {
    name: "EV CHARGER",
    icon: <EvCharge className="w-6 h-6" />,
  },
  {
    name: "3 TIER SECURITY",
    icon: <SecurityPass className="w-6 h-6" />,
  },
  {
    name: "LOW DENSITY",
    icon: <Community className="w-6 h-6" />,
  },
  {
    name: "PREMIUM GYM",
    icon: <Gym className="w-6 h-6" />,
  },
  {
    name: "CHILDREN PLAYGROUND",
    icon: <BasketballField className="w-6 h-6" />,
  },
  {
    name: "PANORAMIC VIEWS",
    icon: <SeaWaves className="w-6 h-6" />,
  },
  {
    name: "BACK UP GENERATOR",
    icon: <LightBulb className="w-6 h-6" />,
  },
  {
    name: "CONVENIENCE STORE",
    icon: <Shop className="w-6 h-6" />,
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
            <h2 className="text-3xl md:text-5xl font-serif text-meethaq-primary mb-4">
              Premium Amenities
            </h2>
            <div className="h-1 w-20 bg-meethaq-accent"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {amenities.map((amenity, index) => (
            <FadeIn key={index} delay={index * 0.05} className="h-full">
              <div className="flex flex-col items-center justify-center p-8 bg-[#f9f9f9] rounded-lg hover:shadow-md transition duration-300 border border-transparent hover:border-meethaq-accent/20 group h-full">
                <div className="mb-4 text-meethaq-primary group-hover:text-meethaq-secondary transition duration-300 bg-white p-3 rounded-full shadow-sm">
                  {amenity.icon}
                </div>
                <h3 className="text-xs font-bold text-meethaq-primary text-center tracking-widest uppercase">
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
