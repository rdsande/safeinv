import React from "react";
import Image from "next/image";

export default function Architecture() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-8 md:pr-20">
          <div className="text-xs tracking-widest uppercase mb-4 text-gray-500">
            The Meethaq Tower
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-meethaq-primary">
            A LEGACY <br /> IN THE SKY
          </h2>

          <p className="text-sm leading-relaxed mb-6 text-gray-600">
            Named for its meaning “covenant” or “promise,” Meethaq Tower
            represents more than luxury residences — it’s a commitment to
            exceptional living, where every detail honors the bond between
            architectural excellence and family legacy.
          </p>
          <p className="text-sm leading-relaxed mb-4 text-gray-600 font-medium">
            Meethaq Tower proudly introduces the region’s only full-floor Club
            Home — an unprecedented private sanctuary offering:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 text-sm text-gray-600 mb-6">
            <li className="flex flex-col py-4 md:pr-6 border-b border-gray-200 md:border-r border-dashed md:border-solid">
              <span className="font-bold text-meethaq-primary uppercase tracking-wide text-xs mb-1">
                Exclusive Social Spaces
              </span>
              <span>
                Curated lounges and entertainment areas for family gatherings
              </span>
            </li>
            <li className="flex flex-col py-4 md:pl-6 border-b border-gray-200 border-dashed md:border-solid">
              <span className="font-bold text-meethaq-primary uppercase tracking-wide text-xs mb-1">
                Family Playground
              </span>
              <span>
                Dedicated indoor children’s activity center and play areas
              </span>
            </li>
            <li className="flex flex-col py-4 md:pr-6 border-b md:border-b-0 border-gray-200 md:border-r border-dashed md:border-solid">
              <span className="font-bold text-meethaq-primary uppercase tracking-wide text-xs mb-1">
                Wellness Pavilion
              </span>
              <span>Premium gym, yoga studio, and relaxation zones</span>
            </li>
            <li className="flex flex-col py-4 md:pl-6">
              <span className="font-bold text-meethaq-primary uppercase tracking-wide text-xs mb-1">
                Private Dining & Entertainment
              </span>
              <span>Sophisticated spaces for hosting and celebrations</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 relative h-[500px]">
          <Image
            src="/img/items/inspired.jpg"
            alt="Architecture"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
