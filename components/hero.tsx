"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "top", random: true },
            color: { value: "#252522" },
          },
        }}
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-[980px] text-center"
        >
          <motion.h1
            initial={{ textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
            animate={{ textShadow: "0px 0px 30px rgba(255,255,255,0.5)" }}
            transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", duration: 2 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
          >
            Build blockchain applications with Rust
          </motion.h1>
          <p className="mt-6 text-lg text-white/60 md:text-xl max-w-[700px] mx-auto">
            A scaffold platform optimized for developing on Stellar and other blockchains. Start fast, scale with confidence.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button className="h-12 px-6 bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="h-12 px-6 bg-black text-white hover:text-white border-white/10 hover:bg-black hover:border-white/20 transition-colors">
                View Documentation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
