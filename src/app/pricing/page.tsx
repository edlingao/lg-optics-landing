


export default function Pricing() {
    return (
        <div className="flex flex-col w-full justify-start items-center mb-8 mt-4 text-primary h-[75vh]">
            <h3 className="text-4xl font-bold">Nuestros Paquetes</h3>
            <p>
            Todos nuestros paquetes incluyen un armazón de línea.
            </p>
            <div className="flex w-full justify-center">
                <div className="flex flex-col border-2 border-solid border-primary mt-4 w-80 h-80 mr-8">
                    <div className="text-center bg-primary h-12 flex justify-center items-center">
                        <h4 className="font-bold text-white uppercase font-roots">paquete básico</h4>
                    </div>
                    <div className="flex flex-col py-4 px-4">
                        <div className="text-center">
                            <h5 className="text-lg font-bold ">$1900.00</h5>
                        </div>
                        <div className="mt-4 w-full">
                            <h5 className="text-center mb-4 text-md font-roots uppercase">Características clave</h5>
                            <ul>
                                <li>
                                    <span className="text-primary font-bold mr-2">✔</span>
                                    Lentes oftálmicos graduados CR-39
                                </li>
                                <li><span className="text-primary font-bold mr-2">✔</span>Lentes básicos económicos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-2 border-solid border-primary mt-4 w-80 h-80 mr-8">
                    <div className="text-center bg-primary h-12 flex justify-center items-center">
                        <h4 className="font-bold text-white uppercase font-roots">paquete superior</h4>
                    </div>
                    <div className="flex flex-col py-4 px-4">
                        <div className="text-center">
                            <h5 className="text-lg font-bold ">$2900.00</h5>
                        </div>
                        <div className="mt-4 w-full">
                            <h5 className="text-center mb-4 text-md font-roots uppercase">Características clave</h5>
                            <ul>
                                <li><span className="text-primary font-bold mr-2">✔</span>Lentes oftálmicos graduados</li>
                                <li><span className="text-primary font-bold mr-2">✔</span>Antiblue Premium</li>
                                <li><span className="text-primary font-bold mr-2">✔</span>Tratamiento antirreflejante </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-2 border-solid border-primary mt-4 w-80 h-80 mr-8">
                    <div className="text-center bg-primary h-12 flex justify-center items-center">
                        <h4 className="font-bold text-white uppercase font-roots">paquete alto índice</h4>
                    </div>
                    <div className="flex flex-col py-4 px-4">
                        <div className="text-center">
                            <h5 className="text-lg font-bold ">$3900.00</h5>
                        </div>
                        <div className="mt-4 w-full">
                            <h5 className="text-center mb-4 text-md font-roots uppercase">Características clave</h5>
                            <ul>
                                <li><span className="text-primary font-bold mr-2">✔</span>Lentes oftálmicos graduados de alto índice progresivos</li>
                                <li><span className="text-primary font-bold mr-2">✔</span>Antiblue Premium</li>
                                <li><span className="text-primary font-bold mr-2">✔</span>Tratamiento antirreflejante </li>
                                <li><span className="text-primary font-bold mr-2">✔</span>Fotocromático </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}