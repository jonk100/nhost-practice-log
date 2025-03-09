"use client"

import { useRouter } from "next/navigation"
import { useAuthenticationStatus } from "@nhost/nextjs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"
import { ModeToggle } from "@/components/mode-toggle"
import { Music } from "lucide-react"

export default function LandingPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  if (isAuthenticated) {
    router.push("/dashboard")
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music className="h-6 w-6" />
          <h1 className="text-2xl font-bold">MusicTrack</h1>
        </div>
        <ModeToggle />
      </header>
      <main className="flex-1 container mx-auto flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Track Your Musical Journey</h2>
            <p className="mt-2 text-muted-foreground">
              Log practice sessions, track progress, and achieve your musical goals.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Sign in to your account or create a new one</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MusicTrack. All rights reserved.
      </footer>
    </div>
  )
}

