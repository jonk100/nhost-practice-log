export interface Song {
  id: string
  user_id: string
  title: string
  artist: string | null
  difficulty: number
  created_at: string
}

export interface Exercise {
  id: string
  user_id: string
  name: string
  category: "Scales" | "Chords" | "Fingerstyle" | "Rhythm" | "Speed"
  difficulty: number
  created_at: string
}

export interface PracticeSession {
  id: string
  user_id: string
  start_time: string
  end_time: string | null
  notes: string | null
}

export interface PracticeLog {
  id: string
  session_id: string
  song_id: string | null
  exercise_id: string | null
  duration_minutes: number
  notes: string | null
}

// For UI purposes
export interface PracticeSessionWithLogs extends PracticeSession {
  logs: (PracticeLog & {
    song?: Song
    exercise?: Exercise
  })[]
}

