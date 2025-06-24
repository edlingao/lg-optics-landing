"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ClientOnly from "./ClientOnly";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("prescription");
  const [,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: "prescription", name: "Lentes Graduados", icon: "🤓" },
    { id: "sun", name: "Lentes de Sol", icon: "🕶️" },
    { id: "blue", name: "Protección Azul", icon: "💻" }
  ];

  const products = {
    prescription: [
      { name: "Progresivos Premium", image: "/glasses/prescription-lenses/glasses-1.png", price: "Desde $2,500", description: "Visión perfecta a todas las distancias" },
      { name: "Bifocales Clásicos", image: "/glasses/prescription-lenses/glasses-2.png", price: "Desde $1,800", description: "Solución tradicional y confiable" },
      { name: "Monofocales HD", image: "/glasses/prescription-lenses/glasses-3.png", price: "Desde $1,200", description: "Claridad excepcional" },
      { name: "Antirreflejantes", image: "/glasses/prescription-lenses/glasses-4.png", price: "Desde $1,500", description: "Reducen el deslumbramiento" },
    ],
    sun: [
      { name: "Polarizados Sport", image: "/glasses/sunglasses/sunglasses-1.png", price: "Desde $1,500", description: "Perfectos para actividades al aire libre" },
      { name: "Clásicos Elegantes", image: "/glasses/sunglasses/sunglasses-2.png", price: "Desde $1,200", description: "Estilo atemporal" },
      { name: "Aviador Premium", image: "/glasses/sunglasses/sunglasses-3.png", price: "Desde $1,800", description: "Protección UV total" },
      { name: "Modernos Oversize", image: "/glasses/sunglasses/sunglasses-4.png", price: "Desde $1,400", description: "Tendencia y protección" },
    ],
    blue: [
      { name: "Blue Light Pro", image: "/glasses/blue-filter-lenses/blue-1.png", price: "Desde $1,600", description: "Máxima protección digital" },
      { name: "Office Comfort", image: "/glasses/blue-filter-lenses/blue-2.png", price: "Desde $1,400", description: "Ideales para trabajo" },
      { name: "Gaming Pro", image: "/glasses/blue-filter-lenses/blue-3.png", price: "Desde $1,700", description: "Para gamers profesionales" },
      { name: "Everyday Shield", image: "/glasses/blue-filter-lenses/blue-4.png", price: "Desde $1,300", description: "Uso diario cómodo" },
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de lentes premium, diseñados para satisfacer 
            las necesidades visuales de millennials, generación Z y familias modernas.
          </p>
        </div>

        {/* Category Tabs */}
        <ClientOnly fallback={<div className="flex flex-wrap justify-center gap-4 mb-12 h-12"></div>}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </ClientOnly>

        {/* Products Grid */}
        <ClientOnly fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 min-h-96"></div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products[activeCategory as keyof typeof products].map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Nuevo
                    </span>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ClientOnly>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link 
            href="/productos"
            className="inline-flex items-center bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Todos los Productos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
