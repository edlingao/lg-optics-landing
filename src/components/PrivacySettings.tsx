"use client";
import { useState } from "react";
export default function PrivacySettings() {
  const [disabled, setDisabled] = useState(false);
  return <div><button className="btn-secondary" onClick={() => {
    try { localStorage.setItem("lg-analytics-consent", "denied"); } catch { /* Remains disabled in this view. */ }
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    w.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied" });
    const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (id) (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = true;
    window.dispatchEvent(new Event("lg:consent"));
    setDisabled(true);
  }}>Desactivar analítica opcional</button>{disabled && <p role="status" className="mt-3">La analítica opcional está desactivada en este navegador.</p>}</div>;
}
