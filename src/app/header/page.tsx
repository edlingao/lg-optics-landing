"use client";

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const logo = "/LG-OPTICS.png";
    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <header className="flex justify-around w-full h-44 bg-primary">
            <div className="flex w-full justify-around items-center">
                <div>
                    <Link 
                        href="/"
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
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="flex text-white"> 
                    <Link
                        href="/products"
                        className={`ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
                        activeLink === "/products" ? "font-bold" : ""
                        }`}
                        onClick={() => handleLinkClick("/products")}
                    >
                        Productos
                    </Link>
                    <Link
                        href="/pricing"
                        className={`ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
                        activeLink === "/pricing" ? "font-bold" : ""
                        }`}
                        onClick={() => handleLinkClick("/pricing")}
                    >
                        Paquetes
                    </Link>
                    <Link
                        href="/contact"
                        className={`ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
                        activeLink === "/contact" ? "font-bold" : ""
                        }`}
                        onClick={() => handleLinkClick("/contact")}
                    >
                        Contacto
                    </Link>
                    <Link
                        href="/us"
                        className={`ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
                        activeLink === "/us" ? "font-bold" : ""
                        }`}
                        onClick={() => handleLinkClick("/us")}
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        href="/location"
                        className={`ml-6 cursor-pointer hover:underline hover:underline-offset-4 ${
                        activeLink === "/location" ? "font-bold" : ""
                        }`}
                        onClick={() => handleLinkClick("/location")}
                    >
                        Ubicación
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}
