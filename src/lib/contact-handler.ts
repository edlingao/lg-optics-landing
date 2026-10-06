import { validateContact, serviceLabels } from "./contact";
import type { ContactFormData } from "../../emails/Contact";

type Delivery = { success: boolean };
export function createContactHandler(deps: {
  configured: () => boolean;
  send: (data: ContactFormData) => Promise<Delivery>;
}) {
  return async (request: Request): Promise<Response> => {
    let input: unknown;
    try {
      const raw = await request.text();
      if (new TextEncoder().encode(raw).byteLength > 16384) return Response.json({ success: false, message: "El mensaje es demasiado largo." }, { status: 413 });
      input = JSON.parse(raw);
    } catch {
      return Response.json({ success: false, message: "La solicitud no es válida." }, { status: 400 });
    }
    const { data, errors } = validateContact(input);
    if (!data) return Response.json({ success: false, message: "Revisa los datos del formulario.", errors }, { status: 400 });
    const unavailable = () => Response.json({ success: false, message: "No pudimos enviar tu solicitud. Tus datos siguen en el formulario. Intenta de nuevo o escríbenos por WhatsApp." }, { status: 503 });
    if (!deps.configured()) return unavailable();
    try {
      const result = await deps.send({
        userName: data.nombre, userPhone: data.telefono,
        serviceRequested: serviceLabels[data.servicio as keyof typeof serviceLabels] || "Consulta general",
        userMessage: data.mensaje,
        submittedAt: new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
      });
      if (!result.success) return unavailable();
      // Success means the provider accepted the notification for the business.
      // It does not mean an appointment is booked or a user email was sent.
      return Response.json({ success: true, message: "Tu solicitud fue enviada al equipo. Te contactaremos al teléfono indicado para confirmar disponibilidad. Tu cita aún no está confirmada." });
    } catch {
      return unavailable();
    }
  };
}
