"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "../Icons";

const desktopSlides = [
  {
    background: "/images/desktop.png",
    product: "/images/productos-hero.png",
    alt: "Refrigerantes anticorrosivos verde y naranja GAT",
  },
  {
    background: "/images/desktop-freno.png",
    product: "/images/LIGAS.png",
    alt: "Disco y cáliper de freno GAT",
  },
];

const mobileSlides = [
  {
    src: "/images/productos-hero.png",
    alt: "Refrigerantes anticorrosivos verde y naranja GAT",
  },
  {
    src: "/images/LIGAS.png",
    alt: "Liga de frenos DOT 3 y DOT 4 GAT",
  },
];

const DESKTOP_MS = 4000;
const MOBILE_MS = 3000;

const fadeClass =
  "transition-opacity duration-700 ease-in-out drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)]";

export function Hero() {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDesktopIndex((current) => (current + 1) % desktopSlides.length);
    }, DESKTOP_MS);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileIndex((current) => (current + 1) % mobileSlides.length);
    }, MOBILE_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-24 text-white">
      <Image
        src="/images/mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center md:hidden"
      />
      {desktopSlides.map((slide, position) => (
        <Image
          key={slide.background}
          src={slide.background}
          alt=""
          fill
          priority={position === 0}
          sizes="100vw"
          className={`-z-20 hidden object-cover object-[right_center] transition-opacity duration-700 ease-in-out md:block ${
            position === desktopIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="container-gat grid items-end gap-6 pt-10 md:min-h-[680px] md:grid-cols-[1.1fr_1fr] md:pt-6">
        <div className="relative z-10 flex flex-col pb-8 md:pb-16">
          <p className="eyebrow animate-fade-up">Global Auto Tech</p>
          <h1 className="hero-title mt-4 animate-fade-up text-5xl tracking-tight sm:text-4xl xl:text-4xl [animation-delay:100ms]">
            Alto Rendimiento
            <span className="block text-brand">Calidad Premium</span>
          </h1>

          <div
            className="relative mt-8 h-52 animate-fade-up sm:h-64 lg:h-72 [animation-delay:300ms]"
            aria-roledescription="carrusel"
            aria-label="Productos GAT"
          >
            {mobileSlides.map((slide, position) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={position === 0}
                sizes="90vw"
                aria-hidden={position !== mobileIndex}
                className={`object-contain object-left md:hidden ${fadeClass} ${
                  position === mobileIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {desktopSlides.map((slide, position) => (
              <Image
                key={slide.product}
                src={slide.product}
                alt={slide.alt}
                fill
                priority={position === 0}
                sizes="(min-width: 768px) 36rem, 0px"
                aria-hidden={position !== desktopIndex}
                className={`hidden object-contain object-left md:block ${fadeClass} ${
                  position === desktopIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:400ms]">
            <Link href="/productos" className="btn-brand">
              Nuestros productos
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link href="/contacto" className="btn-outline">
              Hablar con un asesor
            </Link>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
