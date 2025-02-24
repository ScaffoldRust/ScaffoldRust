import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import { About } from "@/components/modules/about/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-sm">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center justify-center mr-6" href="#">
            <span className="font-bold text-xl">ScaffoldRust</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link
              className="text-white/60 transition-colors hover:text-white"
              href="/templates"
            >
              Templates
            </Link>
            <Link
              className="text-white/60 transition-colors hover:text-white"
              href="#"
            >
              Documentation
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Link
              className="text-white/60 text-sm transition-colors hover:text-white"
              href="/login"
            >
              Login
            </Link>
            <Link href="/register">
              <Button className="h-10 px-4 bg-white text-black hover:bg-white/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32">
        <Hero />
          <About />
          <div className="mt-16 md:mt-24">
            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
              <div className="relative rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-px">
                <div className="relative rounded-2xl bg-black/90 p-3">
                  <div className="rounded-xl overflow-hidden border border-white/5">
                    <Image
                      src="/screenshot.png"
                      alt="ScaffoldRust Interface"
                      width={2000}
                      height={1000}
                      className="w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Fast Development",
                  description: "Pre-configured and optimized templates to start developing in minutes.",
                  iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
                },
                {
                  title: "Built-in Security",
                  description: "Implement security best practices from day one with our pre-configured security features and guidelines.",
                  iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                },
                {
                  title: "Multi-Chain",
                  description: "Compatibility with multiple blockchains that use Rust as their base language.",
                  iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                },
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative space-y-4 p-6 rounded-2xl border border-white/5 bg-white/5">
                    <div className="p-3 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={feature.iconPath}
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-white/60 md:text-left">
              Built by{" "}
              <a href="#" className="font-medium underline underline-offset-4">
                ScaffoldRust
              </a>
              . The source code is available on{" "}
              <a href="#" className="font-medium underline underline-offset-4">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
