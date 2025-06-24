"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800 min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/glasses-copy.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-primary-800/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Tu Visión,</span>
            <span className="block text-accent">Nuestra Especialidad</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            En L&G OPTICS Puebla somos expertos en lentes oftálmicos y exámenes de vista profesionales. 
            Ubicados en Nueva Antequera con más de 10 años cuidando tu salud visual.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/contacto"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Agenda tu Examen
            </Link>
            <Link 
              href="/productos"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Ver Productos
            </Link>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Exámenes Profesionales</h3>
              <p className="text-gray-300 text-sm">Tecnología moderna para diagnósticos precisos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lentes de Calidad</h3>
              <p className="text-gray-300 text-sm">Las mejores marcas y materiales</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Atención Rápida</h3>
              <p className="text-gray-300 text-sm">Servicio eficiente y personalizado</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"></div>
    </section>
  );
}