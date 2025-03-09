"use client"

import { useState } from "react"
import { useApolloClient } from "@apollo/client"
import { gql } from "@apollo/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export function GraphQLExplorer() {
  const client = useApolloClient()
  const [query, setQuery] = useState(`
{
  __schema {
    types {
      name
      kind
      description
    }
  }
}
  `)
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const executeQuery = async () => {
    setLoading(true)
    try {
      const { data, errors } = await client.query({
        query: gql`${query}`,
        fetchPolicy: "network-only",
      })

      setResult(JSON.stringify(data, null, 2))

      if (errors) {
        console.error("GraphQL errors:", errors)
        setResult(JSON.stringify({ errors }, null, 2))
      }
    } catch (error) {
      console.error("Error executing query:", error)
      setResult(JSON.stringify({ error: error.message }, null, 2))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>GraphQL Explorer</CardTitle>
        <CardDescription>Explore your GraphQL schema</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea value={query} onChange={(e) => setQuery(e.target.value)} className="font-mono h-40" />
        <Button onClick={executeQuery} disabled={loading}>
          {loading ? "Executing..." : "Execute Query"}
        </Button>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Result:</h3>
          <pre className="bg-muted p-4 rounded-md overflow-auto max-h-80 text-sm">{result || "No result yet"}</pre>
        </div>
      </CardContent>
    </Card>
  )
}

