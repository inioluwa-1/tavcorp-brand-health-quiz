import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        {/* Google Analytics Tag Placeholder */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
