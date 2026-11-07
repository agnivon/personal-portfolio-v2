import OpenGraphImage from "@/components/metadata/opengraph-image";
import { AUTHOR_NAME } from "@/config/env.config";
import { ImageResponse } from "next/og";

export const alt = `${AUTHOR_NAME} | Full-Stack Developer & Designer`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OpenGraphImage width={1200} height={630} />, {
    ...size,
  });
}
