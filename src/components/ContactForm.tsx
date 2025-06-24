"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
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
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Formato de email inválido';
      }
    }

    // Phone validation
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
    
    // Validate form before submission
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
          message: result.message
        });
        // Reset form
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
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
        message: 'Error de conexión. Por favor intenta de nuevo o contacta directamente por WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus.type && (
        <div className={`mb-6 p-6 rounded-xl shadow-lg ${
          submitStatus.type === 'success' 
            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800'
            : 'bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800'
        }`}>
          <div className="text-center">
            <div className="text-4xl mb-3">
              {submitStatus.type === 'success' ? '🎉' : '⚠️'}
            </div>
            <h3 className="text-lg font-bold mb-2">
              {submitStatus.type === 'success' ? '¡Mensaje Enviado!' : 'Error al Enviar'}
            </h3>
            <p className="text-sm leading-relaxed">{submitStatus.message}</p>
          </div>
          {submitStatus.type === 'success' && (
            <div className="mt-6">
              <p className="text-sm text-green-700 mb-4 text-center font-medium">
                🚀 ¿Necesitas atención inmediata? Contáctanos directamente:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://wa.me/522213374152?text=Hola, acabé de enviar un formulario de contacto y me gustaría agendar mi cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  💬 WhatsApp Directo
                </a>
                <a 
                  href="tel:+522213374152"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  📞 Llamar (221) 337-4152
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed ${
                errors.nombre ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Tu nombre completo"
            />
            {errors.nombre && (
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.nombre}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed ${
                errors.telefono ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="(221) 337-4152"
            />
            {errors.telefono && (
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.telefono}
              </p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.email}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="servicio" className="block text-sm font-semibold text-gray-700 mb-2">
            Servicio de Interés
          </label>
          <select
            id="servicio"
            value={formData.servicio}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Selecciona un servicio</option>
            <option value="examen-completo">🔍 Examen Visual Completo (60 min)</option>
            <option value="refraccion">👓 Examen de Refracción (30 min)</option>
            <option value="lentes-graduados">🤓 Lentes Graduados</option>
            <option value="lentes-sol">🕶️ Lentes de Sol</option>
            <option value="proteccion-azul">💻 Lentes Protección Azul</option>
            <option value="consulta">💬 Consulta General</option>
            <option value="emergencia">🚨 Consulta de Emergencia</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Cuéntanos cómo podemos ayudarte..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            * Campos obligatorios. Responderemos en menos de 24 horas.
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center">
              🔒 Información segura
            </span>
            <span className="flex items-center">
              ⚡ Respuesta rápida
            </span>
            <span className="flex items-center">
              📞 Sin costo
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}