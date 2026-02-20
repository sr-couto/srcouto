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

const BodyCvEs = () => {
  return (
    <>
      <div className="grid w-full max-w-2xl min-h-screen grid-cols-1 mx-auto mt-3 text-sm dark:text-white print:!text-gray-900 md:gap-2 print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-8 print:pr-8 ">
          <div className="mt-3">
            <Title title="Conocimientos" />
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">
              diseñador ux y ui
            </h3>
            <Tech description="Nivel avanzado de Windows y Adobe.">
              <TechItemsWindows />
            </Tech>
            <Tech link="/traducciones/el-diseno-centrado-en-las-personas" description="Diseño enfocado en la accesibilidad adaptada a todos los dispositivos." />
            <h3 className="mt-8 text-base font-medium uppercase print:text-sm">
              desarrollador frontend
            </h3>
             <Tech description="Compatibilidad trabajando con todos los navegadores." />
            <Tech description="Maquetación web avanzada.">
              <TechItemsWebDev />
            </Tech>
            <Tech description="Nivel intermedio de Linux con manejo de terminal de comandos y control de versiones." />
            <Tech description="Experiencia trabajando con diferentes frameworks">
              <TechItemsFrameworks />
            </Tech>
            <Tech description="Integración de aplicaciones y webs con diversos gestores de contenidos.">
              <TechItemsCms />
            </Tech>
            <Tech description="Puesta en producción y optimización">
              <TechItemsHosting lang="es" />
            </Tech>
          </div>
        </div>
        <div className="col-span-3 ">
          <Title title="Experiencia Laboral" />
          <WorkExperience
            title="Ministerio Público Fiscal "
            role="diseñador ux/ui y desarrollador frontend"
            sector="ámbito público"
            time="Nov. 2018 &#10143; A la fecha"
            line
          >
            Actualización de los procesos actuales de diseño y desarrollo.
            Mejorando la experiencia de usuario en los sitios web y aplicaciones
            de la institución.
          </WorkExperience>
          <WorkExperience
            title="Cámara de Diputados de la Nación"
            role="diseñador y maquetador frontend"
            sector="ámbito público"
            time="Feb. 2014 &#10143; Dic. 2015"
            line
          >
            Diseño de interfaz del Sistema Parlamentario Digital. Digitalización
            de diversos procesos parlamentarios. Creación de webs internas y
            externas de la institución.
          </WorkExperience>
          <WorkExperience
            title="Estudio Criteria"
            role="diseñador web junior"
            sector="ámbito privado"
            time="Feb. 2013 &#10143; Mar. 2014"
            line
          >
            Diseño de marca y folleteria corporativa Diseño y maquetación de
            sitios webs corportivos.
          </WorkExperience>
          <WorkExperience
            title="Revision Alpha Hosting"
            role="diseñador web junior"
            sector="ámbito privado"
            time="Feb. 2011 &#10143; Mar. 2013"
          >
            Maquetación de newsletters / sitios corporativos / Soporte técnico /
            Manejo básico de servidores.
          </WorkExperience>
          <Title title="Educación" />
          <EducationItem
            description="Cursado el 81.32% de la carrera."
            time="2007 &#10143; 2014 & 2024 &#10143; presente"
            sector="Sector público"
            line
          >
            Diseño Gráfico (UBA)
          </EducationItem>
          <EducationItem
            description="Refinamiento micro y macro tipográfico."
            time="2013"
            sector="Curso"
            line
          >
            Tipitos Argentinos
            <i className="ml-1 text-sm italic font-normal normal-case opacity-80 print:text-xs">
              por Aldo de Losa
            </i>
          </EducationItem>
          <EducationItem
            description="First Certificate Exam"
            time="1999 &#10143; 2007"
            sector="Sector privado"
            line
          >
            Clover english centre
          </EducationItem>
          <EducationItem
            description="Bachiller con capacitación en informática."
            time="2002 &#10143; 2007"
            sector="Sector privado"
          >
            Escuela Secundaria
          </EducationItem>
        </div>
      </div>
    </>
  );
};

export default BodyCvEs;
