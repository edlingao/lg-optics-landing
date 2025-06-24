import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import WhatsappButton from "./whatsapp-button/page";
import Script from "next/script";


export const metadata: Metadata = {
  title: "L&G OPTICS Puebla - Lentes y Exámenes de Vista Profesionales",
  description: "L&G OPTICS en Puebla: Expertos en lentes oftálmicos, exámenes de vista y optometría. Ubicados en Calle 45 Sur #2910, Nueva Antequera. Lentes progresivos, bifocales, antirreflejantes y armazones de las mejores marcas. ¡Agenda tu cita hoy!",
  keywords: "óptica Puebla, lentes Puebla, examen de vista Puebla, optometrista Puebla, Nueva Antequera, lentes progresivos, lentes bifocales, armazones Puebla",
  authors: [{ name: "L&G OPTICS" }],
  creator: "L&G OPTICS",
  publisher: "L&G OPTICS",
  robots: "index, follow",
  openGraph: {
    title: "L&G OPTICS Puebla - Lentes y Exámenes de Vista",
    description: "Expertos en lentes oftálmicos y exámenes de vista en Puebla. Ubicados en Nueva Antequera con tecnología moderna.",
    url: "https://lg-optics.com",
    siteName: "L&G OPTICS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L&G OPTICS Puebla - Óptica Profesional",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L&G OPTICS Puebla - Lentes y Exámenes de Vista",
    description: "Expertos en lentes oftálmicos y exámenes de vista en Puebla. Nueva Antequera.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased min-h-screen bg-white text-gray-900">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "L&G OPTICS",
              "image": "https://lg-optics.com/lg-optics-logo.png",
              "@id": "https://lg-optics.com",
              "url": "https://lg-optics.com",
              "telephone": "+52-221-337-4152",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 45 Sur #2910 Local 1 PB",
                "addressLocality": "Puebla",
                "addressRegion": "Puebla",
                "postalCode": "72180",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0414,
                "longitude": -98.2063
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/lgoptics",
                "https://www.instagram.com/lgoptics"
              ],
              "priceRange": "$$",
              "servesCuisine": "Optical Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Óptica",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Examen de la Vista",
                      "description": "Examen completo de la vista con optometrista certificado"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Lentes Oftálmicos",
                      "description": "Lentes graduados con las mejores marcas"
                    }
                  }
                ]
              }
            }),
          }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
