import Link from "next/link";
import PackageCards from "./PackageCards";
export default function HomePackages() {
  return <section className="bg-sand py-16 md:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><p className="eyebrow">Paquetes</p><h2 className="mt-3 font-roots text-4xl text-ink md:text-5xl">Lentes graduados con armazón incluido</h2></div>
      <Link href="/pricing" className="link">Comparar paquetes</Link>
    </div>
    <div className="mt-10"><PackageCards /></div>
    <p className="mt-6 text-sm text-ink/70">Precios en MXN. El examen de vista se cotiza por separado. Confirma tu cotización de acuerdo con la receta, el armazón y los tratamientos que elijas.</p>
  </div></section>;
}
