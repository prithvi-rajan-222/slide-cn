import type { MetadataRoute } from "next";
import { blogSource, source } from "@/lib/source";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const docsPages = source.getPages().map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    priority: 0.7 as const,
  }));

  const blogPages = blogSource.getPages().map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    priority: 0.8 as const,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...docsPages,
    ...blogPages,
  ];
}
