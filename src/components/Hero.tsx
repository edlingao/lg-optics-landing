import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import { business, whatsappUrl } from "@/lib/business";
import { packages } from "@/lib/packages";
import { exams } from "@/lib/exams";
import { formatPrice } from "@/lib/catalog";
import OpenStatus from "./OpenStatus";
const fromPackage = formatPrice(Math.min(...packages.map(p => p.price)));
const fromExam = formatPrice(Math.min(...exams.map(e => e.price)));
const facts = [
  { label: "Examen de vista", value: `Desde ${fromExam}`, href: "/examenes-de-vista" },
  { label: "Lentes con armazón", value: `Desde ${fromPackage}`, href: "/pricing" },
  { label: "Lentes y armazones", value: "Ver modelos", href: "/productos" },
  { label: business.neighborhood, value: "Cómo llegar", href: "/ubicacion" },
];
export default function Hero() {
  return <section>
    <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 pb-12 pt-8 sm:px-6 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8 lg:pb-16">
      <div>
        <p className="eyebrow">{business.neighborhood} · {business.city}</p>
        <h1 className="mt-4 font-roots text-[2.9rem] text-ink sm:text-6xl xl:text-7xl">Óptica en Puebla: lentes y <em className="text-navy-900">examen de vista</em></h1>
        <p className="mt-5 max-w-xl text-lg text-ink/75">Lentes graduados con armazón desde <strong className="text-ink">{fromPackage}</strong> y examen de vista desde <strong className="text-ink">{fromExam}</strong>. Te esperamos en {business.neighborhood}.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl("Hola, vi su página web y quiero agendar un examen de vista.")} className="btn-whatsapp"><WhatsAppIcon /><span>Agendar por WhatsApp</span></a>
          <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Cómo llegar a la tienda</a>
        </div>
        <div className="mt-5 min-h-6"><OpenStatus className="text-ink" /></div>
        <p className="mt-1 text-sm text-ink/70">{business.streetAddress} · <Link href="/ubicacion" className="underline underline-offset-4">Dirección y horarios</Link></p>
      </div>
      <div className="relative pb-6">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-sand sm:aspect-[16/11] lg:aspect-[5/6]">
          <Image src="/bety-1.png" alt="Clienta sonriendo con sus lentes nuevos en la tienda L&G OPTICS" fill priority sizes="(max-width: 1023px) calc(100vw - 32px), 600px" className="object-cover" />
        </div>
        <Link href="/pricing" className="absolute bottom-0 left-4 flex items-center gap-3 rounded-2xl bg-white p-2.5 pr-5 shadow-xl shadow-ink/10 sm:left-8">
          <Image src="/glasses/prescription-lenses/glasses-1.png" alt="" width={64} height={64} sizes="64px" className="h-16 w-16 rounded-xl object-cover" />
          <span><span className="block text-xs text-ink/70">Paquetes con armazón</span><span className="block font-semibold text-ink">Desde {fromPackage}</span></span>
        </Link>
      </div>
    </div>
    <ul className="border-y border-ink/10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 lg:px-4">
        {facts.map(fact => <li key={fact.label} className="border-ink/10 odd:border-r [&:nth-child(-n+2)]:border-b lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(-n+2)]:border-b-0">
          <Link href={fact.href} className="block px-4 py-4 hover:bg-cream sm:px-6 sm:py-5"><span className="block text-xs text-ink/70 sm:text-sm">{fact.label}</span><span className="block font-semibold text-ink sm:text-lg">{fact.value} <span aria-hidden="true">→</span></span></Link>
        </li>)}
      </div>
    </ul>
  </section>;
}
