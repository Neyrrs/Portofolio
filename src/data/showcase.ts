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
      "Sebuah website landing page dari sebuah aplikasi ai mobile based bernama solearnai.",
    stack: ["Next.js", "Shadcn", "Motion", "Axios"],
    image: "/projects/solearn.png",
    preview: "https://solearnai.com/",
    github: "",
  },
  {
    id: 2,
    title: "Solera",
    description:
      "Platform e-commerce khusus kantin sekolah yang memudahkan siswa dan guru memesan makanan serta minuman langsung dari perangkat mereka. Dirancang dengan antarmuka sederhana dan sistem transaksi yang efisien untuk mempercepat aktivitas kantin sehari-hari.",
    stack: ["Next.js", "Shadcn", "Tailwind", "Tanstack Query"],
    image: "/projects/solera.png",
    preview: "https://solera.id",
    github: "",
  },
  {
    id: 3,
    title: "Giunco",
    description:
      "Website yang berisi catalog produk dengan brand parfume bernama giunco.",
    stack: ["Laravel", "Tailwind", "GSAP"],
    image: "/projects/giunco.png",
    preview: "https://giunco.id",
    github: "",
  },
  {
    id: 4,
    title: "Ezwan Ibnu Yassar Portfolio",
    description:
      "Sebuah website portofolio kreatif milik Ezwan Ibnu Yassar, Frontend Developer dengan fokus pada desain interaktif, animasi dinamis, serta pengalaman pengguna yang halus dan intuitif.",
    stack: ["Next.js", "GSAP", "Tailwind", "Motion"],
    image: "/projects/portofolio.png",
    preview: "https://portofolio-ms8x.vercel.app/",
    github: "https://github.com/Neyrrs/Portofolio",
  },

  {
    id: 5,
    title: "Astrocheck",
    description:
      "Sistem manajemen buku tamu perpustakaan Astrolitera SMKN 1 Cibinong yang membantu pustakawan mencatat, memantau, dan merekap data pengunjung secara digital. Dilengkapi dengan dashboard admin yang intuitif untuk memudahkan pengelolaan dan pelaporan aktivitas perpustakaan.",
    stack: ["Next.js", "Tailwind", "Recharts", "React Hook Form"],
    image: "/projects/Astrocheck.png",
    preview: "",
    github: "",
  },

  {
    id: 6,
    title: "Website OSIS",
    description: "Aplikasi desktop untuk memanajemen sistem booking online",
    stack: ["Next.js", "Motion", "Tanstack Query", "Axios"],
    image: "/projects/Fatality-report.jpeg",
    preview: "",
    github: "https://github.com/Neyrrs/Learnify",
  },
];
