"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Pencil } from "lucide-react";
import { MiyagiGazeAvatar } from "@/components/MiyagiGazeAvatar";
import { motion, useScroll, useTransform } from "framer-motion";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll-driven fade: 0 opacity when at top of hero, smoothly fades to 1 as it enters
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  return (
    <section
      id="features"
      ref={containerRef}
      className="pt-2 pb-12 md:pt-4 md:pb-16 bg-white dark:bg-black relative z-10 transition-colors"
    >
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-5xl lg:max-w-6xl px-6"
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white tracking-tight">
            What we&apos;re building
          </h2>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3.5 sm:gap-4">
            
            {/* Card 1: 100% NCERT Line-by-Line Questions (Emerald Green) */}
            <Card className="group relative col-span-full flex overflow-hidden lg:col-span-2 bg-white dark:bg-[#08080A]/90 border border-zinc-200/80 dark:border-[#1C1C20] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all rounded-2xl p-5 sm:p-6 flex-col justify-between shadow-sm dark:shadow-none">
              <CardContent className="p-0 flex flex-col items-center text-center">
                {/* Visual Top Container with Pop-out */}
                <div className="relative flex h-24 w-full max-w-[220px] items-center justify-center">
                  <svg
                    className="text-emerald-500/20 dark:text-emerald-500/15 absolute inset-0 size-full transform group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-300"
                    viewBox="0 0 254 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="relative z-10 text-4xl sm:text-5xl font-bold text-emerald-600 dark:text-emerald-400 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 inline-block drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    100%
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
                  NCERT Line-by-Line
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 max-w-[260px] leading-relaxed">
                  Curated passages where each line corresponds to a NEET exam question.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: CBT Mode Practice Tests (Sky Blue / Cyan Pencil) */}
            <Card className="group relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-white dark:bg-[#08080A]/90 border border-zinc-200/80 dark:border-[#1C1C20] hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm dark:shadow-none">
              <CardContent className="p-0 flex flex-col items-center text-center">
                {/* Circular Pencil Badge with Pop-out */}
                <div className="relative flex h-24 w-full items-center justify-center">
                  <div className="relative flex aspect-square size-20 sm:size-22 rounded-full border border-sky-500/30 before:absolute before:-inset-1 before:rounded-full before:border before:border-sky-500/15 bg-sky-50/50 dark:bg-[#0E0E12] shadow-inner items-center justify-center transform group-hover:scale-115 group-hover:-translate-y-1.5 transition-all duration-300">
                    <Pencil className="size-8 text-sky-500 dark:text-sky-400" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
                  CBT Practice Tests
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 max-w-[260px] leading-relaxed">
                  CBT mode topic-wise practice and full mocks available in English & Hindi.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: 20,000+ MCQ Bank (Violet / Purple Accent) */}
            <Card className="group relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-white dark:bg-[#08080A]/90 border border-zinc-200/80 dark:border-[#1C1C20] hover:border-violet-500/50 dark:hover:border-violet-500/40 transition-all rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm dark:shadow-none">
              <CardContent className="p-0 flex flex-col items-center text-center">
                {/* Visual Top Container with Pop-out */}
                <div className="relative flex h-24 w-full max-w-[220px] items-center justify-center">
                  <div className="w-full rounded-xl bg-violet-50/50 dark:bg-[#0E0E12] border border-violet-200/50 dark:border-[#222228] p-3 flex flex-col justify-center space-y-1.5 shadow-inner transform group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-600 dark:text-zinc-400 font-semibold">Question Pool</span>
                      <span className="font-bold text-violet-600 dark:text-violet-400 text-sm">20,000+</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full w-full rounded-full" />
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold">NEET • CAT • PYQs</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
                  20,000+ MCQ Bank
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 max-w-[260px] leading-relaxed">
                  Vast question bank tailored for India exams with detailed explanations.
                </p>
              </CardContent>
            </Card>

            {/* Card 4: 24/7 AI Tutor */}
            <Card className="group relative col-span-full overflow-hidden lg:col-span-3 bg-white dark:bg-[#08080A]/90 border border-zinc-200/80 dark:border-[#1C1C20] hover:border-[#FF6B00]/60 dark:hover:border-[#FF6B00]/40 transition-all rounded-2xl p-5 sm:p-7 min-h-[200px] shadow-sm dark:shadow-none">
              <CardContent className="p-0 grid h-full sm:grid-cols-2 gap-4 items-center">
                <div className="relative z-10 flex flex-col justify-center space-y-3">
                  <div className="relative flex aspect-square size-11 rounded-full border border-orange-500/30 before:absolute before:-inset-1 before:rounded-full before:border before:border-orange-500/15 bg-orange-500/10 dark:bg-[#0E0E12] items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Sparkles className="size-5 text-[#FF6B00]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-1.5">
                      24/7 AI Tutor
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Doubt-solving tutor using the Socratic method that guides students step-by-step toward the answer.
                    </p>
                  </div>
                </div>

                {/* Right Mascot with Pop-out */}
                <div className="relative z-10 flex items-center justify-center sm:justify-end">
                  <div className="transform group-hover:scale-110 group-hover:-translate-y-1.5 transition-all duration-300">
                    <MiyagiGazeAvatar size={135} className="drop-shadow-[0_12px_28px_rgba(255,107,0,0.3)]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Joined by 125,000+ Students */}
            <Card className="group relative col-span-full overflow-hidden lg:col-span-3 bg-white dark:bg-[#08080A]/90 border border-zinc-200/80 dark:border-[#1C1C20] hover:border-amber-500/60 dark:hover:border-amber-500/40 transition-all rounded-2xl p-5 sm:p-7 min-h-[200px] shadow-sm dark:shadow-none">
              <CardContent className="p-0 grid h-full sm:grid-cols-2 gap-4 items-center">
                <div className="relative z-10 flex flex-col justify-center space-y-3">
                  <div className="relative flex aspect-square size-11 rounded-full border border-amber-500/30 before:absolute before:-inset-1 before:rounded-full before:border before:border-amber-500/15 bg-amber-500/10 dark:bg-[#0E0E12] items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Users className="size-5 text-amber-500 dark:text-amber-400" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-1.5">
                      125,000+ Aspirants
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Practicing daily with personalized study tracks and diagnostic testing.
                    </p>
                  </div>
                </div>

                {/* Right Student List Box with Pop-out */}
                <div className="relative z-10 rounded-xl border border-zinc-200 dark:border-[#1C1C20] p-3.5 bg-zinc-50 dark:bg-[#0B0B0E] flex flex-col justify-center space-y-2.5 shadow-inner w-full max-w-[200px] sm:ml-auto transform group-hover:scale-106 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
                      A
                    </div>
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">Aarav M. (AIR 840)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                      P
                    </div>
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">Pooja K. (99.4%ile)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                      R
                    </div>
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">Rohan S. (NEET 680+)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
