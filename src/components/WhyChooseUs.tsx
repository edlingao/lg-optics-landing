import Link from "next/link";
const features = [
  { title: "Opciones para tu graduación", text: "Conoce alternativas de lentes monofocales, bifocales y progresivos. Consulta cuál corresponde a tu receta." },
  { title: "Una cotización a tu medida", text: "Pregunta qué incluye tu elección de armazón, materiales y tratamientos antes de realizar tu pedido." },
  { title: "Visítanos en Nueva Antequera", text: "Prueba los armazones en persona y consulta la disponibilidad de modelos en nuestra tienda de Puebla." },
];
export default function WhyChooseUs() {
  return <section className="bg-navy-900 py-16 text-white md:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="max-w-2xl font-roots text-4xl md:text-5xl">Elige tus lentes con información clara</h2>
    <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">{features.map((item, index) => <li key={item.title} className="border-t border-white/30 pt-5">
      <span aria-hidden="true" className="font-roots text-4xl text-butter">{index + 1}</span>
      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3><p className="mt-2 text-blue-100">{item.text}</p>
    </li>)}</ol>
    <p className="mt-10"><Link href="/nosotros" className="font-semibold underline underline-offset-4">Conoce L&amp;G OPTICS</Link></p>
  </div></section>;
}
