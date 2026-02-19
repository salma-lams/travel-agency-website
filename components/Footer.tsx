import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-10 py-16 ">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Les Anges Travel
          </h3>
          <p className="text-sm leading-relaxed">
            Discover Morocco with a trusted travel agency.
            Premium trips, authentic experiences, and unforgettable memories.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><Link href="#home" className="hover:text-red-400">Home</Link></li>
            <li><Link href="#explore" className="hover:text-red-400">Explore</Link></li>
            <li><Link href="#trips" className="hover:text-red-400">Trips</Link></li>
            <li><Link href="#about" className="hover:text-red-400">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Morocco</li>
            <li>📞 +212 6 00 00 00 00</li>
            <li>✉️ contact@lesangestravel.com</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Book your trip
          </h4>
          <a
            href="https://wa.me/212600000000?text=Hello%20I%20want%20to%20book%20a%20trip%20with%20Les%20Anges%20Travel"
            target="_blank"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Book Now on WhatsApp
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Les Anges Travel. All rights reserved.
      </div>
    </footer>
  );
}
