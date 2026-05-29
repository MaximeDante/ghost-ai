"use client"

import { useState } from "react"

import { MOCK_PROJECTS, type MockProject } from "@/lib/mock-projects"

type DialogType = "create" | "rename" | "delete" | null

interface DialogState {
  type: DialogType
  project?: MockProject
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

export function useProjectDialogs() {
  const [dialog, setDialog] = useState<DialogState>({ type: null })
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState<MockProject[]>(MOCK_PROJECTS)

  function openCreate() {
    setName("")
    setDialog({ type: "create" })
  }

  function openRename(project: MockProject) {
    setName(project.name)
    setDialog({ type: "rename", project })
  }

  function openDelete(project: MockProject) {
    setDialog({ type: "delete", project })
  }

  function close() {
    setDialog({ type: null })
    setLoading(false)
  }

  function handleCreate() {
    if (!name.trim()) return
    setLoading(true)
    const slug = toSlug(name)
    setProjects((prev) => [
      ...prev,
      { id: Date.now().toString(), name: name.trim(), slug, role: "owner" },
    ])
    setLoading(false)
    close()
  }

  function handleRename() {
    if (!dialog.project || !name.trim()) return
    setLoading(true)
    const slug = toSlug(name)
    setProjects((prev) =>
      prev.map((p) =>
        p.id === dialog.project!.id ? { ...p, name: name.trim(), slug } : p
      )
    )
    setLoading(false)
    close()
  }

  function handleDelete() {
    if (!dialog.project) return
    setLoading(true)
    setProjects((prev) => prev.filter((p) => p.id !== dialog.project!.id))
    setLoading(false)
    close()
  }

  return {
    dialog,
    name,
    setName,
    loading,
    projects,
    openCreate,
    openRename,
    openDelete,
    close,
    handleCreate,
    handleRename,
    handleDelete,
  }
}
