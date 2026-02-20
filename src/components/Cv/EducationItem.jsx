export const EducationItem = (props) => {
  const { time, line, children, description, sector } = props;
  return (
    <>
      <div className="relative my-3 print:mt-2">
        <h3 className="text-lg font-medium print:text-base">{children}</h3>
        <h4 className="text-sm">{description}</h4>
        <time className="relative right-0 flex items-center gap-1.5 text-xs md:italic top-2 print:items-end print:m-0 print:flex-col md:items-end md:flex-col md:absolute print:absolute print:top-1 print:gap-1.5">
          
          {sector && (
            <>
              <span className=" uppercase">
                {sector}
              </span>
              <span class="md:hidden print:hidden">&bull;</span>
            </>
          )}
          {time}
        </time>
      </div>
      {line && (
        <hr className="mb-3 border-dashed border-zinc-300 dark:border-zinc-600 print:border-zinc-800" />
      )}
    </>
  );
};
