import Link from "next/link";
import PackageCards from "./PackageCards";
export default function HomePackages() {
  return <section className="mx-auto max-w-[1400px] px-5 py-14 md:py-20 lg:px-8">
    <div className="text-center"><h2 className="font-roots text-4xl md:text-5xl">Lentes graduados con armazón incluido</h2>
      <p className="mt-2 text-sm text-ink/70 md:text-base">Precios en MXN. El examen de vista está incluido.</p></div>
    <div className="mt-8 md:mt-12"><PackageCards /></div>
    <p className="mt-8 text-center"><Link href="/pricing" className="link text-sm">Comparar paquetes</Link></p>
  </section>;
}
