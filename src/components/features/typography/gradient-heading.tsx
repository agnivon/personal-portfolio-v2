import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const GradientHeading = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h1
      className={clsx(
        "text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default GradientHeading;
