"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart, Clock, Home, ListMusic, Music2, User } from "lucide-react"

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/songs", label: "Songs", icon: Music2 },
  { href: "/dashboard/exercises", label: "Exercises", icon: ListMusic },
  { href: "/dashboard/practice", label: "Practice", icon: Clock },
  { href: "/dashboard/stats", label: "Statistics", icon: BarChart },
  { href: "/dashboard/profile", label: "Profile", icon: User },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Navigation</h2>
        </div>
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

