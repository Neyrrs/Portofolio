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
    id: "telkom-digi",
    title: "BNSP UI/UX junior",
    issuer: "Telkom Digiup",
    date: "2025-05-2",
    image: "/certificates/bnsp-uiux.png",
    logo: "/icons/telkomdigiup.png",
  },
  {
    id: "idn",
    title: "Junior Programmer",
    issuer: "IDN",
    date: "2023-11-12",
    image: "/certificates/idn.jpeg",
    logo: "/icons/idn.png",
  },
  {
    id: "clevio",
    title: "Clevio game Development",
    issuer: "Clevio",
    date: "2025-06-18",
    image: "/certificates/clevio.png",
    logo: "/icons/clevio.png",
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
      <Card className="overflow-hidden rounded-lg border bg-card/80 p-0 backdrop-blur-sm shadow-md">
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