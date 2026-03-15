"use client";

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import ClientOnly from "../../components/ClientOnly";

export default function WhatsappButton() {
  return (
    <ClientOnly fallback={<div className="w-full h-[100px]"></div>}>
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip - hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-navy-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            ¿Necesitas ayuda?
          </div>
        </div>

        <Link
          href="https://wa.me/522213374152?text=Hola, me interesa agendar una cita para examen de vista"
          className="whatsapp-pulse flex w-14 h-14 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <BsWhatsapp size={24} />
        </Link>
      </div>
    </ClientOnly>
  );
}
