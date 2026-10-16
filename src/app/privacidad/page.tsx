import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      sections={[
        {
          heading: "Datos que recopilamos",
          body: "Solo tratamos los datos que nos envías voluntariamente, como tu nombre, teléfono o correo, cuando nos contactas por el formulario, WhatsApp o correo electrónico.",
        },
        {
          heading: "Uso de la información",
          body: "Utilizamos tus datos únicamente para responder tus consultas, enviarte cotizaciones y darte seguimiento comercial. No vendemos ni cedemos tu información a terceros.",
        },
        {
          heading: "Tus derechos",
          body: "Puedes solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos escribiéndonos a través de nuestros canales de contacto.",
        },
        {
          heading: "Cambios",
          body: "Podemos actualizar esta política para reflejar cambios en nuestros servicios. La versión vigente siempre estará publicada en esta página.",
        },
      ]}
    />
  );
}
