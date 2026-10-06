import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import { business, whatsappUrl } from "@/lib/business";
export default function Hero() {
  return <section className="relative bg-navy-900 text-white py-10 md:py-20 overflow-hidden">
    <Image src="/glasses-copy.jpg" alt="" fill sizes="100vw" loading="eager" fetchPriority="high" className="object-cover opacity-10" />
    <div className="relative max-w-5xl mx-auto px-5 text-center">
      <p className="text-blue-100 text-sm font-semibold tracking-wide mb-4">NUEVA ANTEQUERA · PUEBLA</p>
      <h1 className="font-roots text-3xl sm:text-4xl md:text-6xl leading-tight max-w-4xl mx-auto">Óptica en Puebla: lentes y examen de vista</h1>
      <p className="text-base md:text-xl text-blue-50 mt-5 max-w-2xl mx-auto">Encuentra lentes para tu día a día y consulta tu graduación en L&amp;G OPTICS. Te esperamos en {business.neighborhood}.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
        <a href={whatsappUrl()} className="btn-whatsapp"><WhatsAppIcon /><span>Consultar por WhatsApp</span></a>
        <Link href="/contacto" className="btn-outline-white">Agendar examen de vista</Link>
      </div>
      <p className="text-sm text-blue-100 mt-5">{business.streetAddress} · <Link href="/ubicacion" className="underline">Cómo llegar</Link></p>
      <ul className="grid sm:grid-cols-3 gap-3 mt-9 text-sm text-blue-50">
        <li className="rounded-xl bg-white/10 p-4"><Link href="/examenes-de-vista" className="underline">Consulta tipos de examen y precios</Link></li>
        <li className="rounded-xl bg-white/10 p-4"><Link href="/productos" className="underline">Explora lentes y armazones</Link></li>
        <li className="rounded-xl bg-white/10 p-4"><Link href="/pricing" className="underline">Compara nuestros paquetes</Link></li>
      </ul>
    </div>
  </section>;
}
