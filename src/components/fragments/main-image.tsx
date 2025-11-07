"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MainImage = () => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const span = spanRef.current;
    const container = containerRef.current;
    if (!span || !container) return;

    // Animasi masuk (ketika hover)
    const hoverIn = () => {
      gsap.to(span, {
        rotation: 0,
        y: -10,
        scale: 1.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    };

    // Animasi keluar (ketika mouse lepas)
    const hoverOut = () => {
      gsap.to(span, {
        rotation: -8,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", hoverIn);
    container.addEventListener("mouseleave", hoverOut);

    return () => {
      container.removeEventListener("mouseenter", hoverIn);
      container.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block cursor-target">
      <Image
        alt="main-image"
        src={"/images/me.jpg"}
        width={800}
        height={450}
        quality={100}
        className="w-110 h-104 object-cover hover:shadow-2xl hover:scale-102 hover:rounded-md duration-300 transition-all"
      />
      <span
        ref={spanRef}
        className="absolute w-fit py-3 px-8 h-fit text-white font-semibold border-2 rounded-xs border-black shadow-sm -rotate-6 flex items-center justify-center text-4xl -bottom-10 bg-primary -right-10"
      >
        Ezwan Ibnu Y.
      </span>
    </div>
  );
};

export default MainImage;
