"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PracticeStats } from "./practice-stats"
import { PracticeHistory } from "./practice-history"
import { PracticeCalendar } from "./practice-calendar"
import { usePracticeSessions } from "@/hooks/use-practice-sessions"

export function Statistics() {
  const { sessions, isLoading } = usePracticeSessions()
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Statistics</h1>
        <p className="text-muted-foreground">Track your practice progress and insights.</p>
      </div>

      <div className="flex items-center space-x-2">
        <select
          className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="week">Last 7 days</option>
          <option value="month">Last 30 days</option>
          <option value="year">Last 12 months</option>
          <option value="all">All time</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Practice Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading
                ? "..."
                : `${Math.floor((sessions?.reduce((sum, session) => sum + session.duration, 0) || 0) / 60)} hours`}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Practice Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? "..." : sessions?.length || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Session</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading || !sessions?.length
                ? "..."
                : `${Math.round((sessions?.reduce((sum, session) => sum + session.duration, 0) || 0) / sessions?.length)} min`}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? "..." : "3 days"}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice Distribution</CardTitle>
              <CardDescription>How your practice time is distributed</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <PracticeStats sessions={sessions} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice History</CardTitle>
              <CardDescription>Your practice sessions over time</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <PracticeHistory sessions={sessions} timeRange={timeRange} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice Calendar</CardTitle>
              <CardDescription>Your practice activity calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <PracticeCalendar sessions={sessions} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

