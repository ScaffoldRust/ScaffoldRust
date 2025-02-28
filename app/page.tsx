import Hero from "@/components/hero";
import KeyFeatures from "@/components/KeyFeatures";
import { About } from "@/components/modules/about/AboutSection";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";
import AuthButtons from "@/components/header/auth-buttons";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import WhyChooseUs from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10">
      <header className="fixed top-0 w-full z-50 bg-black border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between h-20">
          <Logo />
          <Navigation />
          <AuthButtons />
        </div>
      </header>
      <main>
        <section className="relative pt-40 pb-45 md:pt-50 md:pb-32">
          <Hero />
          <div className="mt-[160px] mb-[96px]">
            <KeyFeatures />
          </div>
          <div className="mt-[180px] mb-[96px]">
            <About />
          </div>
        </section>
        <div className="mt-[-68px] mb-[96px]">
          <WhyChooseUs />
        </div>
        <section className="relative">
          <div className="mt-[180px] mb-[96px]">
            <CallToAction />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
