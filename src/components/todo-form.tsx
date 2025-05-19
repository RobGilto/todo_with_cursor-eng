"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"

interface TodoFormProps {
  onAddTodo: (text: string) => void
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text)
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 mt-4">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
      />
      <Button type="submit">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add
      </Button>
    </form>
  )
}
