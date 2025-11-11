import Navbar from "@/components/fragments/navbar";
import React from "react";
import HeroPage from "./_sections/hero-page";
import Journey from "./_sections/journey";
import Skills from "./_sections/skills";
import GetInTouch from "./_sections/get-in-touch";
import ShowcasePage from "./_sections/showcase-project";
import QuoteLine from "@/components/fragments/quote-line";
import Footer from "./_sections/footer";
import Stacks from "./_sections/stacks";
import BootcampTrainingJourney from "./_sections/bootcamp";
import CertificatesSection from "./_sections/certificate";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <HeroPage />
      <Journey />
      <BootcampTrainingJourney />
      <Skills />
      <Stacks />
      <CertificatesSection />
      <ShowcasePage />
      <QuoteLine />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default page;
