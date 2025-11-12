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
    title: "Astrocheck",
    description:
      "Sistem manajemen buku tamu perpustakaan Astrolitera SMKN 1 Cibinong yang membantu pustakawan mencatat, memantau, dan merekap data pengunjung secara digital. Dilengkapi dengan dashboard admin yang intuitif untuk memudahkan pengelolaan dan pelaporan aktivitas perpustakaan.",
    stack: [
      "Next.js",
      "Tailwind",
      "Recharts",
      "React Hook Form",
      "Sweet Alert 2",
      "Supabase",
    ],
    image: "/projects/Astrocheck.png",
    preview: "",
    github: "",
  },
  {
    id: 2,
    title: "Solera",
    description:
      "Platform e-commerce khusus kantin sekolah yang memudahkan siswa dan guru memesan makanan serta minuman langsung dari perangkat mereka. Dirancang dengan antarmuka sederhana dan sistem transaksi yang efisien untuk mempercepat aktivitas kantin sehari-hari.",
    stack: ["Next.js", "ShadCn", "Tailwind", "Sweet Alert 2", "MySQL"],
    image: "/projects/solera.png",
    preview: "https://solera.id",
    github: "https://github.com/username/solera",
  },
  {
    id: 3,
    title: "Ezwan Ibnu Yassar Portfolio",
    description:
      "Sebuah website portofolio kreatif milik Ezwan Ibnu Yassar, Frontend Developer dengan fokus pada desain interaktif, animasi dinamis, serta pengalaman pengguna yang halus dan intuitif.",
    stack: ["Next.js", "GSAP", "Tailwind", "Motion"],
    image: "/projects/portofolio.png",
    preview: "https://portofolio-ms8x.vercel.app/",
    github: "https://github.com/Neyrrs/Portofolio",
  },
  {
    id: 4,
    title: "Anteiku Caffee",
    description:
      "Sebuah website profil fiksi yang berasal dari anime Tokyo Ghoul, Aku bertugas sebagai Frontend Developer dengan fokus pengalaman pengguna yang halus dan intuitif.",
    stack: ["React.js", "Tailwind"],
    image: "/projects/Anteiku.png",
    preview: "",
    github: "",
  },
  {
    id: 5,
    title: "Learnify",
    description: "Aplikasi desktop untuk memanajemen sistem booking online",
    stack: ["C#", "MySQL"],
    image: "/projects/Learnify.png",
    preview: "",
    github: "https://github.com/username/learnify",
  },
  {
    id: 6,
    title: "Fatality Report",
    description: "Aplikasi desktop untuk memanajemen sistem booking online",
    stack: ["React.js", "Framer Motion", "GSAP"],
    image: "/projects/Fatality-report.jpeg",
    preview: "",
    github: "https://github.com/Neyrrs/Learnify",
  },
];
