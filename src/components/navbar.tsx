import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-20 bg-gray-950">
      {/* Warm overlay to blend with hero */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-900/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-dark.svg"
            alt="RatingsIQ Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center space-x-6 text-white font-semibold">
          <Link
            href="/features"
            className="hover:text-amber-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:text-amber-400 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="hover:text-amber-400 transition-colors"
          >
            Login
          </Link>
          <Button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 font-semibold">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
