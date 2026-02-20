import { Brackets } from "./Brackets";
import EmailCopy from "./EmailCopy";

const HeaderCv = () => {
  return (
    <>
      <div className="relative z-0 grid w-full max-w-2xl grid-cols-1 mx-auto sm:gap-2 print:max-w-full sm:grid-cols-5 print:grid-cols-5">
        <div className="relative w-full col-span-2 print:w-auto">
          <h1 className="relative z-10 flex flex-col font-sans text-2xl leading-relaxed tracking-widest uppercase dark:text-white print:!text-gray-900 print:text-xl">
            <span className="font-extrabold">santiago</span>
            <span className="font-medium">
              <span className="font-extrabold">r</span>odríguez
            </span>
            <span className="font-light">
              <span className="font-extrabold">c</span>outo
            </span>
          </h1>
          <Brackets/>
        </div>
        <div className="grid flex-1 w-full md:grid-cols-2 col-span-3 gap-3 mt-5 font-medium dark:text-white print:!text-gray-900 print:mt-0 print:grid-cols-2">
          <div className="flex flex-col my-2 space-y-1 text-sm print:space-y-1">
            <span>Buenos Aires (Argentina)</span>
            <span>Diseñador Web</span>
            <span>{"&"} Desarrollador Frontend</span>
          </div>
          <div className="flex flex-col my-2 gap-y-1 text-sm italic print:gap-y-1 print:text-right md:text-right">
            <a
              target="_blank"
              className="underline hover:opacity-50"
              rel="noopener noreferrer"
              href="https://srcouto.pages.dev/cv/"
            >
              srcouto.pages.dev/cv
            </a>
            <EmailCopy />
            <span className="print:block hidden underline select-all">santuan.web@gmail.com</span>
            <span className="hover:opacity-50 cursor-help">
              consultar portfolio
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCv;
