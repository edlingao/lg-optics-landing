import { Metadata } from "next";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";

export const metadata: Metadata = {
  title: "Ubicación y Horarios - L&G OPTICS Nueva Antequera, Puebla",
  description: "Visítanos en Calle 45 Sur #2910, Nueva Antequera, Puebla. Horarios, estacionamiento gratuito, transporte público. Fácil acceso desde toda la ciudad de Puebla.",
  keywords: "ubicación L&G OPTICS, Nueva Antequera Puebla, óptica Puebla dirección, cómo llegar L&G OPTICS, horarios óptica Puebla",
  openGraph: {
    title: "Ubicación - L&G OPTICS Nueva Antequera, Puebla",
    description: "Encuéntranos fácilmente en Nueva Antequera, Puebla. Estacionamiento gratuito y transporte público.",
    images: ["/ubicacion-og.jpg"],
  },
};

export default function UbicacionPage() {
  const transportePublico = [
    { ruta: "Ruta 12A", parada: "Nueva Antequera (2 cuadras)" },
    { ruta: "Ruta 15", parada: "45 Sur y 29 Poniente (1 cuadra)" },
    { ruta: "Ruta 8", parada: "Boulevard 5 de Mayo (5 cuadras)" },
    { ruta: "Línea 1 RUTA", parada: "Estación Nueva Antequera (10 min caminando)" }
  ];

  const referencias = [
    { lugar: "OXXO Nueva Antequera", distancia: "50 metros", direccion: "Frente al local" },
    { lugar: "Farmacia del Ahorro", distancia: "100 metros", direccion: "Misma cuadra" },
    { lugar: "Banco Azteca", distancia: "200 metros", direccion: "A 2 cuadras hacia el norte" },
    { lugar: "Plaza Antequera", distancia: "300 metros", direccion: "A 3 cuadras hacia el sur" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visítanos en Nueva Antequera
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Estamos estratégicamente ubicados en una de las zonas más accesibles de Puebla, 
            con estacionamiento gratuito y excelente conectividad de transporte público.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maps.google.com/?q=L%26G+Optics,+45+Sur+2910,+Nueva+Antequera,+Puebla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              🗺️ Abrir en Google Maps
            </a>
            <Link 
              href="/contacto"
              className="btn-secondary"
            >
              Agendar Cita
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Ubicación Exacta</h2>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-6">
                <GoogleMap 
                  height={400}
                  title="Mapa de ubicación de L&G OPTICS en Nueva Antequera, Puebla"
                />
              </div>
              
              {/* Address Info */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">📍 Dirección Completa</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Calle 45 Sur #2910 Local 1 PB</strong><br />
                  Colonia Nueva Antequera<br />
                  Puebla, Puebla 72180<br />
                  México
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl mb-1">🚗</div>
                    <p className="text-sm font-semibold text-navy-900">Estacionamiento</p>
                    <p className="text-xs text-gray-600">Gratuito</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl mb-1">🚌</div>
                    <p className="text-sm font-semibold text-navy-900">Transporte</p>
                    <p className="text-xs text-gray-600">Público cercano</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Hours Info */}
            <div>
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">Teléfono</h3>
                      <p className="text-gray-600">
                        <a href="tel:+522213374152" className="hover:text-primary-600 transition-colors">
                          (221) 337-4152
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Llamadas y WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@lg-optics.com" className="hover:text-primary-600 transition-colors">
                          info@lg-optics.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Respuesta en 24hrs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">Horarios de Atención</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>Lunes a Viernes:</strong> 11:00 AM - 6:00 PM</p>
                        <p><strong>Sábados:</strong> 11:00 AM - 3:00 PM</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Abierto todos los días del año</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/contacto"
                  className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg text-center font-semibold transition-colors duration-300"
                >
                  📅 Agendar Cita
                </Link>
                <a 
                  href="https://wa.me/522213374152?text=Hola, necesito información sobre sus servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg text-center font-semibold transition-colors duration-300"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport & References */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Public Transport */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">🚌 Transporte Público</h2>
              <div className="space-y-4">
                {transportePublico.map((transporte, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-navy-900 text-lg">{transporte.ruta}</h3>
                        <p className="text-gray-600">{transporte.parada}</p>
                      </div>
                      <div className="text-2xl">🚌</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-navy-900 mb-2">💡 Tip de Viaje</h3>
                <p className="text-gray-700 text-sm">
                  La parada más cercana es &quot;Nueva Antequera&quot; de la Ruta 12A. 
                  Bájate en 45 Sur y camina 2 cuadras hacia el poniente.
                </p>
              </div>
            </div>

            {/* References */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">🏪 Referencias Cercanas</h2>
              <div className="space-y-4">
                {referencias.map((referencia, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-navy-900 text-lg">{referencia.lugar}</h3>
                        <p className="text-gray-600 text-sm">{referencia.direccion}</p>
                        <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold mt-2">
                          {referencia.distancia}
                        </span>
                      </div>
                      <div className="text-2xl">🏪</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas Ayuda para Llegar?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Si tienes dificultades para encontrarnos, no dudes en llamarnos. 
            Te daremos indicaciones detalladas desde tu ubicación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+522213374152"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              📞 Llamar para Indicaciones
            </a>
            <a 
              href="https://wa.me/522213374152?text=Hola, necesito indicaciones para llegar a L%26G OPTICS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 WhatsApp Indicaciones
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
