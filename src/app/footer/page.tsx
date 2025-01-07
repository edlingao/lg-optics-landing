import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    return (
        <>
        
            <footer className="flex w-full h-auto justify-between px-8 py-8 text-white font-bold w-full bg-primary">
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
                        <Link href="https://www.instagram.com/lg.optics" className="mr-12">
                            <SiInstagram size={30}/>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61571379852165" className="mr-12">
                            <SiFacebook size={30} />
                        </Link>
                        <Link href="https://www.tiktok.com/@lg.optics?lang=es" className="mr-12">
                            <SiTiktok size={30} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg">Horario:</h5>
                    <p>Lunes - Viernes 11:00 am - 19:00 pm</p>
                    <p>Sabado 11:00 am - 16:00 pm</p>
                </div>
            </footer>
        </>
    )
}
