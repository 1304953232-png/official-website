import type { MetadataRoute } from "next";
import { activityPrograms } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

const staticRoutes = [
  "",
  "/about",
  "/what-we-do",
  "/venture-studio",
  "/ecosystem",
  "/focus-areas",
  "/case-studies",
  "/case-studies/yipai-tech",
  "/capital",
  "/team",
  "/contact",
  "/privacy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const activityRoutes = activityPrograms.map((program) => `/case-studies/${program.slug}`);

  return [...staticRoutes, ...activityRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: updatedAt,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/case-studies" ? 0.9 : 0.7
  }));
}
