import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../Icons";
import { HeroProducts } from "./HeroProducts";

export function Hero() {
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
      <Image
        src="/images/desktop.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 hidden object-cover object-[right_center] md:block"
      />

      <div className="container-gat grid items-end gap-6 pt-10 md:min-h-[680px] md:grid-cols-[1.1fr_1fr] md:pt-6">
        <div className="relative z-10 flex flex-col pb-8 md:pb-16">
          <p className="eyebrow animate-fade-up">Global Auto Tech</p>
          <h1 className="hero-title mt-4 animate-fade-up text-5xl tracking-tight sm:text-4xl xl:text-4xl [animation-delay:100ms]">
            Alto Rendimiento
            <span className="block text-brand">Calidad Premium</span>
          </h1>

          <div className="animate-fade-up [animation-delay:300ms]">
            <HeroProducts />
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
