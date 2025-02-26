import Link from 'next/link'

export default function Logo() {
  return (
    <Link className="flex items-center text-[28px] font-bold tracking-tight" href="/">
      ScaffoldRust
    </Link>
  )
}