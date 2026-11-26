import WhatsAppIcon from "@/components/WhatsAppIcon";
import { business, whatsappUrl } from "@/lib/business";
// Phone-only bar. On larger screens the header, which stays in view, carries the WhatsApp button.
export default function ContactActions() {
  return <aside aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.5fr] gap-2 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur md:hidden">
    <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary whitespace-nowrap !px-2 text-sm">Cómo llegar</a>
    <a href={whatsappUrl()} className="btn-whatsapp whitespace-nowrap !px-2 text-sm"><WhatsAppIcon /><span>WhatsApp</span></a>
  </aside>;
}
