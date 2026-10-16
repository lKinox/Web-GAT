import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { ArrowRightIcon } from "./Icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-md bg-white shadow-[0_6px_24px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f1f1f1]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug">{product.name}</h3>
        <span className="mt-auto inline-flex items-center gap-1.5 rounded-sm bg-smoke px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink/70 transition group-hover:bg-brand group-hover:text-white">
          Ver especificaciones
          <ArrowRightIcon className="size-3" />
        </span>
      </div>
    </Link>
  );
}
