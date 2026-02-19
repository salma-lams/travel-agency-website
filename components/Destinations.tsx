import Image from "next/image";

const destinations = [
  { name: "Marrakech", img: "/images/marrakech.png" },
  { name: "Chefchaouen", img: "/images/chefchaouen.png" },
  { name: "Sahara", img: "/images/sahara.png" },
  { name: "Fes", img: "/images/fes.png" },
];

export default function Destinations() {
  return (
    <section
      id="explore"
      className="bg-zinc-950 text-white pt-20 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-red-500 mb-4">
            Explore Morocco
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Popular Destinations
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="group relative h-80 rounded-[28px] overflow-hidden cursor-pointer border border-zinc-800 hover:border-red-500/50 transition-all duration-500"
            >
              {/* Image */}
              <Image
                src={d.img}
                alt={d.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  {d.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
