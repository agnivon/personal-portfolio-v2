"use client";

import {
  SiDart,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { animate } from "motion/react";
import { useEffect } from "react";
import AboutSparkles from "./about-sparkles";
import clsx from "clsx";

const AboutAnimatedLine = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  const icons = [
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiFlutter,
    SiDart,
    SiMongodb,
    SiNodedotjs,
    SiMysql,
  ];

  const sequence = new Array(icons.length).fill(null).map((_, i) => {
    return [
      `.circle-${i + 1}`,
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ];
  });

  useEffect(() => {
    animate(sequence, {
      // @ts-expect-error idk
      repeat: Infinity,
      repeatDelay: 0,
    });
  }, []);

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
      <div className="p-8 overflow-hidden flex flex-1 w-full h-full relative items-center justify-center">
        <div className="flex flex-row shrink-0 justify-center items-center gap-4">
          {icons.map((Icon, i) => {
            return (
              <Container className={`circle-${i + 1}`} key={i}>
                <Icon className="size-4 md:size-8" />
              </Container>
            );
          })}
        </div>
        <div className="h-full w-px absolute top-0 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <AboutSparkles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAnimatedLine;

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        `size-8 md:size-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
};
