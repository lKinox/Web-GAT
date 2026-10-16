import Image from "next/image";

export function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-20 overflow-hidden bg-smoke py-20 lg:py-28">
      <Image src="/images/bg-dots.jpg" alt="" fill sizes="100vw" className="object-cover" />

      <div className="container-gat relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto aspect-[1596/1440] w-full max-w-lg overflow-hidden rounded-md">
          <Image
            src="/images/mecanico-2.jpeg"
            alt="Técnico de GAT Global Auto Tech"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Sobre nosotros</p>
          <h2 className="title-display mt-4 text-4xl sm:text-5xl">
            La Calidad es
            <span className="block text-brand">Nuestro Objetivo</span>
          </h2>
          <p className="mt-6 text-ink/75">
            En GAT, cada producto está pensado para ofrecer un rendimiento confiable. Desde la
            selección de materiales hasta los controles finales, trabajamos bajo estándares
            internacionales de calidad para que tu vehículo rinda al máximo.
          </p>
          <p className="mt-4 font-semibold text-ink">
            Nuestros componentes cuentan con certificación TÜV IATF 16949, la norma de calidad de la
            industria automotriz, y están diseñados para el día a día del conductor.
          </p>
        </div>
      </div>
    </section>
  );
}
