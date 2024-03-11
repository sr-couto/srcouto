
export const Tech = (props) => {
    const { description, children } = props
    return (
        <>
            <div className="flex mt-4 print:mt-3">
                <span className="w-6 mt-0.5 font-black">*</span>
                <div className="flex flex-col w-full">
                    <p>{description}</p>
                    {children && (
                        <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

