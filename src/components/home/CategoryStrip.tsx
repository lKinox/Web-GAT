import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export function CategoryStrip() {
  return (
    <section className="relative bg-white py-14">
      <div className="container-gat">
        <p className="category-strip-text text-center text-base uppercase leading-tight tracking-[0.22em] text-ink/70 sm:text-lg sm:tracking-[0.3em]">
          Explora nuestros productos
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-y-8 sm:grid sm:grid-cols-5 sm:divide-x sm:divide-ink/10">
          {categories.map((category) => (
            <li key={category.id} className="w-1/3 sm:w-auto">
              <Link
                href={`/productos?categoria=${category.id}`}
                className="group flex flex-col items-center gap-3 px-4"
              >
                <span className="grid size-16 place-items-center rounded-full bg-brand/10 transition duration-300 group-hover:-translate-y-1 group-hover:bg-brand/20">
                  <Image src={category.icon} alt="" width={40} height={40} className="size-10" />
                </span>
                <span className="text-sm font-semibold transition group-hover:text-brand">
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
