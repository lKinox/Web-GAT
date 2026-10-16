import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type CategoryId } from "@/data/products";

export const metadata: Metadata = {
  title: "Productos",
  description: "Catálogo de filtros, bujías, correas, fluidos y repuestos automotrices GAT.",
};

type Props = {
  searchParams: Promise<{ categoria?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const active = categories.find((category) => category.id === categoria)?.id as CategoryId | undefined;
  const list = active ? products.filter((product) => product.category === active) : products;

  const chips = [{ id: undefined, name: "Todos" }, ...categories];

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Productos de"
        highlight="Calidad Premium"
        description="Componentes certificados para el mantenimiento y el rendimiento de tu vehículo."
      />

      <section className="bg-smoke py-16 lg:py-20">
        <div className="container-gat">
          <nav aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
            {chips.map((chip) => {
              const selected = chip.id === active;
              return (
                <Link
                  key={chip.name}
                  href={chip.id ? `/productos?categoria=${chip.id}` : "/productos"}
                  scroll={false}
                  aria-current={selected ? "page" : undefined}
                  className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    selected ? "bg-brand text-white" : "bg-white text-ink/70 ring-1 ring-black/10 hover:text-brand"
                  }`}
                >
                  {chip.name}
                </Link>
              );
            })}
          </nav>

          <p className="mt-6 text-sm text-ink/60">
            {list.length} {list.length === 1 ? "producto" : "productos"}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-ink/70">
              ¿No encuentras la referencia que buscas? Nuestro equipo te ayuda a encontrarla.
            </p>
            <Link href="/contacto" className="btn-brand">
              Contactar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
