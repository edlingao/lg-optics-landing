"use client";
import { useState } from "react";
import { business } from "@/lib/business";
export default function GoogleMap({ className = "", height = 360, title = "Ubicación de L&G OPTICS en Nueva Antequera, Puebla" }: { className?: string; height?: number; title?: string; showOverlay?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return <div className={`overflow-hidden rounded-3xl border border-ink/10 bg-white ${className}`} style={{ minHeight: height }}>
    {loaded ? <iframe src={business.mapsEmbed} width="100%" height={height} style={{ border: 0 }} allowFullScreen referrerPolicy="no-referrer-when-downgrade" title={title} /> : <div className="flex flex-col items-center justify-center gap-4 p-6 text-center" style={{ minHeight: height }}>
      <p className="font-roots text-3xl text-ink">{business.name}</p><p className="text-ink/80 max-w-sm">{business.address}</p>
      <button type="button" className="btn-secondary" onClick={() => setLoaded(true)}>Cargar mapa de Google</button>
      <p className="text-sm text-ink/70">Al cargar el mapa, te conectas con Google Maps.</p>
      <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link">Abrir ubicación en Google Maps</a>
    </div>}
  </div>;
}
