import AboutPage from "@/components/pages/about-page";
import { AUTHOR_NAME } from "@/config/env.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${AUTHOR_NAME}, my background, full-stack engineering skills, and journey.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${AUTHOR_NAME}`,
    description: `Learn more about ${AUTHOR_NAME}, my background, full-stack engineering skills, and journey.`,
    url: "/about",
  },
};

export default AboutPage;
