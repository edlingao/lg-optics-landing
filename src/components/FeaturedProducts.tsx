"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    { name: "Progresivos Premium", image: "/glasses/prescription-lenses/glasses-1.png", price: "Desde $2,500", description: "Visión perfecta a todas las distancias", category: "Graduados" },
    { name: "Bifocales Clásicos", image: "/glasses/prescription-lenses/glasses-2.png", price: "Desde $1,800", description: "Solución tradicional y confiable", category: "Graduados" },
    { name: "Polarizados Sport", image: "/glasses/sunglasses/sunglasses-1.png", price: "Desde $1,500", description: "Perfectos para actividades al aire libre", category: "Sol" },
    { name: "Clásicos Elegantes", image: "/glasses/sunglasses/sunglasses-2.png", price: "Desde $1,200", description: "Estilo atemporal", category: "Sol" },
    { name: "Blue Light Pro", image: "/glasses/blue-filter-lenses/blue-1.png", price: "Desde $1,600", description: "Máxima protección digital", category: "Filtro Azul" },
    { name: "Office Comfort", image: "/glasses/blue-filter-lenses/blue-2.png", price: "Desde $1,400", description: "Ideales para trabajo", category: "Filtro Azul" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Productos Destacados
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de lentes premium, diseñados para satisfacer
            las necesidades visuales de millennials, generación Z y familias modernas.
          </p>
        </div>

        {/* Mobile: Horizontal scroll with snap points */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 snap-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-navy-900 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-roots text-lg font-bold text-navy-900 mb-1">{product.name}</h3>
                  <p className="font-sans text-gray-600 text-sm mb-3">{product.description}</p>
                  <span className="font-sans text-xl font-bold text-navy-900">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll hint */}
          <p className="text-center text-gray-400 text-sm mt-2 font-sans">Desliza para ver más</p>
        </div>

        {/* Desktop: 3-column grid with hover zoom */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-navy-900 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-roots text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                <p className="font-sans text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl font-bold text-navy-900">{product.price}</span>
                  <Link
                    href="/productos"
                    className="text-navy-900 hover:text-navy-700 font-semibold text-sm transition-colors duration-300 font-sans"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Agendar cita */}
        <div className="text-center space-y-4">
          <Link
            href="/productos"
            className="inline-flex items-center bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Todos los Productos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="pt-4">
            <a
              href="https://wa.me/522213374152"
              className="inline-flex items-center text-navy-900 hover:text-navy-700 font-semibold transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar cita por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
