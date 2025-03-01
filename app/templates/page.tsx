'use client'

import { useState } from "react";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";
import AuthButtons from "@/components/header/auth-buttons";
import { Filters } from "../../components/filters";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
 

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between h-20">
          <Logo theme="light" />
          <Navigation theme="light" />
          <AuthButtons theme="light" />
        </div>
      </header>
      <main className="container mx-auto pt-32 flex-grow">
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black">
              Rust Templates for Stellar
            </h1>
            <p className="text-gray-600 text-lg">
            Explore our collection of optimized templates for Stellar development
            </p>
          </div>

          {/* Add Filters component */}
          <div className="mt-8">
            <Filters 
              onCategoryChange={handleCategoryChange} 
              selectedCategory={selectedCategory} 
            />
          </div>

        </section>
      </main>
      <footer className="mt-auto border-t border-gray-200">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              Built by{" "}
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#" className="font-medium underline underline-offset-4 text-gray-900">
                StellarRust
              </a>
              . The source code is available on{" "}
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#" className="font-medium underline underline-offset-4 text-gray-900">
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
