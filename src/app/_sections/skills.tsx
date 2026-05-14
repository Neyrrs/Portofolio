"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Container from "@/components/wrappers/container";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftCardRef.current || !rightTextRef.current) return;

    gsap.from(leftCardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftCardRef.current,
        start: "top 80%",
      },
    });

    // right text in
    gsap.from(rightTextRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightTextRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <Container>
      <section
        id="skills"
        className="relative w-full flex flex-col items-start py-10 md:py-24 overflow-hidden md:border-none border-b-4 border-foreground"
      >
        <div className="text-left relative mb-12 md:mb-15">
          <h2 className="text-5xl md:text-9xl font-extrabold text-primary drop-shadow-lg mb-2">
            My <span className="text-foreground">Skills</span>
          </h2>
          <p className="text-foreground/70 absolute -right-25 md-right-12 text-sm md:text-base">
            Keahlian yang telah saya bangun dan terus saya asah.
          </p>
        </div>
        <div className="flex md:flex-row flex-col-reverse w-full gap-5 md:pt-0 pt-6 items-center justify-center h-full">
          <Card
            ref={leftCardRef}
            className="bg-primary text-white shadow-2xl md:w-1/2 w-full shadow-white/10 p-6 rounded-lg
               flex flex-col justify-between
               md:h-90 h-fit"
          >
            <p className="text-2xl md:text-5xl font-bold">
              Experience over 3+ years
            </p>
            <p className="mt-4 flex md:flex-col md:items-start items-end gap-2 text-xl md:text-5xl md:font-extrabold font-semibold">
              <span className="font-extrabold text-2xl md:text-5xl">10+</span>{" "}
              Projects Completed
            </p>
          </Card>

          <div className="md:w-1/2 w-full gap-6 h-fit">
            <div ref={rightTextRef} className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-5xl font-extrabold">
                Technology is a <span className="text-yellow-500">tool</span>,
                problem-solving is the skill.
              </h3>
              <p className="text-base md:text-lg font-medium text-foreground/80 mt-2 md:mt-4">
                Bekerja di berbagai bidang full stack — web, backend, database,
                dan lainnya. Menggunakan JavaScript, Typescript, PHP, C#, maupun
                SQL, mampu beradaptasi dengan kebutuhan proyek dan fokus
                membangun solusi yang benar-benar berjalan dengan baik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
