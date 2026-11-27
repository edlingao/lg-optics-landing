import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/business";
import { catalog, formatPrice } from "@/lib/catalog";
export const metadata = pageMetadata("/productos", "Lentes y Armazones en Puebla | L&G OPTICS", "Explora lentes graduados, de sol y armazones en Puebla. Consulta opciones, precios y disponibilidad con L&G OPTICS.");
export default function ProductosPage() {
  return <><Breadcrumbs path="/productos" label="Productos" />
    <PageHeader title="Lentes y armazones en Puebla" text="Explora opciones de lentes y estilos de armazón. Consulta una cotización según tu graduación y preferencias."></PageHeader>
    {/* Category tabs: plain text links between two hairlines, as in a shop listing. */}
    <nav aria-label="Categorías de productos" className="mb-8 border-y border-ink/15"><ul className="rail mx-auto max-w-[1400px] justify-start px-5 sm:justify-center sm:gap-4 lg:px-8">{catalog.map(c => <li key={c.id} className="flex-none"><a href={`#${c.id}`} className="block border-b-2 border-transparent px-3 py-4 text-sm font-medium hover:border-ink">{c.name}</a></li>)}</ul></nav>
        <div className="mx-auto max-w-2xl px-5 text-center text-xs text-ink/70"><div><p>Las imágenes muestran ejemplos de estilos. Todos los precios se expresan en pesos mexicanos (MXN) y son precios de entrada. Confirma el modelo disponible, si incluye armazón, los tratamientos y el precio final antes de realizar tu pedido.</p><p className="mt-3">Para opciones con armazón incluido, <Link href="/pricing" className="link">compara nuestros paquetes</Link>. ¿Dudas? <a href={whatsappUrl("Hola, vi sus lentes y armazones en la página y quiero una cotización.")} className="link">Escríbenos por WhatsApp</a>.</p></div></div>
    {catalog.map(c => <section key={c.id} id={c.id} className="scroll-mt-32 py-10 md:py-14"><div className="mx-auto max-w-[1400px] px-5 lg:px-8">
      <h2 className="font-roots text-4xl md:text-5xl">{c.name}</h2><p className="mt-2 mb-6 max-w-2xl text-sm text-ink/70 md:text-base">{c.description}</p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 lg:grid-cols-4">{c.items.map(p => <article key={p.name} className="flex flex-col">
        <div className="relative aspect-square bg-sand"><Image src={p.image} alt={`Ejemplo de ${p.name.toLowerCase()}`} fill quality={90} sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw" className="object-cover" /></div>
        <h3 className="mt-3 text-sm font-medium">{p.name}</h3><p className="text-sm text-ink/70">Desde {formatPrice(p.from)} MXN</p><p className="mt-1 hidden text-sm text-ink/70 md:block">{p.detail}</p>
        <a href={whatsappUrl(`Hola, me interesa cotizar ${p.name}. ¿Qué incluye y qué modelos tienen disponibles?`)} className="link mt-2 inline-flex items-center gap-1.5 self-start py-2 text-sm" aria-label={`Cotizar por WhatsApp: ${p.name}`}><WhatsAppIcon /><span>Cotizar</span></a>
      </article>)}</div>
    </div></section>)}
    <section className="max-w-3xl mx-auto px-5 py-14"><h2 className="font-roots text-4xl text-ink mb-5">Antes de elegir tus lentes</h2><ul className="list-disc pl-5 space-y-3 text-ink/80"><li>Consulta la medida, material y ajuste del armazón.</li><li>Confirma qué incluye el precio y si tu graduación modifica la cotización.</li><li>Pregunta por las condiciones de garantía, adaptación y entrega de tu pedido.</li></ul><div className="flex flex-wrap gap-4 mt-6"><Link href="/pricing" className="link">Comparar paquetes con armazón</Link><Link href="/examenes-de-vista" className="link">Consultar exámenes de vista</Link></div></section>
  </>;
}
