import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { navLinks, site, whatsappLink } from "@/data/site";
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/images/bg-motor.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="container-gat relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="title-display max-w-md text-3xl sm:text-4xl">
            Repuestos Automotrices de Calidad Premium, <span className="text-brand">a tu alcance</span>
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-brand/60 text-brand transition hover:bg-brand hover:text-white"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-10 place-items-center rounded-full border border-brand/60 text-brand transition hover:bg-brand hover:text-white"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="eyebrow mb-4">Productos</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/productos?categoria=${category.id}`} className="transition hover:text-brand">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">GAT</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto" className="transition hover:text-brand">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Contacto</p>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-3">
              <PhoneIcon className="size-4 shrink-0 text-brand" />
              {site.phone}
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="size-4 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="transition hover:text-brand">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PinIcon className="size-4 shrink-0 text-brand" />
              {site.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative bg-deep">
        <div className="container-gat flex flex-col items-center justify-between gap-4 py-5 text-xs text-white/60 sm:flex-row">
          <div className="flex items-center gap-4">
            <Image src="/images/logo-gat.svg" alt="GAT" width={70} height={27} />
            <span>© {new Date().getFullYear()} GAT Global Auto Tech. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/terminos" className="transition hover:text-brand">
              Términos y condiciones
            </Link>
            <Link href="/privacidad" className="transition hover:text-brand">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
