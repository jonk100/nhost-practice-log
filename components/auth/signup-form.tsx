"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSignUpEmailPassword } from "@nhost/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const { signUpEmailPassword, isLoading, isSuccess, isError, error } = useSignUpEmailPassword()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { isSuccess, isError, error } = await signUpEmailPassword(email, password, {
      displayName: name,
      metadata: {
        name,
      },
    })

    if (isSuccess) {
      toast({
        title: "Account created",
        description: "You have successfully signed up. Welcome to MusicTrack!",
      })
      router.push("/dashboard")
    }

    if (isError) {
      toast({
        title: "Error signing up",
        description: error?.message || "There was an error creating your account",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-signup">Email</Label>
        <Input
          id="email-signup"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-signup">Password</Label>
        <Input
          id="password-signup"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  )
}

