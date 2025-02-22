import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="container relative">
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Build blockchain applications with Rust
          </h1>
          <p className="mt-6 text-lg text-white/60 md:text-xl max-w-[700px] mx-auto">
            A scaffold platform optimized for developing on Stellar and other blockchains. Start fast, scale with confidence.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button className="h-12 px-6 bg-white text-black hover:bg-white/90">Get Started</Button>
            <Button variant="outline" className="h-12 px-6 bg-black text-white hover:text-white border-white/10 hover:bg-black hover:border-white/20 transition-colors">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
