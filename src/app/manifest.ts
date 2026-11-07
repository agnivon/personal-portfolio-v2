import { MetadataRoute } from "next";
import { AUTHOR_NAME } from "@/config/env.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${AUTHOR_NAME} | Portfolio`,
    short_name: AUTHOR_NAME,
    description:
      "Full-Stack Developer and Software Engineer crafting modern web and mobile applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
