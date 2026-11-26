import { test } from "node:test";
import assert from "node:assert/strict";
import { openStatus } from "../src/lib/hours";
// Puebla is UTC-6 all year.
const at = (iso: string) => openStatus(new Date(`${iso}-06:00`));
test("open status follows the store's weekly schedule in Puebla time", () => {
  assert.deepEqual(at("2026-11-25T12:00:00"), { open: true, text: "Abierto ahora · cierra a las 6:00 PM" }); // Wednesday
  assert.deepEqual(at("2026-11-25T10:59:00"), { open: false, text: "Cerrado ahora · abre hoy a las 11:00 AM" });
  assert.deepEqual(at("2026-11-25T18:00:00"), { open: false, text: "Cerrado ahora · abre mañana a las 11:00 AM" });
  assert.deepEqual(at("2026-11-28T14:59:00"), { open: true, text: "Abierto ahora · cierra a las 3:00 PM" }); // Saturday
  assert.deepEqual(at("2026-11-28T15:00:00"), { open: false, text: "Cerrado ahora · abre el lunes a las 11:00 AM" });
  assert.deepEqual(at("2026-11-29T12:00:00"), { open: false, text: "Cerrado ahora · abre mañana a las 11:00 AM" }); // Sunday
});
import { activePromotion } from "../src/lib/promotions";
test("a promotion shows only between its dates, inclusive", () => {
  const promo = { id: "x", from: "2026-12-01", until: "2026-12-24", text: "", conditions: "", whatsapp: "" };
  assert.equal(activePromotion("2026-11-30", [promo]), undefined);
  assert.equal(activePromotion("2026-12-01", [promo]), promo);
  assert.equal(activePromotion("2026-12-24", [promo]), promo);
  assert.equal(activePromotion("2026-12-25", [promo]), undefined);
});
