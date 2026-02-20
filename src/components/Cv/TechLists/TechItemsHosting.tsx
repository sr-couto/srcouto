import { TechItem } from "./TechItem";

type TechProps = {
  lang?: string;
};

export const TechItemsHosting = (props: TechProps) => {
  return (
    <>
      <TechItem title="Lighthouse" percentage="80%" />
      <TechItem title="Netlify" percentage="70%" />
      <TechItem title="Vercel" percentage="70%" />
      <TechItem title="Cloudflare" percentage="70%" />
      <TechItem title="Cloudinary" percentage="60%" />
    </>
  );
};
