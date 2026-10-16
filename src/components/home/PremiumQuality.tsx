import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "../Icons";

const points = [
  {
    title: "Certificación internacional",
    text: "Fabricados bajo la norma TÜV IATF 16949 de la industria automotriz.",
  },
  {
    title: "Materiales de alto desempeño",
    text: "Componentes seleccionados para resistir calor, fricción y uso intensivo.",
  },
  {
    title: "Amplia cobertura",
    text: "Referencias compatibles con la mayoría de vehículos del mercado.",
  },
];

export function PremiumQuality() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-gat grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">¿Por qué elegir GAT?</p>
          <h2 className="title-display mt-4 text-4xl sm:text-5xl">
            Productos de
            <span className="block">Calidad Premium</span>
          </h2>
          <p className="mt-6 max-w-lg text-ink/70">
            Fabricamos cada producto para cumplir con las exigencias de conductores y talleres:
            protección, durabilidad y rendimiento constante.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <CheckIcon className="size-4" />
                </span>
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p className="text-sm text-ink/65">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/productos" className="btn-brand mt-10">
            Conocer el catálogo
          </Link>
        </div>

        <div className="relative mx-auto h-[440px] w-full max-w-lg sm:h-[520px]">
          <figure className="absolute left-0 top-2 w-[74%] -rotate-6 bg-white p-2.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] sm:p-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/PremiumQuality2.jpg"
                alt="Faro de un auto deportivo naranja"
                fill
                sizes="(min-width: 1024px) 28vw, 70vw"
                className="object-cover object-[center_32%]"
              />
            </div>
          </figure>
          <figure className="absolute bottom-2 right-0 z-10 w-[74%] rotate-3 bg-white p-2.5 shadow-[0_22px_46px_-16px_rgba(0,0,0,0.5)] sm:p-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/PremiumQuality1.jpg"
                alt="Filtro de aire de alto rendimiento"
                fill
                sizes="(min-width: 1024px) 28vw, 70vw"
                className="object-cover object-[center_42%]"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
