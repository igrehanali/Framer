import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import FeatureCards from "@/components/feature-cards";
import ExpenseTrackerSection from "@/components/expense-tracker-section";
import About from "@/components/About";
import Features from "@/components/Features";
import HowDataAIWorks from "@/components/ui/HowDataAIWorks";
import Pricing from "@/components/pricing";
import TestimonialGrid from "@/components/testimonial-grid";
import FAQ from "@/components/faq";
import CTA from "@/components/ui/Cta";
import Footer from "@/components/ui/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeatureCards />
      <ExpenseTrackerSection />
      <About />
      <Features />
      <HowDataAIWorks />
      <Pricing />
      <TestimonialGrid />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
