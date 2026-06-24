import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:-translate-y-1 hover:shadow-xl transition duration-300 shadow-none p-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 justify-between flex flex-col space-y-4 relative",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-heading font-bold text-zinc-100 mb-2 mt-2 text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-zinc-400 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
