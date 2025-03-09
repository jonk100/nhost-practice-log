"use client"

import { useQuery, useMutation } from "@apollo/client"
import { GET_EXERCISES } from "@/lib/graphql/queries"
import { INSERT_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE } from "@/lib/graphql/mutations"
import type { Exercise } from "@/types/practice"
import { useToast } from "@/hooks/use-toast"

// Import the debug utility
import { logGraphQLError } from "@/lib/graphql/debug"

export function useExercises() {
  const { toast } = useToast()
  const { data, loading, error, refetch } = useQuery(GET_EXERCISES)

  const [insertExercise] = useMutation(INSERT_EXERCISE, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Exercise added",
        description: "The exercise has been added to your library",
      })
    },
    onError: (error) => {
      logGraphQLError("insertExercise", error)
      toast({
        title: "Error adding exercise",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const [updateExercise] = useMutation(UPDATE_EXERCISE, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Exercise updated",
        description: "The exercise has been updated",
      })
    },
    onError: (error) => {
      logGraphQLError("updateExercise", error)
      toast({
        title: "Error updating exercise",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const [deleteExercise] = useMutation(DELETE_EXERCISE, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Exercise deleted",
        description: "The exercise has been removed from your library",
      })
    },
    onError: (error) => {
      logGraphQLError("deleteExercise", error)
      toast({
        title: "Error deleting exercise",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const addExercise = (name: string, category: string, difficulty: number) => {
    insertExercise({
      variables: {
        object: {
          name,
          category,
          difficulty,
        },
      },
    })
  }

  const editExercise = (id: string, name: string, category: string, difficulty: number) => {
    updateExercise({
      variables: {
        id,
        object: {
          name,
          category,
          difficulty,
        },
      },
    })
  }

  const removeExercise = (id: string) => {
    deleteExercise({
      variables: {
        id,
      },
    })
  }

  return {
    exercises: (data?.exercises as Exercise[]) || [],
    isLoading: loading,
    error,
    addExercise,
    editExercise,
    removeExercise,
  }
}

