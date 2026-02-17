import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demos/", "/test-reveal"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
