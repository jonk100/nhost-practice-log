import { gql } from "@apollo/client"

export const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      artist
      difficulty
      created_at
    }
  }
`

export const GET_EXERCISES = gql`
  query GetExercises {
    exercises {
      id
      name
      category
      difficulty
      created_at
    }
  }
`

export const GET_PRACTICE_SESSIONS = gql`
  query GetPracticeSessions {
    practice_sessions(order_by: {start_time: desc}) {
      id
      start_time
      end_time
      notes
    }
  }
`

export const GET_PRACTICE_SESSION_WITH_LOGS = gql`
  query GetPracticeSessionWithLogs($id: uuid!) {
    practice_sessions_by_pk(id: $id) {
      id
      start_time
      end_time
      notes
      practice_logs {
        id
        duration_minutes
        notes
        song_id
        exercise_id
        song {
          id
          title
          artist
        }
        exercise {
          id
          name
          category
        }
      }
    }
  }
`

export const GET_PRACTICE_STATS = gql`
  query GetPracticeStats {
    practice_logs_aggregate {
      aggregate {
        sum {
          duration_minutes
        }
        count
      }
    }
    practice_sessions_aggregate {
      aggregate {
        count
      }
    }
  }
`
