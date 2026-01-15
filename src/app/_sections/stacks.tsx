"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/wrappers/container";
import { techStack, otherSkills, SkillItem } from "@/data/skill-and-tools";
import { Crown } from "lucide-react";

export type Skill = {
  name: string;
  logo?: string;
  icon?: string;
  url?: string;
};

const primary = techStack as Skill[];
const secondary = otherSkills as Skill[];

const spring = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.6,
} as const;

function LogoTile({ s }: { s: Skill }) {
  const title = s.name ?? "Unknown";
  const logoSrc = s.logo || s.icon || null;
  const initials = title
    .split(" ")
    .map((t) => t[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const content = (
    <motion.div
      layout
      transition={spring}
      className="relative isolate cursor-target flex aspect-square items-center justify-center rounded-md md:rounded-2xl border bg-card/80 p-1 md:p-5 shadow-sm backdrop-blur-sm hover:shadow-md h-25 md:h-32 lg:h-32"
      whileHover={{ y: -2 }}
    >
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={title}
          width={96}
          height={96}
          className="object-contain md:max-h-15 max-h-10"
        />
      ) : (
        <span className="text-2xl font-semibold tracking-wider opacity-80">
          {initials}
        </span>
      )}
      <span className="pointer-events-none w-full text-center absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/80">
        {title}
      </span>
    </motion.div>
  );

  if (s.url) {
    return (
      <a href={s.url} target="_blank" rel="noreferrer" aria-label={title}>
        {content}
      </a>
    );
  }
  return content;
}

export default function StacksShowcase() {
  const [tab, setTab] = React.useState<"primary" | "secondary">("primary");

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  } as const;

  const Grid = ({ items }: { items: SkillItem[] }) => (
    <motion.div
      layout
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8"
    >
      {items.map((s, i) => (
        <motion.div key={`${s.name}-${i}`} variants={item}>
          <LogoTile s={s} />
        </motion.div>
      ))}
    </motion.div>
  );

  const title = tab === "primary" ? "Stacks & Tools" : "Additional Skills";
  const subtitle =
    tab === "primary"
      ? "Skill utama yang membantuku dalam pengembangan aplikasi."
      : "Skill pendukung untuk delivery dan kolaborasi.";

  const items = tab === "primary" ? primary : secondary;

  return (
    <Container>
      <div className="w-full max-h-screen relative my-25 md:my-10">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-6xl  font-bold tracking-tight">{title}</h2>
            <p className="text-base text-muted-foreground">{subtitle}</p>
          </div>
          <Crown className="absolute -top-10 md:-top-8 size-15 md:size-20 text-primary rotate-10 md:-right-6 -right-1" />

          <button
            type="button"
            onClick={() =>
              setTab((t) => (t === "primary" ? "secondary" : "primary"))
            }
            className="rounded-xl border px-4 py-2 text-sm font-medium bg-muted/40 hover:bg-muted transition-colors"
            aria-pressed={tab === "secondary"}
            aria-label={
              tab === "primary"
                ? "Tampilkan Additional Skills"
                : "Tampilkan Tech Stack"
            }
          >
            {tab === "primary" ? "Show Additional Skills" : "Show Tech Stack"}
          </button>
        </div>

        <motion.div layout className="mb-8 h-1 w-full rounded-full bg-muted">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="h-full rounded-full bg-primary"
            style={{ width: tab === "primary" ? "100%" : "50%" }}
          />
        </motion.div>

        <section>
          <Grid items={items} />
        </section>
      </div>
    </Container>
  );
}
