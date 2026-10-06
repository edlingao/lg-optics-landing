import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";
import { business, whatsappUrl } from "@/lib/business";
export default function UbicacionPage() {
  return <>
    <section className="bg-navy-900 text-white py-12 md:py-16 text-center px-5"><h1 className="font-roots text-3xl md:text-5xl">Óptica en Nueva Antequera, Puebla</h1><p className="mt-5 text-blue-50">{business.address}</p><a href={business.mapsUrl} className="btn-outline-white inline-block mt-6" target="_blank" rel="noopener noreferrer">Abrir ubicación en Google Maps</a></section>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10">
      <div><h2 className="font-roots text-3xl text-navy-900 mb-5">Dirección y horarios</h2><address className="not-italic text-gray-700">{business.streetAddress}<br />{business.neighborhood}, {business.city} {business.postalCode}</address><div className="mt-6">{business.hours.map(line => <p key={line}>{line}</p>)}</div><p className="text-sm text-gray-600 mt-2">Horario de Puebla. Consulta disponibilidad en días festivos.</p><div className="flex flex-wrap gap-3 mt-6"><Link href="/contacto" className="btn-primary">Agendar visita</Link><a href={`tel:${business.phone}`} className="btn-secondary">{business.phoneLabel}</a></div></div>
      <GoogleMap height={360} />
    </section>
    <section className="bg-gray-50 py-14"><div className="max-w-3xl mx-auto px-5"><h2 className="font-roots text-3xl text-navy-900 mb-5">Planea tu visita</h2><p className="text-gray-700">Abre nuestra ubicación en Google Maps para consultar una ruta desde tu punto de partida. Si necesitas indicaciones, escríbenos antes de salir.</p><p className="mt-4 text-gray-700">Consulta con el equipo las opciones de estacionamiento y acceso al local. Confirma tu cita antes de desplazarte.</p><a href={whatsappUrl("Hola, necesito indicaciones para llegar a L&G OPTICS.")} className="btn-whatsapp inline-flex mt-6"><WhatsAppIcon /><span>Pedir indicaciones por WhatsApp</span></a></div></section>
  </>;
}
