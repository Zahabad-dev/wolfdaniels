import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const STORY = [
  {
    src: "/gallery/detail-06.webp",
    alt: "Sombrero vaquero clásico Wolf Daniel's en el monte",
    eyebrow: "Origen",
    title: "Nacidas en el campo",
    text: "Cada modelo se piensa para el trabajo real: sol, polvo y jornadas largas.",
    size: "large",
  },
  {
    src: "/gallery/detail-08.webp",
    alt: "Camisa a cuadros roja Wolf Daniel's, detalle de tela",
    eyebrow: "Tela",
    title: "Color que no se apaga",
    text: "Estampados y tejidos seleccionados para aguantar lavado tras lavado.",
    size: "small",
  },
  {
    src: "/gallery/detail-04.webp",
    alt: "Chamarra negra con bandera de México bordada",
    eyebrow: "Identidad",
    title: "Hecho en México",
    text: "Fabricación propia, con orgullo, para quien representa el campo mexicano.",
    size: "small",
  },
  {
    src: "/gallery/detail-01.webp",
    alt: "Detalle logo Maktub en camisa negra",
    eyebrow: "Detalle",
    title: "El acabado importa",
    text: "Botones, costuras y logotipos cuidados en cada pieza que sale de fábrica.",
    size: "large",
  },
];

export default function GalleryShowcase() {
  return (
    <div className="flex flex-col gap-16">
      {STORY.map((item, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={item.src}
            className={`flex flex-col items-center gap-8 sm:flex-row ${
              reversed ? "sm:flex-row-reverse" : ""
            }`}
          >
            <ScrollReveal
              className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-brand-gray sm:w-3/5 ${
                item.size === "large" ? "aspect-[4/5]" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
                className="object-cover"
              />
            </ScrollReveal>
            <ScrollReveal delay={120} className="w-full sm:w-2/5">
              <span className="font-heading text-xs tracking-[0.3em] text-brand-gold">
                {item.eyebrow}
              </span>
              <h3 className="mt-2 text-2xl text-brand-cream sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-brand-cream/70">{item.text}</p>
            </ScrollReveal>
          </div>
        );
      })}
    </div>
  );
}
