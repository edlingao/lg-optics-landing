import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    return (
        <>
        
            <footer className="flex sm:flex-col md:flex-row w-full h-auto sm:justify-start md:justify-between px-8 py-8 text-white font-bold bg-primary">
                <div className="flex flex-col  ">
                    <p className="font-roots text-3xl tracking-widest">
                       ver Bien, <br />
                        verse Bien, <br />
                        sentirse Bien. <br />
                    </p>
                </div>
                <div className="flex flex-col sm:mt-4 sm:mb-4">
                    <h4 className="sm:text-start md:text-center text-lg" >Siguenos en nuestras redes sociales</h4>
                    <div className="flex mt-4 w-full justify-center items-center sm:items-start sm:justify-start">
                        <Link href="https://www.instagram.com/lg.optics" className="mr-12">
                            <SiInstagram size={30}/>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61571379852165" className="mr-12">
                            <SiFacebook size={30} />
                        </Link>
                        <Link href="https://www.tiktok.com/@lg.optics3?_t=ZS-8xS6uoutJc0&_r=1" className="mr-12">
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
