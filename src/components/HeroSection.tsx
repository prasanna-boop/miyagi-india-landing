"use client";

import React from "react";
import Link from "next/link";
import { GradientWave } from "@/components/ui/gradient-wave";
import { FadeWord } from "@/components/ui/fade-word";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { RippleButton } from "@/components/ui/ripple-button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const avatarUrls = [
    {
      imageUrl: "/student_1.jpg",
      profileUrl: "#",
    },
    {
      imageUrl: "/student_2.jpg",
      profileUrl: "#",
    },
    {
      imageUrl: "/student_3.jpg",
      profileUrl: "#",
    },
    {
      imageUrl: "/student_4.jpg",
      profileUrl: "#",
    },
  ];

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center pt-16 transition-colors">
      {/* Background Gradient Wave with smooth bottom alpha feathering */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]">
        <GradientWave
          className="opacity-75 dark:opacity-45"
          noiseSpeed={0.000008}
          deform={{ incline: 0.4, noiseAmp: 220, noiseFlow: 4.5 }}
        />
      </div>

      {/* Smooth Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90 dark:from-black/40 dark:via-transparent dark:to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center my-auto">
        
        {/* YC Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-zinc-200 text-zinc-900 dark:bg-[#121215]/90 dark:border-[#222227] dark:text-white text-sm font-semibold mb-8 backdrop-blur-md shadow-sm">
          <span className="w-5 h-5 rounded bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs shadow-sm">
            Y
          </span>
          <span className="font-bold tracking-wide">Backed by Y Combinator</span>
        </div>

        {/* Clean, Bold Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.08] mb-6 flex flex-wrap items-center justify-center gap-x-3.5">
          <span>Ace</span>
          <FadeWord
            words={["NEET", "CAT"]}
            duration={2800}
            className="font-bold text-[#FF6B00]"
          />
          <span>on your first attempt.</span>
        </h1>

        {/* Subtitle - Exact 2 Clean Lines */}
        <p className="max-w-[820px] text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-400 font-medium leading-relaxed mb-10">
          Start with a diagnostic, follow a study plan built around you, and practice with 20,000+ expert-reviewed questions with step-by-step solutions for every mistake.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <Link href="https://miyagilabs.ai/login?returnTo=/in" className="w-full sm:w-auto">
            <RippleButton
              rippleColor="rgba(255, 255, 255, 0.4)"
              className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-base flex items-center justify-center border-none transition-colors shadow-lg shadow-orange-500/25"
            >
              Start for free
            </RippleButton>
          </Link>
          <Link href="#features" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-12 px-8 rounded-xl bg-white/90 hover:bg-zinc-100 text-zinc-900 border border-zinc-300 dark:bg-[#141416]/90 dark:hover:bg-[#1D1D21] dark:text-zinc-200 dark:hover:text-white font-bold text-base dark:border-[#26262B] transition-colors flex items-center justify-center gap-2 backdrop-blur-md shadow-sm">
              Explore Features
              <ArrowRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            </button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
          <AvatarCircles
            avatarUrls={avatarUrls}
            className="border-white dark:border-black"
          />
          <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 text-center sm:text-left font-medium">
            Joined by <strong className="text-zinc-950 dark:text-white font-bold">125,000+ students globally</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
