import { createSupabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = await createSupabaseServer();

  const { count: totalRegistrations } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true });

  const { data: players } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  const uniqueNationalities =
    new Set(
      players
        ?.map((p) => p.nationality)
        .filter(Boolean)
    ).size || 0;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const registrationsThisMonth =
    players?.filter((p) => {
      const date = new Date(p.created_at);
      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    }).length || 0;

  return (
  <div>
    <h1 className="text-4xl font-bold mb-8">
      Dashboard
    </h1>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Players</h3>
        <p className="text-3xl font-bold">
          {totalRegistrations || 0}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Registrations</h3>
        <p className="text-3xl font-bold">
          {totalRegistrations || 0}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Nationalities</h3>
        <p className="text-3xl font-bold">
          {uniqueNationalities}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">This Month</h3>
        <p className="text-3xl font-bold">
          {registrationsThisMonth}
        </p>
      </div>

    </div>

    <div className="mt-10 bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Registrations
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Age</th>
              <th className="text-left p-3">Position</th>
              <th className="text-left p-3">Phone</th>
              <th className="text-left p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {players?.slice(0, 5).map((player) => (
              <tr key={player.id} className="border-b">
                <td className="p-3">{player.full_name}</td>
                <td className="p-3">{player.age}</td>
                <td className="p-3">{player.position}</td>
                <td className="p-3">{player.phone}</td>
                <td className="p-3">
                  {new Date(player.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

  </div>
);
}