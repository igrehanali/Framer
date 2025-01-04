import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import FeatureCards from "@/components/feature-cards";
import ExpenseTrackerSection from "@/components/expense-tracker-section";
import About from "@/components/About";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeatureCards />
      <ExpenseTrackerSection />
      <About />
    </>
  );
}
