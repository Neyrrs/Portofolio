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
      <section className="relative w-full flex flex-col items-start py-24 overflow-hidden">
        <div className="text-left relative mb-15">
          <h2 className="text-9xl font-extrabold text-primary drop-shadow-lg mb-2">
            My <span className="text-foreground">Skills</span>
          </h2>
          <p className="text-foreground/70 absolute -right-12 text-base">
            Keahlian yang aku kuasai dan terus aku kembangkan.
          </p>
        </div>
        <div className="grid w-full gap-6 lg:grid-cols-2 items-stretch">
          <Card
            ref={leftCardRef}
            className="bg-primary text-white shadow-2xl shadow-white/10 p-6 rounded-lg
               flex flex-col justify-between self-stretch
               h-90"
          >
            <p className="text-5xl font-bold">Experience over 2+ years</p>
            <p className="mt-4 text-4xl font-extrabold">
              10+ Projects Completed
            </p>
          </Card>

          <div className="grid grid-rows-[auto_1fr] gap-6 self-stretch h-full">
            <div ref={rightTextRef} className="flex flex-col">
              <h3 className="text-4xl font-bold">
                Mastering <span className="text-yellow-500">{"{ "}</span>
                Javascript
                <span className="text-yellow-500">{" }"}</span> as Mother
                Language
              </h3>
              <p className="text-base text-foreground/80 mt-4">
                Fokus pada frontend & backend development menggunakan
                JavaScript, TypeScript, React, Node.js, dan teknologi modern
                lainnya. Selalu belajar dan menerapkan best practices untuk
                membuat project lebih scalable dan maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
