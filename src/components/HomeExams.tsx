import Image from "next/image";
import Link from "next/link";
import OpenStatus from "./OpenStatus";
import { business, whatsappUrl } from "@/lib/business";
// The store itself: where it is, when it opens, and that eye exams happen here.
export default function HomeExams() {
  return <section className="grid md:grid-cols-[3fr_2fr]">
    <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[420px]"><Image src="/optica3.jpeg" alt="Interior de la tienda L&G OPTICS con exhibidores de armazones" fill quality={90} sizes="(max-width: 767px) 100vw, 60vw" className="object-cover" /></div>
    <div className="flex flex-col justify-center bg-sand px-5 py-12 md:px-10 lg:px-14">
      <p className="eyebrow">Tienda · {business.neighborhood}</p>
      <h2 className="mt-3 font-roots text-4xl md:text-6xl">Visítanos en {business.neighborhood}</h2>
      <p className="mt-4 text-ink/80">Prueba los armazones en persona y agenda tu examen de vista.</p>
      <address className="mt-6 text-sm not-italic text-ink/80"><p>{business.address}</p>{business.hours.map(line => <p key={line}>{line}</p>)}</address>
      <div className="mt-3 min-h-6"><OpenStatus /></div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Cómo llegar</a>
        <a href={whatsappUrl("Hola, vi su página web y quiero agendar un examen de vista.")} className="btn-secondary">Agendar examen</a>
      </div>
      <p className="mt-5"><Link href="/examenes-de-vista" className="link text-sm">Ver tipos de examen</Link></p>
    </div>
  </section>;
}
