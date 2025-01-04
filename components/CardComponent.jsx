"use client";
import { useEffect, useState } from "react";
import HeroCard from "./Hero-Card";

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const cardData = [
    {
      imageSrc: "/images/hero-card1.png",
      title: "Invoice Management",
      description: "Simplify payments and track invoices with automated tools.",
    },
    {
      imageSrc: "/images/hero-card2.png",
      title: "Customer Analytics",
      description: "Understand customer behavior with advanced analytics.",
    },
    {
      imageSrc: "/images/hero-card3.png",
      title: "Smart Integrations",
      description: "Connect with your favorite tools for seamless workflows.",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {cardData.map((card, index) => {
            // Dynamic styles based on scroll position
            const translateY =
              index === 1
                ? Math.max(100 - scrollPosition * 0.3, 0) // Central card effect
                : Math.max(0 - scrollPosition * 0.1, 0); // Side cards effect

            const zIndex = index === 1 ? 20 : 10; // Central card should always appear on top

            return (
              <div
                key={index}
                style={{
                  transform: `translateY(${translateY}px)`,
                  zIndex,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <HeroCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
