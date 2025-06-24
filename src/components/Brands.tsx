import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "FF", logo: "/ff-logo.png", description: "Calidad premium" },
    { name: "Hashtag", logo: "/hashtag-logo.png", description: "Estilo moderno" },
    { name: "Olive", logo: "/olive-logo.png", description: "Diseño elegante" }
  ];

  const additionalBrands = [
    "Ray-Ban", "Oakley", "Prada", "Gucci", "Armani", 
    "Tommy Hilfiger", "Calvin Klein", "Hugo Boss"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Marcas de Prestigio Mundial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las marcas más reconocidas internacionalmente para 
            ofrecerte la mejor calidad y los diseños más exclusivos.
          </p>
        </div>

        {/* Featured Brands */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">{brand.name}</h3>
              <p className="text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Brands Slider */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-navy-900 mb-8">
            Y Muchas Marcas Más...
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalBrands.map((brand, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-navy-700">
                    {brand.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="bg-gradient-to-r from-navy-900 to-primary-800 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Garantía de Calidad Premium
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Todas nuestras marcas cuentan con garantía internacional y certificación 
              de autenticidad. Tu inversión está completamente protegida.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="text-lg font-semibold text-white mb-1">Productos Originales</h4>
                <p className="text-gray-300 text-sm">100% auténticos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="text-lg font-semibold text-white mb-1">Garantía Extendida</h4>
                <p className="text-gray-300 text-sm">Hasta 2 años</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="text-lg font-semibold text-white mb-1">Cambios Libres</h4>
                <p className="text-gray-300 text-sm">30 días sin costo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partnership */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">
            ¿Buscas una marca específica?
          </h4>
          <p className="text-gray-500 mb-6">
            Contáctanos y te ayudamos a conseguir el modelo exacto que necesitas
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
}