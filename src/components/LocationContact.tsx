import Link from "next/link";
import GoogleMap from "./GoogleMap";

export default function LocationContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Visítanos en Nueva Antequera
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos estratégicamente ubicados en una de las zonas más accesibles 
              de Puebla, con estacionamiento disponible y fácil acceso en transporte público.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg">Dirección</h3>
                  <p className="text-gray-600">
                    Calle 45 Sur #2910 Local 1 PB<br />
                    Colonia Nueva Antequera<br />
                    Puebla, Pue. 72180
                  </p>
                </div>
              </div>
              
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
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg">Horarios</h3>
                  <div className="text-gray-600">
                    <p>Lunes a Viernes: 11:00 AM - 6:00 PM</p>
                    <p>Sábados: 11:00 AM - 3:00 PM</p>
                  </div>
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
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contacto"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
              >
                Agendar Cita
              </Link>
              <Link 
                href="/ubicacion"
                className="bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
              >
                Ver Ubicación
              </Link>
            </div>
          </div>
          
          {/* Map/Visual */}
          <div className="relative">
            <GoogleMap 
              height={384}
              showOverlay={true}
              className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
            />
            
            {/* Quick Access Features */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-2xl mb-2">🚗</div>
                <h4 className="font-semibold text-navy-900 text-sm">Estacionamiento</h4>
                <p className="text-xs text-gray-600">Gratuito</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-2xl mb-2">🚌</div>
                <h4 className="font-semibold text-navy-900 text-sm">Transporte</h4>
                <p className="text-xs text-gray-600">Público cercano</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            ¿Necesitas Atención Urgente?
          </h3>
          <p className="text-gray-600 mb-6">
            Para emergencias visuales o consultas urgentes, contáctanos directamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+522213374152"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              📞 Llamada Urgente
            </a>
            <a 
              href="https://wa.me/522213374152"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
