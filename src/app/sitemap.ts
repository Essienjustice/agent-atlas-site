import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = ["/", "/docs", "/docs/architecture", "/docs/events", "/docs/risks", "/contracts"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}
