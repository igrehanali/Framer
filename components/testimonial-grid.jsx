import Image from "next/image";
import { Card } from "@/components/ui/card";
import Heading from "./ui/Heading";

const testimonials = [
  {
    quote:
      "With DataAI, we've automated tedious tasks that used to take hours, freeing up our team to focus on strategic initiatives. It's like having fun.",
    author: {
      name: "Ralph Edwards",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/48?img=1",
    },
    icon: {
      color: "bg-blue-500/10",
      src: "https://i.pravatar.cc/48?img=10",
    },
  },
  {
    quote:
      "With DataAI, we've automated tedious tasks that used to take hours, freeing up our team to focus on strategic initiatives. It's like having fun.",
    author: {
      name: "Brooklyn Simmons",
      role: "Web Developer",
      avatar: "https://i.pravatar.cc/48?img=2",
    },
    icon: {
      color: "bg-indigo-500/10",
      src: "https://i.pravatar.cc/48?img=2",
    },
  },
  {
    quote:
      "The AI-driven insights tailored to our specific industry have given us a form competitive edge. DataAI understands our unique needs and delivers.",
    author: {
      name: "Jacob Jones",
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/48?img=3",
    },
    icon: {
      color: "bg-pink-500/10",
      src: "https://i.pravatar.cc/48?img=13",
    },
  },
  {
    quote:
      "DataAI's predictive analytics have transformed our forecasting capabilities. We're now able to anticipate market trends.",
    author: {
      name: "Kristin Watson",
      role: "SEO, Co-Founder",
      avatar: "https://i.pravatar.cc/48?img=4",
    },
    icon: {
      color: "bg-orange-500/10",
      src: "https://i.pravatar.cc/48?img=1",
    },
  },
  {
    quote:
      "Despite its advanced features, DataAI is incredibly easy to use. The intuitive design means our team was up and running in no time.",
    author: {
      name: "Cody Fisher",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/48?img=5",
    },
    icon: {
      color: "bg-blue-500/10",
      src: "https://i.pravatar.cc/48?img=17",
    },
  },
  {
    quote:
      "As our business has grown, DataAI has scaled with us effortlessly. It's a flexible solution that adapts to our changing needs, making it valuable.",
    author: {
      name: "Darlene Robertson",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/48?img=6",
    },
    icon: {
      color: "bg-indigo-500/10",
      src: "https://i.pravatar.cc/48?img=17",
    },
  },
];

export default function TestimonialGrid() {
  return (
    <div className="bg-black  p-6 md:p-8 lg:p-12">
      <Heading
        title="Real experiences from our users"
        subtitle="Real experiences from our users highlight the transformative impact of our platform on their workflows and productivity."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col justify-between border-[#082F5D] shadow-lg bg-gradient-to-b from-[#031021] to-[#010D19] rounded-3xl"
          >
            <p className="text-white/90 text-lg mb-8">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-10">
                <div className="relative">
                  <div
                    className={`absolute inset-0 ${testimonial.icon.color} rounded-full`}
                  />
                  <Image
                    src={testimonial.author.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full relative z-10"
                  />
                  <Image
                    src={testimonial.icon.src}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full absolute z-0"
                    style={{ top: "0%", left: "45%" }}
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    {testimonial.author.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
