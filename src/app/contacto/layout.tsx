import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata = pageMetadata("/contacto", "Contacto y Citas en Puebla | L&G OPTICS", "Agenda tu visita a L&G OPTICS en Puebla. Llámanos al 221 337 4152 o escríbenos por WhatsApp. Estamos en Nueva Antequera.");
export default function Layout({ children }: { children: React.ReactNode }) { return <><Breadcrumbs path="/contacto" label="Contacto" />{children}</>; }
