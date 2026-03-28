import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Scientific Methodology", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] w-full py-12 px-8">
      <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/tav.jpg"
            alt="TavCorp"
            width={120}
            height={40}
            className="h-10 w-auto rounded border border-[#fcf9f8]/10" 
          />
        </Link>

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
