import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#1C1C1E] text-zinc-500 text-xs py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[#1C1C1E]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Miyagi Labs Logo"
              width={28}
              height={28}
              className="inline-block object-contain"
            />
            <span className="text-base font-bold text-white tracking-tight">
              Miyagi Labs
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-zinc-400">
            <Link
              href="https://discord.com/invite/PwMXFj2mae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-white transition-colors"
            >
              <FaDiscord className="w-4 h-4" />
            </Link>
            <Link
              href="https://instagram.com/miyagilabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://x.com/miyagi_labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.tiktok.com/@miyagi_labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-white transition-colors"
            >
              <FaTiktok className="w-4 h-4" />
            </Link>
          </div>

          {/* App Badges */}
          <div className="flex items-center gap-3">
            <Link
              href="https://apps.apple.com/us/app/miyagi-labs/id6749786901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E0E10] border border-[#222226] hover:border-[#333338] transition-colors"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.12.65-2.79 1.43-.58.68-1.1 1.74-1.02 2.79 1.07.08 2.18-.57 2.8-1.35z"/>
              </svg>
              <span className="text-xs text-white font-bold">App Store</span>
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.miyagilabs.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E0E10] border border-[#222226] hover:border-[#333338] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.2 24.3C40.6 31.4 36.8 42.6 36.8 56.4V455.6C36.8 469.4 40.6 480.6 47.2 487.7L51.3 491.5L276.9 265.9V256.1L51.3 20.5L47.2 24.3Z" fill="#00D4FF"/>
                <path d="M352.1 341.1L276.9 265.9V256.1L352.1 180.9L353.9 181.9L443 232.5C468.4 246.9 468.4 270.7 443 285.1L353.9 335.7L352.1 341.1Z" fill="#FFCC00"/>
                <path d="M353.9 340.1L276.9 263.1L47.2 492.8C55.6 501.7 69.3 502.8 84.7 494.1L353.9 340.1Z" fill="#FF334B"/>
                <path d="M353.9 171.9L84.7 17.9C69.3 9.2 55.6 10.3 47.2 19.2L276.9 248.9L353.9 171.9Z" fill="#00E676"/>
              </svg>
              <span className="text-xs text-white font-bold">Google Play</span>
            </Link>
          </div>

        </div>

        {/* Legal Disclaimers */}
        <div className="pt-8 pb-8 text-[11px] leading-relaxed text-zinc-500 space-y-2">
          <p>
            SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this product. ACT® is a trademark registered by ACT Education Corp., which is not affiliated with, and does not endorse, this product. This product is an independent educational resource and is not officially affiliated with, authorized by, or endorsed by the Kenya National Examinations Council (KNEC).
          </p>
          <p>
            NEET® is conducted by the National Testing Agency (NTA). CAT® is conducted by the Indian Institutes of Management (IIMs).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#1C1C1E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Miyagi Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="https://miyagilabs.ai/terms" className="hover:text-white transition-colors font-medium">
              Terms of Service
            </Link>
            <Link href="https://miyagilabs.ai/privacy" className="hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
