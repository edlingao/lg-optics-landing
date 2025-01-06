'use client';

import { useState } from "react";

export default function ContactUs() {
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false); 

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        });

        const result = await response.json();
            
        if (!response.ok) {
                if (Array.isArray(result.error)) {
                    setMessage(result.error.map((error: { message: any }) => error.message).join(', '));
                } else if (result.error && typeof result.error.message === 'string') {
                    setMessage(result.error.message); 
                } else {
                    setMessage("Ocurrió un error desconocido. Por favor, inténtalo de nuevo.");
                }
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 5000);
                return false;
            }

            setMessage("Correo enviado satisfactoriamente. En breve nos comunicaremos contigo");
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 5000);

            event.target.reset;
        };

    return (
        <div className="flex w-full h-full  mb-24 justify-center items-center">
            <div className="w-full h-96 flex flex-col px-8 items-center">
                <h3 className="text-4xl font-bold mt-4 text-primary">Contáctanos</h3>
                <form
                    action="https://formspree.io/f/mkggqgpy"
                    method="POST"
                    className="form flex flex-col w-1/5 mt-4"
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text"
                        placeholder="Nombre"
                        className="text-black mb-4 px-2 py-2 rounded border-2 border-solid border-primary"
                        id="name"
                        name="name"
                        required
                    />
                    <input 
                        type="email"
                        placeholder="Correo Electrónico"
                        className="text-black mb-4 px-2 py-2 rounded border-2 border-solid border-primary"
                        id="email"
                        name="email"
                        required
                    />
                    <textarea 
                        className="max-h-40 min-h-32 text-black px-2 py-2 rounded border-2 border-solid border-primary"
                        placeholder="Mensaje..."
                        id="message"
                        name="message"
                        required
                    />
                    <div className="flex flex-col w-full items-center justify-center">
                        <button className="flex items-center justify-center border-2 border-solid border-primary w-3/5 mt-8 h-12 hover:bg-primary hover:text-white font-bold rounded">
                            Enviar
                        </button>
                            <p className={`w-full text-base mt-4 mb-4 px-2 py-2 ${message.includes('satisfactoriamente') ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                {message}
                            </p>
                        {/* {showMessage && (
                        )} */}
                    </div>
                </form>
            </div>

        </div>
    );
}
