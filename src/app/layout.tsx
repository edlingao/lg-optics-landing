import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import Head from "next/head";


export const metadata: Metadata = {
  title: "L&G OPTICS",
  description: "L&G OPTICS: Tu destino confiable para el cuidado visual integral. Realizamos exámenes profesionales de la vista, exámenes de optometría y refracción visual. Ofrecemos una cuidadosa selección de lentes oftálmicos, lentes de contacto, micas, cristales graduados y armazones de las mejores marcas del mercado. Nuestro optometrista te brinda atención personalizada y soluciones precisas para tus necesidades visuales, incluyendo valoración de agudeza visual y salud ocular. Especialistas en lentes progresivos, bifocales, monofocales, fotocromáticos, lentes de sol con protección UV, antirreflejantes y armazones para toda la familia. Expertos en adaptación de lentes de contacto, graduación de la vista y corrección visual. Descubre por qué somos la opción preferida para el cuidado de tu salud visual con nuestra tecnología moderna y servicio experto en óptica y optometría. Tratamiento especializado para miopía, hipermetropía, astigmatismo y presbicia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased" 
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
