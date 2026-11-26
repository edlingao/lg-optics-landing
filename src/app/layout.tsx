import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactActions from "@/components/ContactActions";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import PromoBanner from "@/components/PromoBanner";
import { business, businessSchema } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = {
  ...pageMetadata("/", "Óptica en Puebla y Nueva Antequera | L&G OPTICS", "Lentes y exámenes de vista en Nueva Antequera, Puebla. Conoce nuestros servicios, consulta precios y agenda por WhatsApp."),
  metadataBase: new URL(business.url),
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body className="antialiased min-h-screen flex flex-col bg-white text-gray-900 font-sans">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white text-navy-900 px-4 py-3">Saltar al contenido</a>
    <JsonLd data={businessSchema} /><PromoBanner /><Header /><main id="main-content" tabIndex={-1} className="flex-1">{children}</main><ContactActions /><Footer /><Analytics />
  </body></html>;
}
