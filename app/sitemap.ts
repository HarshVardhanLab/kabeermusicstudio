import type { MetadataRoute } from "next";
import { programs } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const base = siteUrl.replace(/\/$/, "");
  const routes = ["", "/programs", ...programs.map(program => `/programs/${program.slug}`), "/traditions", "/artists", "/videos", "/about", "/faq", "/contact", "/book"];
  return routes.map(route => ({ url: `${base}${route}`, changeFrequency: route === "/videos" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/book" ? 0.9 : 0.7 }));
}
