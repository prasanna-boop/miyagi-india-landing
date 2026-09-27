"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-2 right-2 md:left-4 md:right-4 z-50 mt-4 max-w-7xl mx-auto h-14 flex items-center justify-between rounded-full border border-zinc-800/90 bg-black/80 backdrop-blur-md px-6 shadow-lg shadow-black/40">
      {/* Brand Logo with exact Miyagi logo image */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <Image
          src="/logo.png"
          alt="Miyagi Labs Logo"
          width={30}
          height={30}
          className="inline-block object-contain group-hover:scale-105 transition-transform"
          priority
        />
        <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
          Miyagi <span className="text-zinc-400 font-semibold">Labs</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400">
        <Link href="#features" className="hover:text-white transition-colors">
          Features
        </Link>
        <Link href="#exams" className="hover:text-white transition-colors">
          Exams
        </Link>
        <Link href="#app" className="hover:text-white transition-colors">
          App
        </Link>
      </nav>

      {/* Right CTA */}
      <div className="flex items-center gap-3">
        <Link
          href="https://miyagilabs.ai/login"
          className="hidden sm:inline-block text-sm font-semibold text-zinc-400 hover:text-white transition-colors mr-1"
        >
          Log in
        </Link>
        <Link href="https://miyagilabs.ai/login?returnTo=/in">
          <RippleButton
            rippleColor="rgba(255, 255, 255, 0.4)"
            className="bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold px-5 py-2 rounded-full border-none transition-colors shadow-md shadow-orange-500/25"
          >
            Get Started
          </RippleButton>
        </Link>
      </div>
    </header>
  );
}
