interface TechProps {
  description: string;
  children?: React.ReactNode;
}

interface WorkExperienceProps {
  title: string;
  role: string;
  line?: boolean;
  sector: string;
  time: string;
  children?: React.ReactNode;
}

interface EducationItemProps {
  time: string;
  line?: boolean;
  children?: React.ReactNode;
  description: string;
}

export type { TechProps, WorkExperienceProps, EducationItemProps };
