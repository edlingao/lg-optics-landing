import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productos - Lentes y Armazones Premium | L&G OPTICS Puebla",
  description: "Descubre nuestra amplia selección de lentes oftálmicos, armazones premium y lentes de sol en Puebla. Marcas reconocidas, calidad garantizada y precios accesibles en Nueva Antequera.",
  keywords: "lentes Puebla, armazones Puebla, lentes graduados, lentes de sol, óptica Nueva Antequera, productos ópticos Puebla",
  alternates: {
    canonical: "https://www.lg-optics.com/productos",
  },
  openGraph: {
    title: "Productos Premium - L&G OPTICS Puebla",
    description: "Lentes oftálmicos y armazones de las mejores marcas en Puebla",
    url: "https://www.lg-optics.com/productos",
    images: ["/productos-og.jpg"],
  },
};

const GlassesIcon = () => (
  <svg className="w-12 h-12 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="6" cy="14" r="4" strokeWidth={1.5} />
    <circle cx="18" cy="14" r="4" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeWidth={1.5} d="M10 14h4" />
    <path strokeLinecap="round" strokeWidth={1.5} d="M2 11l0 3" />
    <path strokeLinecap="round" strokeWidth={1.5} d="M22 11l0 3" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-12 h-12 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeWidth={1.5} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const ScreenIcon = () => (
  <svg className="w-12 h-12 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-navy-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ProductosPage() {
  const categories = [
    {
      id: "prescription",
      name: "Lentes Graduados",
      description: "Tecnología avanzada para corrección visual perfecta",
      icon: <GlassesIcon />,
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
      description: "Protección UV con estilo para toda ocasión",
      icon: <SunIcon />,
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
      description: "Protege tus ojos de dispositivos digitales",
      icon: <ScreenIcon />,
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

  const generateWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hola, me interesa ${productName}`);
    return `https://wa.me/522213374152?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h1 className="font-roots text-4xl md:text-5xl font-bold text-white mb-6">
              Productos Premium para tu Visión
            </h1>
            <p className="font-sans text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Descubre nuestra selección exclusiva de lentes oftálmicos, armazones y accesorios
              de las mejores marcas internacionales, disponibles en Puebla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                Solicitar Cotización
              </Link>
              <Link
                href="/examenes-de-vista"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                Agendar Examen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Tabs */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex-shrink-0 px-6 py-4 text-navy-900 font-sans font-medium border-b-2 border-transparent hover:border-navy-900 transition-colors duration-200 min-h-[44px] flex items-center focus:outline-none focus:border-navy-900"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Disclaimer Banner */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl p-6 text-center shadow-md">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-navy-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-roots text-lg md:text-xl text-navy-900">
                Tenemos muchos más lentes disponibles en nuestro local
              </p>
            </div>
            <p className="font-sans text-gray-600 mt-2 text-sm md:text-base">
              Visítanos para conocer nuestra colección completa
            </p>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                {category.name}
              </h2>
              <p className="font-sans text-lg text-gray-600">
                {category.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-sans text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                    <div className="font-sans text-2xl font-bold text-navy-900 mb-4">{product.price}</div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-sans">
                          <CheckIcon />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Single CTA */}
                    <a
                      href={generateWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-navy-900 hover:bg-navy-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2"
                    >
                      Cotizar
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Category CTA */}
            <div className="text-center mt-12">
              <Link
                href="/examenes-de-vista"
                className="font-sans text-navy-900 underline hover:no-underline transition-all focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 rounded"
              >
                Agendar cita para ver {category.name.toLowerCase()}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-white mb-6">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="font-sans text-xl text-gray-200 mb-8">
              Tenemos acceso a más de 50 marcas internacionales.
              Contáctanos y te ayudamos a encontrar el producto perfecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/522213374152?text=Hola,%20busco%20un%20producto%20espec%C3%ADfico"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Directo
              </a>
              <a
                href="tel:+522213374152"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
            <Link
              href="/pricing"
              className="font-sans text-navy-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 rounded"
            >
              Ver paquetes desde $1,900
            </Link>
            <span className="hidden sm:block text-gray-400">|</span>
            <Link
              href="/examenes-de-vista"
              className="font-sans text-navy-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 rounded"
            >
              ¿Necesitas examen de vista?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
