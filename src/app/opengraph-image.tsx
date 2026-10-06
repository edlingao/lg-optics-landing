import { ImageResponse } from "next/og";
export const alt = "L&G OPTICS · Óptica en Nueva Antequera, Puebla";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ background: "#1e3a8a", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "80px", justifyContent: "center" }}>
    <div style={{ fontSize: 30, color: "#bfdbfe", marginBottom: 30 }}>NUEVA ANTEQUERA · PUEBLA</div>
    <div style={{ fontSize: 96, fontWeight: 700 }}>L&amp;G OPTICS</div>
    <div style={{ fontSize: 44, marginTop: 24 }}>Lentes y exámenes de vista</div>
    <div style={{ fontSize: 26, marginTop: 56 }}>lg-optics.com · (221) 337-4152</div>
  </div>, size);
}
