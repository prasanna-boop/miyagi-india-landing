import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miyagi India — Ace NEET & CAT on Your First Attempt",
  description:
    "Start with a diagnostic, follow a study plan built around you, and practice with 20,000+ expert-reviewed questions with step-by-step solutions for every mistake.",
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
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-zinc-900 dark:bg-black dark:text-white antialiased min-h-screen flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
