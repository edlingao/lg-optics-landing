export const serviceLabels = {
  examen: "Examen de vista", lentes: "Cotización de lentes",
  informacion: "Información general", otro: "Otro",
} as const;
export type ContactInput = { nombre: string; telefono: string; servicio: string; mensaje: string };
export function validateContact(value: unknown): { data?: ContactInput; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return { errors: { form: "Datos no válidos." } };
  const input = value as Record<string, unknown>;
  const read = (key: string) => typeof input[key] === "string" ? input[key].trim() : "";
  const nombre = read("nombre"), rawPhone = read("telefono"), servicio = read("servicio"), mensaje = read("mensaje");
  if (nombre.length < 2 || nombre.length > 100) errors.nombre = "Escribe un nombre de 2 a 100 caracteres.";
  let telefono = rawPhone.replace(/\D/g, "");
  if (telefono.length === 12 && telefono.startsWith("52")) telefono = telefono.slice(2);
  if (!/^[\d\s()+-]+$/.test(rawPhone) || !/^\d{10}$/.test(telefono)) errors.telefono = "Escribe un teléfono de México de 10 dígitos, con +52 opcional.";
  if (servicio && !Object.hasOwn(serviceLabels, servicio)) errors.servicio = "Selecciona un servicio de la lista.";
  if (typeof input.mensaje !== "undefined" && typeof input.mensaje !== "string") errors.mensaje = "Escribe un mensaje de texto.";
  if (mensaje.length > 2000) errors.mensaje = "El mensaje debe tener como máximo 2,000 caracteres.";
  return Object.keys(errors).length ? { errors } : { data: { nombre, telefono, servicio, mensaje }, errors };
}
