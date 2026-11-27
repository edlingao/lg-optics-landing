// Shared public business facts. Do not add coordinates or credentials without
// verifying them with the owner; the old site contained conflicting values.
export const business = {
  name: "L&G OPTICS",
  url: "https://www.lg-optics.com",
  phone: "+522213374152",
  phoneLabel: "(221) 337-4152",
  email: "info@lg-optics.com",
  streetAddress: "Calle 45 Sur #2910 Local 1 PB",
  neighborhood: "Nueva Antequera",
  city: "Puebla",
  postalCode: "72180",
  address: "Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180",
  timeZone: "America/Mexico_City",
  hours: ["Lunes a viernes: 11:00 AM – 6:00 PM", "Sábados: 11:00 AM – 3:00 PM", "Domingos: cerrado"],
  // Weekly schedule in minutes after midnight (store local time); index 0 is Sunday.
  // Keep in sync with `hours` above. Used for the "open now" label and schema.
  schedule: [null, [660, 1080], [660, 1080], [660, 1080], [660, 1080], [660, 1080], [660, 900]],
  // This place identifier comes from the existing site's Google Maps embed.
  mapsUrl: "https://www.google.com/maps?cid=6884045054718823123",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3263294003145!2d-98.23997922492424!3d19.049384682149725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7f957a3cb3d%3A0x5f890a81084ccad3!2sL%26G%20Optics!5e0!3m2!1ses-419!2smx!4v1748191405587!5m2!1ses-419!2smx",
  // Opens turn-by-turn directions to the store from the visitor's location.
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=L%26G+Optics%2C+Calle+45+Sur+2910%2C+Nueva+Antequera%2C+Puebla",
  // Opens the Google review box for the listing directly (used by /opinion).
  // Built from the listing's place ID and checked in a browser on 2026-11-25.
  // The owner's "Pedir opiniones" link (g.page/r/…/review) works the same way.
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJPcujV_nHz4UR08pMCIEKiV8",
  social: {
    instagram: "https://www.instagram.com/lg.optics",
    facebook: "https://www.facebook.com/profile.php?id=61571379852165",
    // The handle is lg.optics3; @lg.optics shows "No se pudo encontrar esta cuenta".
    tiktok: "https://www.tiktok.com/@lg.optics3",
  },
} as const;

// Every WhatsApp link carries a prefilled message so the conversation starts
// with context and the store can tell the lead came from the website.
export const defaultWhatsappMessage = "Hola, vi su página web y quiero más información.";
export function whatsappUrl(message: string = defaultWhatsappMessage) {
  return `https://wa.me/${business.phone.slice(1)}?text=${encodeURIComponent(message)}`;
}

// Shop categories first, as in a store; services and the address follow.
export const navigation = [
  { href: "/productos#prescription", label: "Ópticos" },
  { href: "/productos#sunglasses", label: "Sol" },
  { href: "/productos#blue-light", label: "Filtro azul" },
  { href: "/pricing", label: "Paquetes" },
  { href: "/examenes-de-vista", label: "Examen de la vista" },
  { href: "/ubicacion", label: "Tienda" },
] as const;

function clock(minutes: number) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": `${business.url}/#optician`,
  name: business.name,
  url: business.url,
  image: `${business.url}/LG-OPTICS.png`,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress", streetAddress: `${business.streetAddress}, ${business.neighborhood}`,
    addressLocality: business.city, addressRegion: "Puebla", postalCode: business.postalCode, addressCountry: "MX",
  },
  hasMap: business.mapsUrl,
  areaServed: "Puebla",
  sameAs: Object.values(business.social),
  openingHoursSpecification: business.schedule.flatMap((range, day) => range ? [{
    "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day],
    opens: clock(range[0]), closes: clock(range[1]),
  }] : []),
};
