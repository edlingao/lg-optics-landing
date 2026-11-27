import { whatsappUrl } from "@/lib/business";
import { packages } from "@/lib/packages";
import { formatPrice } from "@/lib/catalog";

/** The three packages side by side: price, inclusions and a WhatsApp quote link. */
export default function PackageCards({ heading: Heading = "h3" }: { heading?: "h2" | "h3" }) {
  return <div className="grid border-ink/15 md:grid-cols-3 md:border-l">{packages.map(p => <article key={p.name} className="flex flex-col border-t border-ink/15 py-8 md:border-b md:border-r md:px-8">
    <Heading className="eyebrow">{p.name}</Heading>
    <p className="mt-3 font-roots text-6xl">{formatPrice(p.price)}</p>
    <p className="text-xs text-ink/70">Desde · MXN</p>
    <ul className="my-6 space-y-2 text-sm text-ink/80">{p.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
    <a href={whatsappUrl(`Hola, me interesa el paquete ${p.name}. ¿Pueden confirmar el precio y las inclusiones para mi graduación?`)} className="btn-secondary mt-auto self-start" aria-label={`Cotizar este paquete: ${p.name}`}>Cotizar este paquete</a>
  </article>)}</div>;
}
