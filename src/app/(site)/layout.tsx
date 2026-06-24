import RootLayout from "@/components/layouts/root-layout";
import AppProvider from "@/components/providers";
import { getSiteMetadata } from "@/config/metadata.config";
import type { Metadata } from "next";
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

export async function generateMetadata(): Promise<Metadata> {
  return getSiteMetadata();
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontInter.variable} ${fontSpaceGrotesk.variable} antialiased bg-zinc-950 text-zinc-50 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <AppProvider>
          <RootLayout>{children}</RootLayout>
        </AppProvider>
      </body>
    </html>
  );
}
