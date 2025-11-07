"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Container from "@/components/wrappers/container";
import { skillsData } from "@/data/skill-and-tools";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<Array<HTMLSpanElement | null>>([]);

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

    gsap.from(badgesRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: badgesRef.current[0],
        start: "top 80%",
      },
    });

    // Hover animation
    const card = leftCardRef.current;
    const imgWrapper = imageWrapperRef.current;

    const hoverIn = () => {
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      if (imgWrapper)
        gsap.to(imgWrapper, { rotate: 5, duration: 0.3, ease: "power2.out" });
    };

    const hoverOut = () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      if (imgWrapper)
        gsap.to(imgWrapper, { rotate: 0, duration: 0.3, ease: "power2.out" });
    };

    card.addEventListener("mouseenter", hoverIn);
    card.addEventListener("mouseleave", hoverOut);

    return () => {
      card.removeEventListener("mouseenter", hoverIn);
      card.removeEventListener("mouseleave", hoverOut);
    };
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
        <div className="flex flex-row w-full gap-12 items-start">
          <Card
            ref={leftCardRef}
            className="w-1/2 h-100 relative cursor-target bg-primary text-white shadow-2xl shadow-white/10 flex flex-col justify-between p-6 rounded-lg"
          >
            <div className="flex flex-col justify-between h-full z-5">
              <p className="text-5xl font-bold w-3/4">
                Experience over 2+ years
              </p>
              <span>
                <p className="mt-4 text-4xl font-extrabold w-1/2">
                  10+ Projects Completed
                </p>
              </span>
            </div>
            <div
              ref={imageWrapperRef}
              className="absolute z-1 -right-15 bottom-0 justify-center mt-4 w-80 h-90"
            >
              <Image
                width={500}
                height={500}
                src="/images/hero-image.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
          <div ref={rightTextRef} className="flex flex-col max-w-lg">
            <h3 className="text-4xl font-bold">
              Mastering <span className="text-yellow-500">{"{ "}</span>
              Javascript
              <span className="text-yellow-500">{" }"}</span> as Mother Language
            </h3>
            <p className="text-base text-foreground/80 mt-4">
              Fokus pada frontend & backend development menggunakan JavaScript,
              TypeScript, React, Node.js, dan teknologi modern lainnya. Selalu
              belajar dan menerapkan best practices untuk membuat project lebih
              scalable dan maintainable.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 w-3/4">
              {skillsData.map((skill, i) => (
                <Badge
                  key={i}
                  ref={(el) => {
                    badgesRef.current[i] = el;
                  }}
                  className={`${skill.color} text-white px-3 py-1`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
