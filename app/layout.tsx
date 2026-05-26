import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRay";
import Navbar from "@/components/Navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breksa Event App",
  description: "Guiding your educational journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body
          className={cn("min-h-screen", "h-full", "antialiased", schibstedGrotesk.variable, martianMono.variable, "font-sans", geist.variable)}>
      <Navbar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
              raysOrigin="top-center-offset"
              raysColor="#1700A8"
              raysSpeed={0.5}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0.0}
              distortion={0.01}
          />

        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
