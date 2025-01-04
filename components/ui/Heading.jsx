import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="bg-[#02070D]">
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 text-white max-w-4xl mx-auto">
        <h1
          className="text-3xl md:text-[56px] font-medium mb-6 leading-snug"
          role="heading"
          aria-level="1"
        >
          {title}
        </h1>
        <p className="text-sm md:text-lg text-[#AAA] text-center max-w-2xl">
          {subtitle}
        </p>
      </section>
    </div>
  );
};

export default Heading;
