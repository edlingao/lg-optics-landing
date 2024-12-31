import { GiSunglasses } from "react-icons/gi";


export default function Hallmark() {
    return (
        <div className="w-full flex flex-col justify-center items-center"> 
            <h3 className="text-xl font-bold">
                    Nuestro Sello Distintivo
            </h3>
            
            <div className="flex cards justify-center items-center mt-4 w-3/5">
                <div className="mr-8">
                    <div className="flex w-full justify-center items-center">
                        <GiSunglasses size={50} />
                    </div>
                    <h5 className="text-center text-lg font-bold">Precios Accesibles</h5>
                    <p className="text-center tracking-wide"> 
                        En L&G Optics, nos aseguramos de ofrecer precios que se ajusten a todos los presupuestos,
                        permitiendo que mas personas tengan acceso a productos opticos de calidad.
                    </p>
                </div>
                <div className="mr-8">
                    <div className="flex w-full justify-center items-center">
                        <GiSunglasses size={50} />
                    </div>
                    <h5 className="text-center text-lg font-bold">Variedad de Productos</h5>
                    <p className="text-center tracking-wide"> 
                        Ofrecemos una amplia gama de lentes, desde aquellos diseñados para la protección contra el sol
                        hasta lentes especializados para el uso de computadoras, adaptándonos a las necesidades de cada cliente.
                    </p>
                </div>
                <div className="mr-8">
                    <div className="flex w-full justify-center items-center">
                        <GiSunglasses size={50} />
                    </div>
                    <h5 className="text-center text-lg font-bold">Compromiso con la Calidad</h5>
                    <p className="text-center tracking-wide"> 
                        Nos comprometemos a proporcionar productos de calidad que no solo cumplen los estándares de eficacia,
                        sino que también ofrezcan comodidad y estilo para el uso diario.
                    </p>
                </div>
            </div>
        </div>
    )
}
