import Image from "next/image";
import Link from "next/link";
import { business, navigation } from "@/lib/business";
export default function Footer() {
  return <footer className="bg-navy-950 pb-28 pt-14 text-white md:pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div><Image src="/LG-OPTICS.png" width={1390} height={780} sizes="150px" className="mb-5 h-auto w-[150px]" alt="L&G OPTICS" />
          <p className="font-roots text-3xl">Ver bien, verse bien, sentirse bien.</p><p className="mt-3 text-blue-100">Lentes y exámenes de vista en Nueva Antequera, Puebla.</p></div>
        <div><h2 className="eyebrow mb-4 !text-blue-200">Enlaces</h2><nav aria-label="Enlaces del pie de página" className="flex flex-col items-start text-blue-50">
          {[{ href: "/", label: "Inicio" }, ...navigation, { href: "/nosotros", label: "Nosotros" }, { href: "/privacidad", label: "Privacidad" }].map(p => <Link key={p.href} href={p.href} className="py-1.5 underline-offset-4 hover:underline">{p.label}</Link>)}
          <a href="/opinion" target="_blank" rel="noopener noreferrer" className="py-1.5 underline-offset-4 hover:underline">Déjanos tu opinión</a>
        </nav></div>
        <div><h2 className="eyebrow mb-4 !text-blue-200">Contacto y horarios</h2><address className="space-y-2 not-italic text-blue-50">
          <p><a href={`tel:${business.phone}`} className="underline-offset-4 hover:underline">{business.phoneLabel}</a></p><p><a href={`mailto:${business.email}`} className="underline-offset-4 hover:underline">{business.email}</a></p><p><Link href="/ubicacion" className="underline-offset-4 hover:underline">{business.address}</Link></p>
        </address><div className="mt-4 text-sm text-blue-100">{business.hours.map(line => <p key={line}>{line}</p>)}</div>
        <nav aria-label="Redes sociales" className="mt-5 flex flex-wrap gap-2 text-sm">{Object.entries(business.social).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-4 py-2 capitalize hover:bg-white hover:text-navy-950">{name}</a>)}</nav></div>
      </div><p className="mt-10 border-t border-white/20 pt-6 text-sm text-blue-100">© {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</p>
    </div>
  </footer>;
}
