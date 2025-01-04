import React from "react";
import Heading from "./ui/Heading";
import Image from "next/image";
import { Button } from "./ui/button";

const InfoCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative border border-[#042854] rounded-3xl shadow-lg overflow-hidden max-w-2xl p-6 lg:p-12 flex flex-col justify-between lg:h-[700px] bg-gradient-to-b from-[#03132A] to-[#03080E]">
      <div className="absolute inset-0 rounded-3xl"></div>
      <div className="text-left">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
        <p className="text-[#AAAAAA] text-lg max-w-[460px] py-4">
          {description}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="relative px-4 py-2 md:px-6 md:py-2 text-white rounded-full text-sm bg-transparent transition-colors duration-300 ease-in-out hover:bg-blue-500 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-[linear-gradient(to-right,_blue,_blue_50%,_white_50%,_white)] before:p-[1px] before:content-[''] before:z-[-1]"
        >
          Learn More
        </Button>
      </div>
      <div className="relative flex items-center justify-center rounded-lg mb-4">
        <Image
          src={imageSrc}
          alt="about image"
          width={500}
          height={460}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-[#02070D] py-20">
      <section className="max-w-7xl mx-auto">
        <Heading
          title="Optimize business allocation with data driven strategies."
          subtitle="Optimizing resource allocation with data-driven strategies is a critical approach to enhancing business efficiency."
        />
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <InfoCard
            title="Automated Financial Management"
            description="Financial management is the backbone of any successful organization, ensuring that financial resources."
            imageSrc="/images/about2.png"
          />
          <InfoCard
            title="Automated Financial Management"
            description="Financial management is the backbone of any successful organization, ensuring that financial resources."
            imageSrc="/images/about1.png"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
