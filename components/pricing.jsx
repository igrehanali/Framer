"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import Heading from "./ui/Heading";

export default function Pricing() {
  const [billingType, setBillingType] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      description: "Basic plan for all user",
      price: "$29",
      priceNote: "No credit card required",
      features: [
        "Core business management tools",
        "Task and project management",
        "Basic analytics and reporting",
        "Limited AI driven insights",
      ],
      buttonText: "Get Start 14 Days Free Trial",
      buttonVariant: "outline",
      buttonClass:
        "relative px-4 py-2 md:px-6 md:py-2 text-white rounded-full text-sm bg-transparent transition-colors duration-300 ease-in-out hover:bg-blue-500 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-[linear-gradient(to-right,_blue,_blue_50%,_white_50%,_white)] before:p-[1px] before:content-[''] before:z-[-1]",
      cardClass:
        "relative border-[#0073FF] p-6 rounded-2xl overflow-hidden group bg-[#021327]",
      gradientClass:
        "absolute inset-px bg-gradient-to-b from-[#021327] to-[#020913] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none",
    },
    {
      name: "Pro",
      description: "Get access to everything",
      price: "$56",
      priceNote: "Per month, billed yearly",
      features: [
        "Everything in Basic, Plus",
        "Advanced AI-Powered Analytics",
        "Enhanced Collaboration Tools",
        "Up to 20 Users",
      ],
      buttonText: "Get Started Now",
      buttonVariant: "solid",
      buttonClass: "w-full bg-blue-600 hover:bg-blue-700 rounded-2xl",
      cardClass:
        "relative bg-[#0D1425] border-[#0073FF] p-6 rounded-2xl overflow-hidden group",
      gradientClass:
        "absolute inset-px bg-gradient-to-b from-blue-500/20 to-transparent opacity-100 transition-opacity rounded-2xl pointer-events-none",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Best for larger teams",
      price: "Custom",
      priceNote: "Contact for custom price",
      features: [
        "Everything in Professional, Plus",
        "Custom AI Model Training",
        "Advanced Security Features",
        "Unlimited Users",
      ],
      buttonText: "Get Start 14 Days Free Trial",
      buttonVariant: "outline",
      buttonClass:
        "relative px-4 py-2 md:px-6 md:py-2 text-white rounded-full text-sm bg-transparent transition-colors duration-300 ease-in-out hover:bg-blue-500 before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-transparent before:bg-[linear-gradient(to-right,_blue,_blue_50%,_white_50%,_white)] before:p-[1px] before:content-[''] before:z-[-1]",
      cardClass:
        "relative bg-[#0D1425] border-[#0073FF] p-6 rounded-2xl overflow-hidden group",
      gradientClass:
        "absolute inset-px bg-gradient-to-b from-[#1E2A45] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none",
    },
  ];

  return (
    <div className="bg-[#02070D] text-white p-6">
      <Heading
        title="Pricing & Plan"
        subtitle="Pricing and plans are designed to offer flexibility and value, catering to businesses of all sizes and needs."
      />
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full p-1 bg-[#1A2030]">
            <button
              onClick={() => setBillingType("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingType === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingType("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingType === "yearly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanCard({ plan }) {
  return (
    <Card className={plan.cardClass}>
      <div className={plan.gradientClass} />
      <div className="relative space-y-8">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <p className="text-sm text-gray-400">{plan.description}</p>
          </div>
          {plan.popular && (
            <span className="px-3 py-1 text-xs font-medium bg-white rounded-full">
              Popular
            </span>
          )}
        </div>

        <div className="space-y-1">
          <div className="text-5xl font-bold text-white">{plan.price}</div>
          <p className="text-sm text-gray-400">{plan.priceNote}</p>
        </div>
        <hr className="border-[#15202C]" />
        <div className="space-y-4">
          <p className="font-semibold text-gray-200">Features Included:</p>
          <ul className="space-y-5">
            {plan.features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>
        </div>

        <Button
          variant={plan.buttonVariant}
          size="lg"
          className={plan.buttonClass}
        >
          {plan.buttonText}
        </Button>
      </div>
    </Card>
  );
}

function FeatureItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-gray-300">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-blue-500" />
      </span>
      {text}
    </li>
  );
}
