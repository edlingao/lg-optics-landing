import Link from "next/link";
import { business } from "@/lib/business";
import JsonLd from "./JsonLd";

export default function Breadcrumbs({ label, path }: { label: string; path: string }) {
  return <>
    <nav aria-label="Ruta de navegación" className="border-b border-ink/10">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap gap-2 text-sm text-ink/70">
        <li><Link href="/" className="underline underline-offset-4 hover:text-navy-900">Inicio</Link></li>
        <li aria-hidden="true">/</li><li aria-current="page">{label}</li>
      </ol>
    </nav>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${business.url}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${business.url}${path}` },
    ] }} />
  </>;
}
