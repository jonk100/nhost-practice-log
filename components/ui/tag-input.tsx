"use client"

import { useState, type KeyboardEvent } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface TagInputProps {
  placeholder?: string
  tags: string[]
  setTags: (tags: string[]) => void
}

export function TagInput({ placeholder, tags, setTags }: TagInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault()

      // Add tag if it doesn't already exist
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()])
      }

      setInputValue("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {tag}</span>
            </button>
          </Badge>
        ))}
      </div>
      <Input
        type="text"
        placeholder={placeholder || "Add tag..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p className="text-xs text-muted-foreground">Press Enter to add a tag</p>
    </div>
  )
}

