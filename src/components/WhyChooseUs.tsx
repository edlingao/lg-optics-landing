"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Más de 10 Años de Experiencia",
      description: "Décadas cuidando la salud visual de familias poblanas con profesionalismo y dedicación."
    },
    {
      title: "Optometristas Certificados",
      description: "Nuestro equipo está formado por especialistas con certificaciones nacionales e internacionales."
    },
    {
      title: "Tecnología de Vanguardia",
      description: "Equipos modernos de diagnóstico para exámenes precisos y tratamientos efectivos."
    },
    {
      title: "Productos Premium",
      description: "Trabajamos con las mejores marcas del mercado para garantizar calidad superior."
    },
    {
      title: "Servicio Rápido",
      description: "Atención eficiente sin comprometer la calidad. Tu tiempo es valioso para nosotros."
    },
    {
      title: "Precios Justos",
      description: "Calidad premium a precios accesibles, con planes de financiamiento disponibles."
    }
  ];

  const stats = [
    { number: 5000, suffix: "+", label: "Clientes Satisfechos" },
    { number: 15, suffix: "+", label: "Años de Experiencia" },
    { number: 50, suffix: "+", label: "Marcas Disponibles" },
    { number: 99, suffix: "%", label: "Recomendación" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statsData = [
      { number: 5000, suffix: "+", label: "Clientes Satisfechos" },
      { number: 15, suffix: "+", label: "Años de Experiencia" },
      { number: 50, suffix: "+", label: "Marcas Disponibles" },
      { number: 99, suffix: "%", label: "Recomendación" }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            statsData.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.number / steps;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.number) {
                  current = stat.number;
                  clearInterval(timer);
                }
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            ¿Por Qué Elegir L&G OPTICS?
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Somos la opción preferida de familias en Puebla por nuestro compromiso
            con la excelencia y la atención personalizada.
          </p>
        </div>

        {/* Features Grid - Glass effect cards with checkmark icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Checkmark Icon */}
              <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="font-roots text-xl font-bold text-navy-900 mb-4">{feature.title}</h3>
              <p className="font-sans text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section - Animated counters */}
        <div ref={statsRef} className="bg-navy-900 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-roots text-3xl font-bold text-white mb-4">
              Numeros que Nos Respaldan
            </h3>
            <p className="font-sans text-xl text-gray-200">
              La confianza de nuestros clientes se refleja en estas cifras
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-roots">
                  {counters[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="font-sans text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
