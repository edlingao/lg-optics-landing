import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { whatsappUrl } from "@/lib/business";

export const metadata = { title: "Página no encontrada | L&G OPTICS", robots: { index: false } };

// Shown for any address that does not exist, so a mistyped or outdated link
// still leads the visitor to the store instead of a dead end.
export default function NotFound() {
  return <section className="bg-navy-900 text-white py-20 md:py-28 text-center px-5">
    <h1 className="font-roots text-3xl md:text-5xl">No encontramos esa página</h1>
    <p className="mt-4 max-w-xl mx-auto text-blue-50">Puede que el enlace haya cambiado. Aquí tienes lo que más buscan nuestros clientes.</p>
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-8">
      <Link href="/" className="btn-outline-white">Ir al inicio</Link>
      <Link href="/pricing" className="btn-outline-white">Ver paquetes y precios</Link>
      <Link href="/ubicacion" className="btn-outline-white">Dirección y horarios</Link>
      <a href={whatsappUrl()} className="btn-whatsapp"><WhatsAppIcon /><span>Escribir por WhatsApp</span></a>
    </div>
  </section>;
}
