import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MetricsStrip } from "@/components/MetricsStrip";
import { Features } from "@/components/blocks/features-8";
import { PickYourExam } from "@/components/PickYourExam";
import { GetTheApp } from "@/components/GetTheApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white relative">
      {/* Floating Header with official logo */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Centered 3-Column Metrics Strip */}
      <MetricsStrip />

      {/* Expanded Features Section */}
      <Features />

      {/* Centered Pick Your Exam Section */}
      <PickYourExam />

      {/* Get Our App Section */}
      <GetTheApp />

      {/* Official Miyagi Footer */}
      <Footer />
    </main>
  );
}
