import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{ 
        background:"red"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Rising Stars Football Academy
        </h1>

        <p className="text-lg md:text-2xl mb-8">
          Developing Tomorrow’s Football Stars Today
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <Link
            href="/register"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Join Now
          </Link>

          <Link
            href="/about"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}