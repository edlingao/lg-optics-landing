import test from "node:test";
import assert from "node:assert/strict";
import { GET } from "../src/app/opinion/route";
import { business } from "../src/lib/business";

const visit = (agent: string) => GET(new Request("https://www.lg-optics.com/opinion", { headers: { "user-agent": agent } }));

test("people are redirected straight to the Google review box", () => {
  const response = visit("Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), business.reviewUrl);
});

test("link-preview crawlers get the share card instead of a redirect", async () => {
  for (const agent of ["WhatsApp/2.23.20.0", "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)", "TelegramBot (like TwitterBot)"]) {
    const response = visit(agent);
    assert.equal(response.status, 200, agent);
    const html = await response.text();
    assert.match(html, /<meta property="og:title" content="¡Déjanos tu opinión! \| L&amp;G OPTICS">/);
    assert.match(html, /<meta property="og:image" content="https:\/\/www\.lg-optics\.com\/opinion-card\.jpg">/);
  }
});

test("unknown preview fetchers get the card, and it still sends a person on to Google", async () => {
  for (const response of [GET(new Request("https://www.lg-optics.com/opinion")), visit("SomeNewChatApp/1.0"), visit("Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)")]) {
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /og:image/);
    assert.ok(html.includes(`location.replace(${JSON.stringify(business.reviewUrl)})`));
  }
});
