"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Music } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <span className="text-xl font-bold">MusicTrack</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

