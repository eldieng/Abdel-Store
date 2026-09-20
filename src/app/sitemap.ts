import { MetadataRoute } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/boutique`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  let productPages: MetadataRoute.Sitemap = [];
  try {
    const raw = readFileSync(
      join(process.cwd(), "data", "products.json"),
      "utf-8"
    );
    const products = JSON.parse(raw) as { id: string }[];
    productPages = products.map((product) => ({
      url: `${SITE_URL}/produit/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
  } catch {
    // pas de produits dynamiques si le fichier est absent
  }

  return [...staticPages, ...productPages];
}
