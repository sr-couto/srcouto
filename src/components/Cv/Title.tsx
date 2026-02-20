type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <>
      <div className="mt-3">
        <div className="border-b-2 border-dotted border-zinc-300 print:border-zinc-800">
          <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-base dark:border-white print:!border-zinc-800 top-0.5 xl:top-px">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};
