import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import KeyFeatures from "@/components/KeyFeatures";
import { About } from "@/components/modules/about/AboutSection";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";
import AuthButtons from "@/components/header/auth-buttons";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import WhyChooseUs from "@/components/WhyChoose";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen text-white bg-black selection:bg-white/10">
      <header className="fixed top-0 z-50 w-full bg-black border-b border-white/5">
        <div className="container flex items-center justify-between h-20 mx-auto">
          <Logo />
          <Navigation />
          <AuthButtons />
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
            <div className="relative max-w-6xl px-6 mx-auto lg:px-8">
              <div className="relative p-px rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
                <div className="relative p-3 rounded-2xl bg-black/90">
                  <div className="overflow-hidden border rounded-xl border-white/5">
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
        <WhyChooseUs/>
        <section className="relative">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  );
}
