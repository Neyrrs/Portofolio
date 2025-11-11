"use client";

import React, { useEffect, useRef } from "react";
import MainImage from "@/components/fragments/main-image";
import SplitText from "@/components/fragments/split-text";
import TargetCursor from "@/components/fragments/target-cursor";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

const HeroPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Text animation
      tl.from(".hero-text", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
      });

      // Image animation
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 40,
          duration: 1,
        },
        "-=0.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-image">
      <TargetCursor spinDuration={2} hideDefaultCursor />
      <section
        ref={heroRef}
        className="h-screen  w-full flex flex-col md:flex-row items-center justify-between px-10 py-8 container mx-auto"
      >
        <div className="flex flex-col justify-center gap-8 md:w-1/2 w-full">
          <div className="flex flex-col gap-4">
            <h1 className="hero-text text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Meet me, person loves to{" "}
              <span className="cursor-target px-2 transition-all text-primary hover:bg-primary hover:text-white">
                CODE
              </span>
            </h1>

            <SplitText
              text="I'm Wan, a passionate Frontend Developer focused on building elegant, scalable web applications. love turning complex problems into clean"
              className="hero-text text-base md:text-lg text-secondary-foreground w-[95%]"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          <div className="hero-text flex gap-4 mt-6">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20"
            >
              <Link href="https://github.com/Neyrrs" target="_blank">
                <Github size={28} />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/90"
            >
              <Link
                href="https://www.linkedin.com/in/ezwan-ibnu-yassar-80792b340/"
                target="_blank"
              >
                <Linkedin size={28} />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/20"
            >
              <Link href="https://www.instagram.com/dwonvy/" target="_blank">
                <Instagram size={28} />
              </Link>
            </Button>
          </div>
        </div>

        <div
          ref={imageRef}
          className="flex justify-center items-center md:w-1/2 w-full mt-10 md:mt-0"
        >
          <MainImage />
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
