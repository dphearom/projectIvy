import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Serif_Khmer, Noto_Sans_Khmer } from "next/font/google";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// Cormorant Garamond and Manrope have no Khmer glyphs — this pairing covers
// <html lang="km"> via the --font-khmer-* CSS vars swapped in app/globals.css.
const notoSerifKhmer = Noto_Serif_Khmer({
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khmer-display",
});

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-khmer-body",
});

export const metadata: Metadata = {
  title: "Project IVY | Turn Your Ambition Into Admission",
  description:
    "Cambodia's academic advising service built for every student. Combining AI-powered tools with human mentorship to unlock global opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${notoSerifKhmer.variable} ${notoSansKhmer.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
