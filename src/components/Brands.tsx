import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import { whatsappUrl } from "@/lib/business";
export default function Brands() {
  return <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-5 py-16 text-center text-white">
    <Image src="/optica1.jpeg" alt="" fill sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-black/55" />
    <div className="relative">
      <h2 className="font-roots text-5xl md:text-6xl">¿Buscas una marca o modelo?</h2>
      <p className="mx-auto mt-3 max-w-md text-white/90">Cuéntanos qué armazón te interesa.</p>
      <a href={whatsappUrl("Hola, vi su página web y busco un armazón en particular. ¿Me pueden decir si lo tienen disponible?")} className="btn-white mt-6"><WhatsAppIcon /><span>Preguntar por WhatsApp</span></a>
    </div>
  </section>;
}
