import { supabaseServer } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Star,
  Plus,
  TrendingUp,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

export default async function DashboardPage() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null; // middleware redirects to login
  }

  // Fetch user's projects with proper typing
  const { data: projects } = await supabase
    .from("projects")
    .select("id, name, slug, created_at")
    .order("created_at", { ascending: false })
    .returns<
      Array<{ id: string; name: string; slug: string; created_at: string }>
    >();

  // Fetch submissions for stats with proper typing
  const { data: submissions } = await supabase
    .from("feedback_submissions")
    .select("rating, status")
    .returns<
      Array<{ rating: number; status: "pending" | "approved" | "ignored" }>
    >();

  // Calculate stats safely
  const totalSubmissions = submissions?.length || 0;
  const approvedCount =
    submissions?.filter((s) => s.status === "approved").length || 0;

  const averageRating =
    totalSubmissions > 0
      ? (submissions?.reduce((sum, s) => sum + s.rating, 0) || 0) /
        totalSubmissions
      : 0;

  const roundedAverage = averageRating.toFixed(1);

  const hasProject = projects && projects.length > 0;
  const canCreateProject = projects ? projects.length < 1 : true; // Starter = max 1 project

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Light Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="RatingsIQ"
                width={160}
                height={40}
                className="h-9 w-auto"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Badge variant="secondary">Starter Plan</Badge>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/account">Upgrade to Pro</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back, {user.email?.split("@")[0] || "User"}!
          </h1>
          <p className="text-slate-600">Here’s your feedback overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Feedback</p>
                <p className="text-3xl font-bold text-slate-900">
                  {totalSubmissions}
                </p>
              </div>
              <MessageSquare className="h-10 w-10 text-slate-400" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Average Rating</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-3xl font-bold text-slate-900">
                    {roundedAverage}
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 ${
                          star <= Math.round(averageRating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <TrendingUp className="h-10 w-10 text-slate-400" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Approved for Sharing</p>
                <p className="text-3xl font-bold text-slate-900">
                  {approvedCount}
                </p>
              </div>
              <Star className="h-10 w-10 text-yellow-400 fill-yellow-400" />
            </div>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Your Projects</h2>
          {canCreateProject ? (
            <Button
              asChild
              className="w-full sm:w-auto bg-yellow-400 hover:bg-amber-500 text-black"
            >
              <Link href="/dashboard/create-project">
                <Plus className="mr-2 h-5 w-5" />
                Create Project
              </Link>
            </Button>
          ) : (
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/dashboard/account">
                <AlertCircle className="mr-2 h-5 w-5" />
                Upgrade for Unlimited Projects
              </Link>
            </Button>
          )}
        </div>

        {/* Projects List or Empty State */}
        {hasProject && projects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {project.name}
                </h3>

                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-slate-600 mb-1">Review Link</p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded break-all">
                        ratingsiq.app/f/{project.slug}
                      </code>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-slate-600 mb-1">Stellar Voices Page</p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded break-all">
                        ratingsiq.app/t/{project.slug}
                      </code>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        Copy
                      </Button>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <Link href={`/dashboard/projects/${project.id}`}>
                      View Submissions
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <Star className="h-16 w-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                No projects yet
              </h3>
              <p className="text-slate-600 mb-8">
                Create your first project to start collecting honest feedback.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-yellow-400 hover:bg-amber-500 text-black"
              >
                <Link href="/dashboard/create-project">
                  <Plus className="mr-2 h-5 w-5" />
                  Create Your First Project
                </Link>
              </Button>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
