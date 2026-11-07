export type VercelEnvironment = "development" | "preview" | "production";
export const VERCEL_ENV: VercelEnvironment = (process.env.VERCEL_ENV ||
  process.env.NEXT_PUBLIC_VERCEL_ENV ||
  "development") as VercelEnvironment;
export const VERCEL_URL =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "";
export const VERCEL_BRANCH_URL =
  process.env.VERCEL_BRANCH_URL ||
  process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ||
  "";
export const VERCEL_PRODUCTION_URL =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  "";
export const VERCEL_BYPASS = process.env.VERCEL_AUTOMATION_BYPASS_SECRET || "";

export const AUTHOR_NAME = "Agnivo Neogi";
export const AUTHOR_SITE = "https://agnivon.dev";

export function getSiteUrl(): string {
  // If explicitly configured via NEXT_PUBLIC_SITE_URL, prioritize it
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) {
    const cleanUrl = configuredUrl.replace(/\/+$/, "");
    return cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")
      ? cleanUrl
      : `https://${cleanUrl}`;
  }

  // In Vercel production environment
  if (VERCEL_ENV === "production") {
    if (VERCEL_PRODUCTION_URL && !VERCEL_PRODUCTION_URL.endsWith(".vercel.app")) {
      return `https://${VERCEL_PRODUCTION_URL.replace(/\/+$/, "")}`;
    }
    return AUTHOR_SITE;
  }

  // In Vercel preview deployment
  if (VERCEL_URL) {
    return `https://${VERCEL_URL.replace(/\/+$/, "")}`;
  }

  return "http://localhost:3000";
}
