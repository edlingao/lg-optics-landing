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
  // This place identifier comes from the existing site's Google Maps embed.
  mapsUrl: "https://www.google.com/maps?cid=6884045054718823123",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3263294003145!2d-98.23997922492424!3d19.049384682149725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7f957a3cb3d%3A0x5f890a81084ccad3!2sL%26G%20Optics!5e0!3m2!1ses-419!2smx!4v1748191405587!5m2!1ses-419!2smx",
  social: {
    instagram: "https://www.instagram.com/lg.optics",
    facebook: "https://www.facebook.com/profile.php?id=61571379852165",
    tiktok: "https://www.tiktok.com/@lg.optics",
  },
} as const;

export function whatsappUrl(message?: string) {
  return `https://wa.me/${business.phone.slice(1)}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const navigation = [
  { href: "/productos", label: "Productos" },
  { href: "/examenes-de-vista", label: "Exámenes" },
  { href: "/pricing", label: "Paquetes" },
  { href: "/contacto", label: "Contacto" },
  { href: "/ubicacion", label: "Ubicación" },
] as const;

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
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "15:00" },
  ],
};
