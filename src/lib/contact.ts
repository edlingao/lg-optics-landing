import { business } from "./business";
import { storeTime } from "./hours";

export const serviceLabels = {
  examen: "Examen de vista", lentes: "Cotización de lentes",
  informacion: "Información general", otro: "Otro",
} as const;
export const timeLabels = {
  manana: "Por la mañana (11:00 AM – 2:00 PM)",
  tarde: "Por la tarde (2:00 – 6:00 PM, lunes a viernes)",
} as const;
// Where the visitor came from, taken from an allow-listed ?utm_source= value.
// Lets the store see which channel produced each inquiry without analytics.
export const sourceLabels = {
  google: "Google Maps", instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok",
  whatsapp: "WhatsApp", qr: "un código QR", volante: "un volante",
} as const;
export type ContactInput = { nombre: string; telefono: string; servicio: string; mensaje: string; dia: string; horario: string; origen: string };

/** Today's date (YYYY-MM-DD) at the store. */
export function storeToday(now: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: business.timeZone }).format(now);
}
/** "sábado 28 de noviembre" for a YYYY-MM-DD date. */
export function formatDay(day: string) {
  return new Intl.DateTimeFormat("es-MX", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" }).format(new Date(`${day}T12:00:00Z`));
}
/** A visitor-facing summary of the requested appointment, used by email and WhatsApp. */
export function describeRequest(data: ContactInput) {
  return [
    data.servicio && `Servicio: ${serviceLabels[data.servicio as keyof typeof serviceLabels]}`,
    data.dia && `Día preferido: ${formatDay(data.dia)}`,
    data.horario && `Horario preferido: ${timeLabels[data.horario as keyof typeof timeLabels]}`,
  ].filter(Boolean) as string[];
}

export function validateContact(value: unknown, now = new Date()): { data?: ContactInput; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return { errors: { form: "Datos no válidos." } };
  const input = value as Record<string, unknown>;
  const read = (key: string) => typeof input[key] === "string" ? input[key].trim() : "";
  const nombre = read("nombre"), rawPhone = read("telefono"), servicio = read("servicio"), mensaje = read("mensaje");
  const dia = read("dia"), horario = read("horario");
  // An unknown source is dropped rather than rejected: it must never block an inquiry.
  const origen = Object.hasOwn(sourceLabels, read("origen")) ? read("origen") : "";
  if (nombre.length < 2 || nombre.length > 100) errors.nombre = "Escribe un nombre de 2 a 100 caracteres.";
  let telefono = rawPhone.replace(/\D/g, "");
  if (telefono.length === 12 && telefono.startsWith("52")) telefono = telefono.slice(2);
  if (!/^[\d\s()+-]+$/.test(rawPhone) || !/^\d{10}$/.test(telefono)) errors.telefono = "Escribe un teléfono de México de 10 dígitos, con +52 opcional.";
  if (servicio && !Object.hasOwn(serviceLabels, servicio)) errors.servicio = "Selecciona un servicio de la lista.";
  if (dia) {
    const date = new Date(`${dia}T12:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dia) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== dia) errors.dia = "Elige una fecha válida.";
    else if (dia < storeToday(now)) errors.dia = "Elige una fecha de hoy en adelante.";
    else if (!business.schedule[date.getUTCDay()]) errors.dia = "Ese día la tienda está cerrada. Elige de lunes a sábado.";
    else if (horario === "tarde" && business.schedule[date.getUTCDay()]![1] <= 15 * 60) errors.horario = "Ese día cerramos a las 3:00 PM. Elige el horario de la mañana.";
    else if (dia === storeToday(now) && storeTime(now).minutes >= business.schedule[date.getUTCDay()]![1]) errors.dia = "Hoy ya cerramos. Elige otro día.";
  }
  if (horario && !Object.hasOwn(timeLabels, horario)) errors.horario = "Selecciona un horario de la lista.";
  if (typeof input.mensaje !== "undefined" && typeof input.mensaje !== "string") errors.mensaje = "Escribe un mensaje de texto.";
  if (mensaje.length > 2000) errors.mensaje = "El mensaje debe tener como máximo 2,000 caracteres.";
  return Object.keys(errors).length ? { errors } : { data: { nombre, telefono, servicio, mensaje, dia, horario, origen }, errors };
}
