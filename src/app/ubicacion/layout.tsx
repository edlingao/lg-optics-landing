import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicación y Horarios - L&G OPTICS Nueva Antequera, Puebla",
  description: "Visítanos en Calle 45 Sur #2910, Nueva Antequera, Puebla. Horarios, estacionamiento gratuito, transporte público. Fácil acceso desde toda la ciudad de Puebla.",
  keywords: "ubicación L&G OPTICS, Nueva Antequera Puebla, óptica Puebla dirección, cómo llegar L&G OPTICS, horarios óptica Puebla",
  alternates: {
    canonical: "https://www.lg-optics.com/ubicacion",
  },
  openGraph: {
    title: "Ubicación - L&G OPTICS Nueva Antequera, Puebla",
    description: "Encuéntranos fácilmente en Nueva Antequera, Puebla. Estacionamiento gratuito y transporte público.",
    url: "https://www.lg-optics.com/ubicacion",
    images: ["/ubicacion-og.jpg"],
  },
};

export default function UbicacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
