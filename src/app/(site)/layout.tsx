import RootLayout from "@/components/layouts/root-layout";
import AppProvider from "@/components/providers";
import { getSiteMetadata } from "@/config/metadata.config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return getSiteMetadata();
}

// export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black`}
      >
        <AppProvider>
          <RootLayout>{children}</RootLayout>
        </AppProvider>
      </body>
    </html>
  );
}
