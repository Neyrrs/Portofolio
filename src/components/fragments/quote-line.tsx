"use client";

import React, { useEffect, useRef } from "react";
import Container from "../wrappers/container";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const QuoteLine = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // mulai saat bagian atas elemen 80% dari bawah viewport
          end: "bottom 20%", // selesai saat bagian bawah elemen 20% dari atas viewport
          toggleActions: "restart none none reset", 
          // ↓↓↓
          // restart → saat masuk viewport
          // none → tidak melakukan apapun saat scroll mundur ke atas
          // none → tidak melakukan apapun saat keluar
          // reset → reset animasi saat keluar layar
          markers: false, // ubah ke true kalau mau lihat posisi trigger
        },
      });

      // Animasi teks utama
      tl.from(".quote-text", {
        opacity: 0,
        y: 50,
        duration: 1.2,
      });

      // Animasi ikon kutipan
      tl.from(
        ".quote-icon",
        {
          scale: 0,
          rotate: -90,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div
        ref={sectionRef}
        className="h-screen flex justify-center items-center font-roboto-slab font-semibold text-9xl"
      >
        <h1 className="quote-text">
          <span className="relative inline-block group">
            Show{" "}
            <motion.span
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Quote className="quote-icon absolute text-primary -top-8 -left-10 size-12 transform scale-x-[-1]" />
            </motion.span>
          </span>
          {" "}to the{" "}
          <motion.span
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-primary inline-block"
          >
            world,
          </motion.span>{" "}
          that u{" "}
          <span className="relative inline-block group">
            {" "}
            can!
            <motion.span
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Quote className="quote-icon absolute -bottom-8 text-primary -right-12 size-12" />
            </motion.span>
          </span>
        </h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="font-light text-right"
      >
        Ezwan Ibnu Y
      </motion.p>
    </Container>
  );
};

export default QuoteLine;
