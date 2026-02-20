import { TechItem } from "./TechItem";

export const TechItemsWebDev = () => {
  return (
    <>
      <TechItem title="TailwindCSS" percentage="100%" />
      <TechItem title="HTML5" percentage="90%" />
      <TechItem title="Figma" percentage="80%" />
      <TechItem title="SVG" percentage="80%" />
      {/* <TechItem title="SASS" percentage="70%" /> */}
      <TechItem title="Design Systems" percentage="70%" />
      <TechItem title="CSS Variables" percentage="70%" />
      <TechItem title="CSS Modules" percentage="70%" />
    </>
  );
};
