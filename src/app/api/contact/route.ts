import { createContactHandler } from "@/lib/contact-handler";
import { sendContactEmails, validateEmailConfig } from "../../../../utils/sendEmail";
export const runtime = "nodejs";
export const POST = createContactHandler({
  configured: () => validateEmailConfig().isValid,
  send: sendContactEmails,
});
