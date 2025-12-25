"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Stellar Voices", href: "#stellar-voices" },
  ];

  return (
    <nav className="relative z-50 w-full bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-dark.svg"
              alt="RatingsIQ Logo"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-200 hover:text-white font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              asChild
              className="text-slate-300 hover:bg-teal-600 hover:text-white transition-colors"
            >
              <Link href="/login">Log In</Link>
            </Button>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              asChild
            >
              <Link href="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              {/* Accessible hidden title for screen readers */}
              <h2 className="sr-only">Navigation Menu</h2>

              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-slate-700 hover:text-yellow-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  asChild
                >
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
