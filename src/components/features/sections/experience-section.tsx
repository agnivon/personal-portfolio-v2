"use client";

import { JOBS_QUERYResult } from "@/sanity/lib/types";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ExperienceSection = ({
  experiences,
}: {
  experiences: JOBS_QUERYResult;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Get recent 3 experiences
  const recentExperiences = experiences.slice(0, 3);

  // Simple date formatter
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="experience" className="w-full pb-20 mt-20 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 font-heading mb-4">
              Work Experience
            </h2>
            <p className="text-zinc-400 max-w-lg">
              A brief look at my recent roles. Explore my full career timeline for more details.
            </p>
          </div>
          <Link 
            href="/experience" 
            className="group flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-medium transition-colors"
          >
            View Full Experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[400px]">
          {/* Vertical Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {recentExperiences.map((job, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={job._id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative px-6 py-4 text-left rounded-lg transition-colors duration-200 ${
                    isActive ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-300 hover:bg-zinc-900/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-experience-tab"
                      className="absolute inset-0 bg-zinc-900 rounded-lg border border-zinc-800"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="font-semibold text-lg">{job.name}</div>
                    <div className="text-sm opacity-80 mt-1">{job.jobTitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3 relative bg-zinc-900/30 rounded-2xl border border-zinc-800/50 p-6 md:p-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {recentExperiences[activeIndex] && (() => {
                  const job = recentExperiences[activeIndex];
                  const startDate = job.startDate ? formatDate(job.startDate) : "";
                  const endDate = job.endDate ? formatDate(job.endDate) : "Present";

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                        <div className="flex items-center gap-4">
                          {job.logo && (
                            <div className="w-16 h-16 relative rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
                              <Image
                                src={job.logo}
                                alt={job.name || "Company Logo"}
                                fill
                                className="object-contain p-3"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-2xl font-bold text-zinc-100 font-heading">
                              {job.jobTitle}
                            </h3>
                            <p className="text-cyan-500 font-medium text-lg">
                              {job.name}
                            </p>
                          </div>
                        </div>
                        <div className="text-zinc-500 text-sm font-mono bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800/50 self-start sm:self-auto flex-shrink-0">
                          {startDate} - {endDate}
                        </div>
                      </div>
                      
                      {job.description && (
                        <div className="prose prose-invert prose-zinc max-w-none">
                          <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                            {job.description}
                          </p>
                        </div>
                      )}
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
