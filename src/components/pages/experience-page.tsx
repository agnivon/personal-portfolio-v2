import { JOBS_QUERYResult } from "@/sanity/lib/types";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Footer from "@/components/features/footer";

const ExperiencePage = ({
  experiences,
}: {
  experiences: JOBS_QUERYResult;
}) => {
  const data = experiences.map((job) => {
    // Simple date formatter
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    const startDate = job.startDate ? formatDate(job.startDate) : "";
    const endDate = job.endDate ? formatDate(job.endDate) : "Present";
    
    return {
      title: `${startDate} - ${endDate}`,
      content: (
        <div key={job._id} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {job.logo && (
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
                <Image
                  src={job.logo}
                  alt={job.name || "Company Logo"}
                  fill
                  className="object-contain p-2"
                />
              </div>
            )}
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-zinc-100 font-heading">
                {job.jobTitle}
              </h4>
              <p className="text-cyan-500 font-medium">
                {job.name}
              </p>
            </div>
          </div>
          {job.description && (
            <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base whitespace-pre-wrap">
              {job.description}
            </p>
          )}
        </div>
      ),
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-32 pb-20">
        <section className="w-full">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-4 max-w-7xl mx-auto px-4 md:px-10 text-center font-heading">
            Work Experience
          </h1>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto px-4 mb-16">
            A comprehensive timeline of my professional journey, roles, and responsibilities.
          </p>
          <Timeline data={data} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
