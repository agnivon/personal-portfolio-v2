import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const GridBackground = ({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full rounded-md bg-black/[0.96] bg-grid-small-white/[0.1] antialiased  relative overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridBackground;
