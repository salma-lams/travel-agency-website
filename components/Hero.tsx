import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center"
    >
      {/* Background Image */}
      <Image
        src="/images/morocco.png"
        alt="Morocco Travel"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">

          {/* Small Label */}
          <p className="text-sm uppercase tracking-[3px] text-white mb-4 font-medium">
            Discover Morocco
          </p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Explore Morocco with{" "}
            <span className="text-white font-bold">
              Les Anges Travel
            </span>
          </h1>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            {/* Primary Button */}
            <Link
              href="#trips"
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-3 rounded-full text-sm font-semibold text-center text-white shadow-lg"
            >
              Explore Trips
            </Link>

            {/* Secondary Button */}
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 px-8 py-3 rounded-full text-sm font-semibold text-center"
            >
              Book on WhatsApp
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
