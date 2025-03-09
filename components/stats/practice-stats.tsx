"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import type { PracticeSession } from "@/types/practice"

interface PracticeStatsProps {
  sessions?: PracticeSession[]
}

export function PracticeStats({ sessions }: PracticeStatsProps) {
  if (!sessions || sessions.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No practice data available</p>
      </div>
    )
  }

  // Aggregate practice time by tags
  const tagStats: Record<string, number> = {}

  sessions.forEach((session) => {
    session.tags.forEach((tag) => {
      // Distribute session time evenly among tags
      const timePerTag = session.duration / session.tags.length
      tagStats[tag] = (tagStats[tag] || 0) + timePerTag
    })
  })

  // Convert to array for chart
  const data = Object.entries(tagStats).map(([name, value]) => ({
    name,
    value: Math.round(value),
  }))

  // Sort by value (descending)
  data.sort((a, b) => b.value - a.value)

  // Take top 5 and group the rest as "Other"
  const topData = data.slice(0, 5)
  const otherData = data.slice(5)

  if (otherData.length > 0) {
    const otherValue = otherData.reduce((sum, item) => sum + item.value, 0)
    topData.push({ name: "Other", value: otherValue })
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#95A5A6"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={topData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {topData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value} minutes`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

