import { ImageResponse } from "next/og";

// Preview image shown when the /opinion link is shared in WhatsApp, Messenger, etc.
export const alt = "¡Déjanos tu opinión! Califica a L&G OPTICS en Google";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Drawn as a shape because the built-in font has no star glyph.
const Star = () => <svg width="96" height="96" viewBox="0 0 24 24" style={{ margin: "0 8px" }}>
  <path fill="#facc15" d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
</svg>;

export default function Image() {
  return new ImageResponse(<div style={{ background: "#1e3a8a", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px" }}>
    <div style={{ display: "flex" }}><Star /><Star /><Star /><Star /><Star /></div>
    <div style={{ fontSize: 100, fontWeight: 700, marginTop: 28 }}>¡Déjanos tu opinión!</div>
    <div style={{ fontSize: 38, color: "#bfdbfe", marginTop: 16 }}>Cuéntanos cómo te fue en L&amp;G OPTICS</div>
    <div style={{ display: "flex", background: "white", color: "#1e3a8a", fontSize: 40, fontWeight: 700, padding: "20px 52px", borderRadius: 999, marginTop: 44 }}>Toca aquí para calificarnos en Google</div>
  </div>, size);
}
