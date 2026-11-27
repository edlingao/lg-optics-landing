import type { Metadata } from "next";
import { business } from "./business";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, business.url).href;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: business.name, locale: "es_MX", type: "website", images: [{ url: `${business.url}/share-card.jpg`, type: "image/jpeg", width: 1200, height: 630, alt: "L&G OPTICS · Óptica en Nueva Antequera, Puebla" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${business.url}/share-card.jpg`] },
  };
}
