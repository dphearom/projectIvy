import type { Metadata } from "next";
import { Inter, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const notoKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "600", "700"],
  variable: "--font-khmer",
});

export const metadata: Metadata = {
  title: "Breksa – AdvisED Global | Bridging Potential and Opportunities",
  description:
    "Cambodia's academic advising service built for every student. Combining AI-powered tools with human mentorship to unlock global opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, notoKhmer.variable, "antialiased")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
