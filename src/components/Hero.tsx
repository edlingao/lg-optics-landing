import Image from "next/image";
import Link from "next/link";
import { business, whatsappUrl } from "@/lib/business";
import { packages } from "@/lib/packages";
import { formatPrice } from "@/lib/catalog";
const fromPackage = formatPrice(Math.min(...packages.map(p => p.price)));
export default function Hero() {
  return <section>
    {/* The photos are square, so every box here is square too: nothing is cropped or enlarged. */}
    <div className="mx-auto grid max-w-[1600px] md:aspect-[2/1] md:grid-cols-2">
      <div className="relative aspect-square md:order-2 md:aspect-auto"><Image src="/bety-2.png" alt="Clienta con armazón azul claro en la tienda L&G OPTICS" fill priority quality={90} sizes="(max-width: 767px) 100vw, (max-width: 1600px) 50vw, 800px" className="object-cover" /></div>
      <div className="relative flex items-center bg-ink px-5 py-10 text-white md:p-0">
        <Image src="/glasses/sunglasses/sunglasses-6.png" alt="" fill priority quality={90} sizes="(max-width: 767px) 1px, (max-width: 1600px) 50vw, 800px" className="hidden object-cover md:block" />
        <div className="absolute inset-0 hidden bg-black/35 md:block" />
        <div className="relative w-full md:px-8 md:text-center lg:px-16">
          <h1><span className="eyebrow block !text-white">Óptica en Puebla · Lentes y armazones</span>
            <span className="mt-3 block font-roots text-[3.4rem] leading-[0.95] sm:text-7xl md:text-5xl lg:text-6xl xl:text-[5.5rem]">Ver bien, <em>verse bien,</em> sentirse bien.</span></h1>
          <p className="mt-4 text-base text-white/90 md:mx-auto md:max-w-md">Lentes graduados con armazón desde {fromPackage}, con examen de vista incluido.</p>
          <div className="mt-6 flex gap-3 md:justify-center">
            <Link href="/productos" className="btn-white flex-1 md:flex-none">Ver lentes</Link>
            <a href={whatsappUrl("Hola, vi su página web y quiero agendar un examen de vista.")} className="btn-outline-white flex-1 md:flex-none">Agendar examen</a>
          </div>
        </div>
      </div>
    </div>
    <p className="bg-sand px-4 py-3 text-center text-xs text-ink/80 sm:text-sm">
      <Link href="/examenes-de-vista" className="underline-offset-4 hover:underline">Examen de vista incluido</Link><span aria-hidden="true" className="mx-2">·</span>
      <Link href="/pricing" className="underline-offset-4 hover:underline">Paquetes con armazón desde {fromPackage}</Link><span aria-hidden="true" className="mx-2 hidden sm:inline">·</span>
      <Link href="/ubicacion" className="hidden underline-offset-4 hover:underline sm:inline">{business.neighborhood}, {business.city}</Link>
    </p>
  </section>;
}
