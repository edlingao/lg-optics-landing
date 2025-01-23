import Image from "next/image";

export default function AboutUs() {
    const picture2 = "/optica2.jpeg";

    return (
        <div className="flex flex-col w-full justify-start mt-4 items-center mb-8 text-primary min-h-[70vh] max-h-[100vh]">
            <h3 className="font-bold text-4xl">Sobre nosotros</h3>
            <div className="flex w-full justify-center sm:flex-col sm:items-center md:flex-row md:items-start">
                <Image
                    src={picture2}
                    width={300}
                    height={200}
                    alt="optic-1"
                />
                <div className="md:w-[800px] ml-12 md:text-justify sm:text-wrap sm:w-[350px] ">
                    <p className="">
                        En L&G Optics, redefinimos la forma en que cuidas tu visión. Desde el primer día, nuestro propósito ha sido claro: combinar innovación, estilo y excelencia para ofrecerte una experiencia óptica única.
                        Fundada en 2024, L&G Optics nace de la pasión por cuidar lo más valioso: tu vista. Sabemos que cada mirada tiene una historia, y nuestra misión es ayudarte a verla con claridad.
                        <br /> 
                        <span className="font-bold text-2xl mt-8">Nuestra Misión</span> <br />
                        Brindar soluciones visuales personalizadas para cada cliente, con atención cercana.
                        <br />
                        <span className="font-bold text-2xl mt-4">Nuestra Visión</span>
                        <br />
                        Ser líderes en el cuidado ocular, destacándonos por nuestra innovación, confianza y compromiso con cada cliente que cruza nuestra puerta.
                    </p>
                </div>

            </div>
        </div>
    )
}
