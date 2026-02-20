type TechProps = {
  description?: string;
  link?: string;
  children?: React.ReactNode;
};

export const Tech = (props: TechProps) => {
  const { description, link, children } = props;
  return (
    <>
      <div className="flex mt-4 print:mt-3">
        <span className="w-6 mt-0.5 font-black">*</span>
        <div className="flex flex-col w-full">
          <p>{description}</p>
          {children && (
            <div className="flex gap-1.5 mt-2 flex-wrap items-start justify-start w-full text-sm italic font-medium">
              {children}
            </div>
          )}
          {link && (
            <a target="_blank" className="print:hidden mt-2 gap-1 flex group items-center justify-between p-1 bg-gray-100 dark:bg-gray-800 text-xs" href={link}>
              <span className="group-hover:underline underline-offset-2" >Leer artículo</span>
              <span>2 min.</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
