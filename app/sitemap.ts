import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/sparkhack`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/decisia`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/aboltabol`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/circuistics`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/eureka`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/frames`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/inquizzitive`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/algomaniac`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/event/jutalks`,
    },
  ];
}
