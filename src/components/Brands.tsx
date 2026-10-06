import Link from "next/link";
export default function Brands() {
  return <section className="py-12 bg-gray-50"><div className="max-w-3xl mx-auto px-5 text-center">
    <h2 className="font-roots text-3xl text-navy-900">¿Buscas una marca o modelo?</h2>
    <p className="text-gray-700 mt-4">Cuéntanos qué armazón te interesa. Consulta con nuestro equipo los modelos disponibles y las opciones de pedido.</p>
    <Link href="/contacto" className="inline-block mt-5 underline font-semibold text-navy-900">Consultar disponibilidad de armazones</Link>
  </div></section>;
}
