import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Error 404" title="Página no" highlight="encontrada" description="La página que buscas no existe o fue movida." />
      <section className="bg-white py-16 text-center">
        <Link href="/" className="btn-brand">
          Volver al inicio
        </Link>
      </section>
    </>
  );
}
