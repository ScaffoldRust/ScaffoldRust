import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";

// This would typically come from a database or API
const TEMPLATE_DATA = {
  "1": {
    title: "Stellar Smart Contract Starter",
    description:
      "A basic template to get started with smart contracts on Stellar using Rust.",
    author: "StellarRust",
    framework: "Rust",
    useCase: "Smart Contracts",
    tech: "Stellar SDK",
    images: ["/templates.webp", "/templates.webp", "/templates.webp"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/stellar-smart-contract",
  },
  "2": {
    title: "Stellar DeFi Framework",
    description:
      "Framework for building DeFi applications on Stellar with Rust.",
    author: "StellarRust",
    framework: "Rust",
    useCase: "DeFi",
    tech: "Stellar SDK",
    images: ["/templates.webp", "/templates.webp", "/templates.webp"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/stellar-defi",
  },
  "3": {
    title: "Multi-Chain Asset Bridge",
    description:
      "Template for creating an asset bridge between Stellar and other blockchains.",
    author: "StellarRust",
    framework: "Rust",
    useCase: "Interoperability",
    tech: "Stellar SDK, Web3",
    images: ["/templates.webp", "/templates.webp", "/templates.webp"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/multi-chain-bridge",
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function TemplatePage({ params }: PageProps) {
  const template = TEMPLATE_DATA[params.slug as keyof typeof TEMPLATE_DATA];

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6">
        <div className="space-y-12">
          {/* Back button */}
          <Link
            href="/templates"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Templates
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Github className="h-4 w-4" />
              <span className="text-muted-foreground">
                web3-community/templates
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              {template.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {template.description}
            </p>
            <div className="flex gap-4">
              <Button>Deploy</Button>
              <Button variant="outline">View Demo</Button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid gap-6 rounded-lg border bg-card p-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Framework
                </div>
                <div className="mt-1">{template.framework}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Use Case
                </div>
                <div className="mt-1">{template.useCase}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Tech Stack
                </div>
                <div className="mt-1">{template.tech}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Author
                </div>
                <div className="mt-1">{template.author}</div>
              </div>
            </div>
          </div>

          {/* Preview Images */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {template.images.map((image, i) => (
              <div
                key={i}
                className="aspect-[16/9] relative overflow-hidden rounded-lg border"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Template preview ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">How to use</h2>
            <p className="text-muted-foreground">
              Execute{" "}
              <code className="rounded bg-muted px-1.5 py-0.5">
                create-next-app
              </code>{" "}
              with npm, yarn, or pnpm to bootstrap the example:
            </p>
            <CodeBlock
              language="bash"
              code="npx create-next-app --example web3-wallet web3-wallet-app"
            />
            <p className="text-muted-foreground">
              Deploy it to the cloud with Vercel (Documentation).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
