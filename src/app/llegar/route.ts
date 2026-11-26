import { business } from "@/lib/business";
// Short link for flyers and social bios: opens turn-by-turn directions to the store.
export const GET = () => new Response(null, { status: 307, headers: { Location: business.directionsUrl, "X-Robots-Tag": "noindex" } });
