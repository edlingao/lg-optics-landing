'use client';

import { useState, FormEvent } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BsWhatsapp, BsCheckCircleFill } from 'react-icons/bs';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.service ? `Me interesa: ${formData.service}.` : ''} Mi teléfono es ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/522213374152?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', service: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Cerrar"
        >
          <IoMdClose size={24} />
        </button>

        {!submitted ? (
          <>
            <h2 className="font-roots text-2xl text-navy-900 mb-6">
              Contáctanos
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                  placeholder="(221) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Servicio
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-white"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Examen de vista">Examen de vista</option>
                  <option value="Lentes graduados">Lentes graduados</option>
                  <option value="Lentes de contacto">Lentes de contacto</option>
                  <option value="Lentes de sol">Lentes de sol</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-green-500 mb-4">
              <BsCheckCircleFill size={48} className="mx-auto" />
            </div>
            <h3 className="font-roots text-xl text-navy-900 mb-2">
              ¡Gracias!
            </h3>
            <p className="text-gray-600 mb-6">
              Te contactaremos pronto.
            </p>
            <a
              href="https://wa.me/522213374152"
              className="btn-whatsapp inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={20} />
              WhatsApp Ahora
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
