import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Project IVY – AdvisED Global",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy p-8">
      <div className="w-full max-w-105 bg-paper rounded-2xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        {children}
      </div>
    </div>
  );
}
