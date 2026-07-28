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

export function getSiteUrl(): string {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    VERCEL_PRODUCTION_URL ||
    VERCEL_URL ||
    "localhost:3000";

  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }

  const protocol =
    VERCEL_ENV === "development" && !VERCEL_URL && !process.env.NEXT_PUBLIC_SITE_URL
      ? "http"
      : "https";

  return `${protocol}://${rawUrl}`;
}

