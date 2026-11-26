import { test } from "node:test";
import assert from "node:assert/strict";
import { tagWhatsappHref } from "../src/lib/source";
import { whatsappUrl } from "../src/lib/business";
test("WhatsApp links gain the visitor's source once, and only WhatsApp links", () => {
  const tagged = tagWhatsappHref(whatsappUrl("Hola"), "instagram");
  assert.equal(new URL(tagged).searchParams.get("text"), "Hola (Los encontré por Instagram.)");
  assert.equal(tagWhatsappHref(tagged, "instagram"), tagged);
  assert.equal(tagWhatsappHref(whatsappUrl("Hola"), ""), whatsappUrl("Hola"));
  assert.equal(tagWhatsappHref("https://example.com/", "qr"), "https://example.com/");
});
