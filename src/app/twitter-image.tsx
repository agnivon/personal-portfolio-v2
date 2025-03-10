import OpenGraphImage from "@/components/metadata/opengraph-image";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Agnivo Neogi's Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(<OpenGraphImage width={1200} height={630} />, {
    ...size,
  });
}
