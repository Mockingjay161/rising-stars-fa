export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* NEWS */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">News</h2>
          <p className="text-gray-600 mb-4">
            Add and manage academy news updates.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Manage News
          </button>
        </div>

        {/* GALLERY */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Gallery</h2>
          <p className="text-gray-600 mb-4">
            Upload and manage training photos.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Manage Gallery
          </button>
        </div>

        {/* REGISTRATIONS */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Registrations</h2>
          <p className="text-gray-600 mb-4">
            View player sign-up submissions.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            View Players
          </button>
        </div>

      </div>

    </div>
  );
}