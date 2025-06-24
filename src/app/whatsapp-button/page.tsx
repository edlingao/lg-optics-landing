"use client";

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import ClientOnly from "../../components/ClientOnly";

export default function WhatsappButton() {
    return (
        <ClientOnly fallback={<div className="w-full h-[100px]"></div>}>
            <div className="fixed bottom-6 right-6 z-50">
                <Link 
                    href="https://wa.me/522213374152?text=Hola, me interesa agendar una cita para examen de vista"
                    className="flex w-14 h-14 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp"
                >
                    <BsWhatsapp size={24} />
                </Link>
            </div>
        </ClientOnly>
    )
}
