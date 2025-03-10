"use client";

import { PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

const SkillCard = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.1] p-4 relative size-48 rounded-lg overflow-hidden"
    >
      {/* <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 flex items-center justify-center md:absolute left-0 right-0 top-0 bottom-0">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl md:text-3xl md:opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 capitalize select-none text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SkillCard;
