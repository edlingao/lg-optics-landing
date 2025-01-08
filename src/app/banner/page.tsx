import Image from "next/image"

export default function Banner() {
    const ffLogo = "/ff-logo.png";
    const hashtagLogo = "/hashtag-logo.png";
    const oliveLogo = "/olive-logo.png";



    return (
        <> 
            <section className="relative bg-bannerImg bg-cover bg-center bg-no-repeat h-[500px] w-full flex justify-center items-center ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-white text-center w-auto flex flex-col justify-center items-center">
                    <h1 className="md:text-7xl tracking-normal mb-4 font-bold sm:text-5xl ">L & G OPTICS: Una solución a tu visión</h1>
                    <p className="md:w-2/5 tracking-wide sm:w-4/5">
                        En L&G Optics, te ofrecemos una amplia gama de lentes accesibles para satisfacer todas tus necesidades visuales.
                        Desde lentes de sol hasta lentes para protección contra la luz azul.
                        Además, puedes mejorar tu visión sin afectar tu presupuesto.
                    </p>
                </div>
            </section>
            <section className="w-full mt-4 ">
                <h2 className="text-center text-3xl text-primary font-bold">Algunas de las marcas que ofrecemos</h2>
                <div className="flex md:h-48 justify-center items-center justify-evenly md:flex-row sm:flex-col sm:h-[50vh]">
                        <Image
                            src={ffLogo}
                            width={150}
                            height={150}
                            alt="olive-logo"
                            className="sm: mb-8"
                        />
                        <Image
                            src={hashtagLogo}
                            width={150}
                            height={150}
                            alt="olive-logo"
                            className="sm: mb-8"
                        />
                        <Image
                            src={oliveLogo}
                            width={150}
                            height={150}
                            alt="olive-logo"
                            className="sm: mb-8"
                        />
                </div>
            </section>
        </>
    )
}
