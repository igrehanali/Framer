import React from "react";
import Heading from "./Heading";
import CardComponent from "@/components/CardComponent";

const AboutFeature = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h1 className=" text-xl lg:text-5xl text-white text-center max-w-[600px]">
        Describe your products for all customers.
      </h1>
      <CardComponent />
    </div>
  );
};

export default AboutFeature;
