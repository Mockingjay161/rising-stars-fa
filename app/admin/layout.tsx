import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">

        <h2 className="text-2xl font-bold mb-8 text-yellow-500">
          RSFA Admin
        </h2>

        <nav className="space-y-3">

          <Link
            href="/admin"
            className="block px-4 py-3 rounded hover:bg-slate-800"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/news"
            className="block px-4 py-3 rounded hover:bg-slate-800"
          >
            News
          </Link>

          <Link
            href="/admin/gallery"
            className="block px-4 py-3 rounded hover:bg-slate-800"
          >
            Gallery
          </Link>

          <Link
            href="/admin/registrations"
            className="block px-4 py-3 rounded hover:bg-slate-800"
          >
            Registrations
          </Link>

          <Link
            href="/admin/settings"
            className="block px-4 py-3 rounded hover:bg-slate-800"
          >
            Settings
          </Link>

        </nav>

        <div className="mt-auto p-4">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}