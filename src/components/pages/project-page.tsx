import { getProjectBySlug } from "@/sanity/lib/queries";
import GridBackground from "../features/ui/grid-background";
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
import { ExternalLinkIcon } from "lucide-react";
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
    <GridBackground className="snap-y snap-normal w-full min-h-screen overflow-auto p-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex max-sm:flex-col items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project?.name}
          </h1>

          <div className="mt-2.5 flex items-center gap-4">
            <a
              href={project?.projectUrl || ""}
              rel="noreferrer noopener"
              target="_blank"
              className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2 flex items-center"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5 mr-2" />
              Visit
            </a>
            {project?.githubUrl && (
              <a
                href={project.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
                className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2 flex items-center"
              >
                <SiGithub className="h-3.5 w-3.5 mr-2" />
                Github
              </a>
            )}
          </div>
        </div>

        {project?.screenshots && project.screenshots.length > 0 ? (
          <Carousel className="text-foreground">
            <CarouselContent>
              {project.screenshots?.map((sc) => {
                return (
                  <CarouselItem key={sc.alt}>
                    <Image
                      className="rounded-xl border border-zinc-800"
                      width={900}
                      height={460}
                      src={sc.image || ""}
                      alt={sc.alt || project.name || ""}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <Image
            className="rounded-xl border border-zinc-800"
            width={900}
            height={460}
            src={project?.coverImage?.image || ""}
            alt={project?.coverImage?.alt || ""}
          />
        )}

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          {project?.description && <PortableText value={project.description} />}
        </div>
      </div>
    </GridBackground>
  );
}
