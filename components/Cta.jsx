import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#020817] my-10">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G02B9XJwZEGlxitF2OWeEjbrJjU-9RS8fLKi5XN8DI5r2CkmA5YCzfqxg9.png"
        alt="Grid background"
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <div className="grid items-center gap-8 justify-between lg:grid-cols-2 lg:gap-32">
          <div className="relative h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TL0rEXzJCaowoBFXybmVmKOt1Xs-Mxc4LVZl3LqZoDDgawgBg2eBTl264B.png"
              alt="AI Camera Device"
              width={400}
              height={400}
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              priority
            />
          </div>
          <div className="space-y-8">
            <h1 className="text-4xl text-white">
              Automated financial Management
            </h1>
            <p className="text-[#aaa]">
              Financial management is the backbone of any successful
              organization, ensuring that financial resources.
            </p>
            <Button
              size="lg"
              className="px-4 py-2 border border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
