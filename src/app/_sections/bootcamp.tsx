"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  MapPin,
  Clock,
  Code2,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type Training = {
  id: string;
  year: string;
  title: string;
  org: string;
  location?: string;
  duration?: string;
  tags?: string[];
  logo?: string;
  highlight?: string;
  description?: string;
  category: "bootcamp" | "course";
};

const trainings: Training[] = [
  {
    id: "digiup-2024",
    year: "2024",
    title: "Digiup Telkom Fullstack",
    org: "Telkom",
    duration: "12 weeks",
    location: "Online",
    tags: ["React", "Next.js", "Express", "MongoDB"],
    logo: "/logos/telkom.png",
    highlight: "Project end-to-end: auth, dashboard, API, deploy.",
    description:
      "Program intensif membangun aplikasi fullstack: perancangan arsitektur, implementasi REST API, autentikasi JWT, dan deployment.",
    category: "bootcamp",
  },
  {
    id: "clevio-2023",
    year: "2023",
    title: "Front-end Fundamentals",
    org: "Clevio",
    duration: "6 weeks",
    tags: ["HTML", "CSS", "JavaScript"],
    logo: "/logos/clevio.png",
    highlight: "Dasar kuat UI dan interaksi DOM.",
    description:
      "Fondasi front-end: semantic HTML, layout modern, aksesibilitas dasar, dan praktik JavaScript yang rapi.",
    category: "bootcamp",
  },
  {
    id: "algo-2024",
    year: "2024",
    title: "Algorithms for Web Devs",
    org: "Self-paced Course",
    duration: "15 hours",
    tags: ["DSA", "Big-O", "Patterns"],
    category: "course",
    highlight: "Problem solving yang relevan buat produk, bukan lomba.",
  },
];

const spring = {
  type: "spring",
  stiffness: 160,
  damping: 22,
  mass: 0.7,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
} as const;

function useProgressRail(ref: React.RefObject<HTMLDivElement | null>) {
  React.useEffect(() => {
    const scopeEl = ref.current;
    if (!scopeEl) return;

    const rail = scopeEl.querySelector(
      ".rail-progress"
    ) as HTMLDivElement | null;
    if (!rail) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rail,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scopeEl,
            start: "top 10%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }, scopeEl);

    return () => ctx.revert();
  }, [ref]);
}

function Segmented({
  value,
  onChange,
}: {
  value: "all" | "bootcamp" | "course";
  onChange: (v: "all" | "bootcamp" | "course") => void;
}) {
  const options = [
    { id: "all", label: "All", icon: GraduationCap },
    { id: "bootcamp", label: "Bootcamps", icon: Code2 },
    { id: "course", label: "Courses", icon: BadgeCheck },
  ] as const;

  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border bg-background/70 p-1 shadow-sm">
      {options.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          type="button"
          size="sm"
          variant={value === id ? "default" : "ghost"}
          onClick={() => onChange(id)}
          className="gap-2 rounded-xl"
          aria-pressed={value === id}
        >
          <Icon className="h-4 w-4" /> {label}
        </Button>
      ))}
    </div>
  );
}

function TrainingCard({ t }: { t: Training }) {
  return (
    <motion.div layout variants={itemVariants} transition={spring}>
      <Card className="relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-lg">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-muted/40">
              {t.logo ? (
                <Image
                  src={t.logo}
                  alt={t.org}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              ) : (
                <span className="text-[10px] font-semibold opacity-70">
                  {t.org?.slice(0, 3)?.toUpperCase() || "ORG"}
                </span>
              )}
            </span>
            <span>{t.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {t.highlight && (
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t.highlight}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {t.year && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {t.year}
              </span>
            )}
            {t.duration && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {t.duration}
              </span>
            )}
            {t.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {t.location}
              </span>
            )}
          </div>
          {t.tags && t.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <Badge
                  key={`${t.id}-${tag}`}
                  variant="secondary"
                  className="px-2 py-0.5 text-[11px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          {t.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          )}
        </CardContent>
        <div className="absolute inset-x-0 -bottom-px h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </Card>
    </motion.div>
  );
}

export default function BootcampTrainingJourney() {
  const [filter, setFilter] = React.useState<"all" | "bootcamp" | "course">(
    "all"
  );

  const railRef = React.useRef<HTMLDivElement | null>(null);
  useProgressRail(railRef);

  const visible = trainings.filter((t) =>
    filter === "all" ? true : t.category === filter
  );

  return (
    <section className="relative w-full bg-secondary text-foreground py-12">
      <div className="px-6 md:px-16">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bootcamp & Training Journey
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Rekap perjalanan pelatihan yang relevan buat kerjaan nyata, bukan
              sekadar checklist.
            </p>
          </div>
          <Segmented value={filter} onChange={setFilter} />
        </div>

        <div ref={railRef} className="relative">
          <div className="pointer-events-none absolute left-2 top-0 hidden h-full md:block">
            <div className="relative h-full w-1 rounded-full bg-foreground/20">
              <div className="rail-progress absolute left-0 top-0 h-full w-1 rounded-full bg-primary" />
            </div>
          </div>

          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-5 md:pl-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((t) => (
              <TrainingCard key={t.id} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
