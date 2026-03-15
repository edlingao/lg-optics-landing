"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";

// SVG Icons
const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BusIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    <rect x="6" y="10" width="12" height="7" rx="1" strokeWidth={2} />
    <circle cx="8" cy="17" r="1" fill="currentColor" />
    <circle cx="16" cy="17" r="1" fill="currentColor" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const StoreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Live status calculator
function getOpenStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  if (day === 0) return { open: false, text: "Cerrado - Abrimos Lunes" };
  if (day === 6) {
    if (time >= 11 && time < 15) return { open: true, text: "Abierto hasta 3:00 PM" };
    if (time < 11) return { open: false, text: "Abrimos a las 11:00 AM" };
    return { open: false, text: "Cerrado - Abrimos Lunes" };
  }
  if (time >= 11 && time < 18) return { open: true, text: "Abierto hasta 6:00 PM" };
  if (time < 11) return { open: false, text: "Abrimos a las 11:00 AM" };
  return { open: false, text: "Cerrado - Abrimos mañana" };
}

export default function UbicacionPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ open: false, text: "" });

  useEffect(() => {
    setStatus(getOpenStatus());
    const interval = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = async () => {
    const address = "Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180";
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transportePublico = [
    { ruta: "Ruta 12A", parada: "Nueva Antequera", distancia: "2 cuadras", tiempo: "3 min" },
    { ruta: "Ruta 15", parada: "45 Sur y 29 Poniente", distancia: "1 cuadra", tiempo: "2 min" },
    { ruta: "Ruta 8", parada: "Boulevard 5 de Mayo", distancia: "5 cuadras", tiempo: "7 min" },
    { ruta: "Línea 1 RUTA", parada: "Estación Nueva Antequera", distancia: "—", tiempo: "10 min" }
  ];

  const referencias = [
    { lugar: "OXXO Nueva Antequera", distancia: "50 metros", direccion: "Frente al local" },
    { lugar: "Farmacia del Ahorro", distancia: "100 metros", direccion: "Misma cuadra" },
    { lugar: "Banco Azteca", distancia: "200 metros", direccion: "A 2 cuadras hacia el norte" },
    { lugar: "Plaza Antequera", distancia: "300 metros", direccion: "A 3 cuadras hacia el sur" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Map Background */}
      <section className="relative">
        {/* Map as Background */}
        <div className="w-full h-[500px] md:h-[600px]">
          <GoogleMap
            height={600}
            title="Mapa de ubicación de L&G OPTICS en Nueva Antequera, Puebla"
          />
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="backdrop-blur-md bg-navy-900/70 border border-white/10 rounded-2xl p-8 max-w-lg w-full text-center">
            <h1 className="font-roots text-3xl md:text-4xl font-bold text-white mb-4">
              Visítanos en Nueva Antequera
            </h1>
            <p className="font-sans text-gray-200 mb-6">
              Estacionamiento gratuito y excelente conectividad de transporte público.
            </p>

            {/* Live Status */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              status.open
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}>
              <span className={`w-2 h-2 rounded-full ${status.open ? "bg-green-400 animate-pulse" : "bg-red-400"}`}></span>
              <span className="font-sans text-sm font-medium">{status.text}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://maps.google.com/?q=L%26G+Optics,+45+Sur+2910,+Nueva+Antequera,+Puebla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <ExternalLinkIcon />
                Abrir en Google Maps
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <CalendarIcon />
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Address Card with Copy */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  <MapPinIcon />
                </div>
                <div>
                  <h2 className="font-roots text-2xl font-bold text-navy-900 mb-2">Ubicación Exacta</h2>
                  <p className="font-sans text-gray-700">
                    <strong>Calle 45 Sur #2910 Local 1 PB</strong><br />
                    Colonia Nueva Antequera<br />
                    Puebla, Puebla 72180
                  </p>
                </div>
              </div>
              <button
                onClick={copyAddress}
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-900/50 min-w-[160px]"
                aria-label="Copiar dirección"
              >
                {copied ? (
                  <>
                    <CheckIcon />
                    Copiado!
                  </>
                ) : (
                  <>
                    <CopyIcon />
                    Copiar Dirección
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-roots text-3xl font-bold text-navy-900 mb-8 text-center">Información de Contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <a
              href="tel:+522213374152"
              className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-navy-900/50 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white group-hover:bg-navy-800 transition-colors">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-roots text-lg font-bold text-navy-900">Teléfono</h3>
                  <p className="font-sans text-gray-700">(221) 337-4152</p>
                  <p className="font-sans text-sm text-gray-500">Llamadas y WhatsApp</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@lg-optics.com"
              className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-navy-900/50 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white group-hover:bg-navy-800 transition-colors">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="font-roots text-lg font-bold text-navy-900">Email</h3>
                  <p className="font-sans text-gray-700">info@lg-optics.com</p>
                  <p className="font-sans text-sm text-gray-500">Respuesta en 24hrs</p>
                </div>
              </div>
            </a>

            {/* Hours Card */}
            <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white">
                  <ClockIcon />
                </div>
                <div>
                  <h3 className="font-roots text-lg font-bold text-navy-900">Horarios</h3>
                  <p className="font-sans text-gray-700 text-sm">Lun-Vie: 11:00 AM - 6:00 PM</p>
                  <p className="font-sans text-gray-700 text-sm">Sáb: 11:00 AM - 3:00 PM</p>
                </div>
              </div>
              {/* Status indicator */}
              <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                status.open
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}>
                <span className={`w-2 h-2 rounded-full ${status.open ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
                {status.text}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white p-4 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy-900/50"
            >
              <CalendarIcon />
              Agendar Cita
            </Link>
            <a
              href="https://wa.me/522213374152?text=Hola, necesito información sobre sus servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600/50"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=19.0284&dropoff[longitude]=-98.2261&dropoff[nickname]=L%26G%20OPTICS&dropoff[formatted_address]=Calle%2045%20Sur%202910%2C%20Nueva%20Antequera%2C%20Puebla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white p-4 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black/50"
            >
              Uber
            </a>
            <a
              href="https://d.didiglobal.com/ZaWtBHT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF7D00] hover:bg-[#E67000] text-white p-4 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7D00]/50"
            >
              DiDi
            </a>
          </div>
        </div>
      </section>

      {/* Transport & References */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Public Transport */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white">
                  <BusIcon />
                </div>
                <h2 className="font-roots text-2xl font-bold text-navy-900">Transporte Público</h2>
              </div>

              <div className="space-y-3">
                {transportePublico.map((transporte, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center text-navy-900">
                          <BusIcon />
                        </div>
                        <div>
                          <h3 className="font-sans font-bold text-navy-900">{transporte.ruta}</h3>
                          <p className="font-sans text-gray-600 text-sm">{transporte.parada}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-sans text-sm font-medium text-navy-900">{transporte.tiempo}</span>
                        <p className="font-sans text-xs text-gray-500">{transporte.distancia}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Travel Tip */}
              <div className="mt-6 backdrop-blur-md bg-navy-50/80 border border-navy-100 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <InfoIcon />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-navy-900 mb-1">Tip de Viaje</h3>
                    <p className="font-sans text-gray-700 text-sm">
                      La parada más cercana es &quot;Nueva Antequera&quot; de la Ruta 12A.
                      Bájate en 45 Sur y camina 2 cuadras hacia el poniente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* References */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white">
                  <StoreIcon />
                </div>
                <h2 className="font-roots text-2xl font-bold text-navy-900">Referencias Cercanas</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {referencias.map((referencia, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center text-navy-900 flex-shrink-0">
                        <MapPinIcon />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-navy-900 text-sm">{referencia.lugar}</h3>
                        <p className="font-sans text-gray-600 text-xs">{referencia.direccion}</p>
                        <span className="inline-block bg-navy-100 text-navy-800 px-2 py-0.5 rounded text-xs font-medium mt-2">
                          {referencia.distancia}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Parking & Transport Features */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                  <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center text-navy-900 mx-auto mb-2">
                    <CarIcon />
                  </div>
                  <p className="font-sans font-semibold text-navy-900 text-sm">Estacionamiento</p>
                  <p className="font-sans text-gray-600 text-xs">Gratuito</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                  <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center text-navy-900 mx-auto mb-2">
                    <BusIcon />
                  </div>
                  <p className="font-sans font-semibold text-navy-900 text-sm">Transporte</p>
                  <p className="font-sans text-gray-600 text-xs">Público cercano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-roots text-3xl font-bold text-white mb-4">
              ¿Necesitas Ayuda para Llegar?
            </h2>
            <p className="font-sans text-gray-300 mb-8 max-w-2xl mx-auto">
              Si tienes dificultades para encontrarnos, no dudes en contactarnos.
              Te daremos indicaciones detalladas desde tu ubicación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+522213374152"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <PhoneIcon />
                Llamar para Indicaciones
              </a>
              <a
                href="https://wa.me/522213374152?text=Hola, necesito indicaciones para llegar a L%26G OPTICS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <WhatsAppIcon />
                WhatsApp Indicaciones
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
