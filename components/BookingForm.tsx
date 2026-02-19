"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    persons: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Booking Sent Successfully!");
  };

  return (
    <section className="relative bg-black py-20 overflow-hidden">

      {/* Soft Glow  */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[160px] -top-20 -left-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-red-500 tracking-[4px] uppercase text-sm mb-3">
            Booking
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Reserve Your Adventure
          </h2>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-md
                     border border-zinc-800 p-8 md:p-10 rounded-3xl
                     space-y-6 shadow-xl"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white outline-none focus:border-red-500"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white outline-none focus:border-red-500"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="date"
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white outline-none focus:border-red-500"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <input
              type="number"
              placeholder="Travelers"
              min="1"
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white outline-none focus:border-red-500"
              onChange={(e) => setForm({ ...form, persons: e.target.value })}
            />
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold text-white transition">
            Book Now
          </button>
        </form>

      </div>
    </section>
  );
}
