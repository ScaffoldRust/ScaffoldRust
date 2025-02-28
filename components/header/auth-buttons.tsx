import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AuthButtons({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const loginClass = theme === 'dark'
    ? "text-[#999999] hover:text-white transition-colors text-base"
    : "text-gray-600 hover:text-black transition-colors text-base";

  const buttonClass = theme === 'dark'
    ? "bg-white text-black hover:bg-white/90 rounded-lg px-6 py-2 text-base"
    : "bg-black text-white hover:bg-black/90 rounded-lg px-6 py-2 text-base";

  return (
    <div className="flex items-center gap-8">
      <Link className={loginClass} href="/login">
        Log In
      </Link>
      <Link href="/signup">
        <Button className={buttonClass} variant="default">
          Sign Up
        </Button>
      </Link>
    </div>
  )
}