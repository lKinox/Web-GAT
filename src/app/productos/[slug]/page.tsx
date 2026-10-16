import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { getProduct, products } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <>
      <div className="h-24 bg-ink" />

      <section className="bg-white py-10 lg:py-14">
        <div className="container-gat">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/15 px-5 py-2.5 text-sm font-semibold transition hover:border-brand hover:text-brand"
          >
            <ArrowRightIcon className="size-4 rotate-180" />
            Volver al catálogo
          </Link>
        </div>

        <div className="container-gat mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-6 grid max-w-sm gap-3">
              <Link href="/productos" className="btn-brand w-full">
                Ver catálogo del producto
              </Link>
              <a
                href="#caracteristicas"
                className="inline-flex items-center justify-center bg-ink px-6 py-3 text-sm font-semibold text-white underline underline-offset-4 transition hover:bg-coal"
              >
                Ver ficha técnica
              </a>
            </div>
          </div>

          <div>
            <nav aria-label="Ruta" className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">
              <Link href="/productos" className="transition hover:text-brand">
                Productos
              </Link>
              <span className="px-2">/</span>
              <span>{product.name}</span>
            </nav>

            <h1 className="title-display mt-4 text-4xl sm:text-5xl">
              {product.name.split(/(?=DOT\s)/).map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line.trim()}
                </span>
              ))}
            </h1>
            <p className="eyebrow mt-5">Especificaciones</p>
            <p className="mt-3 text-lg font-semibold">{product.name}</p>
            <p className="mt-2 max-w-xs font-semibold leading-snug text-brand">{product.highlight}</p>

            <h2 className="mt-8 font-semibold">Descripción general</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/80">{product.description}</p>

            <h2 id="caracteristicas" className="mt-8 scroll-mt-28 font-semibold">
              Características principales
            </h2>
            <ul className="mt-4 max-w-xl list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80 marker:text-ink">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={whatsappLink(`Hola, quisiera información sobre: ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-9 place-items-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
