import { supabaseServer } from "@/lib/supabase-server";

export default async function RegistrationsPage() {
  const { data: players, error } = await supabaseServer
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-6 text-red-600">
        <h1 className="text-xl font-bold">
          Error loading registrations
        </h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Player Registrations
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-lg">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Nationality</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {players?.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.full_name}</td>
                <td className="p-3">{p.age}</td>
                <td className="p-3">{p.position}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">{p.email}</td>
                <td className="p-3">{p.nationality}</td>
                <td className="p-3">
                  {new Date(p.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}