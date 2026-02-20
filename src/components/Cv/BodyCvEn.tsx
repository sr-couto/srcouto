import { Tech } from "./TechLists/Tech";
import { WorkExperience } from "./WorkExperience";
import { EducationItem } from "./EducationItem";
import { Title } from "./Title";
import { TechItem } from "./TechLists/TechItem";
import { TechItemsWindows } from "./TechLists/TechItemsWindows";
import { TechItemsWebDev } from "./TechLists/TechItemsWebDev";
import { TechItemsFrameworks } from "./TechLists/TechItemsFrameworks";
import { TechItemsCms } from "./TechLists/TechItemsCms";
import { TechItemsHosting } from "./TechLists/TechItemsHosting";

const BodyCv = () => {
  return (
    <>
      <div className="grid w-full max-w-2xl min-h-screen grid-cols-1 mx-auto mt-3 text-sm print:!text-gray-900 dark:text-white md:gap-2 print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-6 print:pr-12 ">
          <div className="mt-3">
            <Title title="knowledge" />
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">
              ux and ui designer
            </h3>
            <Tech description="Advanced use of Adobe & Windows">
              <TechItemsWindows />
            </Tech>
            <Tech description="Accessibility-focused design, optimized for all devices." />
            <h3 className="mt-8 text-base font-medium uppercase print:text-sm">
              frontend developer
            </h3>
            <Tech description="Compatibility working with all browsers and web standards." />
            <Tech description="Advanced web layout.">
              <TechItemsWebDev />
            </Tech>
            <Tech description=" Intermediate level using Linux terminal and git version control." />
            <Tech description="Experience working with a variety of development frameworks.">
              <TechItemsFrameworks />
            </Tech>
            <Tech description="Intermediate experience creating headless cms's and connecting to frontends.">
              <TechItemsCms />
            </Tech>

            <Tech description="Deploying and optimization.">
              <TechItemsHosting />
            </Tech>
          </div>
        </div>
        <div className="col-span-3 ">
          <Title title="Work Experience" />
          <WorkExperience
            title="Public Prosecutor's Office"
            role="ux/ui designer and frontend developer"
            sector="public sector"
            time="Nov. 2018 &#10143; Present"
            line
          >
            Updating the current design and development processes while
            enhancing the user experience across the institution’s websites and
            applications.
          </WorkExperience>
          <WorkExperience
            title="Chamber of Deputies - Argentina"
            role="ux designer and junior frontend developer"
            sector="public sector"
            time="Feb. 2014 &#10143; Dec. 2015"
            line
          >
            Improved the user experience of the Digital Parliamentary System.
            Enhanced parliamentary workflows from web to print. Developed
            internal and external websites for the institution.
          </WorkExperience>
          <WorkExperience
            title="Estudio Criteria"
            role="junior web designer"
            sector="private sector"
            time="Feb. 2013 &#10143; Mar. 2014"
            line
          >
            Designer and developer of corporate websites. Brand design and
            corporate brochures.
          </WorkExperience>
          <WorkExperience
            title="Revision Alpha Hosting"
            role="junior web designer"
            sector="private sector"
            time="Feb. 2011 &#10143; Mar. 2013"
          >
            Newsletter design / Company websites. Server Technical support /
            Basic management of hosting servers.
          </WorkExperience>
          <Title title="Education" />
          <EducationItem
            description="Made 81.32% of the career"
            time="2007 &#10143; 2014 & 2024 &#10143; present"
            sector="public sector"
            line
          >
            Graphic Design student (UBA)
          </EducationItem>
          <EducationItem
            description="Micro and macro typographic refinement."
            time="2013"
            sector="Course"
            line
          >
            Tipitos Argentinos
            <i className="ml-1 text-sm italic font-normal normal-case opacity-80 print:text-xs">
              by Aldo de Losa
            </i>
          </EducationItem>
          <EducationItem
            description="First Certificate Exam"
            time="1999 &#10143; 2007"
            sector="private sector"
            line
          >
            Clover english centre
          </EducationItem>
          <EducationItem
            description="Focus on computer programming."
            sector="private sector"
            time="2002 &#10143; 2007"
          >
            High school
          </EducationItem>
        </div>
      </div>
    </>
  );
};

export default BodyCv;
