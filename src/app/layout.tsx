import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TavCorp Brand Health Quiz — Intelligence Diagnostics",
  description:
    "Assess your brand across 9 key pillars with TavCorp's expert diagnostic tool. Gain proprietary insights into your market authority and resonance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col w-full overflow-x-hidden" suppressHydrationWarning>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
