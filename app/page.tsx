import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>

      <Hero />

      <section className="py-20 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center">

  <h2 className="text-4xl font-bold mb-12">
    Academy in Numbers
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-3xl font-bold text-yellow-500">10+</h3>
      <p>Years of Coaching</p>
    </div>

    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-3xl font-bold text-yellow-500">200+</h3>
      <p>Players Trained</p>
    </div>

    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
      <p>Tournaments Played</p>
    </div>

    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-3xl font-bold text-yellow-500">15+</h3>
      <p>Qualified Coaches</p>
    </div>

  </div>

</div>

</section>  

<section className="py-20 bg-gray-50">

<div className="max-w-6xl mx-auto px-6 text-center">

  <h2 className="text-4xl font-bold mb-12">
    Why Choose Rising Stars?
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-3">
        Professional Coaching
      </h3>
      <p>Qualified coaches focused on player development and discipline.</p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-3">
        Modern Training System
      </h3>
      <p>Structured training programs for all age categories.</p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-3">
        Exposure & Opportunities
      </h3>
      <p>Players participate in tournaments and scouting events.</p>
    </div>

  </div>

</div>

</section>

    </main>
  );
}