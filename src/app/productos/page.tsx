import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productos - Lentes y Armazones Premium | L&G OPTICS Puebla",
  description: "Descubre nuestra amplia selección de lentes oftálmicos, armazones premium y lentes de sol en Puebla. Marcas reconocidas, calidad garantizada y precios accesibles en Nueva Antequera.",
  keywords: "lentes Puebla, armazones Puebla, lentes graduados, lentes de sol, óptica Nueva Antequera, productos ópticos Puebla",
  openGraph: {
    title: "Productos Premium - L&G OPTICS Puebla",
    description: "Lentes oftálmicos y armazones de las mejores marcas en Puebla",
    images: ["/productos-og.jpg"],
  },
};

export default function ProductosPage() {
  const categories = [
    {
      id: "prescription",
      name: "Lentes Graduados",
      description: "Lentes oftálmicos con la más alta tecnología para corrección visual perfecta",
      icon: "🤓",
      products: [
        { name: "Progresivos Premium", image: "/glasses/prescription-lenses/glasses-1.png", price: "Desde $2,500", features: ["Visión a todas las distancias", "Transición suave", "Antirreflejante incluido"] },
        { name: "Bifocales Ejecutivos", image: "/glasses/prescription-lenses/glasses-2.png", price: "Desde $1,800", features: ["Lectura y distancia", "Línea invisible", "Resistentes a rayones"] },
        { name: "Monofocales HD", image: "/glasses/prescription-lenses/glasses-3.png", price: "Desde $1,200", features: ["Claridad excepcional", "Peso reducido", "Durabilidad superior"] },
        { name: "Antirreflejantes", image: "/glasses/prescription-lenses/glasses-4.png", price: "Desde $1,500", features: ["Reducen deslumbramiento", "Mejor visión nocturna", "Fáciles de limpiar"] },
        { name: "Fotocromáticos", image: "/glasses/prescription-lenses/glasses-5.png", price: "Desde $2,200", features: ["Se adaptan a la luz", "Protección UV", "Comodidad todo el día"] },
        { name: "Alto Índice", image: "/glasses/prescription-lenses/glasses-6.png", price: "Desde $2,800", features: ["Ultra delgados", "Graduaciones altas", "Estética mejorada"] },
      ]
    },
    {
      id: "sunglasses",
      name: "Lentes de Sol",
      description: "Protección UV premium con estilo y sofisticación para toda ocasión",
      icon: "🕶️",
      products: [
        { name: "Polarizados Sport", image: "/glasses/sunglasses/sunglasses-1.png", price: "Desde $1,500", features: ["Elimina reflejos", "Deportes acuáticos", "Resistente a impactos"] },
        { name: "Clásicos Elegantes", image: "/glasses/sunglasses/sunglasses-2.png", price: "Desde $1,200", features: ["Estilo atemporal", "Protección total", "Materiales premium"] },
        { name: "Aviador Premium", image: "/glasses/sunglasses/sunglasses-3.png", price: "Desde $1,800", features: ["Diseño icónico", "Lentes de cristal", "Monturas resistentes"] },
        { name: "Oversize Fashion", image: "/glasses/sunglasses/sunglasses-4.png", price: "Desde $1,400", features: ["Tendencia actual", "Cobertura amplia", "Colores exclusivos"] },
        { name: "Deportivos Pro", image: "/glasses/sunglasses/sunglasses-5.png", price: "Desde $1,600", features: ["Alta performance", "Grip antideslizante", "Ventilación mejorada"] },
        { name: "Vintage Collection", image: "/glasses/sunglasses/sunglasses-6.png", price: "Desde $1,300", features: ["Estilo retro", "Edición limitada", "Acabados únicos"] },
      ]
    },
    {
      id: "blue-light",
      name: "Protección Luz Azul",
      description: "Lentes especializados para proteger tus ojos de la luz azul de dispositivos digitales",
      icon: "💻",
      products: [
        { name: "Blue Light Pro", image: "/glasses/blue-filter-lenses/blue-1.png", price: "Desde $1,600", features: ["Filtro avanzado", "Reducción fatiga", "Mejor descanso"] },
        { name: "Office Comfort", image: "/glasses/blue-filter-lenses/blue-2.png", price: "Desde $1,400", features: ["Trabajo de oficina", "Comodidad extrema", "Diseño profesional"] },
        { name: "Gaming Elite", image: "/glasses/blue-filter-lenses/blue-3.png", price: "Desde $1,700", features: ["Para gamers", "Contraste mejorado", "Sesiones largas"] },
        { name: "Everyday Shield", image: "/glasses/blue-filter-lenses/blue-4.png", price: "Desde $1,300", features: ["Uso diario", "Estilo casual", "Protección continua"] },
        { name: "Night Mode", image: "/glasses/blue-filter-lenses/blue-5.png", price: "Desde $1,500", features: ["Uso nocturno", "Mejor sueño", "Filtro intensivo"] },
        { name: "Student Plus", image: "/glasses/blue-filter-lenses/blue-6.png", price: "Desde $1,200", features: ["Para estudiantes", "Precio accesible", "Durabilidad escolar"] },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Productos Premium para tu Visión
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Descubre nuestra selección exclusiva de lentes oftálmicos, armazones y accesorios 
            de las mejores marcas internacionales, disponibles en Puebla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Cotización
            </Link>
            <Link 
              href="/examenes-de-vista"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Agendar Examen
            </Link>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-16">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                {category.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Premium
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                    <div className="text-2xl font-bold text-primary-600 mb-4">{product.price}</div>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href="/contacto"
                        className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Más Info
                      </Link>
                      <Link
                        href="/contacto"
                        className="flex-1 text-center bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                        Cotizar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Tenemos acceso a más de 50 marcas internacionales. 
            Contáctanos y te ayudamos a encontrar el producto perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Consulta Personalizada
            </Link>
            <a 
              href="tel:+522213374152"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
