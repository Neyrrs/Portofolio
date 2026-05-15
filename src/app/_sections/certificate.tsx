"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    id: "pkl",
    title: "Internship/PKL",
    issuer: "PT. Alus Astech",
    date: "2025-09-29",
    image: "/certificates/alustech.png",
    logo: "/icons/alus.png",
  },
  {
    id: "ketos",
    title: "Ketua Umum OSIS",
    issuer: "SMKN 1 Cibinong",
    date: "2025-2026",
    image: "/certificates/ketos.png",
    logo: "/icons/OSIS.PNG",
  },
];

const spring = {
  type: "spring",
  stiffness: 160,
  damping: 22,
  mass: 0.7,
} as const;
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
    <Dialog>
      <DialogTrigger asChild>
        <motion.div layout variants={item} transition={spring}>
          <Card className="cursor-pointer overflow-hidden rounded-lg border bg-card/80 p-0 backdrop-blur-sm shadow-md transition-all hover:ring-2 hover:ring-primary/50">
            <div className="relative aspect-video w-full overflow-hidden group">
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
      </DialogTrigger>
      <DialogContent className="max-w-2xl overflow-hidden border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{c.title}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full overflow-hidden rounded-sm">
          <Image
            src={c.image}
            alt={c.title}
            width={800}
            height={450}
            quality={100}
            className="object-contain"
            priority
          />
        </div>
        <div className="pt-4 flex items-center gap-2 bg-background/80 backdrop-blur-md border-t">
          <h3 className="text-lg font-semibold">{c.title}</h3> -
          <p className="text-muted-foreground">
            {c.issuer} • {c.date}
          </p>
        </div>
      </DialogContent>
    </Dialog>
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
    <section
      ref={sectionRef}
      id="certificate"
      className="relative w-full text-foreground py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            {" "}
            <span className="text-yellow-500">{"<"}</span> Certificates{" "}
            <span className="text-yellow-500">{"/>"}</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 ">
            Beberapa sertifikat yang saya peroleh dari pelatihan dan program
            profesional.
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
