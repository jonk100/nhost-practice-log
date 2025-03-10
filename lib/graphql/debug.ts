export function logGraphQLError(operation: string, error: any) {
  console.error(`GraphQL ${operation} error:`, {
    message: error.message,
    networkError: error.networkError,
    graphQLErrors: error.graphQLErrors,
    error, // Added full error object for more context
  })

  if (error.networkError?.result?.errors) {
    console.error("Network errors:", error.networkError.result.errors)
  }

  if (error.graphQLErrors) {
    error.graphQLErrors.forEach((err: any, idx: number) => {
      console.error(`GraphQL Error ${idx + 1}:`, {
        message: err.message,
        locations: err.locations,
        path: err.path,
        extensions: err.extensions,
      })
    })
  }
}
