"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please enter a destination");
      return;
    }

    // Redirect with query param
    router.push(`/trips?destination=${query}`);
  };

  return (
    <div className="w-full flex justify-center -mt-16 px-6 relative z-40">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-full p-3 w-full max-w-5xl flex gap-3">

        <input
          type="text"
          placeholder="Places to Go"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-6 py-3 rounded-full bg-white/80 outline-none text-black font-semibold"
        />

        <button
          onClick={handleSearch}
          className="bg-red-600 text-white px-10 py-3 rounded-full font-bold hover:bg-red-700 transition"
        >
          INSPIRE ME
        </button>

      </div>
    </div>
  );
}
