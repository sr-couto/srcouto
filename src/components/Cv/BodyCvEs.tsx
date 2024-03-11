import { Tech } from "./Tech"
import { TechItem } from "./TechItem"
import { WorkExperience } from "./WorkExperience"
import { EducationItem } from "./EducationItem"

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
            <Tech description="Nivel avanzado de Adobe y Windows.">
              <TechItem title="illustrator" percentage="100%" />
              <TechItem title="photoshop" percentage="100%" />
              <TechItem title="afterEffects" percentage="50%" />
              <TechItem title="vsCode" percentage="100%" />
              <TechItem title="inDesign" percentage="50%" />
              <TechItem title="figma" percentage="60%" />
              <TechItem title="blender" percentage="60%" />
            </Tech>
            <Tech description="Enfoque de diseño accesible y adaptado a cualquier dispositivo." />
            <Tech description="Compatibilidad trabajando con todos los navegadores." />
            <Tech description="Maquetación web avanzada.">
              <TechItem title="html5" percentage="90%" />
              <TechItem title="svg" percentage="80%" />
              <TechItem title="sass" percentage="70%" />
              <TechItem title="tailwindCSS" percentage="100%" />
              <TechItem title="cssModules" percentage="70%" />
              <TechItem title="designSystems" percentage="70%" />
            </Tech>
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">
              desarrollador frontend
            </h3>
            <Tech description="Nivel intermedio de Linux con manejo de terminal de comandos y control de versiones." />
            <Tech description="Integración de aplicaciones y webs con diversos gestores de contenidos.">
              <TechItem title="contentfulCMS" percentage="70%" />
              <TechItem title="sanityCMS" percentage="70%" />
              <TechItem title="jekyll" percentage="50%" />
              <TechItem title="netlifyCms" percentage="50%" />
              <TechItem title="django" percentage="40%" />
            </Tech>
            <Tech description="Experiencia trabajando con diferentes frameworks">
              <TechItem title="astro" percentage="70%" />
              <TechItem title="vue.js" percentage="70%" />
              <TechItem title="next.js" percentage="50%" />
              <TechItem title="gatsby.js" percentage="70%" />
              <TechItem title="ember.js" percentage="40%" />
            </Tech>
            <Tech description="Puesta en producción y optimización">
              <TechItem title="netlify" percentage="60%" />
              <TechItem title="gh-pages" percentage="70%" />
              <TechItem title="vercel" percentage="60%" />
              <TechItem title="lighthouse" percentage="80%" />
              <TechItem title="cloudinary" percentage="80%" />
            </Tech>
          </div>
        </div>
        <div className="col-span-3 ">
          <Title title="Experiencia Laboral" />
          <WorkExperience
            title="Ministerio Público Fiscal "
            role="diseñador ux/ui y desarrollador frontend"
            sector="ámbito público"
            time="Nov. 2018 ‒ A la fecha"
            line
          >
            Desarrollo de interfaces y experiencia de usuario para todos los
            sitios y aplicaciones del Ministerio.
          </WorkExperience>
          <WorkExperience
            title="Cámara de Diputados de la Nación"
            role="diseñador y maquetador frontend"
            sector="ámbito público"
            time="Feb. 2014 ‒ Dic. 2015"
            line
          >
            Diseño de interfaz del Sistema Parlamentario Digital Digitalización
            de diversos procesos Parlamentarios. Creación de webs internas y
            externas de la institución.
          </WorkExperience>
          <WorkExperience
            title="Estudio Criteria"
            role="diseñador web junior"
            sector="ámbito privado"
            time="Feb. 2013 ‒ Mar. 2014"
            line
          >
            Diseño de marca y folleteria corporativa Diseño y maquetación de
            sitios webs corportivos.
          </WorkExperience>
          <WorkExperience
            title="Revision Alpha Hosting"
            role="diseñador web junior"
            sector="ámbito privado"
            time="Feb. 2011 ‒ Mar. 2013"
          >
            Maquetación de newsletters / sitios corporativos / Soporte técnico /
            Manejo básico de servidores.
          </WorkExperience>
          <Title title="Educación" />
          <EducationItem
            description="Cursado el 76,47% de la carrera."
            time="2007 - 2014"
            line
          >
            Diseño Gráfico (UBA)
          </EducationItem>
          <EducationItem
            description="Curso de refinamiento micro y macro tipográfico."
            time="2013"
            line
          >
            Tipitos Argentinos
            <i className="ml-1 text-sm italic font-normal normal-case opacity-80 print:text-xs">
              por Aldo de Losa
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
            description="Bachiller con capacitación en informática."
            time="2002 - 2007"
          >
            Escuela Secundaria
          </EducationItem>
        </div>
      </div>
    </>
  );
};

export default BodyCvEs;
