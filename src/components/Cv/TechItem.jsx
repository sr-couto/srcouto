export const TechItem = ({ title, percentage }) => {
  return (
    <div className="mt-2 mr-2 text-sm font-medium border-b-2 group print:text-xs text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:!border-zinc-200 print:opacity-100">
      #{title}
      <hr
        style={{ width: `${percentage}` }}
        className={` border-t-0 border-b-2 top-0.5 relative border-zinc-600 group-hover:!w-full duration-300 dark:border-zinc-300 print:!border-zinc-600`}
      />
    </div>
  );
};
