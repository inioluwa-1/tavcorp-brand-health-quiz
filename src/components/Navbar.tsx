"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on any scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FCF9F8]/80 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/tavnobg.png"
            alt="TavCorp"
            width={160}
            height={60}
            className="h-10 sm:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/solutions"
            className="text-[#1B1B1B]/60 font-medium transition-colors duration-300 hover:text-[#DF9931]"
          >
            Solutions
          </Link>
          <Link
            href="/methodology"
            className="text-[#1B1B1B]/60 font-medium transition-colors duration-300 hover:text-[#DF9931]"
          >
            Methodology
          </Link>
          <Link
            href="/case-studies"
            className="text-[#1B1B1B]/60 font-medium transition-colors duration-300 hover:text-[#DF9931]"
          >
            Case Studies
          </Link>
        </div>

        {/* Desktop CTA */}
        <button
          id="nav-start-audit-desktop"
          onClick={() => window.location.href = "/quiz"}
          className="hidden md:block bg-[#DF9931] text-[#563500] px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          Start Audit
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-[#1B1B1B] p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fcf9f8] border-t border-[#d6c3b0]/30 shadow-xl flex flex-col items-center py-6 space-y-6">
          <Link
            href="/solutions"
            className="text-[#1B1B1B] font-bold text-lg hover:text-[#DF9931] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/methodology"
            className="text-[#1B1B1B] font-bold text-lg hover:text-[#DF9931] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Methodology
          </Link>
          <Link
            href="/case-studies"
            className="text-[#1B1B1B] font-bold text-lg hover:text-[#DF9931] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </Link>
          <button
            id="nav-start-audit-mobile"
            onClick={() => {
              setIsOpen(false);
              window.location.href = "/quiz";
            }}
            className="bg-[#DF9931] text-[#563500] px-8 py-4 rounded-full font-bold text-lg w-10/12 shadow-md"
          >
            Start Audit
          </button>
        </div>
      )}
    </nav>
  );
}
