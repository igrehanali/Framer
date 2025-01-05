import Image from "next/image";

function TestimonialCard({ company, quote, author }) {
  return (
    <div className="lg:p-12 p-8 flex flex-col gap-8 border-[#012550] bg-gradient-to-b from-[#031021] to-[#010D19] rounded-3xl shadow-xl">
      <Image
        src={company.logo}
        alt={`${company.name} logo`}
        width={150}
        height={40}
        className="h-10 w-20 object-contain"
      />
      <p className=" text-white/90 leading-relaxed text-xl mb-10">{quote}</p>
      <div className="flex items-center gap-4">
        <Image
          src={author.image}
          alt=""
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="font-medium text-white">{author.name}</div>
          <div className="text-white/60">{author.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      company: {
        name: "TrendLyft",
        logo: "https://i.pravatar.cc/408",
      },
      quote:
        "We were looking for a solution that could help us form automate repetitive tasks while offering valuable to the insights for better decision-making. DataAI delivered in beyond our expectations.",
      author: {
        name: "Darlene Robertson",
        role: "Co-Founder at TrendyLyft",
        image: "https://i.pravatar.cc/240",
      },
    },
    {
      company: {
        name: "LumLabs",
        logo: "https://i.pravatar.cc/148",
      },
      quote:
        "DataAI has completely transformed the way we form in the manage our business. Before adopting it, we spent countless hours on manual processes and decision into making, but now everything is streamlined.",
      author: {
        name: "Marvin McKinney",
        role: "Co-Founder at LumLabs",
        image: "https://i.pravatar.cc/100",
      },
    },
  ];

  return (
    <section className="py-24 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center mb-16">
          What our users say.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
