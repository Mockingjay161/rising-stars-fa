export default function AboutPage() {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
  
        <h1 className="text-4xl font-bold mb-6">
          About Rising Stars Football Academy
        </h1>
  
        <p className="text-lg text-gray-700 mb-10">
          Rising Stars Football Academy is dedicated to developing young football talent
          through structured training, discipline, and competitive exposure.
        </p>
  
        {/* MISSION */}
        <div className="bg-gray-100 p-8 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p>
            To nurture young players into professional footballers through quality coaching,
            discipline, and opportunity.
          </p>
        </div>
  
        {/* VISION */}
        <div className="bg-gray-100 p-8 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p>
            To become one of the leading youth football academies in Africa producing
            world-class players.
          </p>
        </div>
  
        {/* VALUES */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Our Values</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Discipline</li>
            <li>Hard Work</li>
            <li>Teamwork</li>
            <li>Respect</li>
            <li>Excellence</li>
          </ul>
        </div>
  
      </div>
    );
  }