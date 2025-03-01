import Link from 'next/link'

export default function Logo({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <Link 
      className={`flex items-center text-[28px] font-bold tracking-tight ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`} 
      href="/"
    >
      ScaffoldRust
    </Link>
  )
}