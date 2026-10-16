import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../Icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-24 text-white">
      <Image
        src="/images/bg-motor.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
      <Image
        src="/images/hero-curve.png"
        alt=""
        width={3024}
        height={1951}
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-auto w-full min-w-[900px] select-none"
      />

      <div className="container-gat grid items-end gap-6 pt-10 md:min-h-[680px] md:grid-cols-[1.1fr_1fr] md:pt-6">
        <div className="relative z-10 flex flex-col pb-8 md:pb-16">
          <p className="eyebrow animate-fade-up">Global Auto Tech</p>
          <h1 className="hero-title mt-4 animate-fade-up text-5xl tracking-tight sm:text-4xl xl:text-4xl [animation-delay:100ms]">
            Alto Rendimiento
            <span className="block text-brand">Calidad Premium</span>
          </h1>

          <div className="relative mt-8 flex h-52 animate-fade-up items-end sm:h-64 lg:h-80 [animation-delay:300ms]">
            <Image
              src="/images/productos-hero.png"
              alt="Refrigerantes anticorrosivos verde y naranja GAT"
              width={672}
              height={532}
              priority
              className="h-full w-auto max-w-full object-contain object-left drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)]"
            />
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

        <div className="relative hidden h-full items-end justify-end md:flex">
          <Image
            src="/images/mecanico.png"
            alt="Mecánico GAT sosteniendo una llave"
            width={1321}
            height={1604}
            priority
            sizes="(min-width: 768px) 45vw, 0px"
            className="relative z-10 h-auto max-h-[640px] w-auto animate-fade-up object-contain [animation-delay:200ms]"
          />
        </div>
      </div>
    </section>
  );
}
