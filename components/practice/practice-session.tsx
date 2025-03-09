"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useSongs } from "@/hooks/use-songs"
import { useExercises } from "@/hooks/use-exercises"
import { usePracticeSessions } from "@/hooks/use-practice-sessions"
import { PracticeTimer } from "./practice-timer"
import { Save } from "lucide-react"

export function PracticeSession() {
  const router = useRouter()
  const { toast } = useToast()
  const { songs } = useSongs()
  const { exercises } = useExercises()
  const { startPracticeSession, endPracticeSession, addPracticeLog } = usePracticeSessions()

  const [isActive, setIsActive] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [sessionNotes, setSessionNotes] = useState("")
  const [selectedSongs, setSelectedSongs] = useState<string[]>([])
  const [selectedExercises, setSelectedExercises] = useState<string[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setSessionTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive])

  const toggleTimer = async () => {
    if (!isActive) {
      // Start the timer and create a new session
      try {
        const { data } = await startPracticeSession(sessionNotes)
        setCurrentSessionId(data.insert_practice_sessions_one.id)
        setIsActive(true)
      } catch (error) {
        toast({
          title: "Error starting session",
          description: "There was an error starting your practice session",
          variant: "destructive",
        })
      }
    } else {
      // Pause the timer
      setIsActive(false)
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setSessionTime(0)
    setCurrentSessionId(null)
  }

  const handleSongToggle = (songId: string) => {
    setSelectedSongs((prev) => (prev.includes(songId) ? prev.filter((id) => id !== songId) : [...prev, songId]))
  }

  const handleExerciseToggle = (exerciseId: string) => {
    setSelectedExercises((prev) =>
      prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId],
    )
  }

  const saveSession = async () => {
    if (!currentSessionId) {
      toast({
        title: "No active session",
        description: "Please start a practice session first",
        variant: "destructive",
      })
      return
    }

    if (sessionTime < 60) {
      toast({
        title: "Session too short",
        description: "Practice sessions should be at least 1 minute long",
        variant: "destructive",
      })
      return
    }

    try {
      // End the current session
      await endPracticeSession(currentSessionId)

      // Add practice logs for each selected song
      for (const songId of selectedSongs) {
        await addPracticeLog(
          currentSessionId,
          songId,
          null,
          Math.floor(sessionTime / selectedSongs.length / 60),
          `Practiced song`,
        )
      }

      // Add practice logs for each selected exercise
      for (const exerciseId of selectedExercises) {
        await addPracticeLog(
          currentSessionId,
          null,
          exerciseId,
          Math.floor(sessionTime / selectedExercises.length / 60),
          `Practiced exercise`,
        )
      }

      toast({
        title: "Session saved",
        description: `You practiced for ${Math.floor(sessionTime / 60)} minutes`,
      })

      // Reset the form
      resetTimer()
      setSessionNotes("")
      setSelectedSongs([])
      setSelectedExercises([])

      // Navigate to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error saving session",
        description: "There was an error saving your practice session",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Practice Session</h1>
        <p className="text-muted-foreground">Track your practice time and progress.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Practice Timer</CardTitle>
            <CardDescription>Start the timer when you begin practicing</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <PracticeTimer time={sessionTime} isActive={isActive} onToggle={toggleTimer} onReset={resetTimer} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Session Details</CardTitle>
            <CardDescription>Add information about your practice session</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sessionNotes">Notes</Label>
              <Textarea
                id="sessionNotes"
                placeholder="What did you work on? What went well? What needs improvement?"
                value={sessionNotes}
                onChange={(e) => setSessionNotes(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practice Content</CardTitle>
            <CardDescription>Select what you practiced during this session</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="songs">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="songs">Songs</TabsTrigger>
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
              </TabsList>
              <TabsContent value="songs" className="space-y-4 pt-4">
                {songs && songs.length > 0 ? (
                  <div className="space-y-2">
                    {songs.map((song) => (
                      <div key={song.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`song-${song.id}`}
                          checked={selectedSongs.includes(song.id)}
                          onCheckedChange={() => handleSongToggle(song.id)}
                        />
                        <Label htmlFor={`song-${song.id}`} className="flex-1">
                          {song.title} - {song.artist || "Unknown Artist"}
                        </Label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground">No songs in your library</p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="exercises" className="space-y-4 pt-4">
                {exercises && exercises.length > 0 ? (
                  <div className="space-y-2">
                    {exercises.map((exercise) => (
                      <div key={exercise.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`exercise-${exercise.id}`}
                          checked={selectedExercises.includes(exercise.id)}
                          onCheckedChange={() => handleExerciseToggle(exercise.id)}
                        />
                        <Label htmlFor={`exercise-${exercise.id}`} className="flex-1">
                          {exercise.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground">No exercises in your library</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          Cancel
        </Button>
        <Button
          onClick={saveSession}
          disabled={
            !currentSessionId || sessionTime < 60 || (selectedSongs.length === 0 && selectedExercises.length === 0)
          }
        >
          <Save className="mr-2 h-4 w-4" />
          Save Session
        </Button>
      </div>
    </div>
  )
}

