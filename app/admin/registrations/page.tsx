import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function RegistrationsPage() {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 🔐 HARD PROTECTION
  if (!user) {
    redirect("/login");
  }

  const { data: players, error } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Error: {error.message}
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
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Position</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Nationality</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {players?.map((p: any) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.full_name}</td>
                <td className="p-3">{p.age}</td>
                <td className="p-3">{p.position}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">{p.email}</td>
                <td className="p-3">{p.nationality}</td>
                <td className="p-3">
                  {p.created_at
                    ? new Date(p.created_at).toLocaleDateString()
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}