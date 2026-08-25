import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/data/services";
import { BLOG_POSTS } from "@/data/blog";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = ["", "/about", "/services", "/gallery", "/blog", "/book", "/contacts", "/terms", "/privacy"];
  const routes: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r}`, lastModified: new Date(), changeFrequency: "weekly", priority: r === "" ? 1 : 0.7,
  }));
  for (const slug of SERVICE_SLUGS) routes.push({ url: `${base}/services/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
  for (const p of BLOG_POSTS) routes.push({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.5 });
  return routes;
}
