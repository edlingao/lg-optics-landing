import { Metadata } from "next";
import Script from "next/script";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Paquetes de Lentes desde $1,900 | L&G OPTICS Puebla",
  description: "Paquetes de lentes oftálmicos desde $1,900 con armazón incluido. Lentes graduados, antirreflejantes, progresivos y fotocromáticos. Óptica en Puebla con precios accesibles.",
  keywords: "paquetes lentes Puebla, lentes económicos Puebla, lentes con armazón, lentes antirreflejantes precio, lentes progresivos Puebla",
  alternates: {
    canonical: "https://www.lg-optics.com/pricing",
  },
  openGraph: {
    title: "Paquetes de Lentes desde $1,900 | L&G OPTICS Puebla",
    description: "Lentes graduados con armazón desde $1,900. Paquetes con antirreflejante, antiblue y fotocromático. Visítanos en Nueva Antequera, Puebla.",
    url: "https://www.lg-optics.com/pricing",
  },
};

const faqs = [
  {
    question: "¿Qué armazón incluye cada paquete?",
    answer: "Todos nuestros paquetes incluyen un armazón de línea de nuestra colección. Si prefieres un armazón de marca premium, puedes elegirlo con un costo adicional según el modelo.",
  },
  {
    question: "¿Cuánto tiempo tardan mis lentes?",
    answer: "Los lentes monofocales están listos en 3-5 días hábiles. Los lentes progresivos y de alto índice tardan entre 7-10 días hábiles. Te notificamos por WhatsApp cuando estén listos.",
  },
  {
    question: "¿Puedo elegir un armazón de marca premium?",
    answer: "Sí, tenemos armazones de marcas reconocidas como Ray-Ban, Oakley, y más. Puedes actualizar tu paquete eligiendo el armazón de tu preferencia con el costo de diferencia.",
  },
  {
    question: "¿Los paquetes incluyen examen de vista?",
    answer: "El examen de vista se cotiza por separado desde $250. Sin embargo, si ya tienes tu receta actualizada (menos de 1 año), puedes usar esa graduación para tu paquete.",
  },
];

export default function Pricing() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingContent faqs={faqs} />
    </>
  );
}
