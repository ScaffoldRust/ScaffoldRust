import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const templates = [
  {
    id: 1,
    title: "Stellar Smart Contract Starter",
    description: "A basic template to get started with smart contracts on Stellar using Rust.",
    category: "Smart Contracts",
    blockchainCompatibility: ["Stellar", "Solana"],
    image:
      "https://sjc.microlink.io/qm1Xdzzy07BhdhCbA5aG0Nnwwmvudh6bjUydMJ9fhZqpdkoZR9HJIBUEjpBrBc0ZBe542ft8nFbqVPr8N8-bYQ.jpeg",
  },
  {
    id: 2,
    title: "Stellar DeFi Framework",
    description: "Framework for building DeFi applications on Stellar with Rust.",
    category: "DeFi",
    blockchainCompatibility: ["Stellar", "Polkadot"],
    image:
      "https://sjc.microlink.io/qm1Xdzzy07BhdhCbA5aG0Nnwwmvudh6bjUydMJ9fhZqpdkoZR9HJIBUEjpBrBc0ZBe542ft8nFbqVPr8N8-bYQ.jpeg",
  },
  {
    id: 3,
    title: "Multi-Chain Asset Bridge",
    description: "Template for creating an asset bridge between Stellar and other blockchains.",
    category: "Interoperability",
    blockchainCompatibility: ["Stellar", "Ethereum", "Solana"],
    image:
      "https://sjc.microlink.io/qm1Xdzzy07BhdhCbA5aG0Nnwwmvudh6bjUydMJ9fhZqpdkoZR9HJIBUEjpBrBc0ZBe542ft8nFbqVPr8N8-bYQ.jpeg",
  },
]

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <header className="fixed top-0 w-full z-50 border-b border-border/40 backdrop-blur-sm">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center justify-center mr-6" href="/">
            <span className="font-bold text-xl">ScaffoldRust</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link className="text-foreground/60 transition-colors hover:text-foreground" href="/">
              Home
            </Link>
            <Link className="text-foreground/60 transition-colors hover:text-foreground" href="#">
              Documentation
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Link className="text-foreground/60 text-sm transition-colors hover:text-foreground" href="/login">
              Login
            </Link>
            <Link href="/register">
              <Button className="bg-foreground text-background hover:bg-foreground/90">Sing Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-24">
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Rust Templates for Stellar</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our collection of optimized templates for Stellar development
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {templates.map((template) => (
              <Card key={template.id} className="bg-secondary border-border/50 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src="/templates.webp"
                      alt={template.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{template.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{template.category}</CardDescription>
                  <p className="text-sm text-foreground/80 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.blockchainCompatibility.map((chain) => (
                      <span
                        key={chain}
                        className="inline-flex items-center rounded-full border border-border/50 px-2.5 py-0.5 text-xs font-semibold text-foreground/70"
                      >
                        {chain}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/templates/${template.id}`} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a href="#" className="font-medium underline underline-offset-4">
                StellarRust
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
  )
}

