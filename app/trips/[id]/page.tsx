import { trips } from "@/app/data/trips";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";


export default function TripDetails({ params }: { params: { id: string } }) {
  const trip = trips.find((t) => t.id === params.id);

  if (!trip) {
    return <div className="p-10 text-center">Trip not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <h1 className="text-4xl font-bold mt-6">{trip.title}</h1>

      <div className="flex gap-8 mt-3 text-lg text-gray-600">
        <p>💰 ${trip.price}</p>
        <p>⏳ {trip.duration}</p>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        {trip.description}
      </p>

      {/* Booking */}
      <BookingForm />

     
    </div>
  );
}
