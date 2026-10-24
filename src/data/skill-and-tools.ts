export type SkillItem = {
  name: string;
  logo?: string;
  icon?: string;
  url?: string;
};

export const techStack: SkillItem[] = [
  { name: "Red Hat Ansible", icon: "/icons/ansible.svg" },
  { name: "Redis Enterprise", icon: "/icons/redis.svg" },
  { name: "RHEL", icon: "/icons/rhel.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },
  { name: "Podman", icon: "/icons/podman.svg" },
  { name: "Typescript", icon: "/icons/typescript.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "NestJS", icon: "/icons/nestjs.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "docker", icon: "/icons/docker.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  { name: "Tanstack Query", icon: "/icons/reactquery.png" },
];

export const otherSkills: SkillItem[] = [
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "PHP", icon: "/icons/php.png" },
  { name: "C#", icon: "/icons/cs.png" },
  { name: "GDscript", icon: "/icons/gdscript.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "Dart", icon: "/icons/dart.png" },
];
