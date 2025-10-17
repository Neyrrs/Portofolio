import Navbar from "@/components/fragments/navbar";
import React from "react";
import HeroPage from "./_sections/hero-page";
import Skills from "./_sections/skills";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Skills />
      <div className="h-screen"></div>
    </div>
  );
};

export default page;
