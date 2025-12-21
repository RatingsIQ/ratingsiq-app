import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Shield,
  BarChart3,
  Users,
  CheckCircle,
  TrendingUp,
  Mail,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-100 py-20 px-4 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent" />{" "}
        {/* subtle warm overlay */}
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.svg"
              alt="RatingsIQ Logo"
              width={500}
              height={125}
              className="w-full max-w-md mx-auto"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Collect Honest Feedback.
            <br className="hidden sm:block" />
            Share Only What Helps.
          </h1>
          <p className="text-xl text-slate-100 mb-10 max-w-4xl mx-auto">
            Gather neutral, third-party customer feedback without risking your
            public reputation. RatingsIQ helps businesses spot trends, publish
            testimonials, and act on insights — all on your terms.
          </p>

          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-10 py-7"
          >
            Create Your First Review Link
          </Button>
        </div>
      </section>

      {/* Who It’s For */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Designed for Businesses That Value Insight
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Local Businesses",
              "SaaS Founders",
              "Agencies",
              "Service Professionals",
            ].map((item) => (
              <Card key={item} className="p-6">
                <Users className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-slate-800 text-sm">
                  {item === "Local Businesses" &&
                    "Protect your reputation and collect honest feedback."}
                  {item === "SaaS Founders" &&
                    "Turn ratings into actionable intelligence."}
                  {item === "Agencies" &&
                    "Manage client reputation efficiently."}
                  {item === "Service Professionals" &&
                    "Gain insights without public risk."}
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
            Stop Losing Control of Your Customer Feedback
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-8">
              <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Public Reviews Are Risky
              </h3>
              <ul className="text-slate-600 text-left space-y-2">
                <li>• One bad review can live forever.</li>
                <li>• Platforms control context and relationships.</li>
              </ul>
            </Card>
            <Card className="p-8">
              <BarChart3 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Private Feedback Is Messy
              </h3>
              <p className="text-slate-800">
                Emails, DMs, spreadsheets — all over the place.
              </p>
            </Card>
            <Card className="p-8">
              <TrendingUp className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Testimonials Are Hard to Collect
              </h3>
              <ul className="text-slate-800 text-left space-y-2">
                <li>• Customers don’t know what to write.</li>
                <li>• Businesses chase reviews inconsistently.</li>
              </ul>
            </Card>
          </div>
          <p className="text-lg text-slate-600">
            RatingsIQ sits between all of this — neutral, structured, and
            actionable feedback.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Turn Feedback into Business Intelligence
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Neutral Review Collection",
                desc: "Customers speak freely in a trusted, third-party environment.",
              },
              {
                icon: BarChart3,
                title: "Private Dashboard",
                desc: "View every rating and comment in one place.",
              },
              {
                icon: ArrowRight,
                title: "Smart Exporting",
                desc: "Download testimonials for your website, ads, or social media.",
              },
              {
                icon: TrendingUp,
                title: "Insight Over Time",
                desc: "Spot trends before they turn into public problems.",
              },
            ].map((step) => (
              <Card key={step.title} className="p-6">
                <step.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-800">{step.desc}</p>
              </Card>
            ))}
          </div>

          {/* Flow Illustration Placeholder */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-slate-500">
              Flow Illustration: Customer → Dashboard → Export → Insights
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Ethics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            We Respect Honesty and Transparency
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            RatingsIQ is designed for internal insight and voluntary publishing
            — not public review manipulation. Businesses curate what gets
            published, customers leave honest feedback, and everyone benefits.
          </p>
          <div className="flex justify-center gap-8">
            <Badge variant="secondary" className="text-lg py-3 px-6">
              Neutral, Third-Party Feedback
            </Badge>
            <Badge variant="secondary" className="text-lg py-3 px-6">
              GDPR / Privacy Safe
            </Badge>
          </div>
        </div>
      </section>

      {/* Stellar Voices (Social Proof) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Stellar Voices
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                      className="w-6 h-6 fill-amber-400 text-amber-400"
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Pricing That Reflects the Value of Insight
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            You’re not buying software. You’re reducing risk, gaining clarity,
            and turning feedback into actionable intelligence.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-amber-400">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">
                $15<span className="text-lg font-normal">/month</span>
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-amber-400" /> Single project
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-amber-400" /> Basic
                  dashboard
                </li>
              </ul>
              <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
                Get Started
              </Button>
            </Card>
            {/* Add Pro and Agency cards similarly */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            See What Your Customers Really Think
          </h2>
          <Button
            size="lg"
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold text-lg px-10 py-7"
          >
            Create Your First Review Link
          </Button>

          {/* Illustration Placeholder */}
          <div className="mt-16 max-w-md mx-auto">
            <div className="bg-slate-700 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-slate-400">
              Stars → Insights Illustration
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
