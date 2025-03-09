"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { PracticeSession } from "@/types/practice"
import { format, subDays, subMonths } from "date-fns"

interface PracticeHistoryProps {
  sessions?: PracticeSession[]
  timeRange: string
}

export function PracticeHistory({ sessions, timeRange }: PracticeHistoryProps) {
  if (!sessions || sessions.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No practice data available</p>
      </div>
    )
  }

  // Filter sessions based on time range
  const today = new Date()
  let filteredSessions: PracticeSession[] = []
  let dateFormat = ""

  switch (timeRange) {
    case "week":
      filteredSessions = sessions.filter((session) => {
        const sessionDate = new Date(session.date)
        const sevenDaysAgo = subDays(today, 7)
        return sessionDate >= sevenDaysAgo
      })
      dateFormat = "EEE"
      break
    case "month":
      filteredSessions = sessions.filter((session) => {
        const sessionDate = new Date(session.date)
        const thirtyDaysAgo = subDays(today, 30)
        return sessionDate >= thirtyDaysAgo
      })
      dateFormat = "MMM d"
      break
    case "year":
      filteredSessions = sessions.filter((session) => {
        const sessionDate = new Date(session.date)
        const oneYearAgo = subMonths(today, 12)
        return sessionDate >= oneYearAgo
      })
      dateFormat = "MMM"
      break
    default:
      filteredSessions = sessions
      dateFormat = "MMM yyyy"
  }

  // Aggregate practice time by day
  const dailyStats: Record<string, number> = {}

  filteredSessions.forEach((session) => {
    const dateKey = format(new Date(session.date), dateFormat)
    dailyStats[dateKey] = (dailyStats[dateKey] || 0) + session.duration
  })

  // Convert to array for chart
  const data = Object.entries(dailyStats).map(([date, duration]) => ({
    date,
    duration,
  }))

  // Sort by date
  data.sort((a, b) => {
    if (a.date < b.date) return -1
    if (a.date > b.date) return 1
    return 0
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
        <Tooltip formatter={(value) => `${value} minutes`} />
        <Bar dataKey="duration" fill="#8884d8" name="Practice Time" />
      </BarChart>
    </ResponsiveContainer>
  )
}

