import Link from "next/link";
import ContactForm from "@/components/ContactForm";
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
    <section className="bg-navy-900 text-white py-12 md:py-16 text-center px-5"><h1 className="font-roots text-3xl md:text-5xl">Contacto y citas en Puebla</h1><p className="mt-4 max-w-2xl mx-auto text-blue-50">Consulta disponibilidad de exámenes, lentes y armazones con nuestro equipo.</p><div className="flex flex-wrap gap-3 justify-center mt-6"><a href={`tel:${business.phone}`} className="btn-outline-white">Llamar: {business.phoneLabel}</a><a href={whatsappUrl()} className="btn-whatsapp">WhatsApp</a></div></section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-10">
      <section className="border border-gray-200 rounded-2xl p-6 md:p-8"><h2 className="font-roots text-3xl text-navy-900 mb-5">Envíanos un mensaje</h2><ContactForm /></section>
      <section><h2 className="font-roots text-3xl text-navy-900 mb-5">Visítanos</h2><p className="text-gray-700 mb-5">{business.address}</p><GoogleMap height={300} /><h3 className="text-xl font-semibold text-navy-900 mt-6 mb-2">Horario de atención</h3>{business.hours.map(line => <p key={line}>{line}</p>)}<p className="mt-4"><a href={`mailto:${business.email}`} className="underline">{business.email}</a></p><Link href="/ubicacion" className="underline inline-block mt-3">Ver dirección y cómo llegar</Link></section>
    </div>
    <section className="bg-gray-50 py-14"><div className="max-w-3xl mx-auto px-5"><h2 className="font-roots text-3xl text-navy-900 mb-6">Preguntas frecuentes</h2>{faqs.map(([question, answer]) => <details key={question} className="bg-white border border-gray-200 rounded-xl p-5 mb-3"><summary className="font-semibold text-navy-900 cursor-pointer">{question}</summary><p className="text-gray-700 mt-4">{answer}</p></details>)}</div></section>
  </>;
}
