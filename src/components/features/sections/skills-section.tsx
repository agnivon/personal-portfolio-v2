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

const Marquee = ({
  items,
  reverse = false,
  duration = "40s",
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
}) => {
  const content = (
    <div
      className={`flex shrink-0 justify-around gap-4 md:gap-6 px-2 md:px-3 py-2 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {items.map((e) => {
        const [_, color] = getSkillIconAndColor(e.toLowerCase());
        return (
          <div
            key={e}
            className="group flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-default"
          >
            <div
              className="transition-colors duration-300 group-hover:text-cyan-400 drop-shadow-[0_0_8px_currentColor]"
              style={{ color: "currentColor" }}
            >
              <SkillIcon skill={e} color={color} />
            </div>
            <span className="text-sm md:text-base font-medium tracking-wide text-zinc-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              {e}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex overflow-hidden w-full group/marquee">
      {/* 2 copies for infinite scroll */}
      {content}
      {content}
    </div>
  );
};

const SkillsSection = ({ skills }: { skills: string[] }) => {
  const third = Math.ceil(skills.length / 3);
  const row1_3 = skills.slice(0, third);
  const row2_3 = skills.slice(third, third * 2);
  const row3_3 = skills.slice(third * 2);

  const quarter = Math.ceil(skills.length / 4);
  const row1_4 = skills.slice(0, quarter);
  const row2_4 = skills.slice(quarter, quarter * 2);
  const row3_4 = skills.slice(quarter * 2, quarter * 3);
  const row4_4 = skills.slice(quarter * 3);

  return (
    <section id="skills" className="my-20 max-w-[100vw] overflow-hidden scroll-mt-32">
      <div className="max-w-5xl mx-auto px-4 md:px-10 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 text-center font-heading">
          Expertise
        </h2>
      </div>
      
      {/* Mobile/Small Screens: 4 rows */}
      <div className="relative flex md:hidden flex-col gap-4 overflow-hidden py-4 w-full">
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />
        
        {row1_4.length > 0 && <Marquee items={row1_4} duration="40s" />}
        {row2_4.length > 0 && <Marquee items={row2_4} duration="35s" reverse />}
        {row3_4.length > 0 && <Marquee items={row3_4} duration="45s" />}
        {row4_4.length > 0 && <Marquee items={row4_4} duration="38s" reverse />}
      </div>

      {/* Desktop/Medium+ Screens: 3 rows */}
      <div className="relative hidden md:flex flex-col gap-6 overflow-hidden py-4 w-full">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />
        
        {row1_3.length > 0 && <Marquee items={row1_3} duration="40s" />}
        {row2_3.length > 0 && <Marquee items={row2_3} duration="35s" reverse />}
        {row3_3.length > 0 && <Marquee items={row3_3} duration="45s" />}
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
    return <Icon className="w-4 h-4 md:w-5 md:h-5" />;
  }
  return <></>;
};
