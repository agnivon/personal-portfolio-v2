import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { encode } from "qss";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMicrolink(url: string, width: number, height: number) {
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width * 3,
    "viewport.height": height * 3,
  });
  return `https://api.microlink.io/?${params}`;
}
