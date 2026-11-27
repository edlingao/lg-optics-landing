import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/nosotros", "Conoce L&G OPTICS | Óptica en Puebla", "Conoce L&G OPTICS en Nueva Antequera, Puebla. Visita nuestra tienda, explora armazones y consulta opciones para tus lentes.");
export default function NosotrosPage() {
  return <><Breadcrumbs path="/nosotros" label="Nosotros" /><section className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-2 gap-10 items-start">
    <div><h1 className="font-roots text-[2.6rem] md:text-6xl text-ink mb-6">Conoce L&amp;G OPTICS</h1><p className="text-lg text-ink/80">Somos una óptica en {business.neighborhood}, Puebla. Puedes visitarnos para probar armazones, consultar opciones de lentes y solicitar un examen de vista.</p><h2 className="font-roots text-3xl text-ink mt-8 mb-3">Una elección para tu día a día</h2><p className="text-ink/80">Nuestra misión es ayudarte a elegir lentes con información clara sobre materiales, tratamientos e inclusiones. Comparte con el equipo tus preferencias y consulta la disponibilidad antes de hacer tu pedido.</p><h2 className="font-roots text-3xl text-ink mt-8 mb-3">Visítanos en Puebla</h2><p>{business.address}</p><div className="flex flex-wrap gap-3 mt-6"><Link href="/ubicacion" className="btn-primary">Cómo llegar</Link><Link href="/contacto" className="btn-secondary">Hablar con el equipo</Link></div></div>
    <Image src="/optica2.jpeg" width={900} height={1600} sizes="(max-width: 767px) calc(100vw - 40px), 500px" alt="Exhibidor de armazones en la tienda L&G OPTICS" className="w-full max-h-[600px] object-cover" />
  </section></>;
}
