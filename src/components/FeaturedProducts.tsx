import Image from "next/image";
import Link from "next/link";
const products = [
  { name: "Lentes progresivos", image: "/glasses/prescription-lenses/glasses-1.png", text: "Consulta opciones para diferentes distancias de visión.", href: "/productos#prescription" },
  { name: "Lentes de sol", image: "/glasses/sunglasses/sunglasses-1.png", text: "Explora estilos y pregunta por las características de cada modelo.", href: "/productos#sunglasses" },
  { name: "Lentes con filtro azul", image: "/glasses/blue-filter-lenses/blue-1.png", text: "Conoce los materiales y tratamientos disponibles para tus lentes.", href: "/productos#blue-light" },
];
export default function FeaturedProducts() {
  return <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-roots text-3xl md:text-4xl text-navy-900 text-center">Encuentra tus próximos lentes</h2>
    <p className="max-w-2xl mx-auto text-center text-gray-700 mt-4 mb-10">Explora las categorías y consulta modelos, precios e inclusiones. La disponibilidad se confirma en tienda.</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{products.map(p => <article key={p.name} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="relative h-56 bg-gray-50"><Image src={p.image} alt={p.name} fill sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 45vw, 380px" className="object-contain p-4" /></div>
      <div className="p-6"><h3 className="font-roots text-xl text-navy-900 mb-3">{p.name}</h3><p className="text-gray-700 mb-4">{p.text}</p><Link href={p.href} className="underline text-navy-900 font-semibold">Ver {p.name.toLowerCase()}</Link></div>
    </article>)}</div><div className="text-center mt-8"><Link href="/productos" className="btn-primary inline-block">Ver todos los productos</Link></div>
  </div></section>;
}
