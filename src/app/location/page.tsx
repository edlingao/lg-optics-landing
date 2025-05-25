


export default function Location() {
    return (
        <div className="flex w-full flex-col bg-white text-black justify-star mt-4 items-center h-[75vh]">
            <h3 className="font-bold text-4xl">Ubicación</h3>
            <div className="flex flex-col w-full items-center ">
                <p className="mb-4">
                    Encuentranos en: <br />
                    <span className="font-bold">
                        45 Sur #2910 Local 1 PB
                        Col. Nueva Antequera
                        CP:72180
                    </span>
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3263294003145!2d-98.23997922492424!3d19.049384682149725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7f957a3cb3d%3A0x5f890a81084ccad3!2sL%26G%20Optics!5e0!3m2!1ses-419!2smx!4v1748191405587!5m2!1ses-419!2smx"
                  width="600"
                  height="450" 
                  style={{ border:0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </div>
    )
}
