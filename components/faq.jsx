"use client";
import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How does DataAI improve business management?",
    answer:
      "DataAI leverages artificial intelligence to analyze vast amounts of data, identify patterns, and provide actionable insights. It automates routine tasks like scheduling, reporting, and data analysis.",
  },
  {
    question: "Can DataAI integrate with other business tools?",
    answer:
      "Yes, DataAI offers seamless integration with popular business tools and platforms, enabling streamlined workflows and enhanced productivity across your organization.",
  },
  {
    question: "What kind of customer support does DataAI offer?",
    answer:
      "We provide 24/7 dedicated customer support through multiple channels including live chat, email, and phone. Our expert team ensures you get the assistance you need, when you need it.",
  },
  {
    question: "How easy is it to implement DataAI in my business?",
    answer:
      "Implementation is straightforward with our guided setup process and dedicated onboarding team. Most businesses can be up and running with DataAI within days.",
  },
  {
    question: "Is DataAI scalable as my business grows?",
    answer:
      "DataAI is built to scale with your business. Our flexible infrastructure adapts to your growing needs without compromising performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [openIndex]);

  return (
    <div className="bg-[#02070D] text-white p-8 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="text-5xl md:text-5xl mb-6 max-w-96">
            <span>Frequently</span>
            <br />
            <span>Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Discover the Powerful Features That Make Sonata the Ultimate SaaS
            Solution for Scaling Your Business
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#082F5D] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              <div
                ref={contentRef}
                style={{
                  maxHeight: openIndex === index ? `${height}px` : "0",
                  transition: "max-height 0.3s ease",
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
