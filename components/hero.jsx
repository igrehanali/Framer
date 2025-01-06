import Image from "next/image";
import StarBackground from "./star-background";
import WaveBackground from "./wave-background";
import CardComponent from "./CardComponent";
import GradientButton from "./GradintButton2";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-[#02070D] -mt-24">
      <div className="absolute inset-0">
        <div
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-blue-800 via-transparent to-transparent rounded-full blur-2xl opacity-70"
          style={{ top: "-500px", left: "0px" }}
        ></div>
      </div>
      <StarBackground />
      <div className="flex items-start justify-start lg:pt-52 pt-20 relative">
        <Image src="/images/hero-bg.png" layout="fill" objectFit="contain" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col justify-center items-center">
          <GradientButton text="Beta 1.5 available now" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white my-6 leading-tight">
            Accelerating sales & growth
            <br />
            with our AI solutions.
          </h1>
          <p className="text-[#AAAAAA] mb-8 max-w-xl mx-auto">
            Our AI-powered tools are designed to analyze vast amounts of data,
            uncover hidden patterns, and provide actionable insights that drive
            smarter decisions.
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#306CF2] to-[#2569F3] text-white font-medium transform hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-blue-500/25">
            Get Start 14 Days Free Trial
          </button>
        </div>
      </div>
      <div className="">
        <CardComponent />
      </div>
    </div>
  );
}
