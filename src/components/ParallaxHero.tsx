"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ParallaxHeroProps = {
  children: React.ReactNode;
};

export default function ParallaxHero({ children }: ParallaxHeroProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      const img = imgRef.current;
      if (!section || !img) return;
      const rect = section.getBoundingClientRect();
      const offset = rect.top * 0.35;
      img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90svh] items-center overflow-hidden border-b border-white/10"
    >
      <div ref={imgRef} className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src="/gallery/hero.webp"
          alt="Wolf Daniel's & Maktub"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20" />
        <div className="absolute inset-0 bg-brand-black/30" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        {children}
      </div>
    </section>
  );
}
