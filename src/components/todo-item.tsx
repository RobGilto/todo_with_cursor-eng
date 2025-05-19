"use client"

import { useState } from "react"
import { Pencil, Trash2, X, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import type { Todo } from "@/components/todo-app"

interface TodoItemProps {
  todo: Todo
  onUpdate: (id: string, text: string) => void
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onUpdate, onToggle, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleUpdate = () => {
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText)
    } else {
      setEditText(todo.text)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  return (
    <Card className="p-4">
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Checkbox checked={todo.completed} onCheckedChange={() => onToggle(todo.id)} id={`todo-${todo.id}`} />

          {isEditing ? (
            <Input value={editText} onChange={(e) => setEditText(e.target.value)} className="flex-1" autoFocus />
          ) : (
            <label
              htmlFor={`todo-${todo.id}`}
              className={`flex-1 ${todo.completed ? "line-through text-muted-foreground" : ""}`}
            >
              {todo.text}
            </label>
          )}
        </div>

        <div className="flex gap-1">
          {isEditing ? (
            <>
              <Button size="icon" variant="outline" onClick={handleUpdate}>
                <Save className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
              <Button size="icon" variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4" />
                <span className="sr-only">Cancel</span>
              </Button>
            </>
          ) : (
            <>
              <Button size="icon" variant="outline" onClick={() => setIsEditing(true)} disabled={todo.completed}>
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button size="icon" variant="outline" onClick={() => onDelete(todo.id)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </>
          )}
        </div>
      </li>
    </Card>
  )
}
