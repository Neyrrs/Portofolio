export type SkillItem = {
  name: string;
  logo?: string;
  icon?: string;
  url?: string;
};

export const techStack: SkillItem[] = [
  { name: "Javascript", icon: "/icons/javascript.png" },
  { name: "Typescript", icon: "/icons/typescript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "NestJS", icon: "/icons/nestjs.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "docker", icon: "/icons/docker.png" },
  { name: "Laravel", icon: "/icons/laravel.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "Tanstack Query", icon: "/icons/reactquery.png" },
];

export const otherSkills: SkillItem[] = [
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "Node.js", icon: "/icons/nodejs.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { name: "Frammer", icon: "/icons/frammer.png" },
  { name: "PHP", icon: "/icons/php.png" },
  { name: "C#", icon: "/icons/cs.png" },
  { name: "GDscript", icon: "/icons/gdscript.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Java", icon: "/icons/java.png" },
];
