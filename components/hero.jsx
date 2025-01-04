import Image from "next/image";
import StarBackground from "./star-background";
import WaveBackground from "./wave-background";
import CardComponent from "./CardComponent";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-[#02070D]">
      <div className="flex items-center justify-center lg:py-40 py-20">
        {/* Light Effect */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-blue-500/30 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"></div>

        {/* Backgrounds */}
        <StarBackground />
        {/* <WaveBackground /> */}
        <Image
          src="/images/hero-bg.png"
          layout="fill"
          objectFit="contain"
          className="rotate-12 h-[400px]"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
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
