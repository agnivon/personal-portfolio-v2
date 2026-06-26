import React from "react";
import { getSkillIconAndColor } from "./skills-section";

export default function SkillsGridSection({ skills }: { skills: string[] }) {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 md:px-10 scroll-mt-32">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 font-heading">
          Expertise
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => {
          const [Icon, color] = getSkillIconAndColor(skill.toLowerCase());
          return (
            <div
              key={skill}
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 cursor-default"
            >
              <Icon 
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300 hover:scale-110" 
                color={color} 
              />
              <span className="text-sm md:text-base font-medium tracking-wide text-zinc-300 transition-colors duration-300">
                {skill.split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
