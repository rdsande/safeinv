import React from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Intro() {
  return (
    <section className="py-20 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          {/* Content */}
          <div className="max-w-4xl w-full">
            <FadeIn delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-serif text-meethaq-primary leading-tight mb-8">
                A 24-storey architectural masterpiece featuring only 96
                luxurious residences, Meethaq Tower represents a new covenant
                between extraordinary design and elevated living.
              </h2>
            </FadeIn>

            {/* Number Highlights */}
            <div className="grid grid-cols-3 gap-2 md:gap-8 mb-12">
              <FadeIn delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="text-meethaq-secondary mb-2 md:mb-3 bg-white p-2 md:p-3 rounded-full w-fit shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-6 md:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>
                  <div className="text-xl md:text-4xl font-serif text-meethaq-primary mb-1">
                    24
                  </div>
                  <div className="text-[8px] md:text-sm text-meethaq-secondary uppercase tracking-wider leading-tight">
                    Storeys Architectural
                    <br />
                    Masterpiece
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <div className="text-meethaq-secondary mb-2 md:mb-3 bg-white p-2 md:p-3 rounded-full w-fit shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-6 md:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                  </div>
                  <div className="text-xl md:text-4xl font-serif text-meethaq-primary mb-1">
                    96
                  </div>
                  <div className="text-[8px] md:text-sm text-meethaq-secondary uppercase tracking-wider leading-tight">
                    Luxurious
                    <br />
                    Residences
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col items-center text-center">
                  <div className="text-meethaq-secondary mb-2 md:mb-3 bg-white p-2 md:p-3 rounded-full w-fit shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 md:w-6 md:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                  <div className="text-xl md:text-4xl font-serif text-meethaq-primary mb-1">
                    3
                  </div>
                  <div className="text-[8px] md:text-sm text-meethaq-secondary uppercase tracking-wider leading-tight">
                    Exclusive
                    <br />
                    Penthouses
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.5}>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-meethaq-primary transition">
                EXPLORE RESIDENCES
              </button>
            </FadeIn>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={0.6} className="w-full">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/img/img001.jpg"
                alt="Meethaq Interior Design"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.7} className="w-full">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/img/items/ghjhj.jpg"
                alt="Meethaq Living Space"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
