import React from "react";
import Heading from "./ui/Heading";
import FeatureGrid from "./feature-grid";

const Features = () => {
  return (
    <section className="bg-[#02070D]">
      <div>
        <Heading
          title="Features that make a difference."
          subtitle="Optimizing resource allocation with data-driven strategies is a critical approach to enhancing business efficiency."
        />
        <FeatureGrid />
      </div>
    </section>
  );
};

export default Features;
