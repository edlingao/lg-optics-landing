import { sourceLabels } from "./contact";

const key = "lg-source";
export type Source = keyof typeof sourceLabels;

/** Remember an allow-listed ?utm_source= for this browser session. */
export function captureSource() {
  try {
    const value = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase() ?? "";
    if (Object.hasOwn(sourceLabels, value)) sessionStorage.setItem(key, value);
  } catch { /* Storage may be unavailable; attribution is optional. */ }
}
export function readSource(): Source | "" {
  try {
    const value = sessionStorage.getItem(key) ?? "";
    return Object.hasOwn(sourceLabels, value) ? value as Source : "";
  } catch { return ""; }
}
/** Adds "(Los encontré por Instagram.)" to a prefilled WhatsApp link, once. */
export function tagWhatsappHref(href: string, source: Source | "") {
  if (!source || !href.startsWith("https://wa.me/")) return href;
  const url = new URL(href), note = `(Los encontré por ${sourceLabels[source]}.)`;
  const text = url.searchParams.get("text") ?? "";
  if (text.includes(note)) return href;
  url.searchParams.set("text", `${text} ${note}`.trim());
  return url.href;
}
