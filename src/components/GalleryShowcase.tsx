"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const PHOTOS = [
  { src: "/gallery/detail-06.webp", alt: "Sombrero vaquero clásico Wolf Daniel's" },
  { src: "/gallery/detail-08.webp", alt: "Camisa a cuadros roja Wolf Daniel's" },
  { src: "/gallery/detail-01.webp", alt: "Detalle logo Maktub en camisa negra" },
  { src: "/gallery/detail-07.webp", alt: "Camisa Ariat color morado" },
  { src: "/gallery/detail-09.webp", alt: "Camisa azul marino con logo Maktub" },
  { src: "/gallery/detail-04.webp", alt: "Chamarra negra con bandera de México" },
  { src: "/gallery/detail-02.webp", alt: "Detalle camisa azul marino en campo" },
  { src: "/gallery/detail-05.webp", alt: "Explorador con sombrero Wolf Daniel's" },
  { src: "/gallery/detail-03.webp", alt: "Camisa gris con cinturón bordado" },
];

export default function GalleryShowcase() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {PHOTOS.map((photo, i) => (
        <ScrollReveal
          key={photo.src}
          delay={(i % 3) * 90}
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-brand-gray ${
            i === 0 ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-2" : ""
          }`}
        >
          <div className={`relative w-full ${i === 0 ? "aspect-[3/4] sm:aspect-[3/5]" : "aspect-[3/4]"}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
