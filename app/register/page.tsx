import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-sm">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center justify-center mr-6" href="/">
            <span className="font-bold text-xl">ScaffoldRust</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-gray-500/10 to-black/20 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10" />
        </div>
        <div className="max-w-md w-full space-y-8 relative z-10 bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold">
              Create an Account
            </h2>
            <p className="mt-2 text-center text-sm text-white/60">
              Or{" "}
              <Link
                href="/login"
                className="font-medium text-red-500 hover:text-red-400"
              >
                sign in if you already have an account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white/10 placeholder-white/50 text-white bg-white/5 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white/10 placeholder-white/50 text-white bg-white/5 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white/10 placeholder-white/50 text-white bg-white/5 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password-confirm" className="sr-only">
                  Confirm password
                </label>
                <input
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white/10 placeholder-white/50 text-white bg-white/5 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4"
              >
                Sign Up
              </Button>
            </div>

            <div className="mt-4">
              <Link href="/login">
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4"
                >
                  Already have an account? Sign In
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="border-t border-white/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-white/60 md:text-left">
              &copy; 2024 ScaffoldRust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
