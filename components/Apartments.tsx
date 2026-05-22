import React from "react";
import Image from "next/image";

export interface ApartmentUnit {
  id?: number;
  type: string;
  size: string;
  price: string;
  img: string;
}

interface ApartmentsProps {
  units?: ApartmentUnit[];
}

export default function Apartments({ units }: ApartmentsProps) {
  // Fallback data if no props provided or fetch fails
  const displayUnits =
    units && units.length > 0
      ? units
      : [
          {
            type: "Two Bed, Two Bath Apartments",
            size: "Sized from 129m²",
            price: "Priced from $212,000",
            img: "/img/items/apt1.jpg",
          },
          {
            type: "Three Bed, Three Bath Apartments",
            size: "Sized from 140m²",
            price: "Priced from $231,000",
            img: "/img/items/apt2.jpg",
          },
          {
            type: "Four Bed, Four Bath Apartments",
            size: "Sized from 209m²",
            price: "Priced from $299,000",
            img: "/img/items/ap3.jpg",
          },
        ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayUnits.map((unit, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={unit.img}
                  alt={unit.type}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif text-meethaq-primary mb-4">
                  {unit.type}
                </h3>
                <div className="text-sm text-meethaq-secondary mb-2">
                  {unit.size}
                </div>
                <div className="text-sm font-bold text-meethaq-primary">
                  {unit.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
