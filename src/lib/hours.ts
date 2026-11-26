import { business } from "./business";

const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const weekdayIndex: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function label(minutes: number) {
  const hour = Math.floor(minutes / 60), minute = minutes % 60;
  return `${hour % 12 || 12}:${String(minute).padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}`;
}

/** Store-local weekday (0 = Sunday) and minutes after midnight for an instant. */
export function storeTime(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: business.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
  const get = (type: string) => parts.find(part => part.type === type)?.value ?? "";
  return { day: weekdayIndex[get("weekday")], minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

/** Regular weekly schedule only; holidays are not modelled. */
export function openStatus(now: Date): { open: boolean; text: string } {
  const { day, minutes } = storeTime(now);
  const today = business.schedule[day];
  if (today && minutes >= today[0] && minutes < today[1]) {
    return { open: true, text: `Abierto ahora · cierra a las ${label(today[1])}` };
  }
  if (today && minutes < today[0]) return { open: false, text: `Cerrado ahora · abre hoy a las ${label(today[0])}` };
  for (let offset = 1; offset <= 7; offset++) {
    const next = (day + offset) % 7, range = business.schedule[next];
    if (range) return { open: false, text: `Cerrado ahora · abre ${offset === 1 ? "mañana" : `el ${dayNames[next]}`} a las ${label(range[0])}` };
  }
  return { open: false, text: "Cerrado ahora" };
}
