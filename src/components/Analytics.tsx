"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { business } from "@/lib/business";
import { captureSource, readSource, tagWhatsappHref } from "@/lib/source";
// The Measurement ID is public (it is visible in the page source), so the store's ID is the
// default for production builds. Set NEXT_PUBLIC_GA_MEASUREMENT_ID to use a different property.
const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || (process.env.NODE_ENV === "production" ? "G-YN5SB2ZL3T" : undefined);
const enabled = !!id && /^G-[A-Z0-9]+$/.test(id);
function readConsent() {
  try { return localStorage.getItem("lg-analytics-consent") || "unset"; } catch { return "denied"; }
}
function subscribeConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("lg:consent", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("lg:consent", callback); };
}
export default function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    captureSource();
    function click(event: MouseEvent) {
      const link = (event.target as Element)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) {
        // Tell the store which channel brought this visitor, inside the message itself.
        link.setAttribute("href", tagWhatsappHref(href, readSource()));
        trackEvent("click_whatsapp");
      }
      else if (href.startsWith("tel:")) trackEvent("click_phone");
      else if (href.startsWith("https://www.google.com/maps") || href.startsWith("https://maps.google.com/")) trackEvent("click_directions");
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  useEffect(() => {
    if (!ready || consent !== "granted") return;
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    const safePath = ["/", "/productos", "/examenes-de-vista", "/pricing", "/contacto", "/ubicacion", "/nosotros", "/privacidad"].includes(pathname) ? pathname : "/other";
    w.gtag?.("event", "page_view", { page_path: safePath, page_location: business.url + safePath, page_title: document.title, page_referrer: "" });
  }, [pathname, ready, consent]);
  function choose(value: string) {
    try { localStorage.setItem("lg-analytics-consent", value); } catch { /* Preference still applies to this view. */ }
    window.dispatchEvent(new Event("lg:consent"));
  }
  // The click and source listeners above run even when analytics is not configured.
  if (!enabled) return null;
  return <>
    {consent === "granted" && <>
      <Script id="analytics-config" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${id}',{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:'${business.url}',page_referrer:''});`}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" onLoad={() => setReady(true)} />
    </>}
    {consent === "unset" && <div role="region" aria-label="Preferencia de analítica" className="fixed bottom-24 md:bottom-4 left-4 right-4 md:right-auto md:max-w-md bg-white border border-ink/20 rounded-md p-5 shadow-xl z-50 text-sm">
      <p>Con tu permiso, usamos Google Analytics para medir visitas y uso del sitio. <Link href="/privacidad" className="underline">Privacidad</Link>.</p>
      <div className="flex gap-3 mt-3"><button onClick={() => choose("granted")} className="btn-primary">Aceptar</button><button onClick={() => choose("denied")} className="btn-secondary">Rechazar</button></div>
    </div>}
  </>;
}
