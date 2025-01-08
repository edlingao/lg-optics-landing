"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const logo = "/LG-OPTICS.png";
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false); // Cierra el menú en móviles al hacer clic
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center w-full h-auto bg-primary px-6 py-4">
      <Link href="/" 
        className={`ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
        activeLink === "/" ? "font-bold" : ""
        }`}
        onClick={() => handleLinkClick("/")}
      >
        <Image
          src={logo}
          width={200}
          height={200}
          alt="logo"
          className="cursor-pointer sm:w-[180px] sm:h-[100px]"
        />
      </Link>
      <nav className="hidden md:flex gap-8 text-white">
        <Link
          href="/products"
          className={`text-lg hover:underline hover:underline-offset-4 ${
            activeLink === "/products" ? "font-bold underline underline-offset-4" : ""
          }`}
          onClick={() => handleLinkClick("/products")}
        >
          Productos
        </Link>
        <Link
          href="/pricing"
          className={`text-lg hover:underline hover:underline-offset-4 ${
            activeLink === "/pricing" ? "font-bold underline underline-offset-4" : ""
          }`}
          onClick={() => handleLinkClick("/pricing")}
        >
          Paquetes
        </Link>
        <Link
          href="/contact"
          className={`text-lg hover:underline hover:underline-offset-4 ${
            activeLink === "/contact" ? "font-bold underline underline-offset-4" : ""
          }`}
          onClick={() => handleLinkClick("/contact")}
        >
          Contacto
        </Link>
        <Link
          href="/us"
          className={`text-lg hover:underline hover:underline-offset-4 ${
            activeLink === "/us" ? "font-bold underline underline-offset-4" : ""
          }`}
          onClick={() => handleLinkClick("/us")}
        >
          Sobre Nosotros
        </Link>
        <Link
          href="/location"
          className={`text-lg hover:underline hover:underline-offset-4 ${
            activeLink === "/location" ? "font-bold underline underline-offset-4" : ""
          }`}
          onClick={() => handleLinkClick("/location")}
        >
          Ubicación
        </Link>
      </nav>

      <button
        className="text-white text-3xl md:hidden"
        onClick={toggleMenu}
      >
        <TiThMenu size={35} />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-primary text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={toggleMenu}
        >
          <IoMdClose />
        </button>
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          <Link
            href="/products"
            className={`text-lg hover:underline hover:underline-offset-4 ${
              activeLink === "/products" ? "font-bold underline underline-offset-4" : ""
            }`}
            onClick={() => handleLinkClick("/products")}
          >
            Productos
          </Link>
          <Link
            href="/pricing"
            className={`text-lg hover:underline hover:underline-offset-4 ${
              activeLink === "/pricing" ? "font-bold underline underline-offset-4" : ""
            }`}
            onClick={() => handleLinkClick("/pricing")}
          >
            Paquetes
          </Link>
          <Link
            href="/contact"
            className={`text-lg hover:underline hover:underline-offset-4 ${
              activeLink === "/contact" ? "font-bold underline underline-offset-4" : ""
            }`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contacto
          </Link>
          <Link
            href="/us"
            className={`text-lg hover:underline hover:underline-offset-4 ${
              activeLink === "/us" ? "font-bold underline underline-offset-4" : ""
            }`}
            onClick={() => handleLinkClick("/us")}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/location"
            className={`text-lg hover:underline hover:underline-offset-4 ${
              activeLink === "/location" ? "font-bold underline underline-offset-4" : ""
            }`}
            onClick={() => handleLinkClick("/location")}
          >
            Ubicación
          </Link>
        </nav>
      </div>
    </header>
  );
}
