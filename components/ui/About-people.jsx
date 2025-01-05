export default function Team() {
  const teamMembers = [
    {
      name: "Esther Howard",
      title: "Head of Design",
      imgSrc: "https://i.pravatar.cc/448",
      imgAlt: "Portrait of Esther Howard",
    },
    {
      name: "Guy Hawkins",
      title: "Co-Founder, CEO",
      imgSrc: "https://i.pravatar.cc/449",
      imgAlt: "Portrait of Guy Hawkins",
    },
    {
      name: "Jacob Jones",
      title: "Head of Development",
      imgSrc: "https://i.pravatar.cc/447",
      imgAlt: "Portrait of Jacob Jones",
    },
    {
      name: "Kristin Watson",
      title: "UI/UX Designer",
      imgSrc: "https://i.pravatar.cc/440",
      imgAlt: "Portrait of Kristin Watson",
    },
    {
      name: "Cameron Williamson",
      title: "Marketing Head",
      imgSrc: "https://i.pravatar.cc/441",
      imgAlt: "Portrait of Cameron Williamson",
    },
    {
      name: "Jenny Wilson",
      title: "Product Manager",
      imgSrc: "https://i.pravatar.cc/442",
      imgAlt: "Portrait of Jenny Wilson",
    },
    {
      name: "Darlene Robertson",
      title: "Chief Financial Officer",
      imgSrc: "https://i.pravatar.cc/443",
      imgAlt: "Portrait of Darlene Robertson",
    },
    {
      name: "Ralph Edwards",
      title: "Chief Technology Officer",
      imgSrc: "https://i.pravatar.cc/444",
      imgAlt: "Portrait of Ralph Edwards",
    },
  ];

  return (
    <div className="text-white py-12 px-6">
      <div className="container mx-auto  max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold">The minds behind Data Ai.</h1>
          <p className="text-gray-400 mt-4">
            The minds behind DataAi are a dynamic team of seasoned financial
            experts.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-8">
              <div className="hover:scale-105 transform transition duration-300 rounded-xl border border-[#082C57] bg-[#02080F] backdrop-blur-sm">
                <img
                  className="w-full h-64 object-cover rounded-lg m-1"
                  src={member.imgSrc}
                  alt={member.imgAlt}
                />
              </div>
              <h2 className="text-xl mt-6">{member.name}</h2>
              <p className="text-gray-400 text-xs">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
