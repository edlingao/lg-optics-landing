import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🏆",
      title: "Más de 10 Años de Experiencia",
      description: "Décadas cuidando la salud visual de familias poblanas con profesionalismo y dedicación.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: "👨‍⚕️",
      title: "Optometristas Certificados",
      description: "Nuestro equipo está formado por especialistas con certificaciones nacionales e internacionales.",
      color: "from-navy-500 to-navy-600"
    },
    {
      icon: "🔬",
      title: "Tecnología de Vanguardia",
      description: "Equipos modernos de diagnóstico para exámenes precisos y tratamientos efectivos.",
      color: "from-accent to-yellow-600"
    },
    {
      icon: "💎",
      title: "Productos Premium",
      description: "Trabajamos con las mejores marcas del mercado para garantizar calidad superior.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "⚡",
      title: "Servicio Rápido",
      description: "Atención eficiente sin comprometer la calidad. Tu tiempo es valioso para nosotros.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "💰",
      title: "Precios Justos",
      description: "Calidad premium a precios accesibles, con planes de financiamiento disponibles.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Clientes Satisfechos", icon: "😊" },
    { number: "15+", label: "Años de Experiencia", icon: "📅" },
    { number: "50+", label: "Marcas Disponibles", icon: "🏷️" },
    { number: "99%", label: "Recomendación", icon: "⭐" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            ¿Por Qué Elegir L&G OPTICS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos la opción preferida de familias en Puebla por nuestro compromiso 
            con la excelencia y la atención personalizada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-2 translate-y-2"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-navy-900 via-primary-800 to-navy-900 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Números que Nos Respaldan
            </h3>
            <p className="text-xl text-gray-200">
              La confianza de nuestros clientes se refleja en estas cifras
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image
                src="/optica1.jpeg"
                alt="Cliente satisfecho"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              &ldquo;El mejor servicio de óptica en Puebla. El personal es muy profesional 
              y me ayudaron a encontrar los lentes perfectos para mi trabajo.&rdquo;
            </blockquote>
            <div className="text-navy-900 font-semibold">
              María González
              <span className="text-gray-500 font-normal block text-sm">Cliente desde 2020</span>
            </div>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}