import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import GoogleMap from "@/components/GoogleMap";
import { business, whatsappUrl } from "@/lib/business";
const faqs = [
  ["¿Cómo solicito una cita?", "Escríbenos por WhatsApp, llama o envía el formulario. Nuestro equipo te indicará los horarios disponibles y confirmará tu cita."],
  ["¿Qué información debo enviar?", "Tu nombre, un teléfono donde podamos localizarte y el servicio que te interesa. No envíes información médica sensible por este formulario."],
  ["¿Qué debo llevar a mi visita?", "Trae tus lentes actuales y tu receta si cuentas con una. Pregunta al agendar si necesitas llevar algo más para tu tipo de examen."],
  ["¿Puedo usar el formulario para una urgencia?", "Este formulario y WhatsApp se utilizan para consultas y citas; no son canales de atención de urgencias. Si necesitas atención urgente, acude a un servicio médico de urgencias."],
  ["¿Cuándo estarán listos mis lentes?", "El plazo depende del material, tratamiento y disponibilidad. Confirma con el equipo la fecha estimada antes de realizar tu pedido."],
];
export default function ContactoPage() {
  return <>
    <PageHeader title="Contacto y citas en Puebla" text="Consulta disponibilidad de exámenes, lentes y armazones con nuestro equipo."><a href={whatsappUrl("Hola, vi su página web y quiero agendar una cita.")} className="btn-whatsapp"><WhatsAppIcon /><span>Escribir por WhatsApp</span></a><a href={`tel:${business.phone}`} className="btn-secondary">Llamar: {business.phoneLabel}</a></PageHeader>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-10">
      <section className="tile p-6 md:p-8"><h2 className="font-roots text-4xl text-ink mb-5">Agenda tu visita</h2><ContactForm /></section>
      <section><h2 className="font-roots text-4xl text-ink mb-5">Visítanos</h2><p className="text-ink/80 mb-5">{business.address}</p><GoogleMap height={300} /><a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block mt-5">Cómo llegar</a><h3 className="text-lg font-semibold text-ink mt-6 mb-2">Horario de atención</h3>{business.hours.map(line => <p key={line}>{line}</p>)}<p className="mt-4"><a href={`mailto:${business.email}`} className="link">{business.email}</a></p><Link href="/ubicacion" className="link inline-block mt-3">Ver dirección y cómo llegar</Link></section>
    </div>
    <section className="bg-sand py-14"><div className="max-w-3xl mx-auto px-5"><h2 className="font-roots text-4xl text-ink mb-6">Preguntas frecuentes</h2>{faqs.map(([question, answer]) => <details key={question} className="tile !p-5 mb-3"><summary className="font-semibold text-ink cursor-pointer">{question}</summary><p className="text-ink/80 mt-4">{answer}</p></details>)}</div></section>
  </>;
}
