import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappUrl } from "@/lib/business";
export default function Brands() {
  return <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8"><div className="max-w-7xl mx-auto rounded-[2rem] bg-butter px-6 py-12 text-center md:py-16">
    <h2 className="font-roots text-4xl text-ink md:text-5xl">¿Buscas una marca o modelo?</h2>
    <p className="mx-auto mt-4 max-w-xl text-ink/80">Cuéntanos qué armazón te interesa. Consulta con nuestro equipo los modelos disponibles y las opciones de pedido.</p>
    <a href={whatsappUrl("Hola, vi su página web y busco un armazón en particular. ¿Me pueden decir si lo tienen disponible?")} className="btn-primary mt-7"><WhatsAppIcon /><span>Consultar disponibilidad de armazones</span></a>
  </div></section>;
}
