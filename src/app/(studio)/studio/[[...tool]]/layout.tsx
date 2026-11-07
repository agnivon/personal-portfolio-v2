import type { Metadata } from "next";
import { AUTHOR_NAME } from "@/config/env.config";

export const metadata: Metadata = {
  title: `Sanity Studio | ${AUTHOR_NAME}`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
