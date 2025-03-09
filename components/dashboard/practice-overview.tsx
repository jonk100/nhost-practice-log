"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentSessions } from "@/components/practice/recent-sessions"
import { PracticeStats } from "@/components/stats/practice-stats"
import { Clock, ListMusic, Music2, Play } from "lucide-react"
import { usePracticeSessions } from "@/hooks/use-practice-sessions"
import { useSongs } from "@/hooks/use-songs"
import { useExercises } from "@/hooks/use-exercises"

export function PracticeOverview() {
  const { sessions, isLoading: isLoadingSessions } = usePracticeSessions(5)
  const { songs, isLoading: isLoadingSongs } = useSongs(5)
  const { exercises, isLoading: isLoadingExercises } = useExercises(5)
  const [streak, setStreak] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    // Calculate streak and total time from sessions
    if (sessions) {
      // Simple streak calculation (consecutive days)
      const today = new Date()
      let currentStreak = 0
      let lastDate: Date | null = null

      // Sort sessions by date (newest first)
      const sortedSessions = [...sessions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      for (const session of sortedSessions) {
        const sessionDate = new Date(session.date)

        // Check if this is the first session we're checking
        if (!lastDate) {
          // If first session is today, start streak at 1
          if (sessionDate.toDateString() === today.toDateString()) {
            currentStreak = 1
            lastDate = sessionDate
            continue
          }

          // If first session is yesterday, also start streak at 1
          const yesterday = new Date(today)
          yesterday.setDate(yesterday.getDate() - 1)
          if (sessionDate.toDateString() === yesterday.toDateString()) {
            currentStreak = 1
            lastDate = sessionDate
            continue
          }

          // If first session is older than yesterday, no streak
          break
        }

        // For subsequent sessions, check if they're consecutive days
        const expectedDate = new Date(lastDate)
        expectedDate.setDate(expectedDate.getDate() - 1)

        if (sessionDate.toDateString() === expectedDate.toDateString()) {
          currentStreak += 1
          lastDate = sessionDate
        } else {
          // Break in streak
          break
        }
      }

      setStreak(currentStreak)

      // Calculate total practice time
      const total = sessions.reduce((sum, session) => sum + session.duration, 0)
      setTotalTime(total)
    }
  }, [sessions])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your practice dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Practice Streak</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{streak} days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Practice Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.floor(totalTime / 60)} hours {totalTime % 60} minutes
            </div>
            <p className="text-xs text-muted-foreground">Total time spent practicing</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Songs</CardTitle>
            <Music2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{songs?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Songs in your library</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exercises</CardTitle>
            <ListMusic className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{exercises?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Exercises in your library</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Practice Sessions</CardTitle>
            <CardDescription>Your last 5 practice sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSessions sessions={sessions} isLoading={isLoadingSessions} />
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/dashboard/stats">View all sessions</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Practice Stats</CardTitle>
            <CardDescription>Your practice distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <PracticeStats sessions={sessions} />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="songs">
        <TabsList>
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
        </TabsList>
        <TabsContent value="songs" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Songs</h2>
            <Button asChild>
              <Link href="/dashboard/practice">
                <Play className="mr-2 h-4 w-4" />
                Start Practice
              </Link>
            </Button>
          </div>
          {isLoadingSongs ? (
            <div>Loading songs...</div>
          ) : songs && songs.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {songs.map((song) => (
                <Card key={song.id}>
                  <CardHeader>
                    <CardTitle>{song.title}</CardTitle>
                    <CardDescription>{song.artist}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {song.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-2 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <Music2 className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-medium">No songs yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Add songs to your library to start tracking your practice.
                  </p>
                  <Button asChild className="mt-2">
                    <Link href="/dashboard/songs">Add Songs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="exercises" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Exercises</h2>
            <Button asChild>
              <Link href="/dashboard/practice">
                <Play className="mr-2 h-4 w-4" />
                Start Practice
              </Link>
            </Button>
          </div>
          {isLoadingExercises ? (
            <div>Loading exercises...</div>
          ) : exercises && exercises.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {exercises.map((exercise) => (
                <Card key={exercise.id}>
                  <CardHeader>
                    <CardTitle>{exercise.title}</CardTitle>
                    <CardDescription>{exercise.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {exercise.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-2 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <ListMusic className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-medium">No exercises yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Add exercises to your library to start tracking your practice.
                  </p>
                  <Button asChild className="mt-2">
                    <Link href="/dashboard/exercises">Add Exercises</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

