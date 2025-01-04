import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#020817] my-10 max-w-7xl">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G02B9XJwZEGlxitF2OWeEjbrJjU-9RS8fLKi5XN8DI5r2CkmA5YCzfqxg9.png"
        alt="Grid background"
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Start your journey now transform your business with AI solutions.
            </h1>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
            >
              Get the Template
            </Button>
          </div>

          <div className="relative h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TL0rEXzJCaowoBFXybmVmKOt1Xs-Mxc4LVZl3LqZoDDgawgBg2eBTl264B.png"
              alt="AI Camera Device"
              width={300}
              height={300}
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
