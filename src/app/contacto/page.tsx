"use client";

import { useState, useEffect } from "react";
import GoogleMap from "../../components/GoogleMap";
import ContactForm from "../../components/ContactForm";

const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const EmailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronIcon = ({ isOpen, className = "w-5 h-5" }: { isOpen: boolean; className?: string }) => (
  <svg className={`${className} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-500 min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-semibold text-navy-900">{question}</span>
        <ChevronIcon isOpen={isOpen} className="w-5 h-5 text-navy-600 flex-shrink-0" />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5">
          <p className="font-sans text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function OpenStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour + minute / 60;

      if (day === 0) {
        setIsOpen(false);
        setStatusText('Cerrado');
      } else if (day === 6) {
        if (currentTime >= 11 && currentTime < 15) {
          setIsOpen(true);
          setStatusText('Abierto');
        } else {
          setIsOpen(false);
          setStatusText('Cerrado');
        }
      } else {
        if (currentTime >= 11 && currentTime < 18) {
          setIsOpen(true);
          setStatusText('Abierto');
        } else {
          setIsOpen(false);
          setStatusText('Cerrado');
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
      isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`}>
      <span className={`w-2 h-2 rounded-full mr-1.5 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
      {statusText}
    </span>
  );
}

export default function ContactoPage() {
  const contactMethods = [
    {
      title: "Teléfono",
      icon: PhoneIcon,
      info: "(221) 337-4152",
      description: "Llamadas directas de 11:00 AM a 6:00 PM",
      action: "tel:+522213374152",
      buttonText: "Llamar Ahora"
    },
    {
      title: "WhatsApp",
      icon: WhatsAppIcon,
      info: "(221) 337-4152",
      description: "Mensajes 24/7, respuesta rápida",
      action: "https://wa.me/522213374152?text=Hola, me interesa agendar una cita para examen de vista",
      buttonText: "Enviar WhatsApp",
      isHighlighted: true
    },
    {
      title: "Email",
      icon: EmailIcon,
      info: "info@lg-optics.com",
      description: "Respuesta en menos de 24 horas",
      action: "mailto:info@lg-optics.com?subject=Solicitud de Cita - Examen de Vista",
      buttonText: "Enviar Email"
    },
    {
      title: "Visita Directa",
      icon: LocationIcon,
      info: "45 Sur #2910, Nueva Antequera",
      description: "Sin cita previa, de 11:00 AM a 6:00 PM",
      action: "/ubicacion",
      buttonText: "Ver Ubicación"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-roots text-4xl md:text-5xl font-bold text-white mb-8">
              Contáctanos
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+522213374152"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <PhoneIcon className="w-5 h-5" />
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/522213374152?text=Hola, necesito agendar una cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-500 bg-transparent hover:bg-green-500 text-green-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Formas de Contacto
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className={`backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative ${
                      method.isHighlighted ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    {method.isHighlighted && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Recomendado
                      </span>
                    )}
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      method.isHighlighted ? 'bg-green-100 text-green-600' : 'bg-navy-100 text-navy-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-roots text-lg font-bold text-navy-900 mb-1">{method.title}</h3>
                    <p className="font-sans text-gray-800 font-semibold text-sm mb-1">{method.info}</p>
                    <p className="font-sans text-gray-600 text-xs mb-4 hidden sm:block">{method.description}</p>
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-block w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors duration-300 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        method.isHighlighted
                          ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
                          : 'bg-navy-900 hover:bg-navy-800 text-white focus:ring-navy-500'
                      }`}
                    >
                      {method.buttonText}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form + Map */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-roots text-3xl font-bold text-navy-900 mb-6">
                  Envíanos un Mensaje
                </h2>
                <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg">
                  <ContactForm />
                </div>
              </div>

              {/* Map + Info */}
              <div>
                <h2 className="font-roots text-3xl font-bold text-navy-900 mb-6">
                  Visítanos
                </h2>

                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-0">
                  <GoogleMap
                    height={300}
                    showOverlay={false}
                    className="w-full"
                  />

                  {/* Glass overlay card */}
                  <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/90 border border-white/30 rounded-xl p-4 shadow-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <LocationIcon className="w-4 h-4 text-navy-600" />
                          <p className="font-sans text-sm font-semibold text-navy-900">
                            Calle 45 Sur #2910 Local 1 PB
                          </p>
                        </div>
                        <p className="font-sans text-xs text-gray-600 mb-3">
                          Nueva Antequera, Puebla 72180
                        </p>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-4 h-4 text-navy-600" />
                          <OpenStatus />
                        </div>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Calle+45+Sur+2910+Nueva+Antequera+Puebla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-navy-900 hover:bg-navy-800 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors min-h-[36px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
                      >
                        <MapPinIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">Cómo llegar</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info Card */}
                <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl p-6 shadow-lg mt-6">
                  <h3 className="font-roots text-xl font-bold text-navy-900 mb-4">Información de Contacto</h3>
                  <div className="space-y-3 font-sans text-gray-700">
                    <p className="flex items-center gap-3">
                      <LocationIcon className="w-5 h-5 text-navy-600 flex-shrink-0" />
                      <span className="font-semibold">Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-navy-600 flex-shrink-0" />
                      <a href="tel:+522213374152" className="hover:text-navy-600 transition-colors focus:outline-none focus:underline">
                        (221) 337-4152
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <EmailIcon className="w-5 h-5 text-navy-600 flex-shrink-0" />
                      <a href="mailto:info@lg-optics.com" className="hover:text-navy-600 transition-colors focus:outline-none focus:underline">
                        info@lg-optics.com
                      </a>
                    </p>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <ClockIcon className="w-5 h-5 text-navy-600" />
                        <span className="font-semibold">Horarios:</span>
                      </div>
                      <div className="text-sm space-y-1 ml-7">
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
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="text-center mt-12 backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 shadow-lg">
              <p className="font-sans text-gray-700 mb-4">¿Más preguntas?</p>
              <a
                href="https://wa.me/522213374152?text=Hola, tengo una pregunta sobre sus servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pregúntanos por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Bottom CTAs */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 flex gap-3 md:hidden z-50">
          <a
            href="tel:+522213374152"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500"
          >
            <PhoneIcon className="w-5 h-5" />
            Llamar
          </a>
          <a
            href="https://wa.me/522213374152?text=Hola, necesito información"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Spacer for mobile sticky footer */}
        <div className="h-20 md:hidden"></div>
      </div>
    </>
  );
}
