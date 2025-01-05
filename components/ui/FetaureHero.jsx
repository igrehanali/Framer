import Head from "next/head";

export default function FeatureHero() {
  return (
    <div>
      <Head>
        <title>DataAI Landing Page</title>
      </Head>
      <div
        className="flex flex-col items-center justify-center text-center px-4 bg-cover bg-center max-w-5xl mx-auto bg-[#02070D] py-20 lg:py-40"
        style={{
          backgroundImage: "url('/images/feature-hero.png')",
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-8 text-[#bfbfbf]">
          Automate, optimize, and scale your operations with DataAi
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-16 text-[#aaa]">
          Automate, optimize, and scale your operations seamlessly with DataAi,
          the cutting-edge Business Management AI SaaS designed to drive
          efficiency at every level.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white  p-4 rounded-full text-lg md:text-xl">
          Start 14 Days Free Trial
        </button>
      </div>
    </div>
  );
}
