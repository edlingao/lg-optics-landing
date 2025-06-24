"use client";

import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";
import ClientOnly from "../../components/ClientOnly";

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="font-roots text-2xl md:text-3xl tracking-widest mb-4">
                            Ver Bien, <br />
                            Verse Bien, <br />
                            Sentirse Bien.
                        </h3>
                        <p className="text-gray-300 text-sm max-w-md">
                            L&G OPTICS - Tu destino confiable para el cuidado visual integral en Puebla. 
                            Más de 10 años cuidando tu salud visual.
                        </p>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>📍 Calle 45 Sur #2910 Local 1 PB</p>
                            <p>Nueva Antequera, Puebla 72180</p>
                            <p>📞 (221) 337-4152</p>
                            <p>✉️ info@lg-optics.com</p>
                        </div>
                    </div>
                    
                    {/* Hours & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Horarios</h4>
                        <div className="space-y-1 text-sm text-gray-300 mb-6">
                            <p>Lunes - Viernes: 11:00AM - 6:00PM</p>
                            <p>Sábados: 11:00PM - 3:00PM</p>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                        <ClientOnly fallback={<div className="flex space-x-4 h-8"></div>}>
                            <div className="flex space-x-4">
                                <Link 
                                    href="https://www.instagram.com/lg.optics" 
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiInstagram size={24}/>
                                </Link>
                                <Link 
                                    href="https://www.facebook.com/profile.php?id=61571379852165" 
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiFacebook size={24} />
                                </Link>
                                <Link 
                                    href="https://www.tiktok.com/@lg.optics?lang=es" 
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiTiktok size={24} />
                                </Link>
                            </div>
                        </ClientOnly>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © 2024 L&G OPTICS. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/productos" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Productos
                            </Link>
                            <Link href="/examenes-de-vista" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Exámenes
                            </Link>
                            <Link href="/contacto" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Contacto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
