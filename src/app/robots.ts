import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${business.url}/sitemap.xml` };
}
