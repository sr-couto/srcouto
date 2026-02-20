import * as HoverCard from "@radix-ui/react-hover-card";

type TechItemProps = {
  title: string;
  percentage: string;
  misc?: string;
  company?: string;
  description?: string;
};

export const TechItem = ({
  title,
  percentage,
  misc,
  company,
  description,
}: TechItemProps) => {
  function getGreenClass(percentage: string): string {
    const num = parseFloat(percentage);
    if (num >= 80) return "bg-emerald-500/80";
    if (num >= 60) return "bg-emerald-500/60";
    if (num >= 40) return "bg-amber-500/40";
    if (num >= 20) return "bg-amber-500/20";
    return "bg-amber-500/5";
  }

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <h3 className="border-b group border px-1 text-xs text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700  print:!border-zinc-200 print:!text-zinc-700 print:opacity-100 relative">
          {title}

          {misc && (
            <span className="text-xs translate-x-0.5 text-right scale-90 inline-block">
              ({misc})
            </span>
          )}
        </h3>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="w-[240px] group print:hidden rounded-md bg-white dark:bg-gray-800 p-4 border border-gray-400 dark:border-gray-700 "
          sideOffset={2}
          align="start"
          side="top"
        >
          <div className="flex flex-col gap-2">
            <div
              style={{ "--percentage": percentage } as React.CSSProperties}
              className={`absolute right-0 bottom-0 left-0 h-1 w-[var(--percentage)] ${getGreenClass(percentage)}`}
            >
              &nbsp;
            </div>
            <div className="flex items-baseline justify-between w-full gap-2">
              <div>
                {company === title && (
                  <div className="m-0  text-gray-600 dark:text-gray-100">
                    {title}
                    {misc && (
                      <span className="text-xs translate-x-0.5 text-right scale-90 inline-block">
                        ({misc})
                      </span>
                    )}
                  </div>
                )}
                {company !== title && (
                  <div className="m-0  text-gray-600 dark:text-gray-100">
                    <div className="m-0 font-medium text-gray-600 dark:text-gray-100">
                      {title}
                      {misc && (
                      <span className="text-xs translate-x-0.5 text-right scale-90 inline-block">
                        ({misc})
                      </span>
                    )}
                    </div>
                    {company && (
                      <div className="m-0 italic  text-gray-600 dark:text-gray-100">
                        {company}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="font-mono text-xs">
                <span className="opacity-50">Flow:</span>
                {percentage}
              </div>
            </div>
            {description && (
              <div className="m-0 text-sm text-gray-600 dark:text-gray-100">
                {description}
              </div>
            )}
          </div>
          <HoverCard.Arrow className="fill-white dark:fill-gray-800" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
