"use client"

import { Button } from "@/components/ui/button"
import { Pause, Play, RotateCcw } from "lucide-react"

interface PracticeTimerProps {
  time: number
  isActive: boolean
  onToggle: () => void
  onReset: () => void
}

export function PracticeTimer({ time, isActive, onToggle, onReset }: PracticeTimerProps) {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-6xl font-bold tabular-nums">{formatTime(time)}</div>
      <div className="flex space-x-2">
        <Button size="lg" onClick={onToggle} className={isActive ? "bg-red-500 hover:bg-red-600" : ""}>
          {isActive ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Start
            </>
          )}
        </Button>
        <Button variant="outline" size="lg" onClick={onReset} disabled={time === 0}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  )
}

