"use client";

import React, { useState } from "react";
import { BookOpen, CheckSquare, Sparkles, Layers, Terminal, Clock, Check } from "lucide-react";

export function FeaturesGrid() {
  const [activeNcLine, setActiveNcLine] = useState(1);
  const [tutorStep, setTutorStep] = useState(1);

  return (
    <section id="features" className="py-24 bg-black border-t border-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase text-[#FF6B00] mb-2 tracking-wider">
            Core Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
            What we&apos;re building
          </h2>
          <p className="text-base text-zinc-400 font-normal leading-relaxed">
            The same Miyagi learning intelligence trusted globally — strictly tailored for Indian competitive exams.
          </p>
        </div>

        {/* 2x2 Features Grid (21st.dev features-8 + x.ai style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Feature 1: NCERT Line-by-Line Questions */}
          <div
            id="ncert"
            className="group rounded-2xl bg-[#08080A] border border-[#1C1C20] hover:border-[#FF6B00]/40 p-6 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Image / UI Placeholder Box (21st.dev features-8 style) */}
              <div className="w-full rounded-xl bg-[#030304] border border-[#1A1A1E] p-4 mb-6 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-[#1A1A1E] pb-2 mb-3">
                  <span className="text-[#FF6B00]">NCERT Class 12 • Ch 5 (Genetics)</span>
                  <span>Page 74</span>
                </div>

                <div className="space-y-2 mb-3">
                  <div
                    onClick={() => setActiveNcLine(1)}
                    className={`cursor-pointer p-2.5 rounded transition-colors ${
                      activeNcLine === 1
                        ? "bg-[#141418] text-white border border-[#2B2B32]"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span className="text-[#FF6B00] mr-2">[Line 14]</span>
                    &ldquo;Mendel conducted hybridisation experiments on garden peas for 7 years (1856-1863).&rdquo;
                  </div>
                  <div
                    onClick={() => setActiveNcLine(2)}
                    className={`cursor-pointer p-2.5 rounded transition-colors ${
                      activeNcLine === 2
                        ? "bg-[#141418] text-white border border-[#2B2B32]"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span className="text-[#FF6B00] mr-2">[Line 18]</span>
                    &ldquo;Mendel investigated 7 pairs of contrasting traits in garden pea plants.&rdquo;
                  </div>
                </div>

                <div className="p-3 rounded bg-[#0D0D10] border border-[#222228] text-[11px]">
                  <div className="text-zinc-400 mb-1">Extracted NEET MCQ:</div>
                  <div className="text-white font-sans font-medium mb-1.5">
                    {activeNcLine === 1
                      ? "Q: How many years did Mendel conduct his hybridisation experiments?"
                      : "Q: How many contrasting trait pairs did Mendel investigate?"}
                  </div>
                  <div className="text-[#FF6B00] flex items-center gap-1.5 font-sans">
                    <Check className="w-3 h-3" />
                    Correct Answer: {activeNcLine === 1 ? "7 years (1856-1863)" : "7 pairs"}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#141418] border border-[#222228] flex items-center justify-center text-[#FF6B00]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  1. NCERT Line-by-Line Questions
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Curated NCERT passages where each line corresponds to a question in the NEET syllabus.
              </p>
            </div>
          </div>

          {/* Feature 2: Practice Tests */}
          <div
            className="group rounded-2xl bg-[#08080A] border border-[#1C1C20] hover:border-[#FF6B00]/40 p-6 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Image / UI Placeholder Box (21st.dev features-8 style) */}
              <div className="w-full rounded-xl bg-[#030304] border border-[#1A1A1E] p-4 mb-6 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-[#1A1A1E] pb-2 mb-3">
                  <span className="text-white">NTA NEET CBT Simulator</span>
                  <span className="text-[#FF6B00] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    02:44:18 left
                  </span>
                </div>

                <div className="p-3 rounded bg-[#0D0D10] border border-[#222228] text-xs font-sans mb-3 space-y-2">
                  <div className="text-zinc-400 text-[11px]">Question 42 (Physics):</div>
                  <div className="text-white font-medium">
                    A block of mass 2 kg rests on a 30° frictionless plane. Calculate net acceleration down the incline.
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 font-mono">
                    <div className="p-1.5 rounded bg-[#16161A] text-zinc-400">A) 9.8 m/s²</div>
                    <div className="p-1.5 rounded bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-white font-bold">
                      B) 4.9 m/s² (g · sin 30°)
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Topic: Mechanics</span>
                  <span className="text-emerald-400">Predicted Score: 685/720 (99.8%ile)</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#141418] border border-[#222228] flex items-center justify-center text-[#FF6B00]">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  2. Practice Tests
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Topic-wise practice and full-length mocks.
              </p>
            </div>
          </div>

          {/* Feature 3: 24/7 AI Tutor */}
          <div
            id="tutor"
            className="group rounded-2xl bg-[#08080A] border border-[#1C1C20] hover:border-[#FF6B00]/40 p-6 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Image / UI Placeholder Box (21st.dev features-8 + x.ai style) */}
              <div className="w-full rounded-xl bg-[#030304] border border-[#1A1A1E] p-4 mb-6 text-xs font-mono">
                {/* x.ai reasoning block style */}
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-[#1A1A1E] pb-2 mb-3">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Sparkles className="w-3 h-3 text-[#FF6B00]" />
                    Socratic Reasoning Engine
                  </span>
                  <span>Thought for 0.3s</span>
                </div>

                <div className="space-y-2 mb-3 text-xs font-sans">
                  <div className="p-2.5 rounded bg-[#101014] border border-[#1E1E24] text-zinc-300">
                    <span className="text-zinc-500 font-mono text-[10px] block mb-0.5">STUDENT DOUBT</span>
                    &ldquo;Why is SN1 favored in polar protic solvents?&rdquo;
                  </div>

                  <div className="p-2.5 rounded bg-[#141418] border border-[#FF6B00]/30 text-zinc-200">
                    <span className="text-[#FF6B00] font-mono text-[10px] block mb-0.5">MIYAGI SOCRATIC HINT</span>
                    What is the rate-determining step in SN1: forming the carbocation or nucleophilic attack?
                  </div>
                </div>

                <div className="text-[11px] text-zinc-500">
                  Guides students step-by-step toward the answer without raw spoilers.
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#141418] border border-[#222228] flex items-center justify-center text-[#FF6B00]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  3. 24/7 AI Tutor
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Doubt-solving tutor using the Socratic method that guides students step-by-step toward the answer.
              </p>
            </div>
          </div>

          {/* Feature 4: 20,000+ MCQ Bank */}
          <div
            className="group rounded-2xl bg-[#08080A] border border-[#1C1C20] hover:border-[#FF6B00]/40 p-6 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Image / UI Placeholder Box (21st.dev features-8 style) */}
              <div className="w-full rounded-xl bg-[#030304] border border-[#1A1A1E] p-4 mb-6 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-[#1A1A1E] pb-2 mb-3">
                  <span className="text-white font-sans font-medium">Question Repository</span>
                  <span className="text-[#FF6B00]">20,000+ Questions</span>
                </div>

                <div className="space-y-1.5 mb-3 font-sans text-[11px]">
                  <div className="p-2 rounded bg-[#0D0D10] border border-[#222228] flex items-center justify-between">
                    <span className="text-zinc-300">NEET Biology (Botany + Zoology)</span>
                    <span className="font-mono text-zinc-500">8,500 MCQs</span>
                  </div>
                  <div className="p-2 rounded bg-[#0D0D10] border border-[#222228] flex items-center justify-between">
                    <span className="text-zinc-300">NEET Chemistry (Org + Inorg + Phys)</span>
                    <span className="font-mono text-zinc-500">6,200 MCQs</span>
                  </div>
                  <div className="p-2 rounded bg-[#0D0D10] border border-[#222228] flex items-center justify-between">
                    <span className="text-zinc-300">CAT Quantitative Aptitude & DILR</span>
                    <span className="font-mono text-zinc-500">5,300 MCQs</span>
                  </div>
                </div>

                <div className="text-[11px] text-zinc-500">
                  Detailed step-by-step explanations and pattern frequency for every problem.
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#141418] border border-[#222228] flex items-center justify-center text-[#FF6B00]">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  4. 20,000+ MCQ Bank
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Vast question bank tailored for India exams with detailed explanations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
