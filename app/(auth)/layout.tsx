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
    <div className="auth-layout">
      <div className="auth-card">
        {children}
      </div>
    </div>
  );
}
