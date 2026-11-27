import Image from "next/image";
import Link from "next/link";
import { business, navigation } from "@/lib/business";
const pages = [...navigation, { href: "/contacto", label: "Contacto y citas" }, { href: "/nosotros", label: "Nosotros" }, { href: "/privacidad", label: "Privacidad" }];
export default function Footer() {
  return <footer className="bg-ink pb-24 pt-14 text-sm text-white lg:pb-10">
    <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div><Image src="/LG-OPTICS.png" width={1390} height={780} sizes="130px" className="mb-5 h-auto w-[130px]" alt="L&G OPTICS" />
          <p className="font-roots text-3xl">Ver bien, verse bien, sentirse bien.</p></div>
        <div><h2 className="eyebrow mb-4 !text-white/60">Tienda</h2><nav aria-label="Enlaces del pie de página" className="flex flex-col items-start">
          {pages.map(p => <Link key={p.href} href={p.href} className="py-1.5 underline-offset-4 hover:underline">{p.label}</Link>)}
          <a href="/opinion" target="_blank" rel="noopener noreferrer" className="py-1.5 underline-offset-4 hover:underline">Déjanos tu opinión</a>
        </nav></div>
        <div><h2 className="eyebrow mb-4 !text-white/60">Contacto y horarios</h2><address className="space-y-1.5 not-italic">
          <p><a href={`tel:${business.phone}`} className="underline-offset-4 hover:underline">{business.phoneLabel}</a></p><p><a href={`mailto:${business.email}`} className="underline-offset-4 hover:underline">{business.email}</a></p><p><Link href="/ubicacion" className="underline-offset-4 hover:underline">{business.address}</Link></p>
        </address><div className="mt-4 text-white/70">{business.hours.map(line => <p key={line}>{line}</p>)}</div>
        <nav aria-label="Redes sociales" className="mt-5 flex flex-wrap gap-5">{Object.entries(business.social).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="py-2 capitalize underline underline-offset-4">{name}</a>)}</nav></div>
      </div><p className="mt-10 border-t border-white/20 pt-6 text-xs text-white/60">© {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</p>
    </div>
  </footer>;
}
