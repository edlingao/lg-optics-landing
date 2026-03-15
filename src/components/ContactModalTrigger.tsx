'use client';

import { useState } from 'react';
import { BsEnvelopeFill } from 'react-icons/bs';
import ContactModal from './ContactModal';
import ClientOnly from './ClientOnly';

export default function ContactModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClientOnly fallback={<div className="w-12 h-12"></div>}>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-24 z-50 group">
        {/* Tooltip - hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-navy-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Formulario rápido
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex w-12 h-12 bg-navy-900 hover:bg-navy-800 text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2"
          aria-label="Abrir formulario de contacto"
        >
          <BsEnvelopeFill size={20} />
        </button>
      </div>

      {/* Modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ClientOnly>
  );
}
