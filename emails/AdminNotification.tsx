import { Body, Button, Container, Head, Html, Preview, Text } from "@react-email/components";
import type { ContactFormData } from "./Contact";
export function AdminNotificationEmail(data: ContactFormData) {
  return <Html lang="es"><Head /><Preview>Nueva solicitud de contacto de L&amp;G OPTICS</Preview>
    <Body style={{ backgroundColor: "#f3f4f6", fontFamily: "Arial, sans-serif", color: "#172554" }}>
      <Container style={{ backgroundColor: "white", padding: 32 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Nueva solicitud de contacto</Text>
        <Text>Nombre: {data.userName}</Text><Text>Teléfono: +52{data.userPhone}</Text>
        <Text>Servicio: {data.serviceRequested}</Text><Text>Fecha: {data.submittedAt}</Text>
        {data.userMessage && <Text>Mensaje: {data.userMessage}</Text>}
        <Button href={`tel:+52${data.userPhone}`} style={{ backgroundColor: "#1e3a8a", color: "white", padding: 12 }}>Llamar al cliente</Button>
        <Text><a href={`https://wa.me/52${data.userPhone}`}>Abrir WhatsApp</a></Text>
        <Text>Confirma disponibilidad con el cliente. Esta solicitud no es una cita confirmada.</Text>
      </Container>
    </Body>
  </Html>;
}
export default AdminNotificationEmail;
