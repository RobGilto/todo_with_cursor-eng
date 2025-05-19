"use client"

import { TodoItem } from "@/components/todo-item"
import type { Todo } from "@/components/todo-app"
import { Card } from "@/components/ui/card"

interface TodoListProps {
  todos: Todo[]
  onUpdateTodo: (id: string, text: string) => void
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export function TodoList({ todos, onUpdateTodo, onToggleTodo, onDeleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return <Card className="p-6 text-center text-muted-foreground">No tasks yet. Add a task to get started!</Card>
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdateTodo} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
      ))}
    </ul>
  )
}
