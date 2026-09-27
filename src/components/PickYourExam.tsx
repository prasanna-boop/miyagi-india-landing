"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function PickYourExam() {
  return (
    <section id="exams" className="py-24 bg-black border-t border-[#1C1C1E]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Section Header without Subtext */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Pick your exam
          </h2>
        </div>

        {/* Minimalist 2-Card Picker with Feature Points & Centered 3D Pop-Out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* NEET Card (Stethoscope) */}
          <Link
            href="https://miyagilabs.ai/in/neet"
            className="group relative rounded-3xl bg-[#090A0D] border border-[#1C1C20] hover:border-[#FF6B00]/60 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between min-h-[300px] overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10"
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                NEET
              </h3>

              {/* Feature Points */}
              <div className="space-y-3 mb-6 text-sm sm:text-base font-semibold text-zinc-200">
                <div className="flex items-center gap-2.5">
                  <div className="size-5 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span>NCERT Line-by-Line Biology & Chemistry</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="size-5 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span>12,500+ Curated MCQs & 15-Year Solved Papers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="size-5 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span>Full-Length Timed 3h 20m NTA Simulator Mocks</span>
                </div>
              </div>
            </div>

            {/* Bottom Left CTA */}
            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-white group-hover:text-[#FF6B00] transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </div>

            {/* Vertically Centered 3D Stethoscope Image */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 w-[170px] sm:w-[200px] h-[170px] sm:h-[200px] pointer-events-none select-none z-0 flex items-center justify-center">
              <Image
                src="/stethoscope_real.png"
                alt="NEET Stethoscope"
                width={340}
                height={340}
                className="w-full h-full object-contain transform group-hover:scale-115 group-hover:-translate-y-2 group-hover:-rotate-3 transition-all duration-300 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </Link>

          {/* CAT Card (Graduation Cap) */}
          <Link
            href="https://miyagilabs.ai/in/cat"
            className="group relative rounded-3xl bg-[#090A0D] border border-[#1C1C20] hover:border-[#FF6B00]/60 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between min-h-[300px] overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10"
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                CAT
              </h3>

              {/* Feature Points */}
              <div className="space-y-3 mb-6 text-sm sm:text-base font-semibold text-zinc-200">
                <div className="flex items-center gap-2.5">
                  <div className="size-5 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span>Adaptive VARC Passage Reading Comprehension</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="size-5 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span>DILR Matrix Puzzles with Step-by-Step Logic</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="size-5 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span>Quantitative Aptitude Speed & Shortcut Mastery</span>
                </div>
              </div>
            </div>

            {/* Bottom Left CTA */}
            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-white group-hover:text-[#FF6B00] transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </div>

            {/* Vertically Centered 3D Graduation Cap Image */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 w-[170px] sm:w-[200px] h-[170px] sm:h-[200px] pointer-events-none select-none z-0 flex items-center justify-center">
              <Image
                src="/gradcap_real.png"
                alt="CAT Graduation Cap"
                width={340}
                height={340}
                className="w-full h-full object-contain transform group-hover:scale-115 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
