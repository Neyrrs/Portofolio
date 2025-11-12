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
      "Mulai mendalami pelajaran eksakta dan sosial serta aktif dalam berbagai kegiatan ekstrakurikuler yang membangun karakter.",
    logo: "/schools/SMPN1CIAWI.png",
  },
  {
    year: "2022 - 2023",
    title: "SMPN 3 Cibinong",
    description:
      "Mulai mendalami pelajaran eksakta dan sosial serta aktif dalam berbagai kegiatan ekstrakurikuler yang membangun karakter.",
    logo: "/schools/SMPN3CIBINONG.png",
  },
  {
    year: "2023 - 2026",
    title: "SMKN 1 Cibinong",
    description:
      "Saat ini menempuh pendidikan di jurusan Pengembangan Perangkat Lunak dan Gim, fokus pada pengembangan web dan aplikasi mobile.",
    logo: "/schools/SMKN1CIBINONG.png",
  },
];

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
      className="relative max-h-screen w-full bg-secondary text-foreground pt-20 pb-4 px-6 md:px-16"
    >
      <div className="mb-16 cursor-target text-left absolute -top-15 -left-6 rotate-2 border-black border-2 py-4 px-10 bg-white text-primary hover:-rotate-2 transition-all duration-300 ">
        <h2 className="text-4xl md:text-5xl font-bold">Education Journey</h2>
        <p className="text-primary mt-3 text-sm md:text-base">
          Jejak perjalanan pendidikan yang membentuk dasar dan karakter saya.
        </p>
      </div>
      <div className="relative w-3/4 border-l-2 border-foreground/40 ml-6 md:ml-10">
        {education.map((item, index) => (
          <div
            key={index}
            className="timeline-item relative pl-10 mb-12 last:mb-0"
          >
            <div className="absolute -left-[26px] flex items-center justify-center max-w-10 max-h-10 rounded-full bg-white text-primary-foreground shadow-md">
              <Image
                width={50}
                height={50}
                alt="logo-sekolah"
                src={item.logo}
              />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">
              {item.year}
            </span>
            <h3 className="text-lg md:text-xl font-semibold mt-1 text-foreground">
              {item.title}
            </h3>

            <p className="text-sm md:text-sm w-[80%] mt-2 text-foreground/80 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
