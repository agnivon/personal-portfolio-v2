import ExperiencePage from "@/components/pages/experience-page";
import { getJobs } from "@/sanity/lib/queries";
import { AUTHOR_NAME } from "@/config/env.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A comprehensive timeline of professional experience, engineering roles, and career milestones.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: `Experience | ${AUTHOR_NAME}`,
    description:
      "A comprehensive timeline of professional experience, engineering roles, and career milestones.",
    url: "/experience",
  },
};

export default async function Page() {
  const experiences = await getJobs();

  return <ExperiencePage experiences={experiences} />;
}
