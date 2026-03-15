import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Exámenes de Vista",
      description: "Evaluación completa de tu salud visual con tecnología moderna y optometristas certificados.",
      features: ["Refracción visual", "Examen de retina", "Detección temprana de enfermedades"],
      link: "/examenes-de-vista",
      image: "/man-holding-glasses.jpeg"
    },
    {
      title: "Lentes Oftálmicos",
      description: "Amplia selección de lentes graduados con las mejores marcas y tecnologías disponibles.",
      features: ["Lentes progresivos", "Antirreflejantes", "Fotocromáticos"],
      link: "/productos",
      image: "/computer-glasses.jpg"
    },
    {
      title: "Armazones Premium",
      description: "Colección exclusiva de armazones para todos los estilos y necesidades familiares.",
      features: ["Marcas reconocidas", "Diseños modernos", "Materiales de calidad"],
      link: "/productos",
      image: "/bety-1.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            En L&G OPTICS Puebla ofrecemos servicios integrales para el cuidado de tu visión,
            adaptados a las necesidades de toda la familia.
          </p>
        </div>

        {/* Services Grid - Clean white cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border border-gray-100"
            >
              {/* Image - removed heavy gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-roots text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="font-sans text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 font-sans">
                      <svg className="w-4 h-4 text-navy-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA - Simple link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-navy-900 hover:text-navy-700 font-semibold transition-colors duration-300 font-sans"
                >
                  Ver más
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Navy only, no accent */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-roots text-3xl font-bold text-white mb-4">
            ¿Necesitas una Consulta Personalizada?
          </h3>
          <p className="font-sans text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas están listos para brindarte la atención que mereces.
            Agenda tu cita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/522213374152"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+522213374152"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
