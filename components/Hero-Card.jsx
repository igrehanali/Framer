import Image from "next/image";

export default function HeroCard({ imageSrc, title, description }) {
  return (
    <div
      className="relative border border-[#042854] rounded-3xl shadow-lg overflow-hidden max-w-sm p-6 flex flex-col justify-between lg:h-[550px]"
      style={{
        backgroundImage: `url(${"/images/hero-card-bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 rounded-3xl"></div>

      {/* Image */}
      <div className="relative flex items-center justify-center bg-gradient-to-b from-[#011226] to-[#020911] rounded-lg mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-left mt-auto">
        <h3 className="text-white text-2xl font-medium mb-2">{title}</h3>
        <p className="text-[#AAAAAA] text-lg">{description}</p>
      </div>
    </div>
  );
}
