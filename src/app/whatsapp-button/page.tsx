import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsappButton() {
    const whatsappNumber = process.env.WHATSAPP_NUMBER;
    return (
        <div className="w-full flex justify-center items-center">
            <Link href={`https://wa.me/${whatsappNumber}`}
                className="flex custom float w-[60px] h-[60px] mb-[40px] mr-[40px] bg-[#25d366] text-white rounded-full items-center justify-center z-50"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsWhatsapp size={30} className="flex items-center" />
               
            </Link>
        </div>
    )
}
