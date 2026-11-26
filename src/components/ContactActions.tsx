import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { business, whatsappUrl } from "@/lib/business";
export default function ContactActions() {
  return <aside aria-label="Contacto rápido" className="fixed z-30 bottom-0 inset-x-0 flex gap-2 border-t border-gray-200 bg-white p-3 md:bottom-5 md:left-auto md:right-5 md:rounded-xl md:border shadow-lg">
    <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-[13px] sm:text-sm px-1 sm:px-5">Cómo llegar</a>
    <Link href="/contacto" className="btn-primary flex-1 flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-[13px] sm:text-sm px-1 sm:px-5">Agendar cita</Link>
    <a href={whatsappUrl()} className="btn-whatsapp flex-1 flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-[13px] sm:text-sm px-1 sm:px-5"><WhatsAppIcon /><span>WhatsApp</span></a>
  </aside>;
}
