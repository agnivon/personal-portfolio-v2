"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { PROJECTS_V2_QUERYResult } from "@/sanity/lib/types";
import { PortableText } from "next-sanity";
import { getMicrolink } from "@/lib/utils";

type Project = PROJECTS_V2_QUERYResult[number];

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section className="py-20 max-w-7xl mx-auto p-4">
      <h2 className="scroll-m-20 mb-6 text-3xl md:text-5xl font-semibold tracking-tight first:mt-0 px-4 text-center">
        Projects
      </h2>
      <Modal active={active} setActive={setActive} />
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-start pt-10 gap-4">
        {projects.map((e, index) => (
          <Card project={e} setActive={setActive} key={e.name} />
        ))}
      </ul>
    </section>
  );
}

const Card = ({
  project,
  setActive,
}: {
  project: Project;
  setActive: (x: Project | null) => void;
}) => {
  return (
    <motion.div
      layoutId={`card-${project.name}`}
      key={project.name}
      onClick={() => setActive(project)}
      className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col w-full">
        <motion.div layoutId={`image-${project.name}`}>
          <div className="flex justify-center items-center w-full h-full rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black py-8">
            <Image
              width={100}
              height={100}
              src={project.logo || ""}
              alt={project.name || ""}
              className="rounded-lg object-center object-contain"
            />
          </div>
        </motion.div>
        <div className="flex justify-center items-center flex-col">
          <motion.h3
            layoutId={`title-${project.name}`}
            className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
          >
            {project.name}
          </motion.h3>
          <motion.p
            layoutId={`description-${project.name}`}
            className="text-neutral-600 dark:text-neutral-400 text-center text-base"
          >
            {project.tagline}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const Modal = ({
  active,
  setActive,
}: {
  active: Project | null;
  setActive: (x: Project | null) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}`}>
                {active.projectUrl && (
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={getMicrolink(active.projectUrl, 200, 200)}
                    alt={active.coverImage?.alt || ""}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                )}
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.tagline}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.tagline}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.projectUrl || ""}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Visit
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.description && (
                      <PortableText value={active.description} />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
