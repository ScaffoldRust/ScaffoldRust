import Link from 'next/link'

export default function Navigation({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const linkClass = theme === 'dark' 
    ? "text-[#999999] hover:text-white transition-colors text-base"
    : "text-gray-600 hover:text-black transition-colors text-base";

  return (
    <nav className="flex items-center justify-center gap-12">
      <Link className={linkClass} href="/">Home</Link>
      <Link className={linkClass} href="/templates">Templates</Link>
      <Link className={linkClass} href="/documentation">Documentation</Link>
    </nav>
  )
}