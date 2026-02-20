
export const WorkExperience = (props) => {
    const { title, role, line, sector, time, children } = props
    return (
        <>
            <div className="relative my-4">
                <h3 className="text-lg font-bold">{title}</h3>
                {role && (
                    <h4 className="relative text-sm italic font-medium opacity-70 top-0.5">
                        {role}
                    </h4>
                )}
                <p className="pt-2 pr-0 md:pr-0 print:pr-5 print:pt-2">{children}</p>
                <time className="relative right-0 flex items-center gap-2 text-xs md:italic top-2 print:items-end print:m-0 print:flex-col md:items-end md:flex-col md:absolute print:absolute">
                    {sector && (
                      <>
                        <span className="text-xs uppercase">
                            {sector}
                        </span>
                        <span className="md:hidden print:hidden">&bull;</span>
                    </>
                    )}
                    {time}
                </time>
            </div>
            {line && <hr className="mb-3 border-dashed border-zinc-300 dark:border-zinc-600 " />}
        </>
    );
};