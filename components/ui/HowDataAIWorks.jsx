import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { Button } from "./button";

const HowDataAIWorks = () => {
  const sections = [
    {
      title: "AI marketing automation for data driven strategies.",
      description:
        "AI-powered marketing automation is revolutionizing how businesses create and execute data-driven strategies By leveraging advanced algorithms.",
      image: "/images/work1.png",
      imageAlt: "work image 1",
      reverse: false,
    },
    {
      title:
        "Real time insights and predictive analytics for smarter decision.",
      description:
        "Real-time insights and predictive analytics are transforming the way businesses make decisions, enabling leaders to respond to challenges and opportunities.",
      image: "/images/work2.png",
      imageAlt: "work image 2",
      reverse: true, // This controls the layout direction
    },
    {
      title: "Smart inventory management for optimal efficiency.",
      description:
        "Optimizing resource allocation with data-driven strategies is a critical approach to enhancing business efficiency.",
      image: "/images/work3.png",
      imageAlt: "work image 3",
      reverse: false,
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[#02040a] via-[#0c1120] to-[#02040a] py-20 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle,rgba(3, 14, 30, 0.5), 0%,rgba(2, 8, 15, 0.5), url('/path-to-your-stars-texture.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Heading
          title="How DataAI Works"
          subtitle="Optimizing resource allocation with data-driven strategies is a critical approach to enhancing business efficiency."
        />
        <div className="flex flex-col gap-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center my-8 ${
                section.reverse ? "md:grid-cols-[1fr_1fr]" : ""
              }`}
            >
              {!section.reverse ? (
                <>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={587}
                    height={587}
                  />
                  <div className="max-w-xl">
                    <h1 className="text-4xl font-medium text-white">
                      {section.title}
                    </h1>
                    <p className="text-[#aaa] my-4 max-w-[400px]">
                      {section.description}
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative px-4 py-2 md:px-6 md:py-2 text-white rounded-full text-sm bg-transparent transition-colors duration-300 ease-in-out hover:bg-blue-500 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-[linear-gradient(to-right,_blue,_blue_50%,_white_50%,_white)] before:p-[1px] before:content-[''] before:z-[-1]"
                    >
                      Get Started Now
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="max-w-xl order-2 md:order-1">
                    <h1 className="text-4xl font-medium text-white">
                      {section.title}
                    </h1>
                    <p className="text-[#aaa] my-4 max-w-[400px]">
                      {section.description}
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative px-4 py-2 md:px-6 md:py-2 text-white rounded-full text-sm bg-transparent transition-colors duration-300 ease-in-out hover:bg-blue-500 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-[linear-gradient(to-right,_blue,_blue_50%,_white_50%,_white)] before:p-[1px] before:content-[''] before:z-[-1]"
                    >
                      Get Started Now
                    </Button>
                  </div>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={587}
                    height={587}
                    className="order-1 md:order-2"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowDataAIWorks;
