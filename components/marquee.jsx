"use client";

import {
  Activity,
  Atom,
  Binary,
  Box,
  Brain,
  CircuitBoardIcon as Circuit,
  Cloud,
  Code,
  Cpu,
  Database,
} from "lucide-react";
import { useState } from "react";

export default function Marquee() {
  const [isPaused, setIsPaused] = useState(false);

  const companies = [
    { name: "Cognitech", icon: Brain },
    { name: "DataFlux", icon: Database },
    { name: "CodeCrest", icon: Code },
    { name: "Neuronix", icon: Circuit },
    { name: "Innowave", icon: Activity },
    { name: "ByteCloud", icon: Cloud },
    { name: "AtomicAI", icon: Atom },
    { name: "BinaryLabs", icon: Binary },
    { name: "CoreTech", icon: Cpu },
    { name: "BoxLogic", icon: Box },
  ];

  // Duplicate items for seamless looping
  const allCompanies = [...companies, ...companies];

  return (
    <div className="w-full bg-black text-center py-20 overflow-hidden">
      <h2 className="text-[#aaa] text-xl mb-20">
        Trusted by 10,000+ founders & business owners
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="max-w-[1280px] mx-auto flex"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex animate-marquee ${
              isPaused ? "animation-paused" : ""
            }`}
          >
            {allCompanies.map((company, index) => {
              const Icon = company.icon;
              return (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center gap-2 mx-8 text-[#aaa] hover:text-gray-200 transition-colors"
                >
                  <Icon className="w-10 h-10" />
                  <span className="text-lg font-medium">{company.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
