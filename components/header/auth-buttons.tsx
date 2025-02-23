import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-8">
      <Link 
        className="text-[#999999] hover:text-white transition-colors text-base" 
        href="/login"
      >
        Log In
      </Link>
      <Link href="/signup">
        <Button 
          className="bg-white text-black hover:bg-white/90 rounded-lg px-6 py-2 text-base"
          variant="default"
        >
          Sign Up
        </Button>
      </Link>
    </div>
  )
}