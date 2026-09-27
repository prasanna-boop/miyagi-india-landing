import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miyagi India — Ace NEET & CAT with Your Personal AI Tutor",
  description:
    "Start with a diagnostic, follow a study plan built around you, and practice with 20,000+ expert-reviewed questions, with an AI tutor that explains every mistake.",
  keywords: [
    "NEET prep",
    "CAT 2026",
    "NCERT line by line",
    "AI tutor for NEET",
    "Miyagi India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark scroll-smooth`}>
      <body className="bg-black text-white antialiased min-h-screen flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
