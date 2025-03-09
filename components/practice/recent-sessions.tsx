"use client"

import { formatDistanceToNow } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import type { PracticeSession } from "@/types/practice"

interface RecentSessionsProps {
  sessions?: PracticeSession[]
  isLoading: boolean
}

export function RecentSessions({ sessions, isLoading }: RecentSessionsProps) {
  if (isLoading) {
    return <div>Loading recent sessions...</div>
  }

  if (!sessions || sessions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <p className="text-muted-foreground">No practice sessions recorded yet.</p>
        <p className="text-sm text-muted-foreground">Start a practice session to see your history here.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <Card key={session.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{session.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(session.date), { addSuffix: true })}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{session.duration} minutes</p>
                <div className="flex flex-wrap justify-end gap-1 mt-1">
                  {session.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-2 py-0.5 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

