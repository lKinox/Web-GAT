"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { CloseIcon, MenuIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 shadow-lg backdrop-blur" : "bg-gradient-to-b from-ink/90 to-transparent"
      }`}
    >
      <div className="container-gat flex h-24 items-center justify-between">
        <Link href="/" aria-label="GAT Global Auto Tech, inicio" className="shrink-0">
          <Image
            src="/images/logo-gat.svg"
            alt="GAT Global Auto Tech"
            width={168}
            height={66}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-lg tracking-wide transition hover:text-brand ${
                isActive(link.href) ? "nav-link-active font-black text-brand" : "nav-link font-normal text-white/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-brand nav-link-active px-7 py-3 text-lg font-black">
            Contáctanos
          </Link>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-sm text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>
      </div>

      <div
        inert={!open}
        className={`md:hidden overflow-hidden bg-ink transition-[max-height] duration-300 ${
          open ? "max-h-[calc(100dvh-6rem)]" : "max-h-0"
        }`}
      >
        <nav aria-label="Móvil" className="container-gat flex flex-col gap-1 pb-8 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-white/10 py-4 text-2xl ${
                isActive(link.href) ? "nav-link-active font-black text-brand" : "nav-link font-normal text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setOpen(false)} className="btn-brand nav-link-active mt-6 text-lg font-black">
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}
