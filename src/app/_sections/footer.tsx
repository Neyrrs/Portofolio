import Container from "@/components/wrappers/container";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <div className="h-50 bg-card overflow-hidden relative">
        <h1 className="text-9xl -bottom-10 font-bold w-full font-roboto-slab absolute left-1/2 -translate-x-1/2">
          Ezwan dev
        </h1>
        <p className="absolute bottom-2 right-0 text-xs font-light">&copy; 2025 Ezwan All rights reserved</p>
      </div>
    </Container>
  );
};

export default Footer;
