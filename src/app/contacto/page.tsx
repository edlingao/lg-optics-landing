import { Metadata } from "next";
import GoogleMap from "../../components/GoogleMap";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto - Agenda tu Cita | L&G OPTICS Puebla",
  description: "Contacta con L&G OPTICS en Puebla para agendar tu examen de vista. Teléfono (222) 123-4567, WhatsApp, email. Ubicados en Nueva Antequera, fácil acceso y estacionamiento gratuito.",
  keywords: "contacto L&G OPTICS, agendar cita examen vista Puebla, teléfono óptica Puebla, WhatsApp L&G OPTICS, Nueva Antequera contacto",
  openGraph: {
    title: "Contacto - L&G OPTICS Puebla",
    description: "Agenda tu examen de vista fácilmente. Contacto directo, WhatsApp y ubicación en Nueva Antequera.",
    images: ["/contacto-og.jpg"],
  },
};

export default function ContactoPage() {
  const contactMethods = [
    {
      title: "Teléfono",
      icon: "📞",
      info: "(221) 337-4152",
      description: "Llamadas directas de 11:00 AM a 6:00 PM",
      action: "tel:+522213374152",
      buttonText: "Llamar Ahora",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "WhatsApp",
      icon: "💬",
      info: "(221) 337-4152",
      description: "Mensajes 24/7, respuesta rápida",
      action: "https://wa.me/522213374152?text=Hola, me interesa agendar una cita para examen de vista",
      buttonText: "Enviar WhatsApp",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Email",
      icon: "✉️",
      info: "info@lg-optics.com",
      description: "Respuesta en menos de 24 horas",
      action: "mailto:info@lg-optics.com?subject=Solicitud de Cita - Examen de Vista",
      buttonText: "Enviar Email",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Visita Directa",
      icon: "🏪",
      info: "45 Sur #2910, Nueva Antequera",
      description: "Sin cita previa, de 11:00 AM a 6:00 PM",
      action: "/ubicacion",
      buttonText: "Ver Ubicación",
      color: "bg-navy-600 hover:bg-navy-700"
    }
  ];

  const faqs = [
    {
      question: "¿Necesito agendar cita para un examen de vista?",
      answer: "Recomendamos agendar cita para garantizar atención inmediata, pero también atendemos sin cita según disponibilidad."
    },
    {
      question: "¿Cuánto tiempo dura un examen completo?",
      answer: "Un examen visual completo toma entre 45-60 minutos. Exámenes de refracción básicos duran aproximadamente 30 minutos."
    },
    {
      question: "¿Qué debo traer para mi cita?",
      answer: "Trae tus lentes actuales (si los usas), identificación oficial y lista de medicamentos que tomas actualmente."
    },
    {
      question: "¿Atienden emergencias visuales?",
      answer: "Sí, atendemos emergencias durante horario laboral. Para urgencias fuera de horario, contáctanos por WhatsApp."
    },
    {
      question: "¿Cuándo estarán listos mis lentes?",
      answer: "Dependiendo del tipo de lente: monofocales 3-5 días, progresivos 7-10 días. Te notificaremos cuando estén listos."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contáctanos para Cuidar tu Visión
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Agenda tu examen de vista o consulta con nuestros especialistas. 
            Múltiples formas de contacto para tu comodidad en Puebla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+522213374152"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              📞 Llamar Ahora
            </a>
            <a 
              href="https://wa.me/522213374152?text=Hola, necesito agendar una cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Múltiples Formas de Contactarte con Nosotros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige la opción que más te convenga para agendar tu cita o resolver tus dudas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{method.title}</h3>
                <p className="text-gray-700 font-semibold mb-2">{method.info}</p>
                <p className="text-gray-600 text-sm mb-6">{method.description}</p>
                <a 
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-block ${method.color} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full`}
                >
                  {method.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-primary-50 rounded-xl p-6 mb-8 border border-primary-200">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Envíanos un Mensaje</h2>
                <p className="text-gray-700 mb-4">
                  Completa el formulario y recibirás una confirmación por email. 
                  Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✅ Confirmación automática
                  </span>
                  <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    💬 Respuesta en 24hrs
                  </span>
                  <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    🔒 Información segura
                  </span>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* Map + Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Visítanos</h2>
              
              <GoogleMap 
                height={300}
                showOverlay={true}
                className="mb-6"
              />
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Información de Contacto</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <span className="mr-3">📍</span>
                    <strong>Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180</strong>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📞</span>
                    <a href="tel:+522213374152" className="hover:text-primary-600 transition-colors">
                      (221) 337-4152
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <a href="mailto:info@lg-optics.com" className="hover:text-primary-600 transition-colors">
                      info@lg-optics.com
                    </a>
                  </p>
                  <div className="pt-3 border-t">
                    <p className="font-semibold mb-2">⏰ Horarios:</p>
                    <div className="text-sm space-y-1">
                      <p>Lunes - Viernes: 11:00 AM - 6:00 PM</p>
                      <p>Sábados: 11:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">¿No encuentras la respuesta que buscas?</p>
            <a 
              href="https://wa.me/522213374152?text=Hola, tengo una pregunta sobre sus servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              💬 Pregúntanos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
