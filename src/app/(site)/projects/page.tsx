import ProjectsPage from "@/components/pages/projects-page";
import { AUTHOR_NAME } from "@/config/env.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `Featured software engineering projects, open-source work, and modern web applications built by ${AUTHOR_NAME}.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${AUTHOR_NAME}`,
    description: `Featured software engineering projects, open-source work, and modern web applications built by ${AUTHOR_NAME}.`,
    url: "/projects",
  },
};

export default ProjectsPage;
