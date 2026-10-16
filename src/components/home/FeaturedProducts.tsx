"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, products, type CategoryId } from "@/data/products";
import { ProductCard } from "../ProductCard";
import { ArrowRightIcon } from "../Icons";

const featuredSlugs = ["refrigerante-anticorrosivo-verde", "liga-de-frenos-dot-4", "filtro-de-aceite"];

export function FeaturedProducts() {
  const [active, setActive] = useState<CategoryId | "todos">("todos");
  const visible =
    active === "todos"
      ? featuredSlugs.map((slug) => products.find((p) => p.slug === slug)!)
      : products.filter((p) => p.category === active).slice(0, 3);

  return (
    <section className="bg-smoke py-20 lg:py-28">
      <div className="container-gat">
        <h2 className="title-display text-center text-4xl sm:text-5xl">
          Productos <span className="text-brand">GAT</span>
        </h2>

        <div
          role="tablist"
          aria-label="Categorías de productos"
          className="mx-auto mt-8 flex max-w-full flex-wrap justify-center gap-x-1 gap-y-2"
        >
          {[{ id: "todos" as const, name: "Todos" }, ...categories].map((category) => (
            <button
              key={category.id}
              role="tab"
              type="button"
              aria-selected={active === category.id}
              onClick={() => setActive(category.id)}
              className={`border-b-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                active === category.id
                  ? "border-brand text-brand"
                  : "border-transparent text-ink/60 hover:text-ink"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={active === "todos" ? "/productos" : `/productos?categoria=${active}`}
            className="btn-brand"
          >
            Ver todos los productos
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
