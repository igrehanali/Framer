import { Bot, GitMerge, Users } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: <GitMerge className="w-6 h-6" />,
      title: "Smart task automation",
      description:
        "Smart Task Automation is transformative feature within Business Management.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI powered decision making",
      description:
        "Suggest optimal business strategies from based on historical data and market.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Intelligent HR management",
      description:
        "Automate recruitment processes with AI driven candidate screening.",
    },
  ];

  return (
    <div className="bg-[#02070D] p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl border border-[#082C57] bg-[#02080F] backdrop-blur-sm"
          >
            <div className="flex gap-4">
              <div className="text-white">{feature.icon}</div>
              <div className="flex  flex-col">
                <h3 className="text-xl font-semibold text-white pb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
