import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      sections={[
        {
          heading: "Uso del sitio",
          body: "Este sitio tiene fines informativos sobre los productos de GAT Global Auto Tech. Al navegarlo aceptas utilizarlo de forma lícita y sin afectar su funcionamiento.",
        },
        {
          heading: "Información de productos",
          body: "Las imágenes y especificaciones son referenciales y pueden variar sin previo aviso. Confirma la compatibilidad de cada referencia con un asesor antes de su compra o instalación.",
        },
        {
          heading: "Propiedad intelectual",
          body: "La marca GAT, sus logotipos, imágenes y contenidos son propiedad de GAT Global Auto Tech y no pueden reproducirse sin autorización.",
        },
        {
          heading: "Contacto",
          body: "Para cualquier consulta sobre estos términos, escríbenos a través de la página de contacto.",
        },
      ]}
    />
  );
}
