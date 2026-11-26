// Seasonal offers shown in the banner at the top of every page.
// Add an entry and deploy; it appears on `from` and disappears by itself after `until`
// (store-local dates, inclusive). PROFECO requires honouring what is advertised, so every
// entry must state its real conditions. Only publish offers the owners have approved.
//
// Example:
// { id: "navidad-2026", from: "2026-12-01", until: "2026-12-24",
//   text: "Estrena lentes en Navidad: pide antes del 15 de diciembre.",
//   conditions: "Vigencia al 24 de diciembre de 2026. Sujeto a disponibilidad.",
//   whatsapp: "Hola, vi la promoción de Navidad en su página y quiero más información." },
export type Promotion = { id: string; from: string; until: string; text: string; conditions: string; whatsapp: string };
export const promotions: Promotion[] = [];

/** The promotion valid on a store-local YYYY-MM-DD date, if any. */
export function activePromotion(today: string, list: Promotion[] = promotions) {
  return list.find(promo => promo.from <= today && today <= promo.until);
}
