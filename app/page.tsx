import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PlacesSlider from "@/components/PlacesSlider";
import Destinations from "@/components/Destinations";
import Trips from "@/components/Trips";
import WhatsAppButton from "@/components/WhatsAppButton";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";


export default function Page() {
  return (
    <main className="min-h-screen text-white scroll-smooth">
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* EXPLORE */}
      <section id="explore">
        <SearchBar />
        <PlacesSlider />
        <Destinations />
      </section>

      {/* TRIPS */}
      <section id="trips">
        <Trips />
      </section>

      {/* BOOKING */}
      <section id="booking">
        <BookingForm />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>


      <WhatsAppButton />
      <Footer />
    </main>
  );
}
