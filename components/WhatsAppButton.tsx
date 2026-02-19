import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212600000000"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
