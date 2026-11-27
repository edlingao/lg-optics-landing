import Image from "next/image";
import Link from "next/link";
import { catalog, formatPrice } from "@/lib/catalog";

// The first three examples of each category, with the same entry prices as /productos.
const products = catalog.flatMap(category => category.items.slice(0, 3).map(item => ({ ...item, href: `/productos#${category.id}` })));

export default function FeaturedProducts() {
  return <section className="py-14 md:py-20">
    <div className="px-5 text-center"><h2 className="font-roots text-4xl md:text-5xl">Encuentra tus próximos lentes</h2>
      <p className="mt-2 text-sm text-ink/70 md:text-base">La disponibilidad se confirma en tienda.</p></div>
    <ul className="rail mt-8 scroll-px-5 px-5 md:mt-10 lg:scroll-px-8 lg:px-8" tabIndex={0} aria-label="Ejemplos de lentes">{products.map(p => <li key={p.name} className="w-[62%] flex-none snap-start sm:w-[38%] lg:w-[23.5%]">
      <Link href={p.href} className="group block">
        <div className="relative aspect-square overflow-hidden bg-sand"><Image src={p.image} alt={`Ejemplo de ${p.name.toLowerCase()}`} fill quality={90} sizes="(max-width: 639px) 62vw, (max-width: 1023px) 38vw, 24vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
        <h3 className="mt-3 text-sm font-medium">{p.name}</h3>
        <p className="text-sm text-ink/70">Desde {formatPrice(p.from)}</p>
      </Link>
    </li>)}</ul>
    <p className="mt-8 text-center"><Link href="/productos" className="btn-primary">Ver todos los productos</Link></p>
  </section>;
}
