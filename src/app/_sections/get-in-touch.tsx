"use client";

import React, { useEffect, useRef } from "react";
import Container from "@/components/wrappers/container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
      }).from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const iconVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: unknown) => {
      const i = Number(custom) || 0;
      return {
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
      };
    },
    hover: { scale: 1.15, rotate: 3 },
  };

  return (
    <Container>
      <section
        ref={sectionRef}
        className="h-screen flex flex-col md:flex-row items-center justify-between py-10 gap-10 w-full"
      >
        <div
          ref={headingRef}
          className="w-full md:w-1/2 px-10 flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-roboto-slab font-semibold mb-4 leading-tight">
            Let’s Connect <br />
            and Build Something Great!
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-md">
            Feel free to reach out to me through any platform below — whether
            it’s about collaboration, projects, or just saying hello!
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-5 flex-wrap"
          >
            {[
              {
                icon: <Mail size={22} />,
                href: "mailto:neyrworks@gmail.com",
                color: "hover:bg-blue-500/10 hover:text-blue-500",
              },
              {
                icon: <Instagram size={22} />,
                href: "https://www.instagram.com/dwonvy/",
                color: "hover:bg-pink-500/10 hover:text-pink-500",
              },
              {
                icon: <Linkedin size={22} />,
                href: "https://www.linkedin.com/in/ezwan-ibnu-yassar-80792b340/",
                color: "hover:bg-sky-500/10 hover:text-sky-500",
              },
              {
                icon: <Github size={22} />,
                href: "https://github.com/Neyrrs",
                color: "hover:bg-gray-700/10 hover:text-gray-700",
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover="hover"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full p-3 transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </Button>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={imageRef}
          className="w-full md:w-1/2 h-[60vh] md:h-full relative"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            alt="Get in Touch"
            src="/images/wutwut.jpeg"
            fill
            className="object-cover rounded-bl-xl shadow-xl"
          />
        </motion.div>
      </section>
    </Container>
  );
};

export default GetInTouch;
