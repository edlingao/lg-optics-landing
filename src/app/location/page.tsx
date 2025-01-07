


export default function Location() {
    const mapKey = process.env.MAP_KEY;

    return (
        <div className="flex w-full flex-col bg-white text-black justify-star mt-4 items-center text-primary h-[75vh]">
            <h3 className="font-bold text-4xl">Ubicación</h3>
            <div className="flex flex-col w-full items-center">
                <p>
                    Encuentranos en: <br />
                    <span className="font-bold">
                        45 Sur #2910 Local 1 PB
                        Col. Nueva Antequera
                        CP:72180
                    </span>
                </p>
                <iframe
                    width="650"
                    height="450"
                    frameBorder="0"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=45+Sur+2910-Puebla+Mexico`}
                    allowFullScreen>
                </iframe>

            </div>
        </div>
    )
}
