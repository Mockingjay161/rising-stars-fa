import { supabase } from "@/lib/supabase";

export default async function RegistrationsPage() {
  const { data: players, error } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">
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
        <table className="w-full border-collapse bg-white shadow rounded-lg">

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
            {players?.map((player) => (
              <tr key={player.id} className="border-t">

                <td className="p-3">{player.full_name}</td>
                <td className="p-3">{player.age}</td>
                <td className="p-3">{player.position}</td>
                <td className="p-3">{player.phone}</td>
                <td className="p-3">{player.email}</td>
                <td className="p-3">{player.nationality}</td>
                <td className="p-3">
                  {new Date(player.created_at).toLocaleDateString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}