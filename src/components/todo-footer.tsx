export function TodoFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-4 border-t">
      <div className="container mx-auto max-w-2xl px-4 text-center text-sm text-muted-foreground">
        <p>© {currentYear} Todo List App. All rights reserved.</p>
        <p className="mt-1">Built with React and shadcn/ui</p>
      </div>
    </footer>
  )
}
