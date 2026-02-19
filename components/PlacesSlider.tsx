"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const places = [
  { name: "Marrakech", img: "/images/marrakech.png" },
  { name: "Chefchaouen", img: "/images/chefchaouen.png" },
  { name: "Sahara", img: "/images/sahara.png" },
  { name: "Fes", img: "/images/fes.png" },
];

export default function PlacesSection() {
  return (
    <section className="relative -mt-16 pt-20 pb-32 bg-black overflow-hidden">



      {/* 🔥 Background Glow Effects */}
      <div className="absolute w-[700px] h-[700px] bg-red-600/20 rounded-full blur-[200px] -top-40 -left-40 animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[200px] bottom-0 right-0 animate-pulse" />

      <div className="relative z-10 px-6 md:px-16">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-red-500 mb-4">
            Explore Destinations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Discover The Beauty of Morocco
          </h2>
        </div>

        {/* 🔥 Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible"
        >
          {places.map((place, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`relative h-[420px] rounded-[30px] overflow-hidden transition-all duration-700 shadow-2xl ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-60 blur-[1px]"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={place.img}
                    alt={place.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Title */}
                  <div className="absolute bottom-10 left-10">
                    <h3 className="text-white text-3xl font-bold tracking-wide drop-shadow-xl">
                      {place.name}
                    </h3>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
