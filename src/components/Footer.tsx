import Image from "next/image";
import Link from "next/link";
import { business, navigation } from "@/lib/business";
export default function Footer() {
  return <footer className="bg-navy-900 text-white pt-12 pb-28 md:pb-12 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div><Image src="/LG-OPTICS.png" width={1390} height={780} sizes="150px" className="w-[150px] h-auto mb-4" alt="L&G OPTICS" />
          <p className="font-roots text-xl">Ver bien, verse bien, sentirse bien.</p><p className="text-gray-200 mt-3">Lentes y exámenes de vista en Nueva Antequera, Puebla.</p></div>
        <div><h2 className="font-bold text-lg mb-3">Enlaces</h2><nav aria-label="Enlaces del pie de página" className="flex flex-col items-start gap-2 text-gray-200">
          <Link href="/">Inicio</Link>{navigation.map(p => <Link key={p.href} href={p.href}>{p.label}</Link>)}<Link href="/nosotros">Nosotros</Link><Link href="/privacidad">Privacidad</Link>
        </nav></div>
        <div><h2 className="font-bold text-lg mb-3">Contacto y horarios</h2><address className="not-italic text-gray-200 space-y-2">
          <p><a href={`tel:${business.phone}`}>{business.phoneLabel}</a></p><p><a href={`mailto:${business.email}`}>{business.email}</a></p><p><Link href="/ubicacion">{business.address}</Link></p>
        </address><div className="mt-4 text-sm text-gray-200">{business.hours.map(line => <p key={line}>{line}</p>)}</div>
        <nav aria-label="Redes sociales" className="flex flex-wrap gap-4 mt-5 text-sm">{Object.entries(business.social).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="underline capitalize py-2">{name}</a>)}</nav></div>
      </div><p className="border-t border-white/25 mt-8 pt-6 text-sm text-gray-200">© {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</p>
    </div>
  </footer>;
}
