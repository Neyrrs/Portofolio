"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/wrappers/container";
import { Github, MousePointer2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/showcase";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".showcase-item").forEach((el, i) => {
        const isLeft = i % 2 === 0;
        const anim = gsap.fromTo(
          el,
          { opacity: 0, x: isLeft ? -80 : 80 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out", paused: true }
        );

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => anim.restart(),
          onLeave: () => anim.reverse(),
          onEnterBack: () => anim.restart(),
          onLeaveBack: () => anim.reverse(),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <section
        ref={sectionRef}
        id="projects"
        className="w-full mx-auto py-20 bg-background text-foreground overflow-hidden"
      >
        <div className="text-left mb-16 relative overflow-hidden">
          <motion.h2
            className="relative inline-block text-7xl font-bold mb-0"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yellow-500">{"{ "}</span>
            Project Showcase
            <span className="text-yellow-500">{" }"}</span>
            <span className="absolute -bottom-13 right-5  flex flex-col gap-1">
              <MousePointer2 className="text-blue-500 size-10" />
              <span className="px-2 py-0.5 text-white bg-blue-500 text-xs rounded-md font-semibold">
                Ezwan
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-secondary-foreground max-w-xl text-base mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Koleksi proyek yang menampilkan kreativitas dan performa tinggi
            dalam pengembangan web modern.
          </motion.p>
        </div>

        <div className="container mx-auto space-y-28">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const hasPreview = Boolean(project.preview && project.preview.trim());
            const hasGithub = Boolean(project.github && project.github.trim());

            return (
              <div
                key={project.id}
                className={`showcase-item flex flex-col md:flex-row items-center gap-10 ${isLeft ? "" : "md:flex-row-reverse"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="w-full md:w-1/2 h-64 rounded-sm overflow-hidden shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority={index < 2}
                  />
                </motion.div>

                <div className="w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-secondary mb-4 line-clamp-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-left flex items-center text-sm gap-2">
                    {/* Preview button */}
                    {hasPreview ? (
                      <Button asChild className="cursor-target cursor-none">
                        <Link
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Lihat Preview
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled variant="secondary" className="opacity-70">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Preview belum tersedia
                      </Button>
                    )}

                    {/* GitHub button */}
                    {hasGithub ? (
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="cursor-target cursor-none"
                        aria-label="Buka repository di GitHub"
                        title="Buka repository di GitHub"
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="icon"
                        disabled
                        className="opacity-70"
                        aria-label="Repository belum tersedia"
                        title="Repository belum tersedia"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {hasPreview ? "Preview aktif" : "Website belum bisa diakses"}
                    {hasGithub ? " • Repository tersedia" : " • Repository tidak tersedia"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
