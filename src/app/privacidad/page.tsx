import { pageMetadata } from "@/lib/seo";
import { business } from "@/lib/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrivacySettings from "@/components/PrivacySettings";
export const metadata = { ...pageMetadata("/privacidad", "Privacidad y contacto | L&G OPTICS", "Información sobre los datos del formulario de contacto y las preferencias de analítica del sitio de L&G OPTICS."), robots: { index: false, follow: true } };
export default function PrivacyPage() {
  return <><Breadcrumbs path="/privacidad" label="Privacidad" /><article className="max-w-3xl mx-auto px-5 py-14 space-y-6 text-gray-700">
    <h1 className="font-roots text-4xl text-navy-900">Privacidad y datos de contacto</h1><p>L&amp;G OPTICS atiende en {business.address}. Para consultas sobre el uso de tus datos, escribe a <a href={`mailto:${business.email}`} className="underline">{business.email}</a>.</p>
    <h2 className="text-2xl font-semibold text-navy-900">Formulario de contacto</h2><p>El formulario solicita tu nombre y teléfono, y permite indicar un servicio y un mensaje. Usamos esa información para responder a tu consulta y coordinar una posible visita. No envíes expedientes ni información médica sensible.</p><p>La solicitud se envía al equipo por correo mediante nuestro proveedor de entrega de email. El envío del formulario no confirma una cita. Puedes solicitar acceso, corrección o eliminación de la información que nos hayas proporcionado escribiendo al correo de contacto.</p>
    <h2 className="text-2xl font-semibold text-navy-900">Analítica opcional</h2><p>Si la analítica está habilitada, el sitio pide tu permiso antes de cargar Google Analytics. Medimos páginas visitadas, uso de botones y resultado del envío del formulario. No enviamos el nombre, teléfono ni contenido de tu mensaje a esta herramienta. Tu elección se guarda en este navegador.</p><PrivacySettings />
    <h2 className="text-2xl font-semibold text-navy-900">Servicios externos</h2><p>El mapa de Google solo se carga cuando lo solicitas. Los enlaces de WhatsApp, Google Maps y redes sociales abren servicios de terceros sujetos a sus propias políticas de privacidad.</p>
  </article></>;
}
