"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    year: "2020 - 2022",
    title: "SMPN 1 Ciawi",
    description:
      "Started exploring sciences and social studies while actively participating in extracurricular activities that shaped my character and curiosity.",
    logo: "/schools/SMPN1CIAWI.png",
  },
  {
    year: "2022 - 2023",
    title: "SMPN 3 Cibinong",
    description:
      "Continued building foundational knowledge across subjects while exploring team-based activities that strengthened discipline and collaboration.",
    logo: "/schools/SMPN3CIBINONG.png",
  },
  {
    year: "2023 - 2026",
    title: "SMKN 1 Cibinong",
    description:
      "Currently studying Software & Game Development, with a strong focus on web development, software engineering, and building real-world applications.",
    logo: "/schools/SMKN1CIBINONG.png",
  },
];

const career = [
  {
    year: "Sept 2025 – May 2026",
    title: "Freelance Frontend Developer",
    org: "PT Solera Network (solera.id) — Bogor",
    description:
      "Refined website UI from UI/UX designs; improved UX via optimized flows, validation, and new features (org/institution role management).",
    logo: undefined,
  },
  {
    year: "Nov 2025 – Dec 2025",
    title: "Freelance Frontend Developer",
    org: "PT Solearnai (solearnai.com) — Bogor",
    description:
      "Built responsive SolearnAI UI; improved FE/BE performance; integrated APIs with Google & Apple auth.",
    logo: "/icons/solearn.png",
  },
  {
    year: "Oct 2025 – Feb 2026",
    title: "Intern Fullstack Developer & Team Lead",
    org: "PT Alus Technology — Bogor",
    description:
      "Led dev team (Laravel, Blade, Inertia, React); built Giunco catalog & MLM system with UX focus.",
    logo: "/icons/alus.png",
  },
  {
    year: "2026 – Present",
    title: "System Engineer",
    org: "PT Virtus Technology Indonesia - Jakarta Selatan",
    description:
      "Implementation and propose solutions as a System Engineer at Virtus: RHEL, Red Hat AAP, & Redis Enterprise.",
      logo: "/icons/virtus.png",
  },
];

type JourneyItem = {
  year: string;
  title: string;
  description: string;
  logo?: string;
  org?: string;
};

const Timeline = ({
  items,
  label,
}: {
  items: JourneyItem[];
  label: string;
}) => (
  <div className="mb-10 md:mb-0">
    <h3 className="text-xl md:text-3xl font-extrabold mb-4 text-foreground">
      {label}
    </h3>
    <div className="relative w-full border-l-2 border-foreground/40 ml-6 md:ml-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="timeline-item relative pl-10 mb-4 md:mb-12 last:mb-0"
        >
          <div className="absolute -left-[20px] flex items-center justify-center max-w-10 max-h-10 rounded-full bg- text-primary-foreground shadow-md">
            {item.logo ? (
              <Image
                width={50}
                height={50}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover"
                src={item.logo}
              />
            ) : (
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                {item.title
                  .split(" ")
                  .map((t) => t[0])
                  .join("")
                  .slice(0, 3)
                  .toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-xs md:text-sm text-muted-foreground font-extrabold tracking-wide">
            {item.year}
          </span>
          <h3 className="text-lg md:text-xl font-extrabold mt-1 text-foreground">
            {item.title}
            {item.org ? (
              <span className="text-sm font-medium text-muted-foreground ml-2">
                — {item.org}
              </span>
            ) : null}
          </h3>

          <p className="text-sm md:text-sm md:w-[80%] mt-2 text-foreground/80 font-medium leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Journey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-secondary text-foreground pt-20 pb-4 px-6 md:px-16"
    >
      <div
        id="journey"
        className="mb-16 cursor-target text-left absolute -top-15 -left-6 md:rotate-2 border-black border-2 py-4 px-10 bg-white text-primary hover:-rotate-2 transition-all duration-300 "
      >
        <h2 className="text-2xl md:text-5xl font-bold">Journey</h2>
        <p className="text-primary mt-2 md:mt-3 text-sm md:text-base">
          The path that shaped who I am as a developer and system engineer.
        </p>
      </div>
      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10">
        <Timeline items={education} label="Education Journey" />
        <Timeline items={career} label="Career Journey" />
      </div>
    </section>
  );
};

export default Journey;