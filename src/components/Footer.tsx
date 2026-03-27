import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Scientific Methodology", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-lg font-black text-[#FCF9F8]">TavCorp</div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#FCF9F8]/40 text-sm tracking-wide transition-all duration-200 hover:text-[#FCF9F8]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[#FCF9F8]/40 text-sm tracking-wide leading-relaxed text-center md:text-right">
          © 2024 TavCorp Editorial Intelligence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
