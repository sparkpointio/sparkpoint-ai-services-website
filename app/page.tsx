"use client";

import HomeContent from '@/components/ui/home-content'
import CookieBotLoader from '@/components/ui/CookieBotLoader'

export default function Home() {
  return (
    <div className="min-h-screen bg-1 overflow-hidden">
      <CookieBotLoader />
      <HomeContent />
    </div>
  )
}

