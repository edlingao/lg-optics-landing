import Image from "next/image";
import Link from "next/link";
const categories = [
  { label: "Ópticos", href: "/productos#prescription", image: "/glasses/prescription-lenses/glasses-9.png" },
  { label: "Sol", href: "/productos#sunglasses", image: "/glasses/sunglasses/sunglasses-3.png" },
  { label: "Filtro azul", href: "/productos#blue-light", image: "/glasses/blue-filter-lenses/blue-3.png" },
];
export default function HomeCategories() {
  return <section aria-label="Categorías" className="grid gap-1 px-1 md:grid-cols-3">{categories.map(c => <Link key={c.label} href={c.href} className="group relative block aspect-square overflow-hidden bg-sand">
    <Image src={c.image} alt="" fill quality={90} sizes="(max-width: 767px) 100vw, 34vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 pt-16 text-white md:p-7 md:pt-20"><span className="block font-roots text-4xl md:text-5xl">{c.label}</span><span className="text-sm underline underline-offset-4">Ver modelos</span></span>
  </Link>)}</section>;
}
