import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://astream-js.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://astream-js.vercel.app/search",
      lastModified: new Date(),
    },
    {
      url: "https://astream-js.vercel.app/details",
      lastModified: new Date(),
    },
    {
      url: "https://astream-js.vercel.app/stream",
      lastModified: new Date(),
    },
  ];
}
