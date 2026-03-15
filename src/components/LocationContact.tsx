"use client";

import Link from "next/link";
import GoogleMap from "./GoogleMap";
import { useEffect, useState } from "react";

function getOpenStatus(): { isOpen: boolean; statusText: string } {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  if (day === 0) {
    return { isOpen: false, statusText: "Cerrado - Abre Lunes 11:00 AM" };
  }

  if (day >= 1 && day <= 5) {
    if (currentTime >= 11 && currentTime < 18) {
      return { isOpen: true, statusText: "Abierto - Cierra 6:00 PM" };
    } else if (currentTime < 11) {
      return { isOpen: false, statusText: "Cerrado - Abre 11:00 AM" };
    } else {
      return { isOpen: false, statusText: "Cerrado - Abre mañana 11:00 AM" };
    }
  }

  if (day === 6) {
    if (currentTime >= 11 && currentTime < 15) {
      return { isOpen: true, statusText: "Abierto - Cierra 3:00 PM" };
    } else if (currentTime < 11) {
      return { isOpen: false, statusText: "Cerrado - Abre 11:00 AM" };
    } else {
      return { isOpen: false, statusText: "Cerrado - Abre Lunes 11:00 AM" };
    }
  }

  return { isOpen: false, statusText: "Cerrado" };
}

export default function LocationContact() {
  const [status, setStatus] = useState({ isOpen: false, statusText: "" });

  useEffect(() => {
    setStatus(getOpenStatus());
    const interval = setInterval(() => {
      setStatus(getOpenStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map with Glass Overlay - Shows first on mobile */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <GoogleMap
                height={384}
                showOverlay={false}
                className="bg-gray-200"
              />
              {/* Glass overlay card */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/70 border border-white/30 rounded-xl p-4">
                <p className="font-sans text-navy-900 font-semibold text-sm mb-2">
                  Calle 45 Sur #2910 Local 1 PB, Nueva Antequera
                </p>
                <a
                  href="https://maps.google.com/?q=Calle+45+Sur+2910+Nueva+Antequera+Puebla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy-900 hover:text-navy-700 font-semibold text-sm transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* Quick Access Features */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-4 text-center">
                <svg className="w-6 h-6 text-navy-900 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <h4 className="font-roots font-semibold text-navy-900 text-sm">Estacionamiento</h4>
                <p className="font-sans text-xs text-gray-600">Gratuito</p>
              </div>
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-4 text-center">
                <svg className="w-6 h-6 text-navy-900 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <h4 className="font-roots font-semibold text-navy-900 text-sm">Transporte</h4>
                <p className="font-sans text-xs text-gray-600">Público cercano</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Visítanos en Nueva Antequera
            </h2>
            <p className="font-sans text-xl text-gray-600 mb-8">
              Estamos estratégicamente ubicados en una de las zonas más accesibles
              de Puebla, con estacionamiento disponible y fácil acceso en transporte público.
            </p>

            {/* Open/Closed Status */}
            {status.statusText && (
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${status.isOpen ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'}`}>
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                <span className="font-sans text-sm font-semibold">{status.statusText}</span>
              </div>
            )}

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-roots font-semibold text-navy-900 text-lg">Dirección</h3>
                  <p className="font-sans text-gray-600">
                    Calle 45 Sur #2910 Local 1 PB<br />
                    Colonia Nueva Antequera<br />
                    Puebla, Pue. 72180
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-roots font-semibold text-navy-900 text-lg">Teléfono</h3>
                  <p className="font-sans text-gray-600">
                    <a href="tel:+522213374152" className="hover:text-navy-900 transition-colors">
                      (221) 337-4152
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-roots font-semibold text-navy-900 text-lg">Horarios</h3>
                  <div className="font-sans text-gray-600">
                    <p>Lunes a Viernes: 11:00 AM - 6:00 PM</p>
                    <p>Sabados: 11:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - WhatsApp, Phone, Map */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/522213374152"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+522213374152"
                className="flex-1 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar
              </a>
              <Link
                href="/ubicacion"
                className="flex-1 bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Mapa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
