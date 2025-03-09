import { NhostClient } from "@nhost/nhost-js"

// Create a new nhost client using environment variables
const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
})

export { nhost }

