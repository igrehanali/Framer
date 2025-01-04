import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ExpenseTrackerSection() {
  return (
    <div className="bg-[#02070D] text-white flex items-center justify-center p-4 md:p-8 lg:pt-32 pt-20">
      <div className="max-w-7xl mx-auto grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
        {/* Left side - UI Mock */}
        <div className="relative">
          <Image
            src="/images/img1.avif"
            width={560}
            height={570}
            className="w-full h-auto border-2 border-[#082C57] rounded-3xl"
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Automated expense tracking system reduce business costs.
            </h1>
            <p className="text-base md:text-lg text-gray-400">
              Real-time collaboration is a game-changing feature in productivity
              manage in SaaS that enables teams to work together.
            </p>
          </div>

          <div className="grid gap-4 md:gap-8 md:grid-cols-2">
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Expense Analysis
              </h3>
              <p className="text-gray-400">
                Analyzing expense data to form identify trends, areas for cost
                savings, and budgeting.
              </p>
            </div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Custom Report Creation
              </h3>
              <p className="text-gray-400">
                Developing custom reports based on specific business form the to
                requirements.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="relative px-4 py-2 md:px-6 md:py-2 text-white rounded-full text-sm bg-transparent transition-colors duration-300 ease-in-out hover:bg-blue-500 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-[linear-gradient(to-right,_blue,_blue_50%,_white_50%,_white)] before:p-[1px] before:content-[''] before:z-[-1]"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}
