import Link from "next/link";
import GoogleMap from "./GoogleMap";
import { business, whatsappUrl } from "@/lib/business";
export default function LocationContact() {
  return <section className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
    <div><h2 className="font-roots text-3xl md:text-4xl text-navy-900 mb-6">Visítanos en Nueva Antequera</h2>
      <address className="not-italic text-gray-700"><p>{business.address}</p><a className="inline-block mt-4 underline" href={`tel:${business.phone}`}>{business.phoneLabel}</a></address>
      <h3 className="font-semibold text-xl text-navy-900 mt-6 mb-2">Horarios</h3>{business.hours.map(line => <p key={line} className="text-gray-700">{line}</p>)}
      <div className="flex flex-wrap gap-3 mt-6"><a href={whatsappUrl()} className="btn-whatsapp">WhatsApp</a><Link href="/ubicacion" className="btn-secondary">Cómo llegar</Link></div>
    </div><GoogleMap />
  </div></section>;
}
