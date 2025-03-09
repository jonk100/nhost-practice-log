"use client"

import { useQuery, useMutation } from "@apollo/client"
import { GET_PRACTICE_SESSIONS, GET_PRACTICE_SESSION_WITH_LOGS } from "@/lib/graphql/queries"
import { START_PRACTICE_SESSION, END_PRACTICE_SESSION, ADD_PRACTICE_LOG } from "@/lib/graphql/mutations"
import type { PracticeSession, PracticeSessionWithLogs } from "@/types/practice"
import { useToast } from "@/hooks/use-toast"

// Import the debug utility
import { logGraphQLError } from "@/lib/graphql/debug"

export function usePracticeSessions() {
  const { toast } = useToast()
  const { data, loading, error, refetch } = useQuery(GET_PRACTICE_SESSIONS)

  const [startSession] = useMutation(START_PRACTICE_SESSION, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Practice session started",
        description: "Your practice session has begun",
      })
    },
    // Replace the onError handler in startSession
    onError: (error) => {
      logGraphQLError("startSession", error)
      toast({
        title: "Error starting session",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const [endSession] = useMutation(END_PRACTICE_SESSION, {
    onCompleted: () => {
      refetch()
      toast({
        title: "Practice session ended",
        description: "Your practice session has been saved",
      })
    },
    // Replace the onError handler in endSession
    onError: (error) => {
      logGraphQLError("endSession", error)
      toast({
        title: "Error ending session",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const [addLog] = useMutation(ADD_PRACTICE_LOG, {
    // Replace the onError handler in addLog
    onError: (error) => {
      logGraphQLError("addLog", error)
      toast({
        title: "Error adding practice log",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const startPracticeSession = (notes?: string) => {
    return startSession({
      variables: {
        object: {
          notes,
        },
      },
    })
  }

  const endPracticeSession = (id: string) => {
    return endSession({
      variables: {
        id,
        object: {
          end_time: new Date().toISOString(),
        },
      },
    })
  }

  const addPracticeLog = (
    sessionId: string,
    songId: string | null,
    exerciseId: string | null,
    durationMinutes: number,
    notes?: string,
  ) => {
    return addLog({
      variables: {
        object: {
          session_id: sessionId,
          song_id: songId,
          exercise_id: exerciseId,
          duration_minutes: durationMinutes,
          notes,
        },
      },
    })
  }

  return {
    sessions: (data?.practice_sessions as PracticeSession[]) || [],
    isLoading: loading,
    error,
    startPracticeSession,
    endPracticeSession,
    addPracticeLog,
  }
}

export function usePracticeSessionDetails(sessionId: string) {
  const { data, loading, error } = useQuery(GET_PRACTICE_SESSION_WITH_LOGS, {
    variables: {
      id: sessionId,
    },
    skip: !sessionId,
  })

  return {
    session: data?.practice_sessions_by_pk as PracticeSessionWithLogs,
    isLoading: loading,
    error,
  }
}

