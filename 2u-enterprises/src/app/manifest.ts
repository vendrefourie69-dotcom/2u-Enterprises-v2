import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "2U Enterprises",
    short_name: "2U",
    description: "On-demand services brought to your door. We Come 2 U.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c9a227",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
