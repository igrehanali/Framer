"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import StarBackground from "./star-background";
import WaveBackground from "./wave-background";
import CardComponent from "./CardComponent";
import GradientButton from "./GradintButton2";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-[#02070D] -mt-24">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-blue-800 via-transparent to-transparent rounded-full blur-2xl opacity-70"
          style={{ top: "-300px", left: "50%", transform: "translateX(-50%)" }}
        ></div>
      </div>
      <StarBackground />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center lg:pt-52 pt-20 relative px-4">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.png"
            layout="fill"
            objectFit="cover"
            priority
            alt="Hero Background"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-5xl text-center px-4 lg:px-0 lg:mt-0 mt-20">
          <div data-aos="fade-down">
            <GradientButton text="Beta 1.5 available now" />
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white my-6 leading-tight"
            data-aos="fade-up"
          >
            Accelerating sales & growth
            <br />
            with our AI solutions.
          </h1>
          <p
            className="text-[#AAAAAA] mb-8 max-w-lg sm:max-w-xl mx-auto text-sm sm:text-base lg:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our AI-powered tools are designed to analyze vast amounts of data,
            uncover hidden patterns, and provide actionable insights that drive
            smarter decisions.
          </p>
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#306CF2] to-[#2569F3] text-white font-medium transform hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Get Started - 14 Days Free Trial
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div
        className="mt-16 md:mt-24 px-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <CardComponent />
      </div>
    </div>
  );
}
