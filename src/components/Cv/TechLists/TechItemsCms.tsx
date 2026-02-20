import { TechItem } from "./TechItem";

export const TechItemsCms = () => {
  return (
    <>
      <TechItem title="Sanity" misc="cms" percentage="70%" />
      <TechItem title="Contentful" misc="cms" percentage="70%" />
      <TechItem title="Netlify" misc="cms" percentage="50%" />
      <TechItem title="Django" misc="backend" percentage="50%" />
      <TechItem title="Jekyll" percentage="50%" />
    </>
  );
};
