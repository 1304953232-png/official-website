import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YAN VENTURES / 燕南创新",
    short_name: "YAN VENTURES",
    description: "Venture Studio for Early-Stage AI Innovation.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070a",
    theme_color: "#05070a",
    icons: [
      {
        src: "/brand/yan-ventures-mark-light.png",
        sizes: "any",
        type: "image/png"
      }
    ]
  };
}
