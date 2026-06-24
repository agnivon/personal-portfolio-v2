import Image from "next/image";
import React from "react";
import { PROJECTS_V2_QUERYResult } from "@/sanity/lib/types";
import { getMicrolink } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = PROJECTS_V2_QUERYResult[number];

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  // Take top 6 projects for the featured section on landing page
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="w-full scroll-mt-32 max-w-5xl mx-auto px-4 md:px-10">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 mb-10 font-heading text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {featuredProjects.map((project) => (
          <Card project={project} key={project.name} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-800/80 text-zinc-100 hover:text-cyan-400 transition-all duration-300 px-6 py-3 rounded-full font-semibold flex items-center shadow-sm"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}

const Card = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <div className="h-full flex flex-col bg-zinc-900/40 backdrop-blur-md border border-zinc-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800/60 shadow-sm hover:shadow-cyan-500/5">
        <div className="w-full h-40 relative rounded-xl overflow-hidden bg-zinc-800 border border-zinc-800 mb-6 shrink-0">
          <Image
            fill
            src={project.projectUrl ? getMicrolink(project.projectUrl, 400, 300) : project.logo || ""}
            alt={project.name || ""}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-grow flex flex-col">
          <h3 className="font-bold text-zinc-100 group-hover:text-cyan-50 transition-colors font-heading text-xl mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed flex-grow">
            {project.tagline}
          </p>
          <div className="mt-6 flex items-center text-sm font-semibold text-zinc-500 group-hover:text-cyan-400 transition-colors">
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};
