import { getProjectBySlug } from "@/sanity/lib/queries";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { ExternalLinkIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BackButton from "../ui/back-button";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getProjectMetadata } from "@/config/metadata.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const project = await getProjectBySlug(name);

  if (!project) return {};

  return getProjectMetadata(project);
}

export async function ProjectPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const project = await getProjectBySlug(name);
  if (!project) redirect("/");

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-12 antialiased">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        
        {/* Back Link */}
        <BackButton />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-bold text-4xl md:text-6xl tracking-tight mb-4 font-heading text-zinc-50">
              {project?.name}
            </h1>
            {project?.tagline && (
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project?.githubUrl && (
              <a
                href={project.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center justify-center bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full px-5 py-2.5 font-medium transition-colors"
              >
                <SiGithub className="w-4 h-4 mr-2" />
                Source
              </a>
            )}
            <a
              href={project?.projectUrl || ""}
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center justify-center bg-cyan-500 text-zinc-950 hover:bg-cyan-400 rounded-full px-6 py-2.5 font-bold transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              Visit Site
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        {project?.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Media Gallery */}
        <div className="mb-16">
          {project?.screenshots && project.screenshots.length > 0 ? (
            project.mobile ? (
              <div className="relative group px-12">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {project.screenshots.map((sc) => (
                      <CarouselItem key={sc.alt} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                        <div className="relative aspect-[9/16] w-full flex items-center justify-center">
                          <img
                            src={sc.image || ""}
                            alt={sc.alt || project.name || ""}
                            className="h-full w-auto rounded-3xl border border-zinc-800/80 shadow-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <CarouselPrevious className="relative static transform-none bg-zinc-950/80 border-zinc-700 text-white hover:bg-zinc-900 hover:text-cyan-400 pointer-events-auto" />
                    <CarouselNext className="relative static transform-none bg-zinc-950/80 border-zinc-700 text-white hover:bg-zinc-900 hover:text-cyan-400 pointer-events-auto" />
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.screenshots?.map((sc) => {
                      return (
                        <CarouselItem key={sc.alt}>
                          <div className="relative aspect-video w-full">
                            <Image
                              className="object-cover"
                              fill
                              src={sc.image || ""}
                              alt={sc.alt || project.name || ""}
                            />
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <div className="absolute inset-x-0 inset-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CarouselPrevious className="relative static transform-none bg-zinc-950/50 border-zinc-700 text-white hover:bg-zinc-900 hover:text-cyan-400" />
                    <CarouselNext className="relative static transform-none bg-zinc-950/50 border-zinc-700 text-white hover:bg-zinc-900 hover:text-cyan-400" />
                  </div>
                </Carousel>
              </div>
            )
          ) : project?.coverImage?.image ? (
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <Image
                className="object-cover"
                fill
                src={project.coverImage.image}
                alt={project.coverImage.alt || project.name || ""}
              />
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="prose prose-zinc prose-invert max-w-none prose-p:leading-relaxed prose-p:text-zinc-400 prose-headings:text-zinc-100 prose-a:text-cyan-500 hover:prose-a:text-cyan-400 prose-img:rounded-xl">
          {project?.description && <PortableText value={project.description} />}
        </div>
      </div>
    </div>
  );
}
