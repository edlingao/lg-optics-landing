import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Exámenes de Vista",
      description: "Evaluación completa de tu salud visual con tecnología moderna y optometristas certificados.",
      icon: "👁️‍🗨️",
      features: ["Refracción visual", "Examen de retina", "Detección temprana de enfermedades"],
      link: "/examenes-de-vista",
      image: "/IMG_2537.jpg"
    },
    {
      title: "Lentes Oftálmicos",
      description: "Amplia selección de lentes graduados con las mejores marcas y tecnologías disponibles.",
      icon: "🤓",
      features: ["Lentes progresivos", "Antirreflejantes", "Fotocromáticos"],
      link: "/productos",
      image: "/IMG_3589.jpg"
    },
    {
      title: "Armazones Premium",
      description: "Colección exclusiva de armazones para todos los estilos y necesidades familiares.",
      icon: "👓",
      features: ["Marcas reconocidas", "Diseños modernos", "Materiales de calidad"],
      link: "/productos",
     image: "/IMG_2320.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En L&G OPTICS ofrecemos servicios integrales para el cuidado de tu visión, 
            adaptados a las necesidades de toda la familia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{service.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold transition-colors duration-300"
                >
                  Conocer más
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-navy-900 to-primary-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas una Consulta Personalizada?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas están listos para brindarte la atención que mereces. 
            Agenda tu cita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Agendar Cita
            </Link>
            <Link 
              href="tel:+522213374152"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Llamar Ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}