import { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/features/Auth/LoginForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignUpPage() {
  return (
    <main className="container flex justify-center items-center h-screen">
      <div className="mx-auto flex w-full flex-col space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center justify-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to login
          </p>
        </div>
        <LoginForm />
        <div className="text-sm flex gap-1 justify-center">
          <p>New Here? </p>
          <Link href="/sign-up" className="font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
