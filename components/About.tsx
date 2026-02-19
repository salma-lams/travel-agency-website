export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[4px] text-red-500 mb-4">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Discover Morocco With Confidence
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              <span className="text-white font-semibold">
                Les Anges Travel
              </span>{" "}
              is a premium Moroccan travel agency dedicated to crafting
              authentic, immersive, and unforgettable journeys across Morocco.
              From the vibrant streets of Marrakech to the golden dunes of the
              Sahara, we bring travelers closer to the heart of our country.
            </p>

            <p>
              With deep local expertise and a passion for excellence, our team
              designs personalized travel experiences that blend culture,
              adventure, and comfort. Every trip is carefully planned to reflect
              the true spirit of Morocco while ensuring high-quality service at
              every step.
            </p>

            <p>
              Whether you are seeking cultural discovery, desert adventures, or
              a tailor-made private tour, Les Anges Travel is committed to
              turning your journey into a meaningful and memorable experience.
            </p>
          </div>

          {/* Stats / Values */}
          <div className="grid grid-cols-2 gap-8">

            <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">10+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">1000+</h3>
              <p className="text-gray-400">Happy Travelers</p>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">50+</h3>
              <p className="text-gray-400">Custom Tours</p>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">24/7</h3>
              <p className="text-gray-400">Customer Support</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
