import { MetadataRoute } from "next";
import { getProjects } from "@/sanity/lib/queries";
import { getSiteUrl } from "@/config/env.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  try {
    const projects = await getProjects();
    const projectRoutes: MetadataRoute.Sitemap = (projects || [])
      .filter((project) => Boolean(project.slug))
      .map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));

    return [...routes, ...projectRoutes];
  } catch (error) {
    console.error("Failed to generate dynamic project sitemap entries:", error);
    return routes;
  }
}
