import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-sm">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center justify-center mr-6" href="#">
            <span className="font-bold text-xl">ScaffoldRust</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link className="text-white/60 transition-colors hover:text-white" href="/templates">
              Templates
            </Link>
            <Link className="text-white/60 transition-colors hover:text-white" href="#">
              Documentation
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Link className="text-white/60 text-sm transition-colors hover:text-white" href="/login">
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
        <Hero />
        
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
