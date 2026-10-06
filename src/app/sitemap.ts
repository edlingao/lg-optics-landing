import type { MetadataRoute } from "next";
import { business, navigation } from "@/lib/business";
export default function sitemap(): MetadataRoute.Sitemap {
  // No generated lastmod: deployment time is not a content modification date.
  return ["/", ...navigation.map(p => p.href), "/nosotros"].map(path => ({ url: new URL(path, business.url).href }));
}
