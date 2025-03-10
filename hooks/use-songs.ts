"use client"

import { useQuery, useMutation } from "@apollo/client"
import { GET_SONGS } from "@/lib/graphql/queries"
import { INSERT_SONG, UPDATE_SONG, DELETE_SONG } from "@/lib/graphql/mutations"
import type { Song } from "@/types/practice"
import { useToast } from "@/hooks/use-toast"

// Import the debug utility
import { logGraphQLError } from "@/lib/graphql/debug"

export function useSongs() {
  const { toast } = useToast()
  const { data, loading, error, refetch } = useQuery(GET_SONGS)

  const [insertSong, { error: insertError }] = useMutation(INSERT_SONG, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Song added",
        description: "The song has been added to your library",
      })
    },
    onError: (error) => {
      logGraphQLError("insertSong", error)
      toast({
        title: "Error adding song",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const [updateSong] = useMutation(UPDATE_SONG, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Song updated",
        description: "The song has been updated",
      })
    },
    onError: (error) => {
      logGraphQLError("updateSong", error)
      toast({
        title: "Error updating song",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const [deleteSong] = useMutation(DELETE_SONG, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Song deleted",
        description: "The song has been removed from your library",
      })
    },
    onError: (error) => {
      logGraphQLError("deleteSong", error)
      toast({
        title: "Error deleting song",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const addSong = (title: string, artist: string | null, difficulty: number) => {
    insertSong({
      variables: {
        object: {
          title,
          artist,
          difficulty,
        },
      },
    })
  }

  const editSong = (id: string, title: string, artist: string | null, difficulty: number) => {
    updateSong({
      variables: {
        id,
        object: {
          title,
          artist,
          difficulty,
        },
      },
    })
  }

  const removeSong = (id: string) => {
    deleteSong({
      variables: {
        id,
      },
    })
  }

  return {
    songs: (data?.songs as Song[]) || [],
    isLoading: loading,
    error,
    addSong,
    editSong,
    removeSong,
  }
}
