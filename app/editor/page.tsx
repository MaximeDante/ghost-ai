"use client"

import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useEditorActions } from "@/components/editor/editor-actions-context"

export default function EditorPage() {
  const { openCreate } = useEditorActions()

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-xl font-medium text-text-primary">
          Create a project or open an existing one
        </h1>
        <p className="text-sm text-text-muted max-w-sm">
          Start a new architecture workspace, or choose a project from the sidebar.
        </p>
        <Button onClick={openCreate} className="gap-2 mt-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
