import MainImage from "@/components/fragments/main-image";
import SplitText from "@/components/fragments/split-text";
import TargetCursor from "@/components/fragments/target-cursor";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div className="h-screen flex items-center justify-between w-full py-8">
        <div className="w-full h-full flex flex-col px-10 justify-between">
          <div className="w-full h-full flex justify-end flex-col container gap-2">
            <h1 className="text-6xl font-bold w-fit">
              I{"'"}d love to
              <span className="text-[#0046FF] cursor-target rounded-lg px-2 transition-all hover:text-white hover:bg-[#0046FF]">
                CODE
              </span>
            </h1>
            <SplitText
              text="I'm Wan, a passionate Frontend Developer focused on building elegant, scalable web application. I love turning complex problems into clean, interactive user experiences."
              className="text-xl font-normal w-[80%]"
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
          <div className="w-full items-end h-full container flex gap-2">
            <Button asChild variant={"ghost"} size={"icon"}>
              <Link href={"github.com/Neyrrs"}>
                <Github size={50} />
              </Link>
            </Button>
            <Button variant={"ghost"} asChild size={"icon"}>
              <Link href={"github.com/Neyrrs"}>
                <Instagram size={50} />
              </Link>
            </Button>
            <Button asChild variant={"ghost"} size={"icon"}>
              <Link href={"github.com/Neyrrs"}>
                <Linkedin size={50} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="container w-full flex items-center justify-center">
          <MainImage />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
