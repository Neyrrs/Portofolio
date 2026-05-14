export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image: string;
  preview: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Solearn",
    description:
      "Landing page untuk Solearn, aplikasi mobile pembelajaran berbasis AI.",
    stack: ["Next.js", "Shadcn", "Motion", "Axios"],
    image: "/projects/solearn.png",
    preview: "https://solearnai.com/",
    github: "",
  },
  {
    id: 2,
    title: "Solera",
    description:
      "Platform e-commerce kantin sekolah — siswa dan guru bisa pesan makanan langsung dari perangkat mereka.",
    stack: ["Next.js", "Shadcn", "Tailwind", "Tanstack Query"],
    image: "/projects/solera.png",
    preview: "https://solera.id",
    github: "",
  },
  {
    id: 3,
    title: "Giunco",
    description: "Website katalog produk untuk brand parfum lokal Giunco.",
    stack: ["Laravel", "Tailwind", "GSAP"],
    image: "/projects/giunco.png",
    preview: "https://giunco.id",
    github: "",
  },
  {
    id: 4,
    title: "Ezwan Ibnu Yassar Portfolio",
    description:
      "Website portofolio pribadi dengan animasi halus, interaksi dinamis, dan desain modern.",
    stack: ["Next.js", "GSAP", "Tailwind", "Motion"],
    image: "/projects/portofolio.png",
    preview: "https://portofolio-ms8x.vercel.app/",
    github: "https://github.com/Neyrrs/Portofolio",
  },

  {
    id: 5,
    title: "Astrocheck",
    description:
      "Sistem manajemen buku tamu digital untuk perpustakaan sekolah, dilengkapi dashboard admin.",
    stack: ["Next.js", "Tailwind", "Recharts", "React Hook Form"],
    image: "/projects/Astrocheck.png",
    preview: "https://astrocheck.smkn1cibinong.sch.id/",
    github: "",
  },

  // {
  //   id: 6,
  //   title: "Website OSIS",
  //   description: "Aplikasi desktop untuk memanajemen sistem booking online",
  //   stack: ["Next.js", "Motion", "Tanstack Query", "Axios"],
  //   image: "/projects/Fatality-report.jpeg",
  //   preview: "",
  //   github: "https://github.com/Neyrrs/Learnify",
  // },
];
