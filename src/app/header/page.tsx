

export default function Header() {
    return (
        <header className="flex justify-around w-full h-36 bg-white">
            <div className="flex w-full justify-around items-center">
                <div>
                    <h1 className="text-black text-2xl">L&G Optics</h1>
                </div>
                <div className="flex text-black"> 
                    <p className="ml-6 cursor-pointer">Productos</p>
                    <p className="ml-6 cursor-pointer">Paquetes</p>
                    <p className="ml-6 cursor-pointer">Contacto</p>
                    <p className="ml-6 cursor-pointer">Ubicación</p>
                </div>
            </div>
        </header>
    )
}
