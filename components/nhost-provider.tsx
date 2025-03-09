"use client"

import { NhostClient, NhostProvider as NhostReactProvider } from "@nhost/nextjs"
import { NhostApolloProvider } from "@nhost/react-apollo"
import { type ReactNode, useEffect, useState } from "react"

// Create a new nhost client using environment variables
const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
})

export function NhostProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // This ensures hydration issues are avoided
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>{children}</NhostApolloProvider>
    </NhostReactProvider>
  )
}

