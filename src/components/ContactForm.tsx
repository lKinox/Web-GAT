"use client";

import { useState } from "react";
import { categories } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

const fieldClass =
  "w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Hola, soy ${data.get("nombre")}.`,
      data.get("empresa") ? `Empresa/taller: ${data.get("empresa")}.` : "",
      `Me interesa: ${data.get("categoria")}.`,
      String(data.get("mensaje") ?? ""),
      `Teléfono: ${data.get("telefono")}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-md bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:grid-cols-2 sm:p-8">
      <label className="grid gap-2 text-sm font-medium">
        Nombre
        <input name="nombre" required autoComplete="name" placeholder="Tu nombre" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Teléfono
        <input name="telefono" required type="tel" autoComplete="tel" placeholder="Tu número" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Empresa o taller <span className="sr-only">(opcional)</span>
        <input name="empresa" autoComplete="organization" placeholder="Opcional" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Categoría de interés
        <select name="categoria" className={fieldClass} defaultValue="Varios productos">
          {categories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
          <option>Varios productos</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        Mensaje
        <textarea
          name="mensaje"
          rows={5}
          placeholder="Cuéntanos qué referencia o cantidad necesitas"
          className={fieldClass}
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink/55" aria-live="polite">
          {sent ? "Abrimos WhatsApp con tu mensaje. ¡Gracias por escribirnos!" : "Te responderemos por WhatsApp."}
        </p>
        <button type="submit" className="btn-brand">
          <WhatsAppIcon className="size-4" />
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}
