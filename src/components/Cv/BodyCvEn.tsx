import { Tech } from "./Tech";
import { TechItem } from "./TechItem";
import { WorkExperience } from "./WorkExperience";
import { EducationItem } from "./EducationItem";

const Title = ({ title }) => {
  return (
    <>
      <div className="mt-3">
        <div className="border-b-2 border-dotted border-zinc-300 print:border-zinc-800">
          <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-base dark:border-white print:!border-zinc-800 top-0.5">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

const BodyCv = () => {
  return (
    <>
      <div className="grid w-full max-w-2xl min-h-screen grid-cols-1 mx-auto mt-3 text-sm print:mt-0 print:!text-gray-900 dark:text-white md:gap-2 print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-6 print:pr-12 ">
          <div className="mt-3">
            <Title title="knowledge" />
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">
              ux and ui designer
            </h3>
            <Tech description="Advanced use of Adobe & Windows">
              <TechItem title="illustrator" percentage="100%" />
              <TechItem title="photoshop" percentage="100%" />
              <TechItem title="afterEffects" percentage="50%" />
              <TechItem title="vsCode" percentage="100%" />
              <TechItem title="inDesign" percentage="50%" />
              <TechItem title="figma" percentage="60%" />
              <TechItem title="blender" percentage="60%" />
            </Tech>
            <Tech description="Accessible design approach adapted to any device." />
            <Tech description="Compatibility working with web standards." />
            <Tech description="Advanced web layout.">
              <TechItem title="html5" percentage="90%" />
              <TechItem title="svg" percentage="80%" />
              <TechItem title="sass" percentage="70%" />
              <TechItem title="tailwindCSS" percentage="100%" />
              <TechItem title="cssModules" percentage="70%" />
              <TechItem title="designSystems" percentage="70%" />
            </Tech>
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">
              frontend developer
            </h3>
            <Tech description=" Intermediate level using Linux terminal and git version control." />
            <Tech description="Intermediate experience creating models for headless cms and connecting to frontends.">
              <TechItem title="contentfulCMS" percentage="70%" />
              <TechItem title="sanityCMS" percentage="70%" />
              <TechItem title="jekyll" percentage="50%" />
              <TechItem title="netlifyCms" percentage="50%" />
              <TechItem title="django" percentage="40%" />
            </Tech>
            <Tech description="Experience working with a variety of development frameworks.">
              <TechItem title="astro" percentage="70%" />
              <TechItem title="vue.js" percentage="70%" />
              <TechItem title="next.js" percentage="50%" />
              <TechItem title="gatsby.js" percentage="70%" />
              <TechItem title="ember.js" percentage="40%" />
            </Tech>
            <Tech description="Deploying and optimization.">
              <TechItem title="netlify" percentage="60%" />
              <TechItem title="gh-pages" percentage="70%" />
              <TechItem title="vercel" percentage="60%" />
              <TechItem title="lighthouse" percentage="80%" />
              <TechItem title="cloudinary" percentage="80%" />
            </Tech>
          </div>
        </div>
        <div className="col-span-3 ">
          <Title title="Work Experience" />
          <WorkExperience
            title="Public Prosecutor's Office"
            role="ux/ui designer and frontend developer"
            sector="public sector"
            time="Nov. 2018 ‒ Present"
            line
          >
            Updating and enhancing the current development design process and
            user experience for the websites and applications for the
            institution.
          </WorkExperience>
          <WorkExperience
            title="Chamber of Deputies - Argentina"
            role="ux designer and junior frontend developer"
            sector="public sector"
            time="Feb. 2014 ‒ Dec. 2015"
            line
          >
            Improve the user experience on the Digital Parliamentary System.
            Enhanced the parliamentary processes from web to print. Create
            internal and external websites for the institution.
          </WorkExperience>
          <WorkExperience
            title="Estudio Criteria"
            role="junior web designer"
            sector="private sector"
            time="Feb. 2013 ‒ Mar. 2014"
            line
          >
            Designer and developer of corporate websites. Brand design and
            corporate brochures.
          </WorkExperience>
          <WorkExperience
            title="Revision Alpha Hosting"
            role="junior web designer"
            sector="private sector"
            time="Feb. 2011 ‒ Mar. 2013"
          >
            Newsletter design / Company websites. Server Technical support /
            Basic management of hosting servers.
          </WorkExperience>
          <Title title="Education" />
          <EducationItem
            description="9 years and made 80.32% of the career"
            time="2007 - 2014 | 2024 to present"
            line
          >
            Graphic Design student (UBA)
          </EducationItem>
          <EducationItem description="Orthotypography course." time="2013" line>
            Tipitos Argentinos
            <i className="ml-1 text-sm italic font-normal normal-case opacity-80 print:text-xs">
              by Aldo de Losa
            </i>
          </EducationItem>
          <EducationItem
            description="First Certificate Exam"
            time="1999 - 2007"
            line
          >
            Clover english centre
          </EducationItem>
          <EducationItem
            description="Focus on computer programming."
            time="2002 - 2007"
          >
            High school
          </EducationItem>
        </div>
      </div>
    </>
  );
};

export default BodyCv;
