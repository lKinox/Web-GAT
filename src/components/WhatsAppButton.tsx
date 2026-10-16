import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/25 transition hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
