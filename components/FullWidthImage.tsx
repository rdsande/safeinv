import React from 'react';
import Image from 'next/image';
import FadeIn from "./FadeIn";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

export default function FullWidthImage({ src, alt }: FullWidthImageProps) {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh]">
      <FadeIn direction="none" className="w-full h-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </FadeIn>
    </section>
  );
}
