import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://astream.somelogo.shop",
      lastModified: new Date(),
    },
    {
      url: "https://astream.somelogo.shop/search",
      lastModified: new Date(),
    },
    {
      url: "https://astream.somelogo.shop/details",
      lastModified: new Date(),
    },
    {
      url: "https://astream.somelogo.shop/stream",
      lastModified: new Date(),
    },
  ];
}
