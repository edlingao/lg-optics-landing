


export default function Location() {
    const mapKey = process.env.MAP_KEY;

    return (
        <div className="flex w-full flex-col bg-white text-black justify-center items-center text-primary">
            <h3 className="font-bold text-4xl">Ubicación</h3>
            <div className="flex flex-col w-full justify-center items-center">
                <p>
                    Encuentranos en: <br />
                    45 Sur #2910 Local 1 PB
                    Col. Nueva Antequera
                    CP:72180
                </p>
                <iframe
                    width="650"
                    height="450"
                    frameBorder="0"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=45+Sur+2904+Puebla+Mexico`}
                    allowFullScreen>
                </iframe>

            </div>
        </div>
    )
}
