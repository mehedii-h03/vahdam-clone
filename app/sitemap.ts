import type { MetadataRoute } from "next";
import { site, staticRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({ url: new URL(path, site.url).href }));
}
