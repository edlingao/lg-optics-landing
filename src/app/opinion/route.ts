import { business } from "@/lib/business";

// Short link for WhatsApp, printed cards and QR codes.
// Ordinary browsers are redirected straight to the Google review box. Everything
// else (WhatsApp, Facebook, iMessage, Telegram and any other link-preview
// fetcher) gets a bare document holding only the share metadata, so the chat
// shows our card and image (public/opinion-card.jpg) rather than Google's
// generic preview. The image is a plain JPEG file because chat apps load a
// static file with an extension more reliably than a generated one.
const previewBots = /whatsapp|facebookexternalhit|facebot|meta-externalagent|twitterbot|telegrambot|slackbot|discordbot|linkedinbot|pinterest|skypeuripreview|googlebot|bingbot|applebot|iframely|embedly|vkshare|redditbot|snapchat|viber|line-poker|kakaotalk|bot\b|crawler|spider|preview|fetch/i;
const isBrowser = (agent: string) => /^mozilla\//i.test(agent) && !previewBots.test(agent);

const title = "¡Déjanos tu opinión! | L&G OPTICS";
const description = "¿Cómo te fue con tus lentes? Toca aquí para calificarnos en Google. Toma menos de un minuto.";
const imageAlt = "¡Déjanos tu opinión! Califica a L&G OPTICS en Google";
const escape = (text: string) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function GET(request: Request) {
  const reviewUrl = business.reviewUrl || business.mapsUrl;
  const agent = request.headers.get("user-agent") ?? "";
  if (isBrowser(agent)) {
    return new Response(null, { status: 307, headers: { Location: reviewUrl, "X-Robots-Tag": "noindex", Vary: "User-Agent" } });
  }
  const url = `${business.url}/opinion`;
  const image = `${business.url}/opinion-card.jpg`;
  const tags = [
    ["og:type", "website"], ["og:site_name", business.name], ["og:locale", "es_MX"], ["og:url", url],
    ["og:title", title], ["og:description", description],
    ["og:image", image], ["og:image:secure_url", image], ["og:image:type", "image/jpeg"], ["og:image:width", "1200"], ["og:image:height", "630"], ["og:image:alt", imageAlt],
  ].map(([property, content]) => `<meta property="${property}" content="${escape(content)}">`).join("");
  const twitter = [
    ["twitter:card", "summary_large_image"], ["twitter:title", title], ["twitter:description", description], ["twitter:image", image], ["twitter:image:alt", imageAlt],
  ].map(([name, content]) => `<meta name="${name}" content="${escape(content)}">`).join("");
  const html = `<!doctype html><html lang="es-MX"><head><meta charset="utf-8"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="noindex">${tags}${twitter}</head><body><script>location.replace(${JSON.stringify(reviewUrl)})</script><a href="${escape(reviewUrl)}">${escape(title)}</a></body></html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex", Vary: "User-Agent", "Cache-Control": "public, max-age=3600" } });
}
