"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { BsWhatsapp, BsTelephoneFill } from "react-icons/bs";
import ClientOnly from "../../components/ClientOnly";

export default function Header() {
  const logo = "/LG-OPTICS.png";
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className={`flex justify-between items-center w-full h-[10dvh] px-6 py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-navy-900/90 shadow-lg' : 'bg-navy-900'
    }`}>
      <Link href="/"
        className="h-full ml-6 cursor-pointer"
        onClick={() => handleLinkClick("/")}
      >
        <Image
          src={logo}
          width={200}
          height={200}
          alt="L&G OPTICS logo"
          className="cursor-pointer h-full object-contain"
        />
      </Link>

      <ClientOnly fallback={<div className="hidden md:flex gap-8 text-white items-center h-6"></div>}>
        <nav className="hidden md:flex gap-8 text-white items-center font-sans">
          <Link
            href="/productos"
            className={`text-lg transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/productos" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/productos")}
          >
            Productos
          </Link>
          <Link
            href="/examenes-de-vista"
            className={`text-lg transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/examenes-de-vista" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/examenes-de-vista")}
          >
            Exámenes
          </Link>
          <Link
            href="/pricing"
            className={`text-lg transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/pricing" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/pricing")}
          >
            Paquetes
          </Link>
          <Link
            href="/contacto"
            className={`text-lg transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/contacto" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/contacto")}
          >
            Contacto
          </Link>
          <Link
            href="/ubicacion"
            className={`text-lg transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/ubicacion" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/ubicacion")}
          >
            Ubicación
          </Link>
          <Link
            href="/contacto"
            className="btn-outline-white"
            onClick={() => handleLinkClick("/contacto")}
          >
            Agendar Cita
          </Link>
        </nav>
      </ClientOnly>

      <ClientOnly fallback={<div className="w-9 h-9 md:hidden"></div>}>
        <button
          className="text-white text-3xl md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <TiThMenu size={35} />
        </button>
      </ClientOnly>
    </header>

    <ClientOnly>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[60] md:hidden"
          onClick={toggleMenu}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs backdrop-blur-xl bg-navy-900/95 text-white z-[70] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-2xl md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        >
          <IoMdClose />
        </button>
        <nav className="flex flex-col items-center justify-center h-full gap-4 px-6">
          <Link
            href="/productos"
            className={`text-lg py-3 min-h-[48px] flex items-center transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/productos" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/productos")}
          >
            Productos
          </Link>
          <Link
            href="/examenes-de-vista"
            className={`text-lg py-3 min-h-[48px] flex items-center transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/examenes-de-vista" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/examenes-de-vista")}
          >
            Exámenes
          </Link>
          <Link
            href="/pricing"
            className={`text-lg py-3 min-h-[48px] flex items-center transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/pricing" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/pricing")}
          >
            Paquetes
          </Link>
          <Link
            href="/contacto"
            className={`text-lg py-3 min-h-[48px] flex items-center transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/contacto" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/contacto")}
          >
            Contacto
          </Link>
          <Link
            href="/ubicacion"
            className={`text-lg py-3 min-h-[48px] flex items-center transition-colors duration-300 hover:opacity-80 ${
              activeLink === "/ubicacion" ? "underline underline-offset-4 font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/ubicacion")}
          >
            Ubicación
          </Link>
          <Link
            href="/contacto"
            className="btn-outline-white mt-4"
            onClick={() => handleLinkClick("/contacto")}
          >
            Agendar Cita
          </Link>

          <div className="flex gap-6 mt-8 pt-6 border-t border-white/20">
            <Link
              href="https://wa.me/522213374152"
              className="min-w-[48px] min-h-[48px] flex items-center justify-center bg-green-500 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <BsWhatsapp size={24} />
            </Link>
            <Link
              href="tel:+522213374152"
              className="min-w-[48px] min-h-[48px] flex items-center justify-center bg-white/20 rounded-full"
              aria-label="Llamar"
            >
              <BsTelephoneFill size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </ClientOnly>
    </>
  );
}
