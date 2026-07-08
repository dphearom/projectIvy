"use client";

import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { login, type LoginState } from "@/app/actions/auth";
import FormField from "@/components/forms/FormField";
import SubmitButton from "@/components/forms/SubmitButton";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <>
      <div className="text-center mb-8 flex flex-col items-center">
        <Link href="/">
          <Image
            src="/logo-nav-dark.png"
            alt="Project IVY"
            width={100}
            height={68}
            priority
          />
        </Link>
        <h1 className="[font-family:var(--font-cormorant)] text-[1.75rem] text-navy mt-4">
          Welcome back
        </h1>
        <p className="text-ink-soft text-[0.9rem] mt-1">Sign in to your account</p>
      </div>

      <form action={formAction}>
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        {state.error && <p className="text-[#c0392b] text-[0.8rem] mt-[0.35rem]">{state.error}</p>}
        <SubmitButton label="Sign in" pendingLabel="Signing in…" className="w-full mt-2 justify-center" />
      </form>
    </>
  );
}
