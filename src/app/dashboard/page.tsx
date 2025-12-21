// src/app/dashboard/page.tsx
import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await supabaseServer(); // ← Add await here
  const {
    data: { user },
  } = await supabase.auth.getUser(); // ← Also await this

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Welcome back, {user.email}!
        </h1>
        <p className="text-xl text-slate-600">
          Your dashboard is ready. Create your first project to get started.
        </p>
      </div>
    </div>
  );
}
