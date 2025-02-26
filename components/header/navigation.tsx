import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-12">
      <Link
        className="text-[#999999] hover:text-white transition-colors text-base"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-[#999999] hover:text-white transition-colors text-base"
        href="/templates"
      >
        Templates
      </Link>
      <Link
        className="text-[#999999] hover:text-white transition-colors text-base"
        href="/documentation"
      >
        Documentation
      </Link>
    </nav>
  )
}