"use client";

import Link from "next/link";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface PricingContentProps {
  faqs: FAQ[];
}

const packages = [
  {
    name: "Básico",
    price: 1900,
    description: "Ideal para quienes buscan lentes económicos y funcionales para uso diario.",
    features: [
      "Lentes oftálmicos graduados CR-39",
      "Resistencia a rayones",
      "Armazón de línea incluido",
    ],
    highlighted: false,
    whatsappMessage: "Hola, me interesa el Paquete Básico de $1,900",
  },
  {
    name: "Superior",
    price: 2900,
    description: "Perfecto para quienes pasan horas frente a pantallas y necesitan protección extra.",
    features: [
      "Lentes oftálmicos graduados",
      "Filtro Antiblue Premium",
      "Tratamiento antirreflejante",
      "Resistencia a rayones",
      "Armazón de línea incluido",
    ],
    highlighted: true,
    badge: "Más Popular",
    whatsappMessage: "Hola, me interesa el Paquete Superior de $2,900",
  },
  {
    name: "Alto Índice",
    price: 3900,
    description: "La mejor opción para graduaciones altas que requieren lentes delgados y ligeros.",
    features: [
      "Lentes de alto índice (delgados)",
      "Diseño progresivo disponible",
      "Filtro Antiblue Premium",
      "Tratamiento antirreflejante",
      "Fotocromático incluido",
      "Armazón de línea incluido",
    ],
    highlighted: false,
    whatsappMessage: "Hola, me interesa el Paquete Alto Índice de $3,900",
  },
];

// SVG Icons for packages
const GlassesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="6" cy="12" r="4" />
    <circle cx="18" cy="12" r="4" />
    <path d="M10 12h4" />
    <path d="M2 12h0" />
    <path d="M22 12h0" />
  </svg>
);

const ScreenIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M6 8h4" />
    <path d="M6 11h2" />
  </svg>
);

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M18.4 5.6l-1.4 1.4m-10 10l-1.4 1.4" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const packageIcons = [GlassesIcon, ScreenIcon, SparkleIcon];

function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-semibold text-navy-900 font-sans pr-4">
              {faq.question}
            </h3>
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/10 text-navy-900 transition-transform duration-200">
              {openIndex === index ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-5 text-gray-600 leading-relaxed font-sans">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}

      {/* More questions CTA */}
      <div className="text-center pt-4">
        <a
          href="https://wa.me/522213374152?text=Hola, tengo una pregunta sobre los paquetes de lentes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-navy-900 hover:text-navy-700 font-semibold transition-colors"
        >
          <span>¿Más preguntas? Escríbenos por WhatsApp</span>
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function PricingContent({ faqs }: PricingContentProps) {
  return (
    <>
      {/* Hero with Glassmorphism - Simplified */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Solid navy gradient background - no orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#1e3a8a] to-navy-800" />

        {/* Glass card */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 text-center border border-white/20 shadow-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-roots">
              Paquetes de Lentes en Puebla
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-sans">
              Todos nuestros paquetes incluyen armazón de línea. Lentes graduados de calidad a precios accesibles.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((pkg, index) => {
              const IconComponent = packageIcons[index];
              return (
                <div
                  key={index}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col ${
                    pkg.highlighted
                      ? "bg-navy-900 text-white shadow-xl md:scale-105 md:-translate-y-2"
                      : "bg-white shadow-lg hover:shadow-xl border border-navy-900/10"
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-white text-navy-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="text-center mb-6">
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        pkg.highlighted ? "bg-white/20" : "bg-navy-900/10"
                      }`}>
                        <IconComponent className={`w-7 h-7 ${pkg.highlighted ? "text-white" : "text-navy-900"}`} />
                      </div>
                      <h2 className={`text-xl md:text-2xl font-bold font-roots ${pkg.highlighted ? "text-white" : "text-navy-900"}`}>
                        Paquete {pkg.name}
                      </h2>
                    </div>

                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className={`text-xl font-medium ${pkg.highlighted ? "text-white/70" : "text-gray-400"}`}>$</span>
                        <span className={`text-5xl md:text-6xl font-bold tracking-tight font-roots ${pkg.highlighted ? "text-white" : "text-navy-900"}`}>
                          {pkg.price.toLocaleString()}
                        </span>
                      </div>
                      <span className={`text-sm font-sans ${pkg.highlighted ? "text-white/70" : "text-gray-500"}`}>MXN</span>
                    </div>

                    <p className={`text-center text-sm mb-6 leading-relaxed font-sans ${pkg.highlighted ? "text-white/80" : "text-gray-600"}`}>
                      {pkg.description}
                    </p>

                    <div className={`border-t pt-6 mb-6 flex-grow ${pkg.highlighted ? "border-white/20" : "border-gray-100"}`}>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 ${
                              pkg.highlighted ? "bg-white/20" : "bg-green-100"
                            }`}>
                              <svg
                                className={`w-3 h-3 ${pkg.highlighted ? "text-white" : "text-green-600"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className={`text-sm font-sans ${pkg.highlighted ? "text-white/90" : "text-gray-700"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/522213374152?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-300 min-h-[48px] font-sans mt-auto ${
                        pkg.highlighted
                          ? "bg-white hover:bg-gray-100 text-navy-900"
                          : "bg-navy-900 hover:bg-navy-800 text-white"
                      }`}
                    >
                      Cotizar
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 md:mt-16">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center text-navy-900 hover:text-navy-700 font-semibold transition-colors group font-sans"
            >
              <span>Ver catálogo completo de armazones</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/examenes-de-vista"
              className="inline-flex items-center justify-center text-navy-900 hover:text-navy-700 font-semibold transition-colors group font-sans"
            >
              <span>¿Necesitas examen de vista? Desde $250</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3 font-roots">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 font-sans">
              Resolvemos tus dudas sobre nuestros paquetes de lentes
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA with Glassmorphism - Simplified */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Solid navy gradient - no orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#1e3a8a] to-navy-800" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 text-center border border-white/20 shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 font-roots">
              ¿Listo para ver mejor?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-xl mx-auto font-sans">
              Agenda tu cita hoy y obtén el paquete ideal para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white hover:bg-gray-100 text-navy-900 px-8 md:px-10 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg min-h-[48px] font-sans"
              >
                Agendar Cita
              </Link>
              <a
                href="https://wa.me/522213374152?text=Hola, me interesa un paquete de lentes"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 bg-green-500/10 hover:bg-green-500/20 text-white px-8 md:px-10 py-4 rounded-2xl font-semibold transition-all duration-300 min-h-[48px] font-sans inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
