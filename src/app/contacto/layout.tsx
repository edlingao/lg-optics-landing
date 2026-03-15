import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Citas | L&G OPTICS Puebla",
  description: "Agenda tu examen de vista en L&G OPTICS Puebla. Llámanos al (221) 337-4152 o envía WhatsApp. Ubicados en 45 Sur #2910, Nueva Antequera. Estacionamiento gratuito.",
  alternates: {
    canonical: "https://www.lg-optics.com/contacto",
  },
  openGraph: {
    title: "Contacto y Citas | L&G OPTICS Puebla",
    description: "Agenda tu cita. Llámanos al (221) 337-4152 o WhatsApp.",
    url: "https://www.lg-optics.com/contacto",
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
