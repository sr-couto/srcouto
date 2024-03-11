
export const EducationItem = (props) => {
    const { time, line, children, description } = props
    return (
        <>
            <div className="relative my-3 print:mt-2">
                <h3 className="text-lg font-medium print:text-base">{children}</h3>
                <h4 className="text-base print:text-xs">{description}</h4>
                <time className="absolute right-0 italic opacity-70 top-1">{time}</time>
            </div>
            {line && <hr className="mb-3 border-dashed border-zinc-900 print:border-zinc-800 opacity-30"/>}
        </>
    );
};