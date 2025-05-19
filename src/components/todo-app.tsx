"use client"

import { useState } from "react"
import { TodoHeader } from "@/components/todo-header"
import { TodoFooter } from "@/components/todo-footer"
import { TodoForm } from "@/components/todo-form"
import { TodoList } from "@/components/todo-list"

export type Todo = {
  id: string
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build a todo app", completed: false },
    { id: "3", text: "Deploy to production", completed: false },
  ])

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: text.trim(),
          completed: false,
        },
      ])
    }
  }

  const updateTodo = (id: string, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TodoHeader />
      <main className="flex-1 container mx-auto max-w-2xl p-4">
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onUpdateTodo={updateTodo} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
      </main>
      <TodoFooter />
    </div>
  )
}
