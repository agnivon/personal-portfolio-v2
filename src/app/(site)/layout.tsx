import RootLayout from "@/components/layouts/root-layout";
import AppProvider from "@/components/providers";
import { SanityLive } from "@/sanity/lib/live";
import { getSiteMetadata } from "@/config/metadata.config";
import { getSiteUrl } from "@/config/env.config";
import { getProfiles } from "@/sanity/lib/queries";
import { PersonJsonLd } from "@/components/metadata/json-ld";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontSpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#09090b" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  return getSiteMetadata();
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profiles = await getProfiles();
  const profile = profiles?.[0];
  const siteUrl = getSiteUrl();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd profile={profile} siteUrl={siteUrl} />
      </head>
      <body
        className={`${fontInter.variable} ${fontSpaceGrotesk.variable} antialiased bg-zinc-950 text-zinc-50 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <AppProvider>
          <RootLayout>{children}</RootLayout>
          <SanityLive />
        </AppProvider>
      </body>
    </html>
  );
}
