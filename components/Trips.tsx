"use client";

import Image from "next/image";
import Link from "next/link";

const trips = [
  { id: "1", img: "/images/image1.png" },
  { id: "2", img: "/images/image2.png" },
  { id: "3", img: "/images/image3.png" },
  { id: "4", img: "/images/image4.png" },
  { id: "5", img: "/images/image5.png" },
  { id: "6", img: "/images/image6.png" },
  { id: "7", img: "/images/image7.png" },
  { id: "8", img: "/images/image8.png" },
];

export default function Trips() {
  return (
    <section id="trips" className="bg-black text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-red-500 mb-4">
            Travel Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Travel Moments
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {trips.map((trip) => (
            <Link key={trip.id} href={`/trips/${trip.id}`}>
              <div
                className="group bg-zinc-900 rounded-[28px] overflow-hidden 
                           border border-zinc-700 
                           shadow-xl hover:shadow-red-500/20 
                           hover:border-red-500 
                           transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={trip.img}
                    alt="Trip"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-5 text-center">
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-full text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
