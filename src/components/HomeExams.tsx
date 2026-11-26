import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/business";
import { exams } from "@/lib/exams";
import { formatPrice } from "@/lib/catalog";
export default function HomeExams() {
  return <section className="py-16 md:py-24"><div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand lg:aspect-[5/6]"><Image src="/optica1.jpeg" alt="Exhibidor de armazones en la tienda L&G OPTICS" fill sizes="(max-width: 1023px) calc(100vw - 32px), 600px" className="object-cover" /></div>
    <div>
      <p className="eyebrow">Exámenes de vista</p>
      <h2 className="mt-3 font-roots text-4xl text-ink md:text-5xl">Consulta tu graduación</h2>
      <p className="mt-3 text-ink/75">Precios de entrada en MXN y duración estimada. Confirma disponibilidad, alcance y costo de tu visita al agendar.</p>
      <ul className="mt-6 border-t border-ink/15">{exams.map(e => <li key={e.name} className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-4">
        <span><span className="block font-semibold text-ink">{e.name}</span><span className="text-sm text-ink/70">{e.duration}</span></span>
        <span className="whitespace-nowrap font-roots text-2xl text-navy-900">{formatPrice(e.price)}</span>
      </li>)}</ul>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a href={whatsappUrl("Hola, vi su página web y quiero agendar un examen de vista.")} className="btn-whatsapp"><WhatsAppIcon /><span>Agendar por WhatsApp</span></a>
        <Link href="/examenes-de-vista" className="btn-secondary">Ver tipos de examen</Link>
      </div>
    </div>
  </div></section>;
}
