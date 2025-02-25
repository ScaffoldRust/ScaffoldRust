import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import KeyFeatures from "@/components/KeyFeatures";
import { About } from "@/components/modules/about/AboutSection";
import Footer from "@/components/Footer";

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

          <div className="mt-[180px] mb-[96px]">
            <KeyFeatures />
          </div>
          <About />
          <div className="mt-[180px] mb-[96px]">
            <KeyFeatures />
          </div>
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
      </main>
      <Footer />
    </div>
  );
}
