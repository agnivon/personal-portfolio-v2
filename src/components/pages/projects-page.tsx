import { getProjects } from "@/sanity/lib/queries";
import GridBackground from "../features/ui/grid-background";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <GridBackground className="snap-y snap-normal w-full min-h-screen overflow-auto p-20">
      <main className="max-w-7xl mx-auto md:px-16 px-6">
        <section className="max-w-2xl mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
            Featured projects I&apos;ve built over the years
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas for how it can
            be improved.
          </p>
        </section>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {projects.map((project) => (
            <div
              key={project._id}
              className=" bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-x-4"
              >
                <Image
                  src={project.logo || ""}
                  width={60}
                  height={60}
                  alt={project.name || "Project Logo"}
                  className="bg-zinc-800 rounded-md p-2"
                />
                <div>
                  <h2 className="font-semibold mb-1">{project.name}</h2>
                  <div className="text-sm text-zinc-400 line-clamp-2">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </GridBackground>
  );
}
