import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evaluaciones Visuales y Consultas Oftálmicas en Puebla | L&G OPTICS",
  description: "Evaluaciones visuales optométricas y consultas oftálmicas especializadas en Nueva Antequera, Puebla. Profesionales certificados con tecnología moderna.",
  keywords: "evaluación visual Puebla, optometrista Puebla, oftalmólogo Nueva Antequera, consulta oftálmica, refracción visual, graduación vista",
  openGraph: {
    title: "Evaluaciones Visuales y Consultas Oftálmicas - L&G OPTICS Puebla",
    description: "Servicios optométricos y oftálmicos profesionales con tecnología moderna",
    images: ["/examenes-og.jpg"],
  },
};

export default function ExamenesPage() {
  const examTypes = [
    {
      name: "Evaluación Visual Básica",
      duration: "45-60 min",
      price: "Gratuito",
      description: "Evaluación visual integral y detección temprana de alteraciones refractivas.",
      includes: [
        "Anamnesis básica",
        "Evaluación de agudeza visual",
        "Refracción objetiva",
        "Evaluación final y recomendaciones",
      ],
      ideal: "Revisión anual, cambio de graduación, síntomas visuales",
      icon: "👁️‍🗨️",
      type: "optometric"
    },
    {
      name: "Evaluación Visual Completa",
      duration: "45-60 min",
      price: "Desde $250",
      description: "Determinación precisa de graduación para lentes oftálmicos con evaluación visual integral.",
      includes: [
        "Anamnesis completa",
        "Agudeza visual lejos/cerca",
        "Refracciones objetiva y subjetiva",
        "Cover Test",
        "Reflejos pupilares",
        "Evaluación de motilidad ocular",
        "Medición DIP",
        "Retinoscopia",
        "Evaluación visual completa"
      ],
      ideal: "Renovación de lentes, primera vez usando lentes",
      icon: "🔍",
      type: "optometric"
    },
    {
      name: "Evaluación Visual Pediátrica",
      duration: "30-45 min",
      price: "Desde $300",
      description: "Evaluación visual especializada para niños y adolescentes con técnicas adaptadas por edad.",
      includes: [
        "Pruebas adaptadas a la edad",
        "Detección de ambliopía",
        "Evaluación de estrabismo",
        "Control de miopía infantil",
        "Orientación a padres",
        "Seguimiento de desarrollo visual"
      ],
      ideal: "Niños 3-17 años, problemas escolares, antecedentes familiares",
      icon: "👶",
      type: "optometric"
    },
    {
      name: "Consulta Oftálmica Especializada",
      duration: "60 min",
      price: "Desde $1000",
      description: "Consulta médica oftálmica especializada para diagnóstico y tratamiento de patologías oculares.",
      includes: [
        "Historia clínica completa",
        "Agudeza visual certificada",
        "Evaluación de visión de colores",
        "Fondo de ojo (oftalmoscopia)",
        "Queratometría",
        "Biomicroscopia",
        "Diagnóstico de patologías: Glaucoma, Desprendimiento de Retina, etc.",
        "Certificación médica (cuando aplique)"
      ],
      ideal: "Certificaciones médicas laborales, diagnóstico de enfermedades oculares, tratamiento de patologías visuales",
      icon: "👷‍♂️",
      type: "medical",
      doctor: "Dr. José Serafín Mota López",
      specialty: "Oftalmólogo Certificado",
      cedula: "Cédula Profesional: 844118 \n Cédula Profesional de Especialización: 3272486"
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
      description: "Evaluación detallada del fondo de ojo y retina",
      benefits: ["Detección temprana", "Imágenes nítidas", "Evaluación precisa"]
    },
    {
      name: "Lensómetro Automático",
      description: "Verificación exacta de graduaciones existentes",
      benefits: ["Medición instantánea", "Comparación precisa", "Verificación completa"]
    },
    {
      name: "Tonómetro de Aplanación",
      description: "Medición de presión intraocular para evaluación de glaucoma",
      benefits: ["Detección temprana", "Seguimiento presión", "Prevención efectiva"]
    }
  ];

  const conditions = [
    { name: "Miopía", description: "Dificultad para ver de lejos", icon: "👁️", treatment: "Lentes correctivos, control de progresión" },
    { name: "Hipermetropía", description: "Esfuerzo visual en distancias cercanas", icon: "📖", treatment: "Lentes positivos, terapia visual" },
    { name: "Astigmatismo", description: "Visión borrosa a todas las distancias", icon: "🌀", treatment: "Lentes tóricos, corrección cilíndrica" },
    { name: "Presbicia", description: "Dificultad para enfocar de cerca (40+)", icon: "👓", treatment: "Lentes progresivos, bifocales" },
    { name: "Ojo Seco", description: "Irritación y molestias oculares", icon: "💧", treatment: "Lágrimas artificiales, cambios de hábitos" },
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
                Evaluaciones Visuales y Consultas Oftálmicas en Puebla
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Servicios optométricos y oftálmicos profesionales con tecnología de vanguardia 
                en Nueva Antequera, realizados por especialistas certificados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contacto"
                  className="btn-primary"
                >
                  Agendar Evaluación
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
                  alt="Evaluación visual profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Nuestros Servicios Profesionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios optométricos y oftálmicos especializados adaptados a tus necesidades
            </p>
          </div>

          {/* Servicios Optométricos */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Servicios Optométricos</h3>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 max-w-4xl mx-auto">
                <p className="text-blue-800 text-sm">
                  <strong>Nota importante:</strong> Los servicios optométricos están enfocados en la evaluación visual 
                  y corrección refractiva. No sustituyen la consulta médica oftálmica para diagnóstico y tratamiento 
                  de enfermedades oculares.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {examTypes.filter(exam => exam.type === 'optometric').map((exam, index) => (
                <div key={index} className="card p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-2">{exam.icon}</div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">{exam.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>⏱️ {exam.duration}</span>
                        <span className="text-primary-600 font-semibold">{exam.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{exam.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-navy-900 mb-3">Incluye:</h5>
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
                    <h5 className="font-semibold text-navy-900 mb-2">Ideal para:</h5>
                    <p className="text-sm text-gray-600">{exam.ideal}</p>
                  </div>
                  
                  <Link
                    href="/contacto"
                    className="flex justify-center items-center w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Agendar Evaluación
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Servicios Oftálmicos */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Servicios Médicos Oftálmicos</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 max-w-4xl mx-auto">
                <p className="text-green-800 text-sm">
                  <strong>Consulta médica especializada</strong> realizada por médico oftalmólogo certificado 
                  para diagnóstico y tratamiento de patologías oculares.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {examTypes.filter(exam => exam.type === 'medical').map((exam, index) => (
                <div key={index} className="card p-8 border-2 border-green-200">
                  <div className="mb-6">
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <h4 className="text-lg font-bold text-green-800">{exam.doctor}</h4>
                      <p className="text-green-700">{exam.specialty}</p>
                      <p className=" text-green-700" style={{ whiteSpace: 'pre-line' }}>
                        {exam.cedula}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-2">{exam.icon}</div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">{exam.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>⏱️ {exam.duration}</span>
                        <span className="text-primary-600 font-semibold">{exam.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{exam.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-navy-900 mb-3">Incluye:</h5>
                      <ul className="space-y-2">
                        {exam.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-navy-900 mb-2">Ideal para:</h5>
                      <p className="text-sm text-gray-600">{exam.ideal}</p>
                    </div>
                  </div>
                  
                  <Link
                    href="/contacto"
                    className="flex justify-center items-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Agendar Consulta Oftálmica
                  </Link>
                </div>
              ))}
            </div>
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
              Utilizamos equipos modernos para evaluaciones precisas y confiables
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
              Condiciones que Evaluamos y Tratamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos y proporcionamos soluciones para una amplia variedad de alteraciones visuales
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
                    <strong>Solución:</strong> {condition.treatment}
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
              ¿Cómo funciona tu evaluación?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso sencillo y profesional diseñado para tu comodidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Cita", description: "Agenda tu cita por teléfono, WhatsApp o en línea", icon: "📅" },
              { step: "2", title: "Llegada", description: "Recepción y registro de información", icon: "📋" },
              { step: "3", title: "Evaluación", description: "Evaluación completa con nuestro especialista", icon: "👁️‍🗨️" },
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

      {/* Legal Disclaimer */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-primary-600">
            <h3 className="text-lg font-bold text-navy-900 mb-4">⚠️ Información Importante</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                • Los servicios optométricos están enfocados en la evaluación visual y corrección refractiva. 
                No sustituyen la consulta médica oftálmica.
              </p>
              <p>
                • Para diagnóstico y tratamiento de enfermedades oculares, es necesaria la consulta con un médico oftalmólogo.
              </p>
              <p>
                • Los servicios se brindan con estricto apego a las normas de COFEPRIS y las regulaciones sanitarias vigentes.
              </p>
              <p>
                • Consulta oftálmica realizada por médico especialista certificado con cédula profesional vigente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Agenda tu Evaluación Visual Hoy
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            No esperes más para cuidar tu visión. Nuestros especialistas están listos para atenderte.
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
