import { MetadataRoute } from 'next'

/** @returns {MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/,"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://www.totaltouchcleaning.com.ng//sitemap.xml",
    host: "https://www.totaltouchcleaning.com.ng/",
  };
}