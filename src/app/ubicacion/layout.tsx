import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata = pageMetadata("/ubicacion", "Óptica en Nueva Antequera: Ubicación | L&G OPTICS", "Encuentra L&G OPTICS en 45 Sur 2910, Nueva Antequera, Puebla. Consulta horarios, cómo llegar y opciones para agendar.");
export default function Layout({ children }: { children: React.ReactNode }) { return <><Breadcrumbs path="/ubicacion" label="Ubicación" />{children}</>; }
