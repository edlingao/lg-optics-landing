import Image from "next/image";
import Link from "next/link";
import { catalog, formatPrice } from "@/lib/catalog";

// Two examples from each category of the catalogue, with the same entry prices as /productos.
const products = catalog.flatMap(category => category.items.slice(0, 2).map(item => ({ ...item, category: category.name, href: `/productos#${category.id}` })));

export default function FeaturedProducts() {
  return <section className="py-16 md:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><h2 className="font-roots text-4xl text-ink md:text-5xl">Encuentra tus próximos lentes</h2>
        <p className="mt-3 max-w-xl text-ink/75">Explora las categorías y consulta modelos, precios e inclusiones. La disponibilidad se confirma en tienda.</p></div>
      <Link href="/productos" className="link">Ver todos los productos</Link>
    </div>
    <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-10">{products.map(p => <li key={p.name}>
      <Link href={p.href} className="group block">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-sand"><Image src={p.image} alt={`Ejemplo de ${p.name.toLowerCase()}`} fill sizes="(max-width: 767px) 50vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
        <p className="mt-3 text-xs text-ink/70 sm:text-sm">{p.category}</p>
        <h3 className="font-semibold text-ink sm:text-lg">{p.name}</h3>
        <p className="text-sm text-ink/75 sm:text-base">Desde {formatPrice(p.from)}</p>
      </Link>
    </li>)}</ul>
  </div></section>;
}
