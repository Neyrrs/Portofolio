"use client";

import Container from "@/components/wrappers/container";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed Back to Top Button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-10 right-8 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-background border border-border shadow-lg backdrop-blur-sm hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-target group"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Container>
        <div className="h-35 md:h-50 overflow-hidden relative">
          <h1 className="text-6xl md:text-9xl md:-bottom-10 -bottom-4 font-bold w-full font-roboto-slab absolute left-1/2 -translate-x-1/2">
            Ezwan dev
          </h1>
          <p className="absolute bottom-10 md:bottom-2 md:right-0 md:text-xs text-[0.6rem] font-light">&copy; 2026 Ezwan All rights reserved</p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
