import {
  SiChai,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiJest,
  SiMocha,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSanity,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { CodeIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

const SkillsSection = ({ skills }: { skills: string[] }) => {
  return (
    <section id="skills" className="my-20 max-w-5xl mx-auto px-4 md:px-10 scroll-mt-32">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 mb-10 text-center font-heading">
        Expertise
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mx-auto w-full">
        {skills.map((e) => {
          const [_, color] = getSkillIconAndColor(e.toLowerCase());

          return (
            <div
              key={e}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-zinc-800/80 cursor-default shadow-sm hover:shadow-cyan-500/10"
            >
              <div 
                className="transition-colors duration-300 group-hover:text-cyan-400"
                style={{ color: "currentColor" }}
              >
                <SkillIcon skill={e} color={color} />
              </div>
              <span className="text-zinc-400 font-medium tracking-wide group-hover:text-zinc-100 transition-colors duration-300">
                {e}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

function getSkillIconAndColor(skill: string): [IconType, string] {
  if (skill.startsWith("next")) return [SiNextdotjs, "#000000"];
  if (skill.startsWith("typescript")) return [SiTypescript, "#3178C6"];
  if (skill.startsWith("tailwind")) return [SiTailwindcss, "#06B6D4"];
  if (skill.startsWith("redux")) return [SiRedux, "#764ABC"];
  if (skill.startsWith("mongodb")) return [SiMongodb, "#47A248"];
  if (skill.startsWith("mysql")) return [SiMysql, "#4479A1"];
  if (skill.startsWith("postgresql")) return [SiPostgresql, "#4169E1"];
  if (skill.startsWith("node")) return [SiNodedotjs, "#5FA04E"];
  if (skill.startsWith("express")) return [SiExpress, "#000000"];
  if (skill.startsWith("spring")) return [SiSpring, "#6DB33F"];
  if (skill.startsWith("prisma")) return [SiPrisma, "#2D3748"];
  if (skill.startsWith("passport")) return [SiPassport, "#34E27A"];
  if (skill.startsWith("mongoose")) return [SiMongoose, "#47A248"];
  if (skill.startsWith("mocha")) return [SiMocha, "#8D6748"];
  if (skill.startsWith("chai")) return [SiChai, "#A30701"];
  if (skill.startsWith("jest")) return [SiJest, "#C21325"];
  if (skill.startsWith("git")) return [SiGit, "#F05032"];
  if (skill.startsWith("flutter")) return [SiFlutter, "#02569B"];
  if (skill.startsWith("dart")) return [SiDart, "#0175C2"];
  if (skill.startsWith("firebase")) return [SiFirebase, "#DD2C00"];
  if (skill.startsWith("flask")) return [SiFlask, "#3BABC3"];
  if (skill.startsWith("django")) return [SiDjango, "#092E20"];
  if (skill.startsWith("fastapi")) return [SiFastapi, "#009688"];
  if (skill.startsWith("sanity")) return [SiSanity, "#F03E2F"];
  if (skill.startsWith("docker")) return [SiDocker, "#2496ED"];

  return [CodeIcon, "#888888"];
}

const SkillIcon = ({ skill, color }: { skill: string, color: string }) => {
  const [Icon] = getSkillIconAndColor(skill.toLowerCase());
  if (Icon) {
    // using currentColor so it respects the group-hover text color change, 
    // but applying the brand color normally if desired? 
    // For pure minimalism we'll rely on the text color cascade.
    return <Icon className="w-5 h-5" />;
  }
  return <></>;
};
