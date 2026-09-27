import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/blocks/features-8";
import { PickYourExam } from "@/components/PickYourExam";
import { GetTheApp } from "@/components/GetTheApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-white flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white relative transition-colors duration-300">
      {/* Navbar with Theme Toggle */}
      <Navbar />

      {/* Hero Section with Theme-Aware Gradient Wave */}
      <HeroSection />

      {/* Features Section (Direct smooth transition from hero) */}
      <Features />

      {/* Pick Your Exam Section */}
      <PickYourExam />

      {/* Get Our App Section */}
      <GetTheApp />

      {/* Official Miyagi Footer */}
      <Footer />
    </main>
  );
}
