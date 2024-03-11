
export const WorkExperience = (props) => {
    const { title, role, line, sector, time, children } = props
    return (
        <>
            <div className="relative my-3 print:mt-2">
                <h3 className="text-lg font-bold print:text-base">{title}</h3>
                {role && (
                    <h4 className="relative text-sm italic font-medium print:text-xs opacity-70 -top-1">
                        {role}
                    </h4>
                )}
                <p className="pt-1 pr-0 md:pr-0 print:pr-6 print:pt-0">{children}</p>
                <time className="relative right-0 flex items-center mb-3 space-x-3 text-xs md:italic top-2 print:space-x-0 print:items-end print:m-0 print:flex-col md:space-x-0 md:m-0 md:items-end md:flex-col md:absolute print:absolute print:top-1">
                    {sector && (
                        <span className="md:mb-0.5 text-xs mr-1 uppercase md:mr-0">
                            {sector}
                        </span>
                    )}
                    {time}
                </time>
            </div>
            {line && <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />}
        </>
    );
};