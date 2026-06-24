import { getProjects } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-20 antialiased">
      <main className="max-w-5xl mx-auto px-4 md:px-10">
        <section className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-6 font-heading">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas for how it can
            be improved.
          </p>
        </section>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className="group block h-full"
            >
              <div className="h-full flex flex-col bg-zinc-900/40 backdrop-blur-md border border-zinc-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800/60 shadow-sm hover:shadow-cyan-500/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative flex-shrink-0 bg-zinc-950 rounded-xl p-2 border border-zinc-800">
                    <Image
                      src={project.logo || ""}
                      alt={project.name || "Project Logo"}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-50 transition-colors font-heading">
                    {project.name}
                  </h2>
                </div>
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed flex-grow">
                  {project.tagline}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-zinc-500 group-hover:text-cyan-400 transition-colors">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
