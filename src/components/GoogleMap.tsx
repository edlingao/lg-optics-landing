"use client";
import { useState } from "react";
import { business } from "@/lib/business";
export default function GoogleMap({ className = "", height = 360, title = "Ubicación de L&G OPTICS en Nueva Antequera, Puebla" }: { className?: string; height?: number; title?: string; showOverlay?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return <div className={`overflow-hidden rounded-xl border border-gray-200 bg-blue-50 ${className}`} style={{ minHeight: height }}>
    {loaded ? <iframe src={business.mapsEmbed} width="100%" height={height} style={{ border: 0 }} allowFullScreen referrerPolicy="no-referrer-when-downgrade" title={title} /> : <div className="flex flex-col items-center justify-center gap-4 p-6 text-center" style={{ minHeight: height }}>
      <p className="font-semibold text-navy-900">{business.name}</p><p className="text-gray-700 max-w-sm">{business.address}</p>
      <button type="button" className="btn-primary" onClick={() => setLoaded(true)}>Cargar mapa de Google</button>
      <p className="text-sm text-gray-600">Al cargar el mapa, te conectas con Google Maps.</p>
      <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline text-navy-900">Abrir ubicación en Google Maps</a>
    </div>}
  </div>;
}
