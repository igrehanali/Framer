import Marquee from "@/components/marquee";
import Pricing from "@/components/pricing";
import PricingTable from "@/components/pricing-table";
import React from "react";

const page = () => {
  return (
    <div>
      <Pricing />
      <Marquee />
      <PricingTable />
    </div>
  );
};

export default page;
