"use client";

export default function AboutHero() {
  return (
    <section className="bg-black text-white py-16 px-6 md:py-20 lg:py-24">
      <div className="space-y-6 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium pb-16 leading-tight max-w-3xl mx-auto text-center">
          Developing next generation AI management solutions.
        </h1>
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/about-hero.png"
            alt="Laptop on table"
            className="w-full h-auto"
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          {/* Left Column */}

          {/* Right Column */}
          <div className="space-y-6 grid grid-cols-2 justify-center gap-16 mt-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-10">
              Manage business through DataAi solutions.
            </h2>
            <div className="">
              <p className="text-[#aaa] leading-relaxed">
                At DataAI, we are redefining the future of business form the
                management through the power of artificial intelligence to
                Founded with the mission to simplify and optimize business
                operations, DataAi provides cutting edge.
              </p>
              <p className="text-[#aaa] leading-relaxed my-6">
                Our platform integrates AI-driven insights and automation tools
                to give you complete control.
              </p>
              <p className="text-[#aaa] leading-relaxed">
                At DataAI, innovation and user satisfaction are at the heart of
                everything we do. Our dedicated team.
              </p>
              <div className="flex items-center space-x-4 mt-10">
                <img
                  src="https://i.pravatar.cc/100" // Replace with actual avatar image path
                  alt="Brooklyn Simmons"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium">Brooklyn Simmons</p>
                  <p className="text-gray-500 text-sm">CEO, DataAI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
