export default function ProgramsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Our Programs
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">
            U10 Development
          </h2>
          <p>
            Fundamental football skills and character development.
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">
            U13 Academy
          </h2>
          <p>
            Technical and tactical training for emerging talents.
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">
            U15 Elite Program
          </h2>
          <p>
            Advanced player development and competitive exposure.
          </p>
        </div>

      </div>
    </div>
  );
}