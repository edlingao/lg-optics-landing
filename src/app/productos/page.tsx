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
    <PageHeader title="Lentes y armazones en Puebla" text="Explora opciones de lentes y estilos de armazón. Consulta una cotización según tu graduación y preferencias."><a href={whatsappUrl("Hola, vi sus lentes y armazones en la página y quiero una cotización.")} className="btn-whatsapp"><WhatsAppIcon /><span>Cotizar por WhatsApp</span></a>{catalog.map(c => <a key={c.id} href={`#${c.id}`} className="btn-secondary">{c.name}</a>)}</PageHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-sm text-ink/70"><div className="max-w-3xl"><p>Las imágenes muestran ejemplos de estilos. Todos los precios se expresan en pesos mexicanos (MXN) y son precios de entrada. Confirma el modelo disponible, si incluye armazón, los tratamientos y el precio final antes de realizar tu pedido.</p><p className="mt-3">Para opciones con armazón incluido, <Link href="/pricing" className="link">compara nuestros paquetes</Link>.</p></div></div>
    {catalog.map((c, index) => <section key={c.id} id={c.id} className={`py-12 md:py-16 scroll-mt-24 ${index % 2 ? 'bg-sand' : ''}`}><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-roots text-4xl md:text-5xl text-ink">{c.name}</h2><p className="max-w-2xl text-ink/75 mt-3 mb-8">{c.description}</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">{c.items.map(p => <article key={p.name} className="tile overflow-hidden flex flex-col">
        <div className="relative aspect-[4/3] bg-sand"><Image src={p.image} alt={`Ejemplo de ${p.name.toLowerCase()}`} fill sizes="(max-width: 1023px) 50vw, 400px" className="object-cover" /></div>
        <div className="p-3 sm:p-6 flex flex-col flex-1"><h3 className="font-semibold text-ink sm:text-xl">{p.name}</h3><p className="font-roots text-2xl sm:text-3xl text-navy-900 my-1 sm:my-2">Desde {formatPrice(p.from)} <span className="hidden sm:inline font-sans text-sm font-semibold text-ink/70">MXN</span></p><p className="hidden sm:block text-ink/75 mb-6">{p.detail}</p><a href={whatsappUrl(`Hola, me interesa cotizar ${p.name}. ¿Qué incluye y qué modelos tienen disponibles?`)} className="btn-primary mt-auto max-sm:mt-3 max-sm:!min-h-11 max-sm:!px-3 max-sm:text-sm" aria-label={`Cotizar por WhatsApp: ${p.name}`}><WhatsAppIcon /><span>Cotizar<span className="hidden sm:inline"> por WhatsApp</span></span></a></div>
      </article>)}</div>
    </div></section>)}
    <section className="max-w-3xl mx-auto px-5 py-14"><h2 className="font-roots text-4xl text-ink mb-5">Antes de elegir tus lentes</h2><ul className="list-disc pl-5 space-y-3 text-ink/80"><li>Consulta la medida, material y ajuste del armazón.</li><li>Confirma qué incluye el precio y si tu graduación modifica la cotización.</li><li>Pregunta por las condiciones de garantía, adaptación y entrega de tu pedido.</li></ul><div className="flex flex-wrap gap-4 mt-6"><Link href="/pricing" className="link">Comparar paquetes con armazón</Link><Link href="/examenes-de-vista" className="link">Consultar exámenes de vista</Link></div></section>
  </>;
}
