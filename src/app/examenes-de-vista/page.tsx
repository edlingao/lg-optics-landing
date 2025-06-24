import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exámenes de Vista Profesionales en Puebla | L&G OPTICS",
  description: "Exámenes de vista completos con tecnología moderna en Nueva Antequera, Puebla. Optometristas certificados, detección temprana de enfermedades oculares y diagnósticos precisos.",
  keywords: "examen de vista Puebla, optometrista Puebla, examen óptico Nueva Antequera, refracción visual, examen retina Puebla, graduación vista",
  openGraph: {
    title: "Exámenes de Vista Profesionales - L&G OPTICS Puebla",
    description: "Cuida tu salud visual con nuestros exámenes completos y tecnología moderna",
    images: ["/examenes-og.jpg"],
  },
};

export default function ExamenesPage() {
  const examTypes = [
    {
      name: "Examen Visual Completo",
      duration: "45-60 min",
      price: "Desde $350",
      description: "Evaluación integral de tu salud visual y detección temprana de problemas oculares.",
      includes: [
        "Medición de agudeza visual",
        "Refracción computarizada",
        "Examen de fondo de ojo",
        "Evaluación binocular",
        "Detección de enfermedades",
        "Prescripción personalizada"
      ],
      ideal: "Revisión anual, cambio de graduación, síntomas visuales",
      icon: "👁️‍🗨️"
    },
    {
      name: "Examen de Refracción",
      duration: "30 min",
      price: "Desde $250",
      description: "Determinación precisa de tu graduación para lentes oftálmicos perfectos.",
      includes: [
        "Autorefractometría",
        "Refracción subjetiva",
        "Prueba de visión cercana",
        "Prueba de visión lejana",
        "Corrección astigmatismo",
        "Graduación final"
      ],
      ideal: "Renovación de lentes, primera vez usando lentes",
      icon: "🔍"
    },
    {
      name: "Examen Pediátrico",
      duration: "30-45 min",
      price: "Desde $300",
      description: "Evaluación especializada para niños y adolescentes con técnicas adaptadas.",
      includes: [
        "Pruebas adaptadas a la edad",
        "Detección de ambliopía",
        "Evaluación estrabismo",
        "Control miopía infantil",
        "Orientación a padres",
        "Seguimiento desarrollo visual"
      ],
      ideal: "Niños 3-17 años, problemas escolares, antecedentes familiares",
      icon: "👶"
    },
    {
      name: "Examen Ocupacional",
      duration: "40 min",
      price: "Desde $400",
      description: "Evaluación específica para trabajadores que requieren certificación visual.",
      includes: [
        "Agudeza visual certificada",
        "Visión de colores",
        "Campo visual básico",
        "Visión nocturna",
        "Certificado oficial",
        "Recomendaciones laborales"
      ],
      ideal: "Conductores, pilotos, trabajadores industriales",
      icon: "👷‍♂️"
    }
  ];

  const technologies = [
    {
      name: "Autorefractómetro Digital",
      description: "Medición automática y precisa de errores refractivos",
      benefits: ["Resultados inmediatos", "Mayor precisión", "Comodidad del paciente"]
    },
    {
      name: "Oftalmoscopio LED",
      description: "Examen detallado del fondo de ojo y retina",
      benefits: ["Detección temprana", "Imágenes nítidas", "Diagnóstico preciso"]
    },
    {
      name: "Lensómetro Automático",
      description: "Verificación exacta de graduaciones existentes",
      benefits: ["Medición instantánea", "Comparación precisa", "Verificación completa"]
    },
    {
      name: "Tonómetro de Aplanación",
      description: "Medición de presión intraocular para glaucoma",
      benefits: ["Detección glaucoma", "Seguimiento presión", "Prevención temprana"]
    }
  ];

  const conditions = [
    { name: "Miopía", description: "Dificultad para ver de lejos", icon: "👁️", treatment: "Lentes correctivos, control de progresión" },
    { name: "Hipermetropía", description: "Esfuerzo visual en distancias cercanas", icon: "📖", treatment: "Lentes positivos, terapia visual" },
    { name: "Astigmatismo", description: "Visión borrosa a todas las distancias", icon: "🌀", treatment: "Lentes tóricos, corrección cilíndrica" },
    { name: "Presbicia", description: "Dificultad para enfocar de cerca (40+)", icon: "👓", treatment: "Lentes progresivos, bifocales" },
    { name: "Ojo Seco", description: "Irritación y molestias oculares", icon: "💧", treatment: "Lágrimas artificiales, cambios hábitos" },
    { name: "Fatiga Visual", description: "Cansancio por uso de pantallas", icon: "💻", treatment: "Lentes filtro azul, descansos visuales" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Exámenes de Vista Profesionales en Puebla
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Cuida tu salud visual con nuestros exámenes completos realizados por 
                optometristas certificados usando tecnología de vanguardia en Nueva Antequera.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contacto"
                  className="btn-primary"
                >
                  Agendar Examen
                </Link>
                <a 
                  href="tel:+522213374152"
                  className="btn-secondary"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 bg-white/10 rounded-2xl overflow-hidden">
                <Image
                  src="/man-holding-glasses.jpeg"
                  alt="Examen de vista profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Exams */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Tipos de Exámenes Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos diferentes tipos de evaluaciones visuales adaptadas a tus necesidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examTypes.map((exam, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-4xl mb-2">{exam.icon}</div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{exam.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>⏱️ {exam.duration}</span>
                      <span className="text-primary-600 font-semibold">{exam.price}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{exam.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {exam.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Ideal para:</h4>
                  <p className="text-sm text-gray-600">{exam.ideal}</p>
                </div>
                
                <Link
                  href="/contacto"
                  className="flex justify-center items-center w-full flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Agendar {exam.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos equipos modernos para diagnósticos precisos y confiables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-navy-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                <ul className="space-y-1">
                  {tech.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-500">✓ {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Condiciones que Detectamos y Tratamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos y proporcionamos soluciones para una amplia variedad de problemas visuales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{condition.icon}</span>
                  <h3 className="text-lg font-bold text-navy-900">{condition.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{condition.description}</p>
                <div className="border-t pt-3">
                  <p className="text-xs text-gray-500">
                    <strong>Tratamiento:</strong> {condition.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              ¿Cómo funciona tu examen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso sencillo y profesional diseñado para tu comodidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Cita", description: "Agenda tu cita por teléfono, WhatsApp o en línea", icon: "📅" },
              { step: "2", title: "Llegada", description: "Recepción y registro de información médica", icon: "📋" },
              { step: "3", title: "Examen", description: "Evaluación completa con nuestro optometrista", icon: "👁️‍🗨️" },
              { step: "4", title: "Resultados", description: "Explicación detallada y recomendaciones", icon: "📊" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Agenda tu Examen de Vista Hoy
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            No esperes más para cuidar tu salud visual. Nuestros especialistas están listos para atenderte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Agendar en Línea
            </Link>
            <a 
              href="tel:+522213374152"
              className="btn-secondary"
            >
              📞 (221) 337-4152
            </a>
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Horarios: Lun-Vie 9:00-19:00 | Sáb 9:00-18:00 | Dom 10:00-16:00
          </p>
        </div>
      </section>
    </div>
  );
}
