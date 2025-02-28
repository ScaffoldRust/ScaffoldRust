import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import SignupForm from "@/components/signup"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <header className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-sm">
        <div className="container relative flex justify-between h-14 items-center">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-xl">ScaffoldRust</span>
          </Link>
          <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-6 text-sm">
            <Link className="text-white/60 transition-colors hover:text-white" href="/">
              Home
            </Link>
            <Link className="text-white/60 transition-colors hover:text-white" href="/templates">
              Templates
            </Link>
            <Link className="text-white/60 transition-colors hover:text-white" href="#about">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link className="text-white/60 text-sm transition-colors hover:text-white" href="/login">
              Log In
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-white/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <SignupForm/>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-white/60 md:text-left">
              &copy; Built by ScaffoldRust. The source code is available on GitHub.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

