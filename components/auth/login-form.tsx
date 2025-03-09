"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSignInEmailPassword } from "@nhost/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { SignUpForm } from "./signup-form"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const { signInEmailPassword, isLoading, isSuccess, isError, error } = useSignInEmailPassword()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { isSuccess, isError, error } = await signInEmailPassword(email, password)

    if (isSuccess) {
      router.push("/dashboard")
    }

    if (isError) {
      toast({
        title: "Error signing in",
        description: error?.message || "Please check your credentials and try again",
        variant: "destructive",
      })
    }
  }

  return (
    <Tabs defaultValue="signin" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Button variant="link" className="p-0 h-auto text-xs">
                Forgot password?
              </Button>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  )
}

