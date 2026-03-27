"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FCF9F8]/80 glass-nav">
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-[#1B1B1B]">
          TavCorp
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-[#1B1B1B]/60 font-medium transition-colors duration-300 hover:text-[#DF9931]"
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-[#1B1B1B]/60 font-medium transition-colors duration-300 hover:text-[#DF9931]"
          >
            Methodology
          </Link>
          <Link
            href="#"
            className="text-[#1B1B1B]/60 font-medium transition-colors duration-300 hover:text-[#DF9931]"
          >
            Case Studies
          </Link>
        </div>

        {/* CTA */}
        <button
          id="nav-start-audit"
          className="bg-[#DF9931] text-[#563500] px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          Start Audit
        </button>
      </div>
    </nav>
  );
}
