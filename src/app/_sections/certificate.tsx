"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  logo?: string;
};

const certificates: Certificate[] = [
  {
    id: "cert-react",
    title: "React Developer Certificate",
    issuer: "Meta",
    date: "2024-03-10",
    image: "/certificates/react-cert.png",
    logo: "/logos/meta.png",
  },
  {
    id: "cert-next",
    title: "Next.js Mastery",
    issuer: "Vercel",
    date: "2024-02-02",
    image: "/certificates/next-cert.png",
    logo: "/logos/vercel.png",
  },
  {
    id: "cert-node",
    title: "Node.js Backend Fundamentals",
    issuer: "Udemy",
    date: "2023-09-18",
    image: "/certificates/node-cert.png",
    logo: "/logos/udemy.png",
  },
  {
    id: "cert-design",
    title: "UI/UX for Developers",
    issuer: "Google",
    date: "2023-08-02",
    image: "/certificates/uiux-cert.png",
    logo: "/logos/google.png",
  },
  {
    id: "cert-ts",
    title: "TypeScript Professional",
    issuer: "Microsoft",
    date: "2023-07-01",
    image: "/certificates/ts-cert.png",
    logo: "/logos/microsoft.png",
  },
  {
    id: "cert-css",
    title: "Advanced CSS Layouts",
    issuer: "Frontend Masters",
    date: "2023-06-21",
    image: "/certificates/css-cert.png",
    logo: "/logos/frontendmasters.png",
  },
];

const spring = { type: "spring", stiffness: 160, damping: 22, mass: 0.7 } as const;
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
} as const;

function CertificateCard({ c }: { c: Certificate }) {
  return (
    <motion.div layout variants={item} transition={spring}>
      <Card className="overflow-hidden rounded-lg border bg-card/80 backdrop-blur-sm shadow-md">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={c.image}
            alt={c.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-100 flex flex-col justify-end p-4">
            <h3 className="text-base md:text-lg font-semibold text-foreground drop-shadow-sm">
              {c.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {c.logo && (
                <Image
                  src={c.logo}
                  alt={c.issuer}
                  width={16}
                  height={16}
                  className="object-contain rounded"
                />
              )}
              <span>{c.issuer}</span>•<span>{c.date}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function CertificatesSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".cert-card");
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full text-foreground py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight"> <span className="text-yellow-500">{"<"}</span> Certificates <span className="text-yellow-500">{"/>"}</span></h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 ">
            Beberapa sertifikat yang saya peroleh dari pelatihan dan program profesional.
          </p>
        </div>

        <motion.div
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificates.slice(0, 6).map((c) => (
            <div key={c.id} className="cert-card">
              <CertificateCard c={c} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}