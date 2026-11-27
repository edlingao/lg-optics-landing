import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import PackageCards from "@/components/PackageCards";
import { pageMetadata } from "@/lib/seo";
import { packages, packageFaqs } from "@/lib/packages";
import { formatPrice } from "@/lib/catalog";
export const metadata = pageMetadata("/pricing", "Paquetes de Lentes desde $1,900 | L&G OPTICS Puebla", "Compara paquetes de lentes con armazón desde $1,900 MXN en Puebla. Consulta inclusiones, condiciones y disponibilidad con L&G OPTICS.");
// Tight cells on phones so all four columns, price included, fit without sideways scrolling.
const cell = "p-2 sm:p-4 align-top";
export default function Pricing() {
  return <><Breadcrumbs path="/pricing" label="Paquetes" />
    <PageHeader title="Paquetes de lentes en Puebla" text="Compara opciones con armazón de línea. Confirma tu cotización de acuerdo con la receta, el armazón y los tratamientos que elijas." />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h2 className="sr-only">Elige tu paquete</h2><PackageCards />
      <p className="mt-6 text-sm text-ink/70">Precios en MXN. El examen de vista está incluido. Verifica con el equipo los límites de graduación, disponibilidad de armazón y cualquier cambio de material o tratamiento antes de pagar.</p>
    </section>
    <section className="bg-sand py-12"><div className="max-w-5xl mx-auto px-5"><h2 className="font-roots text-4xl text-ink mb-6">Compara las opciones</h2><div className="overflow-x-auto border border-ink/10 bg-white"><table className="w-full text-left text-xs sm:text-sm"><caption className="sr-only">Comparación de paquetes, materiales y precio de entrada</caption><thead className="bg-ink text-white"><tr><th scope="col" className={cell}>Paquete</th><th scope="col" className={cell}>Material</th><th scope="col" className={cell}>Armazón</th><th scope="col" className={cell}>Desde (MXN)</th></tr></thead><tbody>{packages.map(p => <tr key={p.name} className="border-b border-ink/10"><th scope="row" className={cell}>{p.name}</th><td className={cell}>{p.material}</td><td className={cell}>De línea</td><td className={`${cell} font-semibold whitespace-nowrap`}>{formatPrice(p.price)}</td></tr>)}</tbody></table></div><div className="flex flex-wrap gap-5 mt-6"><Link href="/productos" className="link">Explorar lentes y armazones</Link><Link href="/examenes-de-vista" className="link">Consultar exámenes de vista</Link></div></div></section>
    <section className="max-w-3xl mx-auto px-5 py-14"><h2 className="font-roots text-4xl text-ink mb-6">Preguntas sobre los paquetes</h2>{packageFaqs.map(faq => <details key={faq.question} className="tile !p-5 mb-3"><summary className="font-semibold text-ink cursor-pointer">{faq.question}</summary><p className="text-ink/80 mt-4">{faq.answer}</p></details>)}</section>
  </>;
}
