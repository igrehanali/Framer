import React from "react";
import FeatureHero from "@/components/ui/FetaureHero";
import FeatureCards from "@/components/feature-cards";
import ExpenseTrackerSection from "@/components/expense-tracker-section";
import Cta from "@/components/Cta";
import About from "@/components/About";
import IntegrationSection from "@/components/integration-section";
import HowDataAIWorks from "@/components/ui/HowDataAIWorks";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";

const pge = () => {
  return (
    <>
      <FeatureHero />
      <ExpenseTrackerSection />
      <Cta />
      <About />
      <IntegrationSection />
      <HowDataAIWorks />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default pge;
