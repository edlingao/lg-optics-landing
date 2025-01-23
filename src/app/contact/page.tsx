'use client';

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";


interface ContactForm {
    name: string,
    email: string,
    message: string,
}

export default function ContactUs() {
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false); 

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        });

        const result = await response.json();
            
        if (!response.ok) {
            if (Array.isArray(result.error)) {
                setMessage(result.error.map((error: { message: ContactForm }) => error.message).join(', '));
            } else if (result.error && typeof result.error.message === 'string') {
                setMessage(result.error.message); 
            } else {
                setMessage("Ocurrió un error desconocido. Por favor, inténtalo de nuevo.");
            }
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 8000);
            return false;
        }

        setMessage("Correo enviado satisfactoriamente. En breve nos comunicaremos contigo");
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 8000);

        form.reset();
    };

    return (
        <div className="flex w-full h-[70vh] mb-24 justify-center items-start">
            <div className="w-full flex flex-col px-8 items-center">
                <h3 className="text-4xl font-bold mt-4 text-primary">Contáctanos</h3>
                <form
                    action="https://formspree.io/f/mqaagrow"
                    method="POST"
                    className="form flex flex-col md:w-1/5 mt-4 sm:w-[300px]"
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
                        <button className="text-primary flex items-center justify-center border-2 border-solid border-primary w-3/5 mt-8 h-12 hover:bg-primary hover:text-white font-bold rounded">
                            Enviar
                        </button>
                        {showMessage && (
                            <p className={`w-full text-base mt-4 mb-4 px-2 py-2 flex items-start ${message.includes('satisfactoriamente') ? 'text-green-500' : 'bg-red-500 text-white'}`}>
                                {message.includes('satisfactoriamente') && <FaCheck className="mr-2" size={22} />}
                                {message}
                            </p>
                        )} 
                    </div>
                </form>
            </div>
        </div>
    );
}
