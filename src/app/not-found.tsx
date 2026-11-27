import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { whatsappUrl } from "@/lib/business";

export const metadata = { title: "Página no encontrada | L&G OPTICS", robots: { index: false } };

// Shown for any address that does not exist, so a mistyped or outdated link
// still leads the visitor to the store instead of a dead end.
export default function NotFound() {
  return <section className="py-20 md:py-28 text-center px-5">
    <h1 className="font-roots text-[2.6rem] md:text-6xl text-ink">No encontramos esa página</h1>
    <p className="mt-4 max-w-xl mx-auto text-ink/75">Puede que el enlace haya cambiado. Aquí tienes lo que más buscan nuestros clientes.</p>
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-8">
      <Link href="/" className="btn-secondary">Ir al inicio</Link>
      <Link href="/pricing" className="btn-secondary">Ver paquetes y precios</Link>
      <Link href="/ubicacion" className="btn-secondary">Dirección y horarios</Link>
      <a href={whatsappUrl()} className="btn-whatsapp"><WhatsAppIcon /><span>Escribir por WhatsApp</span></a>
    </div>
  </section>;
}
