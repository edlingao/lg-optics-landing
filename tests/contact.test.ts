import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact } from "../src/lib/contact";
import { createContactHandler } from "../src/lib/contact-handler";
const valid = { nombre: "Persona de prueba", telefono: "+52 (221) 337-4152", servicio: "examen", mensaje: "Consulta de disponibilidad" };
const request = (body: unknown) => new Request("https://example.test/api/contact", { method: "POST", body: JSON.stringify(body) });
test("phone-first form accepts and normalizes Mexican numbers without email", () => {
  assert.equal(validateContact(valid).data?.telefono, "2213374152");
  assert.deepEqual(validateContact({ ...valid, telefono: "2213374152" }).errors, {});
});
test("invalid fields are rejected before delivery", async () => {
  for (const body of [null, [], { ...valid, nombre: "A" }, { ...valid, telefono: "123" }, { ...valid, telefono: "abc2213374152" }, { ...valid, servicio: "inventado" }, { ...valid, mensaje: "x".repeat(2001) }, { ...valid, mensaje: {} }]) {
    assert.equal(validateContact(body).data, undefined);
    const handler = createContactHandler({ configured: () => true, send: async () => { assert.fail("Invalid data must not be sent"); } });
    assert.equal((await handler(request(body))).status, 400);
  }
});
test("only business-provider acceptance produces success; response contains no contact data", async () => {
  const handler = createContactHandler({ configured: () => true, send: async data => {
    assert.equal(data.userEmail, undefined);
    assert.equal(data.userPhone, "2213374152");
    assert.equal(data.serviceRequested, "Examen de vista");
    return { success: true };
  } });
  const response = await handler(request(valid));
  const body = await response.json();
  assert.equal(response.status, 200); assert.equal(body.success, true);
  assert.match(body.message, /aún no está confirmada/);
  assert.equal(JSON.stringify(body).includes(valid.nombre), false);
  assert.equal(JSON.stringify(body).includes("2213374152"), false);
});
test("configuration errors and delivery failures never claim success", async () => {
  for (const deps of [
    { configured: () => false, send: async () => { assert.fail("Missing configuration must not send"); } },
    { configured: () => true, send: async () => ({ success: false }) },
    { configured: () => true, send: async () => { throw new Error("Provider unavailable"); } },
  ]) {
    const response = await createContactHandler(deps)(request(valid));
    assert.equal(response.status, 503); assert.equal((await response.json()).success, false);
  }
});
test("malformed JSON and oversized requests fail without delivery", async () => {
  const handler = createContactHandler({ configured: () => true, send: async () => { assert.fail("Must not send"); } });
  assert.equal((await handler(new Request("https://example.test", { method: "POST", body: "{" }))).status, 400);
  assert.equal((await handler(request({ ...valid, mensaje: "x".repeat(17000) }))).status, 413);
});
test("appointment preferences follow the store schedule", () => {
  const now = new Date("2026-11-25T12:00:00-06:00"); // Wednesday noon in Puebla
  const check = (extra: object) => validateContact({ ...valid, ...extra }, now);
  assert.equal(check({ dia: "2026-11-27", horario: "tarde" }).data?.dia, "2026-11-27");
  assert.equal(check({ dia: "2026-11-25", horario: "manana" }).data?.horario, "manana");
  assert.ok(check({ dia: "2026-11-24" }).errors.dia); // past
  assert.ok(check({ dia: "2026-11-29" }).errors.dia); // Sunday, closed
  assert.ok(check({ dia: "2026-02-30" }).errors.dia); // not a date
  assert.ok(check({ dia: "2026-11-28", horario: "tarde" }).errors.horario); // Saturday closes at 3 PM
  assert.ok(check({ horario: "noche" }).errors.horario);
  assert.ok(validateContact({ ...valid, dia: "2026-11-25" }, new Date("2026-11-25T18:30:00-06:00")).errors.dia); // already closed today
});
test("lead source is allow-listed and never blocks an inquiry", async () => {
  assert.equal(validateContact({ ...valid, origen: "instagram" }).data?.origen, "instagram");
  assert.equal(validateContact({ ...valid, origen: "<script>" }).data?.origen, "");
  const handler = createContactHandler({ configured: () => true, send: async data => {
    assert.equal(data.source, "Instagram");
    assert.equal(data.preferredTime, "Por la mañana (11:00 AM – 2:00 PM)");
    assert.match(data.preferredDay ?? "", /viernes/);
    return { success: true };
  } });
  const day = new Date(Date.now() + 86400000 * 7);
  while (day.getUTCDay() !== 5) day.setUTCDate(day.getUTCDate() + 1);
  assert.equal((await handler(request({ ...valid, origen: "instagram", horario: "manana", dia: day.toISOString().slice(0, 10) }))).status, 200);
});
