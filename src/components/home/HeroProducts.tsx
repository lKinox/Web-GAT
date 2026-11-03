"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/productos-hero.png",
    alt: "Refrigerantes anticorrosivos verde y naranja GAT",
  },
  {
    src: "/images/freno.png",
    alt: "Disco y cáliper de freno GAT",
  },
  {
    src: "/images/LIGAS.png",
    alt: "Liga de frenos DOT 3 y DOT 4 GAT",
  },
];

const SLIDE_MS = 3000;

export function HeroProducts() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative mt-8 h-52 sm:h-64 lg:h-72"
      aria-roledescription="carrusel"
      aria-label="Productos GAT"
    >
      {slides.map((slide, position) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={position === 0}
          sizes="(min-width: 1024px) 36rem, 90vw"
          aria-hidden={position !== index}
          className={`object-contain object-left drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)] transition-opacity duration-700 ease-in-out ${
            position === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
