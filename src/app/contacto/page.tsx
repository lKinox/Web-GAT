import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Habla con un asesor de GAT Global Auto Tech.",
};

const channels = [
  { icon: PhoneIcon, label: "Teléfono", value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
  { icon: MailIcon, label: "Correo", value: site.email, href: `mailto:${site.email}` },
  { icon: InstagramIcon, label: "Instagram", value: "Síguenos", href: site.instagram },
  { icon: PinIcon, label: "Ubicación", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de"
        highlight="tu próximo pedido"
        description="Distribuidores, talleres y conductores: nuestro equipo te ayuda a encontrar el producto adecuado."
      />

      <section className="bg-smoke py-16 lg:py-24">
        <div className="container-gat grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <ul className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">{label}</span>
                    <span className="block font-semibold">{value}</span>
                  </span>
                </>
              );
              const className = "flex items-center gap-4 rounded-md bg-white p-5 ring-1 ring-black/5 transition";
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`${className} hover:ring-brand`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={className}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
