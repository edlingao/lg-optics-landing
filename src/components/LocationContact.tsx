import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "./GoogleMap";
import OpenStatus from "./OpenStatus";
import { business, whatsappUrl } from "@/lib/business";
export default function LocationContact() {
  return <section className="bg-sand py-16 md:py-24"><div className="max-w-7xl mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
    <div>
      <p className="eyebrow">Ubicación</p>
      <h2 className="mt-3 font-roots text-4xl text-ink md:text-5xl">Visítanos en Nueva Antequera</h2>
      <address className="mt-5 not-italic text-ink/80"><p>{business.address}</p><a className="mt-2 inline-block underline underline-offset-4" href={`tel:${business.phone}`}>{business.phoneLabel}</a></address>
      <h3 className="mt-7 text-lg font-semibold text-ink">Horarios</h3>
      <div className="mt-1 min-h-6"><OpenStatus className="text-ink" /></div>
      {business.hours.map(line => <p key={line} className="text-ink/80">{line}</p>)}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"><a href={whatsappUrl()} className="btn-whatsapp"><WhatsAppIcon /><span>WhatsApp</span></a><a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Cómo llegar</a><Link href="/ubicacion" className="link text-center">Ver ubicación</Link></div>
    </div>
    <div className="space-y-5">
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-cream"><Image src="/optica3.jpeg" alt="Interior de la tienda L&G OPTICS con exhibidores de armazones" fill sizes="(max-width: 1023px) calc(100vw - 32px), 600px" className="object-cover" /></div>
      <GoogleMap height={300} />
    </div>
  </div></section>;
}
