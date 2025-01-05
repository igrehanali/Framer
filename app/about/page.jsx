import AboutHero from "@/components/AoutHero";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import Team from "@/components/ui/About-people";
import React from "react";
import AboutFeature from "@/components/ui/about-feature";

const app = () => {
  return (
    <>
      <AboutHero />
      <FAQ />
      <Team />
      <Testimonials />
      <AboutFeature />
    </>
  );
};

export default app;
