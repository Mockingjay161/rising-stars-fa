import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2349030866066"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition"
    >
      💬
    </Link>
  );
}