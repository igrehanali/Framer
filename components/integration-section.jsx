"use client";

import {
  Command,
  Zap,
  Activity,
  BarChart3,
  Waves,
  Boxes,
  Flower2,
  Infinity,
} from "lucide-react";

export default function IntegrationSection() {
  const integrations = [
    { icon: Command, color: "text-orange-500" },
    { icon: Zap, color: "text-red-500" },
    { icon: Activity, color: "text-green-500" },
    { icon: BarChart3, color: "text-blue-500" },
    { icon: Waves, color: "text-purple-500" },
    { icon: Boxes, color: "text-indigo-500" },
    { icon: Flower2, color: "text-pink-500" },
    { icon: Infinity, color: "text-cyan-500" },
  ];

  const generateIcons = () =>
    [...Array(10)].map((_, index) => {
      const Integration = integrations[index % integrations.length];
      return (
        <div
          key={index}
          className={`p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800`}
        >
          <Integration.icon className={`w-8 h-8 ${Integration.color}`} />
        </div>
      );
    });

  return (
    <section className="bg-black text-white px-4 py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto grid gap-8 lg:grid-cols-2 max-w-7xl">
        {/* Text content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-5xl  mb-6">
            Integrate with
            <br />
            100+ favorite tools.
          </h2>
          <p className="text-gray-400 text-lg max-w-[460px]">
            Managing your daily activities has never been easier with these
            powerful features designed to simplify.
          </p>
        </div>

        {/* Integration lists */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-8 max-h-[500px]">
            {[...Array(5)].map((_, listIndex) => (
              <div
                key={listIndex}
                className={`space-y-4 ${
                  listIndex % 2 === 0
                    ? "animation-marquee-up"
                    : "animation-marquee-down"
                }`}
              >
                {generateIcons()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
