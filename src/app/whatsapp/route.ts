import { whatsappUrl } from "@/lib/business";
// Short link for printed cards and QR codes: starts a WhatsApp chat with the store.
export const GET = () => new Response(null, { status: 307, headers: { Location: whatsappUrl("Hola, escaneé su código y quiero más información."), "X-Robots-Tag": "noindex" } });
