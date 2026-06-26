import {
  SiChai,
  SiChaiHex,
  SiDart,
  SiDartHex,
  SiDjango,
  SiDjangoHex,
  SiDocker,
  SiDockerHex,
  SiExpress,
  SiExpressHex,
  SiFastapi,
  SiFastapiHex,
  SiFirebase,
  SiFirebaseHex,
  SiFlask,
  SiFlaskHex,
  SiFlutter,
  SiFlutterHex,
  SiGit,
  SiGitHex,
  SiJest,
  SiJestHex,
  SiMocha,
  SiMochaHex,
  SiMongodb,
  SiMongodbHex,
  SiMongoose,
  SiMongooseHex,
  SiMysql,
  SiMysqlHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiPassport,
  SiPassportHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPrisma,
  SiPrismaHex,
  SiRedux,
  SiReduxHex,
  SiSanity,
  SiSanityHex,
  SiSpring,
  SiSpringHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiGooglegemini,
  SiGooglegeminiHex,
  SiLangchain,
  SiLangchainHex,
  SiLanggraph,
  SiLanggraphHex,
  SiConvex,
  SiConvexHex
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
      className={`flex shrink-0 justify-around gap-4 md:gap-6 px-2 md:px-3 py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
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

function adjustColorForDarkMode(hexColor: string): string {
  if (hexColor.startsWith("#")) {
    const hex = hexColor.substring(1);
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      
      if (luminance < 40) {
        if (luminance < 10) return "#fafafa"; // Return light zinc-50 for near-black
        const factor = 2.5;
        const newR = Math.min(255, Math.round(r * factor));
        const newG = Math.min(255, Math.round(g * factor));
        const newB = Math.min(255, Math.round(b * factor));
        return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
      }
    }
  }
  return hexColor;
}

export function getSkillIconAndColor(skill: string): [IconType, string] {
  const getBase = (): [IconType, string] => {
    if (skill.startsWith("next")) return [SiNextdotjs, SiNextdotjsHex];
    if (skill.startsWith("typescript")) return [SiTypescript, SiTypescriptHex];
    if (skill.startsWith("tailwind")) return [SiTailwindcss, SiTailwindcssHex];
    if (skill.startsWith("redux")) return [SiRedux, SiReduxHex];
    if (skill.startsWith("mongodb")) return [SiMongodb, SiMongodbHex];
    if (skill.startsWith("mysql")) return [SiMysql, SiMysqlHex];
    if (skill.startsWith("postgresql")) return [SiPostgresql, SiPostgresqlHex];
    if (skill.startsWith("node")) return [SiNodedotjs, SiNodedotjsHex];
    if (skill.startsWith("express")) return [SiExpress, SiExpressHex];
    if (skill.startsWith("spring")) return [SiSpring, SiSpringHex];
    if (skill.startsWith("prisma")) return [SiPrisma, SiPrismaHex];
    if (skill.startsWith("passport")) return [SiPassport, SiPassportHex];
    if (skill.startsWith("mongoose")) return [SiMongoose, SiMongooseHex];
    if (skill.startsWith("mocha")) return [SiMocha, SiMochaHex];
    if (skill.startsWith("chai")) return [SiChai, SiChaiHex];
    if (skill.startsWith("jest")) return [SiJest, SiJestHex];
    if (skill.startsWith("git")) return [SiGit, SiGitHex];
    if (skill.startsWith("flutter")) return [SiFlutter, SiFlutterHex];
    if (skill.startsWith("dart")) return [SiDart, SiDartHex];
    if (skill.startsWith("firebase")) return [SiFirebase, SiFirebaseHex];
    if (skill.startsWith("flask")) return [SiFlask, SiFlaskHex];
    if (skill.startsWith("django")) return [SiDjango, SiDjangoHex];
    if (skill.startsWith("fastapi")) return [SiFastapi, SiFastapiHex];
    if (skill.startsWith("sanity")) return [SiSanity, SiSanityHex];
    if (skill.startsWith("docker")) return [SiDocker, SiDockerHex];
    if (skill.startsWith("gemini")) return [SiGooglegemini, SiGooglegeminiHex];
    if (skill.startsWith("langchain")) return [SiLangchain, SiLangchainHex];
    if (skill.startsWith("langgraph")) return [SiLanggraph, SiLanggraphHex];
    if (skill.startsWith("convex")) return [SiConvex, SiConvexHex];

    return [CodeIcon, "#888888"];
  };

  const [icon, color] = getBase();
  return [icon, adjustColorForDarkMode(color)];
}

export const SkillIcon = ({ skill, color }: { skill: string, color: string }) => {
  const [Icon] = getSkillIconAndColor(skill.toLowerCase());
  if (Icon) {
    // using currentColor so it respects the group-hover text color change, 
    // but applying the brand color normally if desired? 
    return <Icon className="w-4 h-4 md:w-5 md:h-5" />;
  }
  return <></>;
};
