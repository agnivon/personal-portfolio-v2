import ExperiencePage from "@/components/pages/experience-page";
import { getJobs } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Agnivo Neogi",
  description: "A comprehensive timeline of my professional journey, roles, and responsibilities.",
};

export default async function Page() {
  const experiences = await getJobs();

  return <ExperiencePage experiences={experiences} />;
}
