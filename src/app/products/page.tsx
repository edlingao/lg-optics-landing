import Image from "next/image"


export default function Products() {
    const regularGlasses = "/28794.jpg";
    const sunGlasses = "/332.jpg";
    const computerGlasses = "/334.jpg";

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 text-primary">
            <h3 className="font-bold text-4xl text-primary">Productos</h3>
            <div className="card flex w-auto mb-8 mt-4">
                <div className="mr-20">
                    <Image
                        src={regularGlasses}
                        width={300}
                        height={300}
                        alt="regular-glasses"
                    />
                </div>
                <div className="text w-96">
                    <h4 className="text-2xl font-bold">Lentes Graduados</h4>
                    <p>
                        Diseñados para mejorar tu visión y adaptarse a tus necesidades específicas. Contamos con monturas modernas, elegantes y cómodas para que encuentres el par perfecto que combine funcionalidad y estilo.
                    </p>
                </div>
            </div>
            <div className="card flex w-auto mb-8">
                
                <div className="text w-96">
                    <h4 className="text-2xl font-bold">Lentes de Sol</h4>
                    <p>
                        Protege tus ojos de los dañinos rayos UV sin renunciar al diseño. Ofrecemos una amplia selección de lentes que no solo cuidan tu visión, sino que complementan tu personalidad y estilo de vida.
                    </p>
                </div>
                <div className="ml-20">
                    <Image
                        src={sunGlasses}
                        width={300}
                        height={300}
                        alt="regular-glasses"
                    />
                </div>
            </div>
            <div className="card flex w-auto mb-8">
                <div className="mr-20">
                    <Image
                        src={computerGlasses}
                        width={300}
                        height={300}
                        alt="regular-glasses"
                    />
                </div>
                <div className="text w-96">
                    <h4 className="text-2xl font-bold">Lentes con Filtro Azul</h4>
                    <p>
                        Ideales para quienes pasan largas horas frente a pantallas. Estos lentes reducen la fatiga ocular y protegen tus ojos de la luz azul, ayudándote a mantener tu comodidad y rendimiento durante todo el día.
                    </p>
                </div>
            </div>
        </div>
    )
}
