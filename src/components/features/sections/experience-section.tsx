import { Timeline } from "@/components/ui/timeline";
import { JOBS_QUERYResult } from "@/sanity/lib/types";
import Image from "next/image";

const ExperienceSection = ({
  experiences,
}: {
  experiences: JOBS_QUERYResult;
}) => {
  const data = experiences.toReversed().map((e) => {
    const endDateSplit = e.endDate?.split("-") || [];
    return {
      title: `${endDateSplit[0]}`,
      content: (
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src={e.logo || ""}
              alt={e.name || ""}
              width={80}
              height={100}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg md:text-3xl mb-2 text-black dark:text-white max-w-4xl">
                {e.name}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                {e.jobTitle}
              </p>
            </div>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {e.description}
          </p>
        </div>
      ),
    };
  });
  return (
    <div className="relative w-full mt-20">
      <section className="max-w-7xl mx-auto relative">
        <h2 className="scroll-m-20 text-3xl md:text-5xl font-semibold tracking-tight first:mt-0 px-4 text-center">
          Work <span className="text-accent-foreground">Experience</span>
        </h2>
        <Timeline data={data} />
      </section>
    </div>
  );
};

export default ExperienceSection;
