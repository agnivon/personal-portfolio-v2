"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
  SiChai,
  SiDart,
  SiExpress,
  SiFirebase,
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
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import SkillCard from "../ui/skill-card";
import { CodeIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

const SkillsSection = ({ skills }: { skills: string[] }) => {
  return (
    <section className="my-20 max-w-7xl mx-auto p-4">
      <h2 className="scroll-m-20 mb-6 text-3xl md:text-5xl font-semibold tracking-tight first:mt-0 text-center">
        Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto pt-10 place-content-center w-fit">
        {skills.map((e) => {
          const [_, color] = getSkillIconAndColor(e.toLowerCase());

          return (
            <SkillCard title={e} icon={<SkillIcon skill={e} />} key={e}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerStyle={{
                  backgroundColor: color,
                }}
                // colors={[
                //   [236, 72, 153],
                //   [232, 121, 249],
                // ]}
              />
            </SkillCard>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

function getSkillIconAndColor(skill: string): [IconType, string] {
  if (skill.startsWith("next")) {
    return [SiNextdotjs, "#000000"];
  }

  if (skill.startsWith("typescript")) {
    return [SiTypescript, "#3178C6"];
  }

  if (skill.startsWith("tailwind")) {
    return [SiTailwindcss, "#06B6D4"];
  }

  if (skill.startsWith("redux")) {
    return [SiRedux, "#764ABC"];
  }

  if (skill.startsWith("mongodb")) {
    return [SiMongodb, "#47A248"];
  }

  if (skill.startsWith("mysql")) {
    return [SiMysql, "#4479A1"];
  }

  if (skill.startsWith("postgresql")) {
    return [SiPostgresql, "#4169E1"];
  }

  if (skill.startsWith("node")) {
    return [SiNodedotjs, "#5FA04E"];
  }

  if (skill.startsWith("express")) {
    return [SiExpress, "#000000"];
  }

  if (skill.startsWith("spring")) {
    return [SiSpring, "#6DB33F"];
  }

  if (skill.startsWith("prisma")) {
    return [SiPrisma, "#2D3748"];
  }

  if (skill.startsWith("passport")) {
    return [SiPassport, "#34E27A"];
  }

  if (skill.startsWith("mongoose")) {
    return [SiMongoose, "#47A248"];
  }

  if (skill.startsWith("mocha")) {
    return [SiMocha, "#8D6748"];
  }

  if (skill.startsWith("chai")) {
    return [SiChai, "#A30701"];
  }

  if (skill.startsWith("jest")) {
    return [SiJest, "#C21325"];
  }

  if (skill.startsWith("git")) {
    return [SiGit, "#F05032"];
  }

  if (skill.startsWith("flutter")) {
    return [SiFlutter, "#02569B"];
  }

  if (skill.startsWith("dart")) {
    return [SiDart, "#0175C2"];
  }

  if (skill.startsWith("firebase")) {
    return [SiFirebase, "#DD2C00"];
  }

  return [CodeIcon, "#000000"];
}

const SkillIcon = ({ skill }: { skill: string }) => {
  const [Icon] = getSkillIconAndColor(skill.toLowerCase());
  if (Icon) {
    return <Icon className="size-20" />;
  }
  return <></>;
};
