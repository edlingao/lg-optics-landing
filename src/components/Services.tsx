import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Exámenes de Vista",
      description: "Consulta tu graduación y conoce los tipos de examen disponibles.",
      features: ["Opciones de examen", "Duración y precios", "Citas por WhatsApp"],
      link: "/examenes-de-vista",
      image: "/man-holding-glasses.jpeg"
    },
    {
      title: "Lentes Oftálmicos",
      description: "Opciones de lentes graduados según tu receta y actividades.",
      features: ["Lentes progresivos", "Antirreflejantes", "Fotocromáticos"],
      link: "/productos",
      image: "/computer-glasses.jpg"
    },
    {
      title: "Armazones Premium",
      description: "Prueba distintos estilos y consulta materiales, medidas y disponibilidad.",
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
                  sizes="(max-width: 1023px) calc(100vw - 32px), 380px"
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
                  Ver {service.title.toLowerCase()}
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
            Consulta disponibilidad y resuelve tus dudas con nuestro equipo.
            Agenda tu cita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/522213374152"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
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
