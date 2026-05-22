import React from "react";
import FadeIn from "./FadeIn";

export default function ExclusiveRedefined() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-left md:text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-meethaq-primary mb-16 leading-tight">
            Exclusive
            <br />
            Living
            <br />
            Redefined
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left md:text-center">
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-start md:items-center">
              <h3 className="text-lg font-bold text-meethaq-primary uppercase tracking-widest mb-4">
                Ultra-Selective Residences
              </h3>
              <p className="text-gray-600 font-light leading-relaxed max-w-sm md:mx-auto">
                Just 96 apartment units across 24 floors, ensuring privacy,
                space, and exclusivity.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-start md:items-center">
              <h3 className="text-lg font-bold text-meethaq-primary uppercase tracking-widest mb-4">
                Architectural Penthouse
              </h3>
              <p className="text-gray-600 font-light leading-relaxed max-w-sm md:mx-auto">
                A state-of-the-art crowning residence with bespoke design and
                panoramic views.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
