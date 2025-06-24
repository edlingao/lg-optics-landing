"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import ClientOnly from "../../components/ClientOnly";

export default function Header() {
  const logo = "/LG-OPTICS.png";
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial active link based on current path
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false); // Cierra el menú en móviles al hacer clic
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center w-full h-[10dvh] bg-navy-900 px-6 py-4 shadow-lg sticky top-0 z-50">
      <Link href="/" 
        className={`h-full ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
        activeLink === "/" ? "font-bold" : ""
        }`}
        onClick={() => handleLinkClick("/")}
      >
        <Image
          src={logo}
          width={200}
          height={200}
          alt="logo"
          className="cursor-pointer h-full object-contain"
        />
      </Link>
      <ClientOnly fallback={<div className="hidden md:flex gap-8 text-white items-center h-6"></div>}>
        <nav className="hidden md:flex gap-8 text-white items-center">
        <Link
          href="/productos"
          className={`text-lg hover:text-accent transition-colors duration-300 ${
            activeLink === "/productos" ? "text-accent font-semibold" : ""
          }`}
          onClick={() => handleLinkClick("/productos")}
        >
          Productos
        </Link>
        <Link
          href="/examenes-de-vista"
          className={`text-lg hover:text-accent transition-colors duration-300 ${
            activeLink === "/examenes-de-vista" ? "text-accent font-semibold" : ""
          }`}
          onClick={() => handleLinkClick("/examenes-de-vista")}
        >
          Exámenes
        </Link>
        <Link
          href="/paquetes"
          className={`text-lg hover:text-accent transition-colors duration-300 ${
            activeLink === "/paquetes" ? "text-accent font-semibold" : ""
          }`}
          onClick={() => handleLinkClick("/paquetes")}
        >
          Paquetes
        </Link>
        <Link
          href="/contacto"
          className={`text-lg hover:text-accent transition-colors duration-300 ${
            activeLink === "/contacto" ? "text-accent font-semibold" : ""
          }`}
          onClick={() => handleLinkClick("/contacto")}
        >
          Contacto
        </Link>
        <Link
          href="/ubicacion"
          className={`text-lg hover:text-accent transition-colors duration-300 ${
            activeLink === "/ubicacion" ? "text-accent font-semibold" : ""
          }`}
          onClick={() => handleLinkClick("/ubicacion")}
        >
          Ubicación
        </Link>
        <Link
          href="/contacto"
          className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={() => handleLinkClick("/contacto")}
        >
          Agendar Cita
        </Link>
        </nav>
      </ClientOnly>

      <ClientOnly fallback={<div className="w-9 h-9 md:hidden"></div>}>
        <button
          className="text-white text-3xl md:hidden"
          onClick={toggleMenu}
        >
          <TiThMenu size={35} />
        </button>
      </ClientOnly>

      <ClientOnly>
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-navy-900 text-white z-50 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-2xl`}
        >
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={toggleMenu}
        >
          <IoMdClose />
        </button>
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-6">
          <Link
            href="/productos"
            className={`text-lg hover:text-accent transition-colors duration-300 ${
              activeLink === "/productos" ? "text-accent font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/productos")}
          >
            Productos
          </Link>
          <Link
            href="/examenes-de-vista"
            className={`text-lg hover:text-accent transition-colors duration-300 ${
              activeLink === "/examenes-de-vista" ? "text-accent font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/examenes-de-vista")}
          >
            Exámenes
          </Link>
          <Link
            href="/paquetes"
            className={`text-lg hover:text-accent transition-colors duration-300 ${
              activeLink === "/paquetes" ? "text-accent font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/paquetes")}
          >
            Paquetes
          </Link>
          <Link
            href="/contacto"
            className={`text-lg hover:text-accent transition-colors duration-300 ${
              activeLink === "/contacto" ? "text-accent font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/contacto")}
          >
            Contacto
          </Link>
          <Link
            href="/ubicacion"
            className={`text-lg hover:text-accent transition-colors duration-300 ${
              activeLink === "/ubicacion" ? "text-accent font-semibold" : ""
            }`}
            onClick={() => handleLinkClick("/ubicacion")}
          >
            Ubicación
          </Link>
          <Link
            href="/contacto"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
            onClick={() => handleLinkClick("/contacto")}
          >
            Agendar Cita
          </Link>
        </nav>
        </div>
      </ClientOnly>
    </header>
  );
}
