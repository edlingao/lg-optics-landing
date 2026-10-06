export type AnalyticsEvent = "click_whatsapp" | "click_phone" | "click_directions" | "form_start" | "lead_accepted" | "form_error";
export function trackEvent(name: AnalyticsEvent, service?: string) {
  if (typeof window === "undefined") return;
  // Do not send query strings, destinations, form text or contact information.
  const allowedServices = ["examen", "lentes", "informacion", "otro"];
  const path = window.location.pathname;
  const page = ["/", "/productos", "/examenes-de-vista", "/pricing", "/contacto", "/ubicacion", "/nosotros", "/privacidad"].includes(path) ? path : "/other";
  const data = { page_path: page, ...(service && allowedServices.includes(service) ? { service } : {}) };
  window.dispatchEvent(new CustomEvent("lg:analytics", { detail: { name, ...data } }));
  const analyticsWindow = window as Window & { gtag?: (...args: unknown[]) => void };
  try {
    if (localStorage.getItem("lg-analytics-consent") === "granted") analyticsWindow.gtag?.("event", name, data);
  } catch { /* Browser storage may be unavailable. */ }
}
