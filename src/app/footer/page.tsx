import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTiktok } from "react-icons/si";


export default function Footer() {
    return (
        <div className="w-full h-48 bg-primary mt-8">
            <footer className="flex w-full h-auto justify-between px-8 py-8 text-white font-bold">
                <div className="flex flex-col  ">
                    <p className="font-roots text-3xl tracking-wider">
                        VER BiEN, <br />
                        VERSE BiEN, <br />
                        SENTiRSE BiEN. <br />
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-center text-lg" >Siguenos en nuestras redes sociales</h4>
                    <div className="flex mt-4 w-full justify-center items-center">
                        <button className="mr-12">
                            <SiInstagram size={30}/>
                        </button>
                        <button className="mr-12">
                            <SiFacebook size={30} />
                        </button>
                        <button className="mr-12">
                            <SiTiktok size={30} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg">Horario:</h5>
                    <p>Lunes - Sabado 11:00 am - 19:00 pm</p>
                </div>
            </footer>
        </div>
    )
}
