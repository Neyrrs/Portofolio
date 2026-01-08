import Container from "@/components/wrappers/container";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <div className="h-35 md:h-50 overflow-hidden relative">
        <h1 className="text-6xl md:text-9xl md:-bottom-10 -bottom-4 font-bold w-full font-roboto-slab absolute left-1/2 -translate-x-1/2">
          Ezwan dev
        </h1>
        <p className="absolute bottom-10 md:bottom-2 md:right-0 md:text-xs text-[0.6rem] font-light">&copy; 2026 Ezwan All rights reserved</p>
      </div>
    </Container>
  );
};

export default Footer;
