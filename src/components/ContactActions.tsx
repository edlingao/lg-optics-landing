import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { whatsappUrl } from "@/lib/business";
export default function ContactActions() {
  return <aside aria-label="Contacto rápido" className="fixed z-30 bottom-0 inset-x-0 flex gap-3 border-t border-gray-200 bg-white p-3 md:bottom-5 md:left-auto md:right-5 md:rounded-xl md:border shadow-lg">
    <Link href="/contacto" className="btn-primary flex-1 text-center text-sm px-3 sm:px-6">Agendar cita</Link>
    <a href={whatsappUrl()} className="btn-whatsapp flex-1 text-center text-sm px-3 sm:px-6"><WhatsAppIcon /><span>WhatsApp</span></a>
  </aside>;
}
