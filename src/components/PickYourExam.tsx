"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PickYourExam() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  return (
    <section id="exams" ref={containerRef} className="py-10 md:py-16 bg-white dark:bg-black transition-colors">
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-5xl lg:max-w-6xl px-6"
      >
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Pick your exam
          </h2>
        </div>

        {/* 2-Card Picker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* NEET Card (Stethoscope) */}
          <Link
            href="https://miyagilabs.ai/in/neet"
            className="group relative rounded-2xl bg-white dark:bg-[#090A0D] border border-orange-500/25 dark:border-orange-500/30 hover:border-orange-500/60 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between min-h-[250px] overflow-hidden shadow-[0_0_24px_-4px_rgba(255,107,0,0.1)] hover:shadow-[0_0_36px_-2px_rgba(255,107,0,0.22)]"
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight mb-4">
                NEET
              </h3>

              {/* Feature Points */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>NCERT Line-by-Line Biology & Chemistry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>12,500+ Curated MCQs & 15-Year Solved Papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Full-Length Timed 3h 20m NTA Simulator Mocks</span>
                </div>
              </div>
            </div>

            {/* Bottom Left CTA */}
            <div className="relative z-10 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-900 dark:text-white group-hover:text-[#FF6B00] transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </div>

            {/* Vertically Centered 3D Stethoscope Image */}
            <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] pointer-events-none select-none z-0 flex items-center justify-center">
              <Image
                src="/stethoscope_real.png"
                alt="NEET Stethoscope"
                width={300}
                height={300}
                className="w-full h-full object-contain transform group-hover:scale-115 group-hover:-translate-y-2 group-hover:-rotate-3 transition-all duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </Link>

          {/* CAT Card (Graduation Cap) */}
          <Link
            href="https://miyagilabs.ai/in/cat"
            className="group relative rounded-2xl bg-white dark:bg-[#090A0D] border border-orange-500/25 dark:border-orange-500/30 hover:border-orange-500/60 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between min-h-[250px] overflow-hidden shadow-[0_0_24px_-4px_rgba(255,107,0,0.1)] hover:shadow-[0_0_36px_-2px_rgba(255,107,0,0.22)]"
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight mb-4">
                CAT
              </h3>

              {/* Feature Points */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Adaptive VARC Passage Reading Comprehension</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>DILR Matrix Puzzles with Step-by-Step Logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span>Quantitative Aptitude Speed & Shortcut Mastery</span>
                </div>
              </div>
            </div>

            {/* Bottom Left CTA */}
            <div className="relative z-10 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-900 dark:text-white group-hover:text-[#FF6B00] transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </div>

            {/* Vertically Centered 3D Graduation Cap Image */}
            <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] pointer-events-none select-none z-0 flex items-center justify-center">
              <Image
                src="/gradcap_real.png"
                alt="CAT Graduation Cap"
                width={300}
                height={300}
                className="w-full h-full object-contain transform group-hover:scale-115 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </Link>

        </div>
      </motion.div>
    </section>
  );
}
