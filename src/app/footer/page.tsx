"use client";

import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import ClientOnly from "../../components/ClientOnly";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/LG-OPTICS.png"
              width={150}
              height={60}
              alt="L&G OPTICS logo"
              className="mb-4"
            />
            <p className="font-roots text-xl tracking-wide mb-2">
              Ver Bien, Verse Bien, Sentirse Bien.
            </p>
            <p className="text-gray-300 text-sm max-w-xs">
              Tu destino confiable para el cuidado visual integral en Puebla.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <nav className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/productos" className="hover:text-white transition-colors">
                Productos
              </Link>
              <Link href="/examenes-de-vista" className="hover:text-white transition-colors">
                Exámenes
              </Link>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Paquetes
              </Link>
              <Link href="/contacto" className="hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/ubicacion" className="hover:text-white transition-colors">
                Ubicación
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact + Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p>
                <Link href="tel:+522213374152" className="hover:text-white transition-colors">
                  (221) 337-4152
                </Link>
              </p>
              <p>
                <Link href="mailto:info@lg-optics.com" className="hover:text-white transition-colors">
                  info@lg-optics.com
                </Link>
              </p>
              <p>
                <Link href="/ubicacion" className="hover:text-white transition-colors">
                  45 Sur #2910, Nueva Antequera
                </Link>
              </p>
            </div>

            <h4 className="text-lg font-semibold mb-2">Horarios</h4>
            <div className="space-y-1 text-sm text-gray-300 mb-6">
              <p>Lun - Vie: 11:00 AM - 6:00 PM</p>
              <p>Sáb: 11:00 AM - 3:00 PM</p>
            </div>

            <ClientOnly fallback={<div className="flex space-x-4 h-8 justify-center md:justify-start"></div>}>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Link
                  href="https://www.instagram.com/lg.optics"
                  className="text-gray-300 hover:text-white transition-opacity hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <SiInstagram size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61571379852165"
                  className="text-gray-300 hover:text-white transition-opacity hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <SiFacebook size={24} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@lg.optics?lang=es"
                  className="text-gray-300 hover:text-white transition-opacity hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <SiTiktok size={24} />
                </Link>
              </div>
            </ClientOnly>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2024 L&G OPTICS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
