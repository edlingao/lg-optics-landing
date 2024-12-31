import Image from "next/image"

export default function Header() {
    const logo = "/LG-OPTICS.png";
    return (
        <header className="flex justify-around w-full h-36 bg-primary">
            <div className="flex w-full justify-around items-center">
                <div>
                    <Image
                        src={logo}
                        width={200}
                        height={200}
                        alt="logo"
                    />
                </div>
                <div className="flex text-white"> 
                    <p className="ml-6 cursor-pointer">Productos</p>
                    <p className="ml-6 cursor-pointer">Paquetes</p>
                    <p className="ml-6 cursor-pointer">Contacto</p>
                    <p className="ml-6 cursor-pointer">Ubicación</p>
                </div>
            </div>
        </header>
    )
}
