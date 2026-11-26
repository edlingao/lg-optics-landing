import { business } from "@/lib/business";

// Short link for WhatsApp, printed cards and QR codes.
// People are redirected straight to the Google review box. Link-preview crawlers
// (WhatsApp, Facebook, iMessage, Telegram…) get a bare document holding only the
// share metadata instead, so the chat shows our card and image
// (./opengraph-image.tsx) rather than Google's generic preview.
const previewBots = /whatsapp|facebookexternalhit|facebot|meta-externalagent|twitterbot|telegrambot|slackbot|discordbot|linkedinbot|pinterest|skypeuripreview|googlebot|bingbot|applebot|iframely|embedly|vkshare|redditbot|snapchat|viber|line-poker|kakaotalk/i;
// iMessage previews identify as Safari plus these two crawler names.
const iMessage = /facebookexternalhit.*twitterbot/i;

const title = "¡Déjanos tu opinión! | L&G OPTICS";
const description = "¿Cómo te fue con tus lentes? Toca aquí para calificarnos en Google. Toma menos de un minuto.";
const imageAlt = "¡Déjanos tu opinión! Califica a L&G OPTICS en Google";
const escape = (text: string) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function GET(request: Request) {
  const reviewUrl = business.reviewUrl || business.mapsUrl;
  const agent = request.headers.get("user-agent") ?? "";
  if (!previewBots.test(agent) && !iMessage.test(agent)) {
    return new Response(null, { status: 307, headers: { Location: reviewUrl, "X-Robots-Tag": "noindex", Vary: "User-Agent" } });
  }
  const url = `${business.url}/opinion`;
  const image = `${business.url}/opinion/opengraph-image`;
  const tags = [
    ["og:type", "website"], ["og:site_name", business.name], ["og:locale", "es_MX"], ["og:url", url],
    ["og:title", title], ["og:description", description],
    ["og:image", image], ["og:image:type", "image/png"], ["og:image:width", "1200"], ["og:image:height", "630"], ["og:image:alt", imageAlt],
  ].map(([property, content]) => `<meta property="${property}" content="${escape(content)}">`).join("");
  const twitter = [
    ["twitter:card", "summary_large_image"], ["twitter:title", title], ["twitter:description", description], ["twitter:image", image], ["twitter:image:alt", imageAlt],
  ].map(([name, content]) => `<meta name="${name}" content="${escape(content)}">`).join("");
  const html = `<!doctype html><html lang="es-MX"><head><meta charset="utf-8"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="noindex">${tags}${twitter}</head><body><a href="${escape(reviewUrl)}">${escape(title)}</a></body></html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex", Vary: "User-Agent", "Cache-Control": "public, max-age=3600" } });
}
