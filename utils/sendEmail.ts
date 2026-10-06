import { render } from "@react-email/components";
import sgMail from "@sendgrid/mail";
import { AdminNotificationEmail } from "../emails/AdminNotification";
import type { ContactFormData } from "../emails/Contact";

export interface EmailResponse { success: boolean; message: string }
export function validateEmailConfig() {
  const missingVars = ["SENDGRID_API_KEY", "ADMIN_EMAIL"].filter(name => !process.env[name]);
  return { isValid: missingVars.length === 0, missingVars };
}

// The public form is phone-first. Only the business notification is sent.
// A user confirmation cannot substitute for successful delivery to the business.
export async function sendContactEmails(data: ContactFormData): Promise<EmailResponse> {
  if (!validateEmailConfig().isValid) return { success: false, message: "Email configuration unavailable" };
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const html = await render(AdminNotificationEmail(data));
    const [response] = await sgMail.send({
      to: process.env.ADMIN_EMAIL!,
      from: { email: process.env.FROM_EMAIL || "info@lg-optics.com", name: "L&G OPTICS" },
      subject: `Nueva solicitud: ${data.serviceRequested}`,
      html,
      text: `Nombre: ${data.userName}\nTeléfono: +52${data.userPhone}\nServicio: ${data.serviceRequested}\nMensaje: ${data.userMessage || "Sin mensaje"}`,
    });
    return { success: response.statusCode >= 200 && response.statusCode < 300, message: "Business notification processed" };
  } catch {
    // Avoid logging contact details or provider errors that may contain them.
    console.error("Contact notification delivery failed");
    return { success: false, message: "Business notification failed" };
  }
}
