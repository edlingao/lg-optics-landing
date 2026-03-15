"use client";

import { useState } from 'react';

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else {
      const phoneRegex = /^[\d\s\-\(\)\+]{10,15}$/;
      if (!phoneRegex.test(formData.telefono)) {
        newErrors.telefono = 'Formato de teléfono inválido (mínimo 10 dígitos)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor corrige los errores en el formulario'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: '¡Gracias! Te contactaremos pronto.'
        });
        setFormData({
          nombre: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Error al enviar el mensaje'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor intenta de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus({ type: null, message: '' });
    setFormData({
      nombre: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
  };

  if (submitStatus.type === 'success') {
    return (
      <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckIcon />
        </div>
        <h3 className="font-roots text-2xl font-bold text-navy-900 mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="font-sans text-gray-700 mb-6">
          {submitStatus.message}
        </p>
        <p className="font-sans text-sm text-gray-600 mb-6">
          ¿Quieres contactarnos por WhatsApp?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/522213374152?text=Hola, acabo de enviar un formulario y me gustaría agendar mi cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <WhatsAppIcon />
            WhatsApp Ahora
          </a>
          <a
            href="tel:+522213374152"
            className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
          >
            <PhoneIcon />
            Llamar
          </a>
        </div>
        <button
          onClick={handleReset}
          className="mt-6 text-navy-900 hover:text-navy-700 underline text-sm font-sans focus:outline-none focus:ring-2 focus:ring-navy-500 rounded"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  if (submitStatus.type === 'error') {
    return (
      <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <AlertIcon />
        </div>
        <h3 className="font-roots text-2xl font-bold text-navy-900 mb-2">
          Error al Enviar
        </h3>
        <p className="font-sans text-gray-700 mb-6">
          {submitStatus.message}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
          >
            Reintentar
          </button>
          <a
            href="https://wa.me/522213374152?text=Hola, tuve problemas con el formulario de contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <WhatsAppIcon />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nombre" className="block font-sans text-sm font-semibold text-navy-900 mb-2">
          Nombre *
        </label>
        <input
          type="text"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          autoFocus
          disabled={isSubmitting}
          aria-describedby={errors.nombre ? "nombre-error" : undefined}
          aria-invalid={errors.nombre ? "true" : "false"}
          className={`w-full px-4 py-3 border rounded-lg font-sans transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${
            errors.nombre ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Tu nombre"
        />
        {errors.nombre && (
          <p id="nombre-error" className="text-red-600 text-sm mt-1 font-sans" role="alert">
            {errors.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="block font-sans text-sm font-semibold text-navy-900 mb-2">
          Teléfono *
        </label>
        <input
          type="tel"
          id="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          aria-describedby={errors.telefono ? "telefono-error" : undefined}
          aria-invalid={errors.telefono ? "true" : "false"}
          className={`w-full px-4 py-3 border rounded-lg font-sans transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${
            errors.telefono ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="(221) 123-4567"
        />
        {errors.telefono && (
          <p id="telefono-error" className="text-red-600 text-sm mt-1 font-sans" role="alert">
            {errors.telefono}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="servicio" className="block font-sans text-sm font-semibold text-navy-900 mb-2">
          Servicio
        </label>
        <select
          id="servicio"
          value={formData.servicio}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <option value="">Selecciona un servicio</option>
          <option value="examen">Examen de Vista</option>
          <option value="lentes">Cotización de Lentes</option>
          <option value="informacion">Información General</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block font-sans text-sm font-semibold text-navy-900 mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={3}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
          placeholder="Cuéntanos cómo podemos ayudarte..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy-900 hover:bg-navy-800 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-sans font-semibold transition-colors duration-300 disabled:cursor-not-allowed min-h-[44px] focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <SpinnerIcon />
            Enviando...
          </span>
        ) : (
          'Enviar Mensaje'
        )}
      </button>

      <p className="text-center text-sm text-gray-600 font-sans">
        * Campos obligatorios
      </p>
    </form>
  );
}
