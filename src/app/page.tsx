"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Shield,
  ShieldAlert,
  BarChart3,
  Users,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  MessagesSquare,
  FileX,
  Speech,
  MessageCircleHeart,
  FilePen,
  LayoutDashboard,
  MessageSquareText,
  Share2,
  BrickWallShield,
  Radar,
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-b from-gray-950 to-gray-100 py-20 px-4 sm:py-32">
          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Collect Honest Feedback.
              <br className="hidden sm:block" />
              Share Only What Matters.
            </h1>
            <p className="text-xl text-slate-100 mb-10 max-w-4xl mx-auto">
              Gather neutral, third-party feedback without risking your public
              reputation.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-10 py-7"
            >
              <Link href="/login">Create Your First Review Link</Link>
            </Button>
          </div>
        </section>

        {/* Who It’s For */}
        <section className="py-20 px-4 bg-linear-to-b from-gray-100 to-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Built for Businesses That Value Insight Over Guesswork
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Local Businesses",
                "SaaS Founders",
                "Agencies",
                "Service Professionals",
              ].map((item) => (
                <Card key={item} className="p-6">
                  <Users className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item}</h3>
                  <p className="text-slate-800 text-sm">
                    {item === "Local Businesses" &&
                      "Avoid one bad moment defining your business."}
                    {item === "SaaS Founders" &&
                      "Understand churn before it happens."}
                    {item === "Agencies" &&
                      "Collect client feedback without brand risk."}
                    {item === "Service Professionals" &&
                      "Get honest feedback without awkward conversations."}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Problems */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Public Reviews Take Control Out of Your Hands
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-8">
              <Card className="p-8">
                <ShieldAlert className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Public Reviews Are Risky
                </h3>
                <ul className="text-slate-600 text-left space-y-2">
                  <li>• One moment becomes permanent</li>
                  <li>• Context and fairness disappear</li>
                  <li>• Platforms decide visibility</li>
                </ul>
              </Card>
              <Card className="p-8">
                <MessagesSquare className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Private Feedback Is Fragmented
                </h3>
                <p className="text-slate-800">
                  Emails, surveys, and spreadsheets create noise, not clarity.
                </p>
              </Card>
              <Card className="p-8">
                <FileX className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Testimonials Are Hard to Capture
                </h3>
                <ul className="text-slate-800 text-left space-y-2">
                  <li>• Customers don’t know what to write.</li>
                  <li>• Businesses ask inconsistently</li>
                  <li>• Good feedback gets lost</li>
                </ul>
              </Card>
            </div>
            <p className="text-lg text-slate-600">
              RatingsIQ gives you structure, context, and control without any
              public pressure.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Turn Feedback Into Clarity
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: MessageSquareText,
                  title: "Customers Speak Honestly",
                  desc: "Feedback is collected in a neutral, third-party environment.",
                },
                {
                  icon: BrickWallShield,
                  title: "Private Visibility",
                  desc: "View every rating and comment in a secure and organized dashboard.",
                },
                {
                  icon: Share2,
                  title: "Selective Sharing",
                  desc: "Choose what testimonials get shared, and where.",
                },
                {
                  icon: Radar,
                  title: "Spot Issues Early",
                  desc: "Identify patterns before they become public problems.",
                },
              ].map((step) => (
                <Card key={step.title} className="p-6">
                  <step.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-800">{step.desc}</p>
                </Card>
              ))}
            </div>

            {/* Flow Illustration Placeholder */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-slate-500">
                Flow Illustration: Customer → Dashboard → Export → Insights
              </div>
            </div>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              What RatingsIQ Is Not
            </h2>
            <ul className="mt-4 text-lg text-slate-600 space-y-2 text-left md:inline-block">
              <li>• Not a public review platform</li>
              <li>• Not review gating</li>
              <li>• Not SEO tricks or ratings manipulation</li>
              <li>• Not designed to pressure customers</li>
            </ul>
            <p className="mt-12 text-xl text-slate-900">
              Insight comes first. Visibility comes second.
            </p>
          </div>
        </section>

        {/* Trust & Ethics */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              We Respect Honesty and Transparency
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              RatingsIQ is built for internal understanding and voluntary
              publishing. We don’t post reviews publicly, influence ratings, or
              pressure customers. Businesses decide what gets shared. Customers
              decide what they say - always.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Badge
                variant="secondary"
                className="text-lg py-3 px-6 border-slate-200 bg-white shadow-sm"
              >
                Neutral, Third-Party Feedback
              </Badge>
              <Badge
                variant="secondary"
                className="text-lg py-3 px-6 border-slate-200 bg-white shadow-sm"
              >
                GDPR / Privacy Safe
              </Badge>
            </div>
          </div>
        </section>

        {/* Stellar Voices (Social Proof) */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Stellar Voices - Real Feedback, Shared Intentionally
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Examples of how businesses choose to showcase feedback collected
              through RatingsIQ.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  quote:
                    "RatingsIQ helped us gather honest feedback without worrying about public backlash.",
                  author: "Local Café Owner",
                },
                {
                  quote:
                    "We can finally spot trends and highlight the best testimonials effortlessly.",
                  author: "SaaS Founder",
                },
                {
                  quote:
                    "Collecting reviews has never been this structured and simple.",
                  author: "Marketing Agency",
                },
              ].map((voice) => (
                <Card key={voice.quote} className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{voice.quote}"</p>
                  <p className="font-semibold">{voice.author}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Pricing That Reflects the Value of Clarity
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              You’re not buying software, you’re reducing reputational risk.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              <Card className="p-8 border-2 border-yellow-400 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <p className="text-4xl font-bold mb-6">
                  $15<span className="text-lg font-normal">/month</span>
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-yellow-400" /> Single
                    project
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-yellow-400" /> Basic
                    dashboard
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  Get Started
                </Button>
              </Card>
              {/* Add Pro and Agency cards similarly */}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              See What Your Customers Really Think
            </h2>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-10 py-7"
            >
              Create Your First Review Link
            </Button>
            <div className="mt-16 max-w-md mx-auto">
              <div className="bg-gray-600 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-slate-200">
                Stars → Insights Illustration
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
