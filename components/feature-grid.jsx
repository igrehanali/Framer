import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  Atom,
  Box,
  PieChartIcon as ChartPieSlice,
  LayoutDashboard,
  UserSquare2,
} from "lucide-react";

const features = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "AI powered financial forecasting",
    description:
      "Generate accurate financial projections using AI algorithms Automated cash flow analysis and budget planning.",
  },
  {
    icon: <Atom className="w-6 h-6" />,
    title: "Intelligent project management",
    description:
      "AI-driven task prioritization and workload optimization Real-time project progress for tracking with predictive.",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Smart inventory management",
    description:
      "Predictive demand forecasting to optimize inventory levels.AI-based supplier selection and risk assessment.",
  },
  {
    icon: <ChartPieSlice className="w-6 h-6" />,
    title: "Employee productivity analytics",
    description:
      "AI-powered performance reviews with personalized feedback. Predictive analysis of employee engagement.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Dynamic business reporting",
    description:
      "Customizable AI-driven business dashboards with real-time data. Automated report form generation with actionable insights.",
  },
  {
    icon: <UserSquare2 className="w-6 h-6" />,
    title: "Risk management automation",
    description:
      "AI-assisted compliance monitoring and reporting. Predictive risk assessment and mitigation strategies.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-[#0A0A0A] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-[#082F5D] shadow-lg bg-gradient-to-b from-[#031021] to-[#010D19] rounded-3xl"
          >
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-[#2780EB] to-[#829DBD] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#aaa] text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
