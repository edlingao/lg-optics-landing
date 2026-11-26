import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";
import { catalog, formatPrice } from "@/lib/catalog";
export const metadata = pageMetadata("/productos", "Lentes y Armazones en Puebla | L&G OPTICS", "Explora lentes graduados, de sol y armazones en Puebla. Consulta opciones, precios y disponibilidad con L&G OPTICS.");
export default function ProductosPage() {
  return <><Breadcrumbs path="/productos" label="Productos" />
    <section className="bg-navy-900 text-white py-12 md:py-16 px-5 text-center"><h1 className="font-roots text-3xl md:text-5xl">Lentes y armazones en Puebla</h1><p className="text-blue-50 max-w-2xl mx-auto mt-5">Explora opciones de lentes y estilos de armazón. Consulta una cotización según tu graduación y preferencias.</p><Link href="/contacto?servicio=lentes" className="btn-outline-white inline-block mt-6">Solicitar cotización</Link></section>
    <nav aria-label="Categorías de lentes" className="flex flex-wrap justify-center gap-3 px-5 py-6 border-b border-gray-200">{catalog.map(c => <a key={c.id} href={`#${c.id}`} className="btn-secondary text-sm">{c.name}</a>)}</nav>
    <div className="max-w-3xl mx-auto px-5 pt-8 text-gray-700"><p>Las imágenes muestran ejemplos de estilos. Todos los precios se expresan en pesos mexicanos (MXN) y son precios de entrada. Confirma el modelo disponible, si incluye armazón, los tratamientos y el precio final antes de realizar tu pedido.</p><p className="mt-3">Para opciones con armazón incluido, <Link href="/pricing" className="underline text-navy-900">compara nuestros paquetes</Link>.</p></div>
    {catalog.map((c, index) => <section key={c.id} id={c.id} className={`py-14 scroll-mt-24 ${index % 2 ? 'bg-white' : 'bg-gray-50'}`}><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-roots text-3xl md:text-4xl text-navy-900 text-center">{c.name}</h2><p className="max-w-2xl mx-auto text-center text-gray-700 mt-4 mb-8">{c.description}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{c.items.map(p => <article key={p.name} className="rounded-2xl bg-white border border-gray-200 overflow-hidden flex flex-col">
        <div className="relative h-56 bg-gray-50"><Image src={p.image} alt={`Ejemplo de ${p.name.toLowerCase()}`} fill sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 45vw, 380px" className="object-contain p-6" /></div>
        <div className="p-6 flex flex-col flex-1"><h3 className="text-xl font-semibold text-navy-900">{p.name}</h3><p className="text-2xl font-semibold text-navy-900 my-3">Desde {formatPrice(p.from)} <span className="text-sm">MXN</span></p><p className="text-gray-700 mb-6">{p.detail}</p><a href={whatsappUrl(`Hola, me interesa cotizar ${p.name}. ¿Qué incluye y qué modelos tienen disponibles?`)} className="btn-primary text-center mt-auto inline-flex items-center justify-center gap-2" aria-label={`Cotizar por WhatsApp: ${p.name}`}><WhatsAppIcon /><span>Cotizar por WhatsApp</span></a></div>
      </article>)}</div>
    </div></section>)}
    <section className="max-w-3xl mx-auto px-5 py-14"><h2 className="font-roots text-3xl text-navy-900 mb-5">Antes de elegir tus lentes</h2><ul className="list-disc pl-5 space-y-3 text-gray-700"><li>Consulta la medida, material y ajuste del armazón.</li><li>Confirma qué incluye el precio y si tu graduación modifica la cotización.</li><li>Pregunta por las condiciones de garantía, adaptación y entrega de tu pedido.</li></ul><div className="flex flex-wrap gap-4 mt-6"><Link href="/pricing" className="underline text-navy-900">Comparar paquetes con armazón</Link><Link href="/examenes-de-vista" className="underline text-navy-900">Consultar exámenes de vista</Link></div></section>
  </>;
}
