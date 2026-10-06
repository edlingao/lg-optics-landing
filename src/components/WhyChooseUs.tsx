import Link from "next/link";
const features = [
  { title: "Opciones para tu graduación", text: "Conoce alternativas de lentes monofocales, bifocales y progresivos. Consulta cuál corresponde a tu receta." },
  { title: "Una cotización a tu medida", text: "Pregunta qué incluye tu elección de armazón, materiales y tratamientos antes de realizar tu pedido." },
  { title: "Visítanos en Nueva Antequera", text: "Prueba los armazones en persona y consulta la disponibilidad de modelos en nuestra tienda de Puebla." },
];
export default function WhyChooseUs() {
  return <section className="py-16 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-roots text-3xl md:text-4xl text-navy-900 text-center mb-10">Elige tus lentes con información clara</h2>
    <div className="grid md:grid-cols-3 gap-6">{features.map(item => <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-7">
      <h3 className="text-xl font-semibold text-navy-900 mb-3">{item.title}</h3><p className="text-gray-700">{item.text}</p>
    </div>)}</div><p className="text-center mt-8"><Link href="/nosotros" className="underline font-semibold text-navy-900">Conoce L&amp;G OPTICS</Link></p>
  </div></section>;
}
