import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappUrl } from "@/lib/business";
import { packages } from "@/lib/packages";
import { formatPrice } from "@/lib/catalog";

/** The three packages with their price, inclusions and a WhatsApp quote button. */
export default function PackageCards({ heading: Heading = "h3" }: { heading?: "h2" | "h3" }) {
  return <div className="grid gap-5 md:grid-cols-3">{packages.map(p => <article key={p.name} className="tile flex flex-col p-7">
    <Heading className="font-roots text-3xl text-ink">{p.name}</Heading>
    <p className="mt-4 text-sm text-ink/70">Desde</p>
    <p className="font-roots text-5xl text-navy-900">{formatPrice(p.price)} <span className="font-sans text-sm font-semibold text-ink/70">MXN</span></p>
    <ul className="my-6 space-y-3 border-t border-ink/10 pt-6 text-ink/80">{p.features.map(feature => <li key={feature} className="flex gap-3">
      <svg aria-hidden="true" className="mt-1 h-4 w-4 flex-shrink-0 text-navy-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>{feature}
    </li>)}</ul>
    <a href={whatsappUrl(`Hola, me interesa el paquete ${p.name}. ¿Pueden confirmar el precio y las inclusiones para mi graduación?`)} className="btn-primary mt-auto" aria-label={`Cotizar este paquete: ${p.name}`}><WhatsAppIcon /><span>Cotizar este paquete</span></a>
  </article>)}</div>;
}
